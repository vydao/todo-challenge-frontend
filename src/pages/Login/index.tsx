/* eslint-disable jsx-a11y/anchor-is-valid */
import * as yup from 'yup'

import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { FormProvider, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import Input from 'pages/components/common/Input'

const loginSchema = () =>
  yup.object({
    account: yup.string().required('Account is required!'),
    password: yup.string().required('Password is required!'),
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
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Code Challenge</a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4 border p-4 rounded">
          <h1>Login</h1>
          <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
              <Input name={'account'} label={'Account'} />
              <Input name={'password'} label={'Password'} inputType='password' />
              <Button type="submit">Confirm</Button>
            </Form>
          </FormProvider>
        </div>
      </div>
      </div>
      </>
  )
}

export default Login
