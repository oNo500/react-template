import { cn } from '@repo/ui/lib/utils';

import NextLogo from '@/assets/icons/nextdotjs.svg';
import ReactLogo from '@/assets/icons/react.svg';
import ReactRouterLogo from '@/assets/icons/reactrouter.svg';
import ShadcnLogo from '@/assets/icons/shadcnui.svg';
import TailwindLogo from '@/assets/icons/tailwindcss.svg';
import TurborepoLogo from '@/assets/icons/turborepo.svg';

const techs = [
  {
    name: 'React',
    logo: <ReactLogo className="text-[#61DAFB]" />,
  },
  { name: 'Next.js', logo: <NextLogo className="text-[#000000]" /> },
  { name: 'Tailwind CSS', logo: <TailwindLogo className="text-[#06B6D4]" /> },
  { name: 'Truborepo', logo: <TurborepoLogo className="text-[#EF4444]" /> },
  { name: 'Shadcn-ui', logo: <ShadcnLogo /> },
  {
    name: 'React Router',
    logo: <ReactRouterLogo className="text-[#CA4245]" />,
  },
];

const TechStack = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => {
  return (
    <div className={cn('flex flex-col gap-4', className)} {...props}>
      <div className="flex items-center justify-center">
        {techs.map((tech, idx) => (
          <div
            key={tech.name}
            className="border-primary-foreground bg-primary-foreground -ml-3 box-border flex h-16 w-16 items-center justify-center rounded-full border-2 p-2 shadow first:ml-0"
            style={{ zIndex: techs.length - idx }}
            title={tech.name}
          >
            {tech.logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
