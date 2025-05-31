'use client';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@repo/ui/components/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@repo/ui/components/dropdown-menu';

import { useState } from 'react';

import Link from 'next/link';

import GithubIcon from '@/assets/icons/github.svg';
import ReactIcon from '@/assets/icons/react.svg';
import { useAuthStore } from '@/auth';
import { paths } from '@/config/paths';

import { ModeToggle } from './mode-toggle';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuthStore(); // 避免闪烁，最好服务端存储状态

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-background/80 fixed left-0 top-0 z-50 w-full border-b backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl flex-nowrap items-center justify-between gap-4 whitespace-nowrap px-4 sm:px-6 lg:px-8">
        {/* 品牌标识 - 始终显示 */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <ReactIcon className="h-8 w-8 flex-shrink-0" />
            <span className="hidden sm:block">React Starter</span>
            <span className="block sm:hidden">React</span>
          </Link>
        </div>

        {/* 桌面端导航 */}
        <div className="hidden flex-row items-center justify-end gap-4 md:flex">
          <Link
            href="https://github.com"
            className="hover:bg-accent flex items-center gap-2 rounded-md p-2 transition-colors"
          >
            <GithubIcon className="h-5 w-5" />
            <span className="hidden lg:block">GitHub</span>
          </Link>
          <ModeToggle />
          {!isAuthenticated ? (
            <Link
              href={paths.auth.login.getHref()}
              className="border-border hover:bg-accent rounded-md border px-3 py-1 transition-colors"
            >
              Login
            </Link>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>{user?.name}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => logout()}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        {/* 移动端汉堡菜单按钮 */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <button
            onClick={toggleMobileMenu}
            className="hover:bg-accent flex h-10 w-10 items-center justify-center rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <div
                className={`h-0.5 w-5 bg-current transition-transform ${
                  isMobileMenuOpen ? 'translate-y-1.5 rotate-45' : ''
                }`}
              />
              <div
                className={`h-0.5 w-5 bg-current transition-opacity ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <div
                className={`h-0.5 w-5 bg-current transition-transform ${
                  isMobileMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* 移动端下拉菜单 */}
      {isMobileMenuOpen && (
        <div className="bg-background/95 border-t backdrop-blur md:hidden">
          <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3">
              <Link
                href="https://github.com"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:bg-accent flex items-center gap-3 rounded-md p-3 transition-colors"
              >
                <GithubIcon className="h-5 w-5" />
                <span>GitHub</span>
              </Link>
              <Link
                href="/auth/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-border hover:bg-accent rounded-md border p-3 text-center transition-colors"
              >
                登录
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
