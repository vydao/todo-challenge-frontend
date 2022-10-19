import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { get, useFormContext } from 'react-hook-form'


interface ITextArea {
  name: string
  label: string
  disabled?: boolean
  className?: string
}

const TextArea = ({ name, label, disabled = false, className = '' }: ITextArea) => {
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
          as="textarea"
          className={className}
          disabled={disabled}
          isInvalid={!!error}
          {...register(name)}
          type="text"
          size="sm"
          placeholder="Enter..."
        />
        <Form.Label className="text-danger mt-1">{error}</Form.Label>
      </Form.Group>
    </Row>
  )
}

export default TextArea
