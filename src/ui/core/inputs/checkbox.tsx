import { useRef, useEffect, HTMLProps } from "react"
import { isFunction, cn } from "lib/utils"
import Label, { LabelProps } from "ui/core/forms/label"

type CheckboxProps = Omit<HTMLProps<HTMLInputElement>, "label" | "onChange"> & {
  indeterminate?: boolean
  id?: string
  isRadio?: boolean
  required?: boolean
  label?: LabelProps
  onChange?: (checked: boolean) => void
  disabled?: boolean
}

const Checkbox = ({
  indeterminate,
  label = {},
  required,
  isRadio = false,
  id,
  onChange,
  disabled = false,
  ...rest
}: CheckboxProps) => {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (ref.current) {
      if (typeof indeterminate === "boolean") {
        // Set indeterminate only if checked is false
        ref.current.indeterminate = !rest.checked && indeterminate
      } else {
        // If indeterminate is not defined or false, set checked
        ref.current.checked = rest.checked || false
      }
    }
  }, [ref, indeterminate, rest.checked])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked)
  }

  return (
    <Label
      cursor="pointer"
      {...label}
      disabled={disabled}
      font="normal"
      id={id}
    >
      <div className="flex items-center">
        <input
          {...rest}
          ref={ref}
          className={cn(
            "text-primary dark:text-muted bg-transparent ring-offset-0 focus:ring-0 focus:ring-offset-0  border-gray-500 dark:border-gray-700 focus:border-gray-500  dark:focus:border-gray-700 dark:checked:border-gray-700 dark:checked:focus:border-gray-700 disabled:cursor-not-allowed disabled:opacity-70",
            isRadio
              ? "rounded-full radio-checkmark checked:bg-primary checked:focus:bg-primary checked:hover:bg-primary "
              : "",
          )}
          type="checkbox"
          id={id}
          required={required}
          onChange={handleChange}
          readOnly={!isFunction(onChange)}
          disabled={disabled}
        />
      </div>
    </Label>
  )
}

export default Checkbox
