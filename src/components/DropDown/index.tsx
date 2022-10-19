import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { Controller, get, useFormContext } from 'react-hook-form'
import Select from 'react-select'

import '../styles.scss'

interface IOption {
  [K: string]: any
}

interface IDropDown {
  name: string
  label: string
  required?: boolean
  disabled?: boolean
  options?: IOption[]
  defaultValue?: string
  className?: string
  isSearchable?: boolean
  optionLabel?: string
  optionValue?: string
}

const DropDown = ({
  name,
  label,
  defaultValue = '',
  options = [],
  required = true,
  disabled,
  className = '',
  isSearchable = false,
  optionLabel = 'label',
  optionValue = 'value',
}: IDropDown) => {
  const {
    formState: { errors },
    control,
  } = useFormContext()

  const error = get(errors, `${name}.message`)

  const getColor = (isFocused: boolean, colorError: string, colorFocus: string, defaultColor?: string) => {
    if (error) return colorError
    if (isFocused) return colorFocus
    return defaultColor || 'none'
  }

  const handleShowError = (isFocused: boolean) => ({
    border: getColor(isFocused, '1px solid #f44336', '1px solid #3fae29', '1px solid #ced4da'),
    boxShadow: getColor(isFocused, '0 0 0 0.25rem rgba(220, 53, 69, 0.25)', '0 0 0 0.25rem rgba(105, 170, 121, 0.25)'),
  })
  const customStyle = {
    control: (provided: Record<string, unknown>, state: any) => ({
      ...provided,
      ...handleShowError(state.isFocused),
      cursor: 'pointer',
      ':hover': {
        ...handleShowError(state.isFocused),
      },
    }),
  }

  return (
    <Row>
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Controller
          control={control}
          defaultValue={defaultValue}
          name={name}
          render={({ field: { onChange, value } }) => (
            <Select
              isDisabled={disabled}
              styles={customStyle}
              className={`${className || ''} cursor-pointer`}
              options={options}
              value={options.find((option: IOption) => option.value === value)}
              getOptionLabel={(options) => optionLabel && options?.[optionLabel]}
              getOptionValue={(options) => optionValue && options?.[optionValue]}
              onChange={(val) => onChange(val?.value)}
              isSearchable={isSearchable}
            />
          )}
        />
        <Form.Label className="text-danger mt-1">{error}</Form.Label>
      </Form.Group>
    </Row>
  )
}

export default DropDown
