import AdminDashboard from "@/Pages/Admin/Dashboard";

export default function Dashboard(props) {
    return props.auth.user.role_id === 1 ? <AdminDashboard data={props} /> : '';
}
