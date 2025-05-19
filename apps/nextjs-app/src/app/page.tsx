import { Button } from '@repo/ui/components/button';

import Navbar from '@/components/navbar';
import Features from '@/features/home/components/features';
import Hero from '@/features/home/components/hero';

/**
 * TODO:
 *  1. 添加技术栈图标，以及使用动画排列
 *  2. 简单的描述技术栈道优势
 *  3. 添加一个快速启动的按钮
 *  4. 也需要一个 Header
 */

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 pb-20 sm:p-20">
      <Navbar />
      <main className="flex h-full w-full flex-1 flex-col">
        <Hero />
        {/* <Features /> */}
      </main>
    </div>
  );
}
