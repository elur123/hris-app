<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\EmployeeStoreRequest;
use App\Http\Requests\EmployeeUpdateRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\Employee;
use App\Models\User;
use App\Models\Branch;
use App\Models\Position;
use App\Models\RateType;
use App\Models\FamilyMember;
use App\Models\EducationalAttainment;
use App\Models\EmployeeExperience;
class EmployeeController extends Controller
{
    
    public function index() : Response
    {   
        $employees = Employee::query()
        ->with('user', 'branch', 'department')
        ->get()
        ->map(function ($employee) {

            return [
                'id' => $employee->id,
                'employee_key' => $employee->employee_key,
                'profile_picture' => str_replace('public', 'storage', $employee->user->profile_picture),
                'fullname' => $employee->user->name,
                'email' => $employee->user->email,
                'contact_no' => $employee->contact_no,
                'branch' => $employee->branch->name,
                'department' => $employee->department->name,
                'position' => $employee->position->label,
                'created_at' => date("F j, Y, g:i a", strtotime($employee->created_at)),
                'updated_at' => date("F j, Y, g:i a", strtotime($employee->updated_at)),
                'actions' => [
                    'edit' => route('employees.edit', $employee)
                ]
            ];
        });

        return Inertia::render('Admin/Employee/Index', [
            'employees' => $employees
        ]);
    }

    public function create() : Response
    {
        $rate_types = collect([['id' => null, 'label' => 'Select rate type']]);
        $rate_types = $rate_types->merge(RateType::query()->get());

        $branches = collect([['id' => null, 'label' => 'Select branch', 'departments' => []]]);
        $branches = $branches->merge(Branch::query()
        ->with('departments')
        ->get()
        ->map(function($branch) {
            
            $departments = $branch->departments
            ->map(function($dep) {
                return [
                    'id' => $dep->id,
                    'label' => $dep->name
                ];
            });

            return [
                'id' => $branch->id,
                'label' => $branch->name,
                'departments' => $departments
            ];
        }));

        $positions = collect([['id' => null, 'label' => 'Select position']]);
        $positions = $positions->merge(Position::all());


        return Inertia::render('Admin/Employee/Create', [
            'school_types' => [
                ['id' => 'elementary', 'label' => 'Elementary'],
                ['id' => 'high school', 'label' => 'High School'],
                ['id' => 'college', 'label' => 'College'],
                ['id' => 'vocational', 'label' => 'Vocational']
            ],
            'rate_types' => $rate_types,
            'branches' => $branches,
            'positions' => $positions
        ]);
    }

    public function store(EmployeeStoreRequest $request) : RedirectResponse
    {

        $employee_key = 'EMP-'.Str::random(4);
        $profile_picture_path = '';
        if ($request->hasFile('profile_picture')) {
            
            $file = $request->file('profile_picture');
            $fileName = $employee_key .'.'. $file->getClientOriginalExtension();
            
            // Save profile picture
            $profile_picture_path = $file->storeAs('public/files/profilePictures', $fileName);
        }

        $user = User::create([
            'profile_picture' => $profile_picture_path,
            'name' => $request->first_name .' '. $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($employee_key),
            'role_id' => 2
        ]);

        $employee = Employee::create([
            'user_id' => $user->id,
            'employee_key' => $employee_key,
            'first_name' => $request->first_name,
            'middle_name' => $request->middle_name,
            'last_name' => $request->last_name,
            'suffix' => $request->suffix,
            'date_of_birth' => $request->birth_date,
            'place_of_birth' => $request->place_of_birth,
            'current_address' => $request->address,
            'contact_no' => $request->contact_no,
            'rate' => $request->rate,
            'rate_type_id' => $request->rate_type,
            'position_id' => $request->position,
            'branch_id' => $request->branch,
            'department_id' => $request->department
        ]);

        $this->storeFamilyMembers($employee, $request->family_members);
        $this->storeEducationalAttainments($employee, $request->school_attainments);
        $this->storeExperiences($employee, $request->experiences);

        return Redirect::route('employees.index');
    }

