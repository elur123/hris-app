import AdminDashboard from "@/Pages/Admin/Dashboard";
import EmployeeDashboard from "@/Pages/Employee/Dashboard";

export default function Dashboard(props) {
    return props.auth.user.role_id === 1 ? <AdminDashboard data={props} /> : <EmployeeDashboard data={props} />;
}
