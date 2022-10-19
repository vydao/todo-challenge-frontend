import * as yup from 'yup'

import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { FormProvider, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import Input from 'pages/components/common/Input'

const loginSchema = () =>
  yup.object({
    account: yup.string().required('Required Account!'),
    password: yup.string().required('Required Password!'),
  })

const Login = () => {
  const methods = useForm({
    defaultValues: {
      account: '',
      password: '',
    },
    resolver: yupResolver(loginSchema()),
  })
  const onSubmit = (data: any) => console.log(data)

  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h1>Login</h1>
          <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
              <Input name={'account'} label={'Account'} />
              <Input name={'password'} label={'Password'} />
              <Button type="submit">Confirm</Button>
            </Form>
          </FormProvider>
        </div>
      </div>
    </div>
  )
}

export default Login
