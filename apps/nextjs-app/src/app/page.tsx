import Image from 'next/image';

import Navbar from '@/components/navbar';

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
      <p>React + Next.js + Tailwind CSS</p>
      <button className="rounded-md bg-blue-500 p-2 text-white">
        Click me
      </button>
      <p className="text-sm text-gray-500">这是由...构建</p>
    </div>
  );
}
