import * as yup from 'yup'

import React, { useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { FormProvider, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import Checkbox from 'components/CheckBox'
import DropDown from 'components/DropDown'
import Input from 'components/Input'

const schema = () =>
  yup.object({
    task: yup.string().required('Required Account!'),
    point: yup.string().required('Required Point!'),
  })

const options = [
  {
    value: 'daily',
    label: 'Daily',
  },
  {
    value: 'weekly',
    label: 'Weekly',
  },
  {
    value: 'monthly',
    label: 'Monthly',
  },
]

interface IChallenge {
  task: string
  point: string
  required: boolean
  target: string
}

const AddChallenge = () => {
  const [listChallenge, setListChallenge] = useState<IChallenge[]>([])

  const methods = useForm({
    defaultValues: {
      account: '',
      point: '',
      required: false,
    },
    resolver: yupResolver(schema()),
  })
  const onSubmit = (data: any) => setListChallenge((state) => [...state, data])

  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h1 className="text-white">Add Challenge</h1>
          <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
              <Input name={'task'} label={'Task'} />
              <Input name={'point'} label={'Point'} />
              <Checkbox name="required" label="Required" />
              <DropDown options={options} name="target" label="Target" />
              <Button type="submit">Add</Button>
            </Form>
          </FormProvider>
          <Table striped bordered hover variant="light" className="mt-5">
            <thead>
              <tr>
                <th>#</th>
                <th>Task</th>
                <th>Point</th>
                <th>Required</th>
                <th>Target</th>
              </tr>
            </thead>
            <tbody>
              {!!listChallenge.length &&
                listChallenge.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.task}</td>
                    <td>{item.point}</td>
                    <td>{item.required ? 'true' : 'false'}</td>
                    <td>{item.target}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default AddChallenge