    public function edit(Employee $employee): Response
    {
        // Load relationship tables
        $employee->load('user', 'position', 'branch', 'department', 'rateType', 'familyMembers', 'educationalAttainments', 'experiences');

        $rate_types = collect([['id' => null, 'label' => 'Select rate type']]);
        $rate_types = $rate_types->merge(RateType::query()->get());

        $branches = collect([['id' => null, 'label' => 'Select branch', 'departments' => []]]);
        $branches = $branches->merge(Branch::query()
        ->with('departments')
        ->get()
        ->map(function($branch) {
            
            $departments = $branch->departments
            ->map(function($dep) {
                return [
                    'id' => $dep->id,
                    'label' => $dep->name
                ];
            });

            return [
                'id' => $branch->id,
                'label' => $branch->name,
                'departments' => $departments
            ];
        }));

        $positions = collect([['id' => null, 'label' => 'Select position']]);
        $positions = $positions->merge(Position::all());

        return Inertia::render('Admin/Employee/Edit', [
            'employee' => $employee,
            'school_types' => [
                ['id' => 1, 'label' => 'Elementary'],
                ['id' => 2, 'label' => 'High Scool'],
                ['id' => 3, 'label' => 'College'],
                ['id' => 4, 'label' => 'Vocational']
            ],
            'rate_types' => $rate_types,
            'branches' => $branches,
            'positions' => $positions
        ]);
    }   

    public function update(EmployeeUpdateRequest $request, Employee $employee): RedirectResponse
    {
        $profile_picture_path = $employee->user->profile_picture;
        if ($request->hasFile('profile_picture')) {
            
            $file = $request->file('profile_picture');
            $fileName = $employee->employee_key .'.'. $file->getClientOriginalExtension();
            
            // Save profile picture
            $profile_picture_path = $file->storeAs('public/files/profilePictures', $fileName);
        }

        $employee->update([
            'first_name' => $request->first_name,
            'middle_name' => $request->middle_name,
            'last_name' => $request->last_name,
            'suffix' => $request->suffix,
            'date_of_birth' => $request->birth_date,
            'place_of_birth' => $request->place_of_birth,
            'current_address' => $request->address,
            'contact_no' => $request->contact_no,
            'rate' => $request->rate,
            'rate_type_id' => $request->rate_type,
            'position_id' => $request->position,
            'branch_id' => $request->branch,
            'department_id' => $request->department
        ]);

        $employee->user()->update([
            'profile_picture' => $profile_picture_path,
            'name' => $request->first_name .' '. $request->last_name,
            'email' => $request->email
        ]);

        $this->storeFamilyMembers($employee, $request->family_members);
        $this->storeEducationalAttainments($employee, $request->school_attainments);
        $this->storeExperiences($employee, $request->experiences);

        

        return Redirect::route('employees.index');
    }

    private function storeFamilyMembers(Employee $employee, $members)
    {  
        foreach ($members as $key => $value) {
            $employee->familyMembers()->create([
                'fullname' => $value['fullname'],
                'relationship' => $value['relationship']
            ]);
        }
    }

    public function deleteFamilyMember(FamilyMember $family_member)
    {
        $family_member->delete();
    }

    private function storeEducationalAttainments(Employee $employee, $attainments)
    {  
        foreach ($attainments as $key => $value) {
            $employee->educationalAttainments()->create([
                'school_name' => $value['school_name'],
                'education_level' => $value['education_level'],
                'year_graduated' => $value['year_graduated']
            ]);
        }
    }

    public function deleteEducationalAttainment(EducationalAttainment $educational_attainment)
    {
        $educational_attainment->delete();
    }

    private function storeExperiences(Employee $employee, $experiences)
    {  
        foreach ($experiences as $key => $value) {
            $employee->experiences()->create([
                'company_name' => $value['company_name'],
                'position' => $value['position'],
                'start_at' => $value['start_at'],
                'end_at' => $value['end_at']
            ]);
        }
    }

    public function deleteExperience(EmployeeExperience $experience)
    {
        $experience->delete();
    }
}
