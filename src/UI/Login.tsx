/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use client'
import { Button, Checkbox, Form, Input, notification } from 'antd'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../../types/operation'
import { useRouter } from 'next/navigation'

function App() {
  const router = useRouter()

  const [login, { loading }] = useMutation(LOGIN, {
    onCompleted: (credentials) => {
      console.log(credentials)
      router.push('/history')
    },
  })
  const onFinish = (values: any) => {
    login({ variables: { loginUserInput: values } })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <h2 className="text-xl font-semibold mb-[22px]">
        Ingresar Como Vigilante
      </h2>
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
          name="email"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input size="large" placeholder="correo electrónico" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Contraseña"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password size="large" placeholder="Contraseña" />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked">
          <Checkbox style={{ color: '#444444', fontSize: 14 }}>
            Recordarme
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            loading={loading}
            type="primary"
            htmlType="submit"
            block
            size="large"
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default App
type FieldType = {
  email?: string
  password?: string
  remember?: string
}
