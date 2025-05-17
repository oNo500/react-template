'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import GithubIcon from './icons/github.svg';
import ReactIcon from './icons/react.svg';

const menuItems = [
  { name: '首页', href: '/' },
  { name: '技术栈', href: '/#tech' },
  { name: '关于', href: '/#about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl flex-nowrap items-center justify-between gap-8 whitespace-nowrap px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="grow basis-0 flex-nowrap">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <ReactIcon className="h-8 w-8" />
            React Starter
          </Link>
        </div>
        <ul className="flex max-w-fit flex-row flex-nowrap gap-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-row gap-2">
          <li>
            <GithubIcon className="h-6 w-6" />
          </li>
          <li>主题切换</li>
        </ul>

        {/* 移动端汉堡按钮 */}
        <button
          className="flex items-center rounded p-2 hover:bg-gray-100 md:hidden dark:hover:bg-gray-800"
          onClick={() => setOpen(!open)}
          aria-label="打开菜单"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* 移动端菜单 */}
      {open && (
        <div className="border-t border-gray-200 bg-white px-4 pb-4 md:hidden dark:border-gray-800 dark:bg-black">
          <div className="mt-2 flex flex-col gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="py-2 text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/auth/login"
              className="mt-2 rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
              onClick={() => setOpen(false)}
            >
              登录
            </Link>
            <Link
              href="/auth/register"
              className="mt-2 rounded border border-blue-500 px-4 py-2 text-blue-500 transition-colors hover:bg-blue-50 dark:hover:bg-blue-950"
              onClick={() => setOpen(false)}
            >
              注册
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
