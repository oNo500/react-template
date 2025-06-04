'use client';

import { Button } from '@kit101/ui/components/button';
import { cn } from '@kit101/ui/lib/utils';
import { Check, Copy } from 'lucide-react';

import React, { useRef, useState } from 'react';

const Code = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLDivElement>(null);

  const handleCopy = async () => {
    if (!codeRef.current) return;
    // 获取纯文本内容
    const text = codeRef.current.innerText;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      // 可以根据需要处理异常
    }
  };

  return (
    <div
      className={cn(
        'bg-muted relative rounded-md py-2 pl-2 pr-8 font-mono text-sm',
        className,
      )}
      {...props}
    >
      <Button
        onClick={handleCopy}
        size="icon"
        variant="ghost"
        className="absolute right-0 top-1/2 -translate-y-1/2"
        aria-label="复制代码"
      >
        {copied ? (
          <Check className="text-primary size-3" />
        ) : (
          <Copy className="size-3" />
        )}
      </Button>
      <div ref={codeRef}>{children}</div>
    </div>
  );
};

export default Code;
