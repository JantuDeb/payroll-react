import Button from "@common/button"
import DropdownMenuStyled from "@common/dropdownMenu"
import { Header } from "@common/header"
import SearchBar from "@common/searchBar"
import Svg from "@common/svg"
import { ReactTable } from "@common/table/components/reactTable"
import Tag from "@common/tags/tag"
import { useMemo } from "react"
export const data = [
  {
    employeeId: "FHAJ3717",
    profile: "profile 1",
    email: "example@asure.pro",
    role: "Senior Marketer",
    status: "Active",
  },
  {
    employeeId: "GSD4522",
    profile: "profile 2",
    email: "example@asure.pro",
    role: "Lead Designer",
    status: "Active",
  },
  {
    employeeId: "JFE5342",
    profile: "profile 3",
    email: "example@asure.pro",
    role: "Product Manager",
    status: "Payroll Only",
  },
  {
    employeeId: "GFDG325",
    profile: "profile 4",
    email: "example@asure.pro",
    role: "Lead Marketer",
    status: "Payroll Only",
  },
  {
    employeeId: "GHSG442",
    profile: "profile 5",
    email: "example@asure.pro",
    role: "Lead Growth",
    status: "Payroll Only",
  },
  {
    employeeId: "HGER543",
    profile: "profile 6",
    email: "example@asure.pro",
    role: "Head of Growth",
    status: "Payroll Only",
  },
  {
    employeeId: "KJGF434",
    profile: "profile 7",
    email: "example@asure.pro",
    role: "Product Designer",
    status: "Invite Sent",
  },
  {
    employeeId: "ABCD1234",
    profile: "profile 8",
    email: "example@asure.pro",
    role: "Marketing Manager",
    status: "Active",
  },
  {
    employeeId: "EFGH5678",
    profile: "profile 9",
    email: "example@asure.pro",
    role: "Sales Manager",
    status: "Payroll Only",
  },
  {
    employeeId: "IJKL9101",
    profile: "profile 10",
    email: "example@asure.pro",
    role: "HR Specialist",
    status: "Invite Sent",
  },
  {
    employeeId: "MNOP1123",
    profile: "profile 11",
    email: "example@asure.pro",
    role: "Finance Analyst",
    status: "Payroll Only",
  },
  {
    employeeId: "QRST4456",
    profile: "profile 12",
    email: "example@asure.pro",
    role: "Software Engineer",
    status: "Active",
  },
  {
    employeeId: "UVWX7890",
    profile: "profile 13",
    email: "example@asure.pro",
    role: "UI/UX Designer",
    status: "Payroll Only",
  },
  {
    employeeId: "YZAB1234",
    profile: "profile 14",
    email: "example@asure.pro",
    role: "Data Scientist",
    status: "Invite Sent",
  },
  {
    employeeId: "CDEF5678",
    profile: "profile 15",
    email: "example@asure.pro",
    role: "QA Engineer",
    status: "Active",
  },
  {
    employeeId: "GHIK9101",
    profile: "profile 16",
    email: "example@asure.pro",
    role: "Product Owner",
    status: "Payroll Only",
  },
  {
    employeeId: "JKLM1123",
    profile: "profile 17",
    email: "example@asure.pro",
    role: "Scrum Master",
    status: "Active",
  },
  {
    employeeId: "NOPQ4456",
    profile: "profile 18",
    email: "example@asure.pro",
    role: "Operations Manager",
    status: "Payroll Only",
  },
  {
    employeeId: "RSTU7890",
    profile: "profile 19",
    email: "example@asure.pro",
    role: "Legal Advisor",
    status: "Invite Sent",
  },
  {
    employeeId: "VWXY1234",
    profile: "profile 20",
    email: "example@asure.pro",
    role: "Chief Executive Officer",
    status: "Active",
  },
  {
    employeeId: "ZABC5678",
    profile: "profile 21",
    email: "example@asure.pro",
    role: "Chief Financial Officer",
    status: "Payroll Only",
  },
  {
    employeeId: "DEFG9101",
    profile: "profile 22",
    email: "example@asure.pro",
    role: "Chief Operating Officer",
    status: "Invite Sent",
  },
  {
    employeeId: "HIJK1123",
    profile: "profile 23",
    email: "example@asure.pro",
    role: "Chief Technology Officer",
    status: "Active",
  },
  {
    employeeId: "LMNO4456",
    profile: "profile 24",
    email: "example@asure.pro",
    role: "VP of Marketing",
    status: "Payroll Only",
  },
  {
    employeeId: "PQRS7890",
    profile: "profile 25",
    email: "example@asure.pro",
    role: "VP of Sales",
    status: "Invite Sent",
  },
]

export default function EmplyoeesTable({}: { data: any }) {
  const columns = useMemo(
    () => [
      {
        accessorKey: "employeeId",
        header: "Employee ID",
        Cell: ({ cell }) => {
          const employeeId = cell.getValue()
          return (
            <a
              href={`/employee/${employeeId}`}
              className="text-accent underline"
            >
              {employeeId}
            </a>
          )
        },
      },
      {
        accessorKey: "profile",
        header: "Profile",
        Cell: ({ cell }) => {
          return (
            <div className="flex items-center gap-2">
              <div className="size-6 border bg-muted rounded-full" />{" "}
              {cell.getValue()}
            </div>
          )
        },
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "role",
        header: "Role",
      },
      {
        accessorKey: "status",
        header: "Status",
        Cell: ({ cell }) => {
          const status = cell.getValue()
          const getColor = (status) => {
            switch (status) {
              case "Active":
                return "accent"
              case "Payroll Only":
                return "gray"
              case "Invite Sent":
                return "purple"
            }
          }
          const color = getColor(status)
          return (
            <Tag color={color} icon="dot-filled">
              {status}
            </Tag>
          )
        },
      },
    ],
    [],
  )

  function renderTopToolbar() {
    return (
      <div className="flex justify-between items-center py-4 bg-secondary-foreground">
        <Header>
          <Header.MainHeader variant="h4">All Employees</Header.MainHeader>
        </Header>
        <div className="flex items-center gap-4">
          <SearchBar
            onChange={function (text: string): void {
              console.log("text", text)
            }}
            placeholder="Search employee"
          />
          <DropdownMenuStyled
            options={{
              all: {
                key: "all",
                display: "All Status",
              },
              active: {
                key: "active",
                display: "Active",
              },
            }}
          >
            <Button variant="outline" size="none" className="py-[7px] px-2.5">
              All Status
              <Svg name="arrow-down" className="size-5" viewBox="0 0 20 20" />
            </Button>
          </DropdownMenuStyled>
          <DropdownMenuStyled
            options={{
              all: {
                key: "all",
                display: "All Status",
              },
              active: {
                key: "active",
                display: "Active",
              },
            }}
          >
            <Button variant="outline" size="none" className="py-[7px] px-2.5">
              All Role
              <Svg name="arrow-down" className="size-5" viewBox="0 0 20 20" />
            </Button>
          </DropdownMenuStyled>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full py-4 px-8">
      <ReactTable
        {...{
          columns,
          data,
          enableSorting: true,
          enableRowSelection: true,
          // initialState: {
          //   density: "compact",
          // },
          renderTopToolbar,
        }}
      />
    </div>
  )
}
