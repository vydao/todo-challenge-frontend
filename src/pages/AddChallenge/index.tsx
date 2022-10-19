import * as yup from 'yup'

import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { FormProvider, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import Checkbox from 'components/CheckBox'
import Input from 'pages/components/common/Input'

const schema = () =>
  yup.object({
    task: yup.string().required('Required Account!'),
    point: yup.string().required('Required Point!'),
  })

const AddChallenge = () => {
  const methods = useForm({
    defaultValues: {
      account: '',
      point: '',
      required: false,
    },
    resolver: yupResolver(schema()),
  })
  const onSubmit = (data: any) => console.log(data)

  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h1>Add Challenge</h1>
          <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
              <Input name={'task'} label={'Task'} />
              <Input name={'point'} label={'Point'} />
              <Checkbox name="required" label="Required" />
              <Button type="submit">Add</Button>
            </Form>
          </FormProvider>
        </div>
      </div>
    </div>
  )
}

export default AddChallenge
