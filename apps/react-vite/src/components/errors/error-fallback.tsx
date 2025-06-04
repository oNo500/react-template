import { Button } from '@kit101/ui/components/button';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import { Link } from 'react-router';

import { env } from '@/config/env';
import { paths } from '@/config/paths';

import type { FallbackProps } from 'react-error-boundary';

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center">
      <div className="max-w-md p-8 text-center">
        <AlertTriangle className="text-destructive mx-auto mb-4 h-12 w-12" />
        <h1 className="text-foreground mb-2 text-2xl font-bold">应用程序出错了</h1>
        <p className="text-muted-foreground mb-6">{error.message || '遇到了意外问题，请尝试刷新页面'}</p>

        {/* 开发环境显示错误详情 */}
        {env.MODE === 'development' && (
          <details className="mb-6 text-left">
            <summary className="text-muted-foreground hover:text-foreground mb-2 cursor-pointer text-sm">
              查看错误详情
            </summary>
            <pre className="bg-muted max-h-32 overflow-auto rounded p-3 text-xs">{error.stack}</pre>
          </details>
        )}

        <div className="space-x-4">
          <Button onClick={resetErrorBoundary} className="gap-2">
            <RefreshCw className="h-4 w-4" />
            重试1
          </Button>
          <Button variant="outline" asChild className="gap-2">
            <Link to={paths.home.getHref()}>
              <Home className="h-4 w-4" />
              回到首页
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
