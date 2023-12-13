import WithTheme from '@/lib/WithTheme'

export default function TemplateMain ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <main className='min-h-screen' >
      <WithTheme>
        {children}
      </WithTheme>
    </main>
  )
}
