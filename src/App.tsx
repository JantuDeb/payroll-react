import { useRoutes } from "react-router"
import { dashboardRoutes } from "./routes"

function App() {
  // const dashboardRoutes = [
  //   {
  //     path: "/",
  //     element: (
  //       <DashboardLayout>
  //         <Outlet />
  //       </DashboardLayout>
  //     ),
  //     children: [
  //       {
  //         path: "dashboard",
  //         element: <DefaultRoute />,
  //       },
  //       {
  //         path: "employee",
  //         element: <DefaultRoute />,
  //       },
  //       {
  //         path: "payroll",
  //         element: <DefaultRoute />,
  //       },
  //     ],
  //   },
  // ]
  // const element = useRoutes(dashboardRoutes)

  // return element
  const allRoutes = [...dashboardRoutes]
  const element = useRoutes(allRoutes)
  return element
}

export default App
