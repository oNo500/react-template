'use client';

import { useEffect } from 'react';

import Code from '@/components/code';
import { env } from '@/config/env';

import TechStack from './tech-stack';

const Hero = () => {
  useEffect(() => {
    console.log('NEXT_PUBLIC_API_URL', env);
  }, []);
  return (
    <section className="mt-10 flex flex-col gap-4 text-center">
      {/* <div className="text-2xl">Turbo + Nextjs + Tailwind CSS</div> */}
      <h1 className="text-balance bg-gradient-to-tr from-black/70 via-black to-black/60 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl dark:from-zinc-400/10 dark:via-white/90 dark:to-white/20">
        React Starter
      </h1>
      <TechStack />
      <p className="text-muted-foreground">包含 tailwindcss、shadcn-ui</p>
      <div className="flex flex-row justify-center">
        <Code className="mt-2 w-fit">
          git clone https://github.com/your-username/react-starter.git
        </Code>
      </div>
    </section>
  );
};

export default Hero;
