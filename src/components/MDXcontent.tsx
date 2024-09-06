import { MDXProvider } from '@mdx-js/react'
import { Button } from '@/components/ui/button'

const components = {
  Button: Button,
  // 可以添加其他自定义组件
}

interface MDXContentProps {
  Content: React.ComponentType
}

export function MDXContent({ Content }: MDXContentProps) {
  return (
    <MDXProvider components={components}>
      <Content />
    </MDXProvider>
  )
}
