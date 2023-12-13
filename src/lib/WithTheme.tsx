'use client'

import { ConfigProvider } from 'antd'
import theme from '@/themeConfig'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const withTheme = ({ children }: { children: React.ReactNode }) => (
  <>
    <ConfigProvider
      theme={theme}
    >
      {children}
    </ConfigProvider>
  </>
)

export default withTheme
