import { Flex } from 'antd'
import LoginUI from '@/UI/Login'

export default function Login (): JSX.Element {
  return (
    <section className='relative flex min-h-screen flex-col items-center justify-center' >
      <Flex vertical justify={'center'} className="animate-in bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
        <LoginUI />
      </Flex>
    </section>
  )
}
