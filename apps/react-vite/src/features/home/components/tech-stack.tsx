import { cn } from '@kit101/ui/utils';
import NextLogo from '@kit101/icons/nextdotjs.svg?react';
import ReactLogo from '@kit101/icons/react.svg?react';
import ShadcnLogo from '@kit101/icons/shadcnui.svg?react';
import TailwindLogo from '@kit101/icons/tailwindcss.svg?react';
import TurborepoLogo from '@kit101/icons/turborepo.svg?react';
import ViteLogo from '@kit101/icons/vite.svg?react';
import VitestLogo from '@kit101/icons/vitest.svg?react';
import PrettierLogo from '@kit101/icons/prettier.svg?react';
import EslintLogo from '@kit101/icons/eslint.svg?react';
import TypeScriptLogo from '@kit101/icons/typescript.svg?react';
import ZustandLogo from '@kit101/icons/zustand.svg?react';
import ReactRouterLogo from '@kit101/icons/reactrouter.svg?react';
import ReactQueryLogo from '@kit101/icons/reactquery.svg?react';
import ReactHookFormLogo from '@kit101/icons/reacthookform.svg?react';
import MswLogo from '@kit101/icons/msw.svg?react';
import PlaywrightLogo from '@kit101/icons/playwright.svg?react';

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
      <div className="overflow-hidden px-4 py-3">
        <div className="tech-scroll-animate gap-12">
          {[...techs, ...techs].map((tech, idx) => (
            <div key={tech.name + idx} className="flex-0 flex min-w-fit flex-row items-center gap-3">
              <div className="duration-600 flex size-10 items-center justify-center text-3xl" title={tech.name}>
                {tech.logo}
              </div>
              <p className="text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
