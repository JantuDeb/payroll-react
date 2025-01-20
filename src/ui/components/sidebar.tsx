import {
  Bell,
  Home,
  Building2,
  Users,
  Wallet,
  Calendar,
  FileText,
  MoreHorizontal,
  CreditCard,
} from "lucide-react"
import SideNav from "@common/sideNav"
import logo from "@assets/kelick.png"
import { useLocation } from "react-router"
import Progress from "@common/progress"
import Svg from "@common/svg"

const Sidebar = () => {
  const sidebarConfig = [
    {
      key: "dashboard",
      name: "Dashboard",
      icon: <Svg name="dasboard" className="size-5" />,
      url: "/dashboard",
    },
    {
      key: "organization",
      name: "ORGANIZATION",
      collapsible: true,
      items: [
        {
          key: "kelick",
          name: "Kelick",
          icon: <Building2 className="size-5" />,
        },
      ],
    },
    {
      key: "manage",
      name: "MANAGE",
      //   collapsible: true,
      items: [
        {
          key: "employees",
          name: "Employees",
          url: "/manage/employees",
          icon: <Users className="size-5" />,
        },
        {
          key: "payroll",
          name: "Payroll",
          url: "/manage/payroll",
          icon: <Wallet className="size-5" />,
        },
        {
          key: "leaves",
          name: "Leaves",
          icon: <Calendar className="size-5" />,
        },
        {
          key: "claims",
          name: "Claims",
          icon: <FileText className="size-5" />,
        },
        {
          key: "more",
          name: "More",
          icon: <MoreHorizontal className="size-5" />,
        },
      ],
    },
  ]
  const { pathname } = useLocation()
  console.log("pathname", pathname)
  return (
    <div className="flex flex-col h-dvh w-[252px] border-r px-4">
      {/* Logo section */}

      <div className="flex items-center justify-center gap-2 p-4 w-full">
        <div className="w-8 h-8">
          <img
            src={logo}
            alt="Kelick Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <span className="text-xl font-semibold">kelick</span>
      </div>

      {/* Navigation */}
      <div className="flex-1 h-full">
        <SideNav
          config={sidebarConfig}
          selectedKey={pathname}
          onItemClick={(item) => console.log("clicked:", item)}
        />
      </div>

      {/* Footer section */}
      <div>
        <div className="py-4">
          {/* Plan info */}
          <div className="border-t border-b py-4 space-y-4 border-muted">
            <div className="flex items-center gap-2">
              <CreditCard className="size-5" />
              <span className="text-sm font-medium">Free Plan</span>
            </div>
            <div className="text-xs font-medium text-primary space-y-2">
              <p>1/10 Employees</p>
              <Progress value={10} variant="accent" size="small" />
            </div>
          </div>
          {/* Notifications */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <Bell className="size-5" />
              <span className="text-sm font-medium">Notifications</span>
            </div>
            <div className="w-2 h-2 bg-destructive rounded-full"></div>
          </div>
          

          {/* User info */}
          <div className="flex items-center gap-2 py-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="flex flex-col">
              <span className="text-xs font-medium">John Doe</span>
              <span className="text-xs text-gray-500">johndoe@asure.pro</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
