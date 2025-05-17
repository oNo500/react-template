import Image from 'next/image';

/**
 * TODO:
 *  1. 添加技术栈图标，以及使用动画排列
 *  2. 简单的描述技术栈道优势
 *  3. 添加一个快速启动的按钮
 */

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 pb-20 sm:p-20">
      <p>React + Next.js + Tailwind CSS</p>
      <button className="rounded-md bg-blue-500 p-2 text-white">
        Click me
      </button>
      <p className="text-gray-500 text-sm">这是由...构建</p>
    </div>
  );
}
