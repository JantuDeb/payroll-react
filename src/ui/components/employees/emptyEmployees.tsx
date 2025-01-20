import Button from "@common/button"
import { Header } from "@common/header"
import searchIcon from "@assets/search-user.png"
import Modal from "@common/modal"
import Svg from "@common/svg"

export default function EmptyEmployees({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center justify-center mx-auto p-6 gap-4">
      {/* SVG illustration */}
      <div className="py-2">
        <img src={searchIcon} alt="Search Icon" />
      </div>

      {/* Text content */}
      <Header alignment="center">
        <Header.ShortHeader variant="h2" color="primaryDark" alignment="center">
          <h4>Start building your team</h4>
        </Header.ShortHeader>
        <Header.Description alignment="center">
          <p>Add your first team member or import your entire team.</p>
        </Header.Description>
      </Header>

      {/* Buttons */}
      <div className="flex gap-2 w-full justify-center flex-col md:flex-row md:gap-4">
        {children}
      </div>
    </div>
  )
}
