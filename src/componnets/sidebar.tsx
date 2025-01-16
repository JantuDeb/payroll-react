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
import SideNav from "src/ui/core/sideNav"

const Sidebar = () => {
  const sidebarConfig = [
    {
      key: "dashboard",
      name: "Dashboard",
      icon: <Home className="size-5" />,
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
          icon: <Users className="size-5" />,
        },
        {
          key: "payroll",
          name: "Payroll",
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

  return (
    <div className="flex flex-col h-dvh w-[252px] border-r px-4">
      {/* Logo section */}
      <div className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8">
            <img
              src="/api/placeholder/32/32"
              alt="Kelick Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl font-semibold">kelick</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 h-full">
        <SideNav
          config={sidebarConfig}
          selectedKey="employees"
          onItemClick={(item) => console.log("clicked:", item)}
        />
      </div>

      {/* Footer section */}
      <div className="border-t p-4">
        <div className="space-y-4">
          {/* Plan info */}
          <div className="flex items-center gap-2">
            <CreditCard className="size-5" />
            <span className="text-sm font-medium">Free Plan</span>
          </div>
          <div className="text-xs text-primary">1/10 Employees</div>

          {/* Notifications */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="size-5" />
              <span className="text-sm font-medium">Notifications</span>
            </div>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </div>

          {/* User info */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">John Doe</span>
              <span className="text-xs text-gray-500">johndoe@asure.pro</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
