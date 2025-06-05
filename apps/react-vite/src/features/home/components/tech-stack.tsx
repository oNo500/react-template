import { cn } from '@kit101/ui/lib/utils';

import NextLogo from '@/assets/icons/nextdotjs.svg?react';
import ReactLogo from '@/assets/icons/react.svg?react';
import ShadcnLogo from '@/assets/icons/shadcnui.svg?react';
import TailwindLogo from '@/assets/icons/tailwindcss.svg?react';
import TurborepoLogo from '@/assets/icons/turborepo.svg?react';
import ViteLogo from '@/assets/icons/vite.svg?react';
import VitestLogo from '@/assets/icons/vitest.svg?react';
import PrettierLogo from '@/assets/icons/prettier.svg?react';
import EslintLogo from '@/assets/icons/eslint.svg?react';
import TypeScriptLogo from '@/assets/icons/typescript.svg?react';
import ZustandLogo from '@/assets/icons/zustand.svg?react';
import ReactRouterLogo from '@/assets/icons/reactrouter.svg?react';
import ReactQueryLogo from '@/assets/icons/reactquery.svg?react';
import ReactHookFormLogo from '@/assets/icons/reacthookform.svg?react';
import MswLogo from '@/assets/icons/msw.svg?react';
import PlaywrightLogo from '@/assets/icons/playwright.svg?react';

const techs = [
  {
    name: 'Turborepo',
    logo: <TurborepoLogo />,
  },
  {
    name: 'React 19',
    logo: <ReactLogo />,
  },
  {
    name: 'Next.js 15',
    logo: <NextLogo />,
  },
  {
    name: 'Tailwind CSS v4',
    logo: <TailwindLogo />,
  },
  {
    name: 'Shadcn UI',
    logo: <ShadcnLogo />,
  },
  {
    name: 'Vite',
    logo: <ViteLogo />,
  },
  {
    name: 'Vitest',
    logo: <VitestLogo />,
  },
  {
    name: 'Prettier',
    logo: <PrettierLogo />,
  },
  {
    name: 'Eslint',
    logo: <EslintLogo />,
  },
  {
    name: 'TypeScript',
    logo: <TypeScriptLogo />,
  },
  {
    name: 'Zustand',
    logo: <ZustandLogo />,
  },
  {
    name: 'React Router',
    logo: <ReactRouterLogo />,
  },
  {
    name: 'React Query',
    logo: <ReactQueryLogo />,
  },
  {
    name: 'React Hook Form',
    logo: <ReactHookFormLogo />,
  },
  {
    name: 'MSW',
    logo: <MswLogo />,
  },
  {
    name: 'Playwright',
    logo: <PlaywrightLogo />,
  },
];

const TechStack = ({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) => {
  return (
    <div className={cn('bg-muted text-primary absolute bottom-0 left-0 flex w-full flex-col', className)} {...props}>
      <div className="flex flex-none flex-nowrap items-center justify-center gap-12 overflow-hidden px-4 py-3">
        {techs.map((tech) => (
          <div key={tech.name} className="flex-0 flex min-w-fit flex-row items-center gap-3">
            <div className="duration-600 flex size-10 items-center justify-center" title={tech.name}>
              {tech.logo}
            </div>
            <p className="text-sm">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
