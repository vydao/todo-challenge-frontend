import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { get, useFormContext } from 'react-hook-form'

interface IInput {
  name: string
  label: string
  disabled?: boolean
  className?: string
  inputType?: string
}

const Input = ({ name, label, disabled = false, className = '', inputType = 'text' }: IInput) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = get(errors, `${name}.message`)
  return (
    <Row>
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          autoFocus={false}
          className={className}
          disabled={disabled}
          aria-describedby="inputGroupPrepend"
          isInvalid={!!error}
          {...register(name)}
          type={inputType}
          placeholder="Enter..."
        />
        <Form.Label className="text-danger mt-1">{error}</Form.Label>
      </Form.Group>
    </Row>
  )
}

export default Input
