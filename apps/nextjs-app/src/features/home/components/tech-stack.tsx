import { cn } from '@repo/ui/lib/utils';

import NextLogo from '@/assets/icons/nextdotjs.svg';
import ReactLogo from '@/assets/icons/react.svg';
import ShadcnLogo from '@/assets/icons/shadcnui.svg';
import TailwindLogo from '@/assets/icons/tailwindcss.svg';
import TurborepoLogo from '@/assets/icons/turborepo.svg';

const techs = [
  {
    name: 'React 19',
    logo: <ReactLogo className="text-[#61DAFB]" />,
  },
  {
    name: 'Next.js 15',
    logo: <NextLogo className="text-[#000000] dark:text-white" />,
  },
  {
    name: 'Tailwind CSS v4',
    logo: <TailwindLogo className="text-[#06B6D4]" />,
  },
  {
    name: 'Turborepo',
    logo: <TurborepoLogo className="text-[#EF4444]" />,
  },
  {
    name: 'shadcn/ui',
    logo: <ShadcnLogo className="text-black dark:text-white" />,
  },
];

const TechStack = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="bg-background hover:bg-accent border-border flex h-20 w-20 items-center justify-center rounded-2xl border-2 p-3 shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
            title={tech.name}
          >
            {tech.logo}
          </div>
        ))}
      </div>
      <p className="text-muted-foreground text-sm">
        基于最新技术栈构建的现代化开发环境
      </p>
    </div>
  );
};

export default TechStack;
