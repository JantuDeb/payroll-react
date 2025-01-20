import Sidebar from "@components/sidebar"
import Toaster from "../core/toast"

export default function DashboardLayouts({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-dvh">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-y-auto h-full bg-secondary-foreground">
        {children}
      </div>
      <Toaster />
    </div>
  )
}
