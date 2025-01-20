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

export default function Emplyoees() {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false) // this needs to be replaced with react-query loading state we need mutate

  function handleUploadComplete() {
    setOpen(false)
    setIsLoading(true)
    //TODO: replace this with react-query mutate
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
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
      <div className="m-6 rounded-xl border bg-background ">
        {/* Empty Employees */}
        {!isLoading && (
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
            <Button
              variant="accent"
              onClick={() =>
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
              }
            >
              <Svg name="user-plus" className="size-5" />
              Add Employee
            </Button>
          </EmptyEmployees>
        )}

        {/* Loading state */}
        {isLoading && (
          <div className="flex items-center justify-center w-full h-96">
            <Spinner />
          </div>
        )}
      </div>

      <EmplyoeeUploadSuccess />
    </div>
  )
}
