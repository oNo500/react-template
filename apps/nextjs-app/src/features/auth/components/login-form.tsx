'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@kit101/ui/components/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@kit101/ui/components/form';
import { Input } from '@kit101/ui/components/input';
import { cn } from '@kit101/ui/lib/utils';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import AppleIcon from '@/assets/icons/apple.svg';
import GoogleIcon from '@/assets/icons/google.svg';
import ReactIcon from '@/assets/icons/react.svg';
import { type LoginRequest, useLogin } from '@/auth';
import { paths } from '@/config/paths';

const formSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

const LoginForm = ({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) => {
  const router = useRouter();
  const form = useForm<LoginRequest>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const loginMutation = useLogin();

  async function onSubmit(values: LoginRequest) {
    await loginMutation.mutateAsync(values);
    router.push(paths.home.getHref());
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-2">
              <Link href="/" className="flex flex-col items-center gap-2 font-medium">
                <div className="flex size-12 items-center justify-center rounded-md">
                  <ReactIcon />
                </div>
                <span className="sr-only">React Starter</span>
              </Link>
              <h1 className="text-xl font-bold">Welcome to React Starter</h1>
              <div className="text-center text-sm">
                Don&apos;t have an account?{' '}
                <Link href="/auth/register" className="underline underline-offset-4">
                  Sign up
                </Link>
              </div>
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <Button disabled={loginMutation.isPending} className="w-full" type="submit">
              Login
            </Button>
            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
              <span className="bg-background text-muted-foreground relative z-10 px-2">Or</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Button variant="outline" className="w-full" type="button">
                <AppleIcon />
                Continue with Apple
              </Button>
              <Button variant="outline" className="w-full" type="button">
                <GoogleIcon />
                Continue with Google
              </Button>
            </div>
          </div>
        </form>
      </Form>
      <div className="text-muted-foreground hover:[&_a]:text-primary text-balance text-center text-xs [&_a]:underline [&_a]:underline-offset-4">
        By clicking continue, you agree to our <Link href="#">Terms of Service</Link> and{' '}
        <Link href="#">Privacy Policy</Link>.
      </div>
    </div>
  );
};

export default LoginForm;
