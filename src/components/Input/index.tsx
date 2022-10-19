import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { get, useFormContext } from 'react-hook-form'

import '../styles.scss'

interface IInput {
  name: string
  label: string
  required?: boolean
  disabled?: boolean
  className?: string
  inputType?: string
  placeholder?: string
}

const Input = ({
  name,
  label,
  required = true,
  disabled = false,
  className = '',
  inputType = 'text',
  placeholder = 'Enter...',
}: IInput) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = get(errors, `${name}.message`)
  return (
    <Row>
      <Form.Group>
        <Form.Label className={required ? 'required' : ''}>{label}</Form.Label>
        <Form.Control
          autoFocus={false}
          className={className}
          disabled={disabled}
          aria-describedby="inputGroupPrepend"
          isInvalid={!!error}
          {...register(name)}
          type={inputType}
          placeholder={placeholder}
        />
        <Form.Label className="text-danger mt-1">{error}</Form.Label>
      </Form.Group>
    </Row>
  )
}

export default Input
