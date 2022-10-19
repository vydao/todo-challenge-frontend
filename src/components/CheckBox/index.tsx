import React, { memo } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { FormCheckType } from 'react-bootstrap/esm/FormCheck'
import { get, useFormContext } from 'react-hook-form'

import './style.scss'

interface ICheckBox {
  name: string
  label: string
  required?: boolean
  disabled?: boolean
  inputType?: string
  className?: string
}

const Checkbox = ({
  name,
  label,
  required = true,
  disabled = false,
  className = '',
  inputType = 'checkbox',
}: ICheckBox) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  const error = get(errors, `${name}.message`)

  return (
    <Row>
      <Form.Group className="mt-4">
        <Form.Check
          type={inputType as FormCheckType}
          disabled={disabled}
          isInvalid={!!error}
          inline
          id="custom-switch"
          className={`pt-2 style-label ${className}`}
          label={
            <span className="text-dark">
              <span className={required ? 'required' : ''} />
              {' ' + label}
            </span>
          }
          {...register(name)}
        />
        <Form.Label className="text-danger mt-1 d-block">{error}</Form.Label>
      </Form.Group>
    </Row>
  )
}

export default memo(Checkbox)
