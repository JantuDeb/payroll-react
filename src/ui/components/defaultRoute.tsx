import { useLocation } from "react-router"

export default function DefaultRoute() {
  const { pathname } = useLocation()
  return (
    <div>
      <h1>Default Route {pathname}</h1>
    </div>
  )
}
