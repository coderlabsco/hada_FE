/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use client'
import type React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import Link from 'next/link'

const onFinish = (values: any) => {
  console.log('Success:', values)
  {
    <Link href="/history">a</Link>
  }
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

interface FieldType {
  username?: string
  password?: string
  remember?: string
}

const App: React.FC = () => (
  <>
    <h2 className="text-xl font-semibold mb-[22px]">Ingresar Como Vigilante</h2>
    <Form
      name="signIn"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      requiredMark={false}
      style={{ width: '100%' }}
    >
      <Form.Item<FieldType>
        label="Correo"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input size="large" placeholder='correo electrónico' />
      </Form.Item>

      <Form.Item<FieldType>
        label="Contraseña"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password size="large" placeholder='Contraseña' />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
      >
        <Checkbox style={{ color: '#444444', fontSize: 14 }}>Recordarme</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block size="large">
          Sign In
        </Button>
      </Form.Item>
    </Form>
  </>
)

export default App
