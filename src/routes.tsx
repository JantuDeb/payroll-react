import DashboardLayout from "@layouts/dashboardLayout"
import DefaultRoute from "@components/defaultRoute"
import { Outlet } from "react-router"
import Emplyoees from "@pages/emplyoees"
import Payroll from "./ui/pages/payroll"
export const dashboardRoutes = [
  {
    path: "/",
    element: <DefaultRoute />, // Landing page
  },
  {
    path: "/dashboard",
    element: (
      <DashboardLayout>
        <DefaultRoute />
      </DashboardLayout>
    ),
  },
  {
    path: "/manage",
    element: (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    ),
    children: [
      {
        path: "employees", // This will match /manage/employee
        element: <Emplyoees />,
      },
      {
        path: "payroll", // This will match /manage/payroll
        element: <Payroll />,
      },
    ],
  },
]
