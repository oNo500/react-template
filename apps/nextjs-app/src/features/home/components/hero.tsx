'use client';

import Code from '@/components/code';

const Hero = () => {
  return (
    <section className="mx-auto mt-10 flex max-w-5xl flex-col gap-12 text-center">
      {/* 主标题区域 */}
      <div className="space-y-6">
        <h1 className="text-balance bg-gradient-to-tr from-black/70 via-black to-black/60 bg-clip-text text-center text-4xl font-bold text-transparent sm:text-6xl md:text-7xl dark:from-zinc-400/10 dark:via-white/90 dark:to-white/20">
          React Template
        </h1>
      </div>

      {/* 快速开始 */}
      <div className="space-y-4">
        <Code className="mx-auto w-fit">pnpx degit https://github.com/gaoxiu333/react-template.git my-project</Code>
        <p className="text-muted-foreground text-sm">一键克隆，即刻开始</p>
      </div>

      {/* 丰富的特性展示 */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">项目特性</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4 rounded-xl border p-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              <h3 className="text-lg font-semibold">现代化技术栈</h3>
            </div>
            <p className="text-muted-foreground text-left">Next.js 15 + React 19 + TypeScript</p>
          </div>

          <div className="space-y-4 rounded-xl border p-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎨</span>
              <h3 className="text-lg font-semibold">精美 UI 组件</h3>
            </div>
            <p className="text-muted-foreground text-left">Tailwind CSS v4 + shadcn/ui + Radix UI</p>
          </div>

          <div className="space-y-4 rounded-xl border p-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <h3 className="text-lg font-semibold">企业级工程化</h3>
            </div>
            <p className="text-muted-foreground text-left">Turborepo + pnpm + ESLint + Prettier</p>
          </div>

          <div className="space-y-4 rounded-xl border p-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔧</span>
              <h3 className="text-lg font-semibold">状态管理</h3>
            </div>
            <p className="text-muted-foreground text-left">React Query + Zustand + React Hook Form</p>
          </div>

          <div className="space-y-4 rounded-xl border p-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧪</span>
              <h3 className="text-lg font-semibold">测试覆盖</h3>
            </div>
            <p className="text-muted-foreground text-left">Vitest + Playwright + MSW</p>
          </div>

          <div className="space-y-4 rounded-xl border p-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <h3 className="text-lg font-semibold">生产监控</h3>
            </div>
            <p className="text-muted-foreground text-left">Sentry + Vercel Analytics</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
