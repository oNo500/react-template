import { cn } from '@kit101/ui/lib/utils';

import type { ComponentPropsWithoutRef } from 'react';

const Features = ({ className, ...props }: ComponentPropsWithoutRef<'section'>) => {
  return (
    <section className={cn('mt-10 flex flex-col gap-4', className)} {...props}>
      <h2 className="text-center text-2xl font-bold">Features</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Feature 1</h3>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
