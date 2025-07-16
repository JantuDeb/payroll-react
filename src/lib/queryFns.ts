import axios from "axios"
import { useMutation, useQuery } from "@tanstack/react-query"

const BASE_URL = "http://localhost:8000/api_v1"

// Axios instance with base configuration
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

// Employees List (Organization)
export const useEmployeesList = (organizationId: string) => {
  return useQuery({
    queryKey: ["employees", organizationId],
    queryFn: async () => {
      const { data } = await apiClient.get(
        `/organizations/${organizationId}/employees`,
      )
      return data
    },
  })
}

// Create Employee
export const useCreateEmployee = () => {
  return useMutation({
    mutationFn: async (employeeData) => {
      return apiClient.post("/employees", employeeData)
    },
  })
}

// Bulk Import Employees
export const useBulkImportEmployees = () => {
  return useMutation({
    mutationKey: ["bulk-import-employees"],
    mutationFn: async ({
      onProgress,
      csvFile,
    }: {
      onProgress: (progress: number) => void
      csvFile: File
      organizationId: string
    }) => {
      const formData = new FormData()
      formData.append("csv", csvFile)
      formData.append("organization_id", "73cccf13-cf33-4afe-a254-ede4b208fcdb")
      return apiClient.post("/employees/bulk-import", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const progress = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100,
            )
            onProgress(progress)
          }
        },
      })
    },
  })
}

// Process Payroll
export const useProcessPayroll = () => {
  return useMutation({
    mutationKey: ["process-payroll"],
    mutationFn: async (payrollData) => {
      return apiClient.post("/process-payroll", payrollData)
    },
  })
}
