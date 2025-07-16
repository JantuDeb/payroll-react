import Button from "@common/button"
import emptyLogo from "@assets/empty-folder.png"
import excelLogo from "@assets/ms-excel.png"
import { Header } from "@common/header"
import Svg from "@common/svg"
import FileUploadWrapper from "@common/fileUpload"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Progress from "@common/progress"
import { useBulkImportEmployees } from "@src/lib/queryFns"

export default function BulkUploadEmployees({
  onUploadComplete,
}: {
  onUploadComplete: (data: any) => void
}) {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const mutation = useBulkImportEmployees()

  const handleFileSelect = async (file: File) => {
    if (!file) return
    setIsUploading(true)
    try {
      const result = await mutation.mutateAsync({
        onProgress: (progress) => setUploadProgress(progress),
        csvFile: file,
        organizationId: "73cccf13-cf33-4afe-a254-ede4b208fcdb",
      })
      await new Promise((resolve) => setTimeout(resolve, 1000)) //delay for 1 second to showe progress bar
      console.log("result", result)
      onUploadComplete({ message: "Upload complete!" })
    } catch (error) {
      console.error("Error uploading file:", error)
    } finally {
      setIsUploading(false)
      setUploadProgress(0)
    }
  }
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Upload Area */}
      <div className="border border-dashed rounded-lg mt-4 p-4 bg-secondary-foreground h-52 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {!isUploading && (
            <motion.div
              key="upload"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <FileUploadWrapper onFileSelect={handleFileSelect}>
                <div className="flex flex-col items-center justify-center text-center space-y-4 py-8">
                  <div>
                    <img src={emptyLogo} className="w-16" />
                  </div>
                  <div className="space-y-1 text-sm font-medium text-secondary">
                    <p>Drag and drop your files here</p>
                    <p>
                      or
                      <span className="text-secondary font-semibold underline cursor-pointer px-2">
                        click to upload
                      </span>
                    </p>
                  </div>
                </div>
              </FileUploadWrapper>
            </motion.div>
          )}

          {isUploading && (
            <motion.div
              key="progress"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <div className="w-3/4 mx-auto text-center">
                <Progress
                  value={uploadProgress}
                  variant="accent"
                  size="medium"
                />
                <p className="text-secondary font-medium text-sm mt-2">
                  Please wait while we uplaod your file...
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Progress Bar */}

      {/* File Format Info */}
      <div className="flex justify-between text-xs text-secondary font-semibold py-1">
        <p>Supported formats: XLS, CSV</p>
        <p>Maximum file size: 25MB</p>
      </div>

      {/* Example Download Section */}
      <div className="mt-6 p-4 bg-muted rounded-lg">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <img src={excelLogo} className="w-10" />
            <div className="text-primary-dark">
              <Header.ShortHeader color="primaryDark">
                Table Example
              </Header.ShortHeader>
              <p className="text-xs font-medium text-secondary">
                You can download the attached example and use them as a starting
                point for your own file.
              </p>
            </div>
          </div>
          <Button variant="outline" size="none" className="p-2">
            <Svg name="download" className="h-4 w-4" />
            <span>Download XLSX</span>
          </Button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-end space-x-4">
        <Button variant="outline">Cancel</Button>

        <Button variant="accent">Continue</Button>
      </div>
    </div>
  )
}
