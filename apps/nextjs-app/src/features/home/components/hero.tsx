'use client';

import Code from '@/components/code';

import TechStack from './tech-stack';

const Hero = () => {
  return (
    <section className="mt-10 flex flex-col gap-4 text-center">
      <h1 className="text-balance bg-gradient-to-tr from-black/70 via-black to-black/60 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl dark:from-zinc-400/10 dark:via-white/90 dark:to-white/20">
        React Starter
      </h1>
      <TechStack />
      <p className="text-muted-foreground">包含 tailwindcss、shadcn-ui</p>
      <div className="flex flex-row justify-center">
        <Code className="mt-2 w-fit">
          pnpx degit https://github.com/gaoxiu333/react-template.git my-project
        </Code>
      </div>
    </section>
  );
};

export default Hero;
