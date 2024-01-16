import {Flex} from 'antd'
import HistoryUI from '@/UI/History'
export default function Page (): JSX.Element {
    return (
        <section className='relative flex min-h-screen flex-col items-center justify-center'>
            <Flex vertical justify='center'>
                <HistoryUI/>
            </Flex>
        </section>
    )
}