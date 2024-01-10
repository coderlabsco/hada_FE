import { Flex } from 'antd'
import RegisterVisitorUI from '@/UI/RegisterVisitor'

export default function RegisterVisitor (): JSX.Element {
  return (
    <section className='relative flex min-h-screen flex-col items-center justify-center' >
      <Flex vertical justify={'center'} className="animate-in bg-white/30 p-[24px] m-3 shadow-sm ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-[663px] max-h-[571] mx-auto">
        <RegisterVisitorUI />
      </Flex>
    </section>
  )
}
