import Modal from "@common/modal"
import Svg from "@common/svg"
import Button from "@src/ui/core/button"
import { Header } from "@src/ui/core/header"
import Lottie from "react-lottie"
import animationData from "@assets/animations/employee-success.json"
import { use, useEffect, useState } from "react"

export default function EmplyoeeUploadSuccess({ show }: { show: boolean }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  const [open, setOpen] = useState(show)

  useEffect(() => {
    if (!open) setOpen(show)
  }, [show])

  return (
    <>
      {open && (
        <div className="fixed inset-0 h-dvh flex justify-center items-center z-10">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      )}

      <Modal open={open} onOpenChange={setOpen}>
        <Modal.Content title="" close={false}>
          <div className="w-full max-w-sm flex flex-col items-center gap-4 py-2 px-6">
            <Svg
              name="check"
              className="size-10 border border-green-400 text-green-400 rounded-full p-1"
            />
            <div>
              <Header.ShortHeader
                variant="h5"
                color="primary"
                alignment="center"
              >
                Congrats! You’ve successfully added all your employees!
              </Header.ShortHeader>
              <Header.Description alignment="center">
                Would you like to generate payroll?
              </Header.Description>
            </div>
            <div className="w-full grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                size="xs"
                width="full"
                onClick={() => setOpen(false)}
              >
                I'll do it later
              </Button>
              <Button
                variant="accent"
                size="xs"
                width="full"
                onClick={() => setOpen(false)}
              >
                Generate Payroll
              </Button>
            </div>
          </div>
        </Modal.Content>
      </Modal>
    </>
  )
}
