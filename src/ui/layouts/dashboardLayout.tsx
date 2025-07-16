import Sidebar from "@components/sidebar"
import Toaster from "../core/toast"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// Create a client
const queryClient = new QueryClient()
console.log("queryClient", queryClient)

export default function DashboardLayouts({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-dvh">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-y-auto h-full bg-secondary-foreground">
          {children}
        </div>
        <Toaster />
      </div>
    </QueryClientProvider>
  )
}
