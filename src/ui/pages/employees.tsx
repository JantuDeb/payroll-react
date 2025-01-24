import { Header } from "@common/header"
import Svg from "@common/svg"
import Button from "@common/button"
import Modal from "@common/modal"
import BulkUploadEmployees from "@components/employees/bulkUpload"
import EmptyEmployees from "@components/employees/emptyEmployees"
import { useState } from "react"
import Spinner from "@common/spinner"
import { toast } from "sonner"
import EmplyoeeUploadSuccess from "../components/employees/employeeSuccessModal"
import { useEmployeesList } from "@src/lib/queryFns"
import EmplyoeesTable from "../components/employees/emplyoeesTable"
import EmployeeStats from "../components/employees/employeeStats"
import { cn } from "../core/utils"
const orgId = "73cccf13-cf33-4afe-a254-ede4b208fcdb" //TODO: replace this with actual orgId from context account details
export default function Emplyoees() {
  const [open, setOpen] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const { error, data, isFetching, isLoading, isFetched, refetch } =
    useEmployeesList(orgId)
  console.log("data", data)

  function handleUploadComplete() {
    setOpen(false)
    refetch().then(() => {
      toast.success(
        <p className="flex gap-2 items-center text-base font-semibold">
          <Svg
            name="check"
            className="size-5 border border-primary rounded-full p-0.5"
          />
          Employees successsfully added
        </p>,
        {
          position: "bottom-center",
        },
      )
      setTimeout(() => {
        setShowSuccessModal(true)
      }, 1000)
    })

    // setTimeout(() => {
    //   setShowSuccessModal(false)
    // }, 2000)
  }
  return (
    <div className="h-full w-full bg-secondary-foreground">
      <div className="border-b border-muted-foreground px-6 flex justify-between items-center bg-background py-2">
        <Header.MainHeader variant="h3">
          <h3>Employees</h3>
        </Header.MainHeader>
        <Button variant="accent">
          <Svg name="user-plus" className="size-5" />
          Add Employee
        </Button>
      </div>

      <div
        className={cn(
          "m-6 rounded-xl bg-background",
          (data?.length == 0 || isLoading) && "border",
        )}
      >
        {/* Empty Employees */}
        {data?.length == 0 && !isFetching && (
          <EmptyEmployees>
            <Modal open={open} onOpenChange={setOpen}>
              <Modal.Button asChild>
                <Button variant="outline">
                  <Svg name="upload-plus" className="size-5" />
                  Bulk Upload
                </Button>
              </Modal.Button>
              <Modal.Content title="Upload File">
                <BulkUploadEmployees onUploadComplete={handleUploadComplete} />
              </Modal.Content>
            </Modal>
            <Button variant="accent">
              <Svg name="user-plus" className="size-5" />
              Add Employee
            </Button>
          </EmptyEmployees>
        )}

        {/* Loading state */}
        {(isLoading || isFetching) && (
          <div className="flex items-center justify-center w-full h-96">
            <Spinner />
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="flex items-center justify-center w-full h-96">
            <p className="text-secondary font-semibold">
              Error fetching employees
            </p>
          </div>
        )}
      </div>

      {/* Employees Table */}
      {data?.length !== 0 && !isLoading && (
        <>
          <EmployeeStats />
          <EmplyoeesTable data={data} />
        </>
      )}

      {showSuccessModal && <EmplyoeeUploadSuccess show={showSuccessModal} />}
    </div>
  )
}
