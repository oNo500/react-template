import Link from 'next/link';

import GithubIcon from './icons/github.svg';
import ReactIcon from './icons/react.svg';
import { ModeToggle } from './mode-toggle';

const menuItems = [
  { name: '首页', href: '/' },
  { name: '技术栈', href: '/#tech' },
  { name: '关于', href: '/#about' },
];

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl flex-nowrap items-center justify-between gap-8 whitespace-nowrap px-4 sm:px-6 lg:px-8">
        <div className="grow basis-0 flex-nowrap">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <ReactIcon className="h-8 w-8" />
            React Starter
          </Link>
        </div>
        <ul className="flex max-w-fit flex-row flex-nowrap gap-6">
          {/* {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))} */}
        </ul>
        <div className="flex flex-row items-center justify-end gap-4">
          <GithubIcon className="h-5 w-5" />
          <ModeToggle />
          <Link href={'auth/login'} className="p-0 underline">
            Login?
          </Link>
        </div>
      </div>
    </nav>
  );
}
