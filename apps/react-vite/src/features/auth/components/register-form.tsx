import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@kit101/ui/components/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@kit101/ui/components/form';
import { Input } from '@kit101/ui/components/input';
import { cn } from '@kit101/ui/lib/utils';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

import ReactIcon from '@/assets/icons/react.svg?react';
import { type RegisterRequest, useRegister } from '@/auth/use-auth';
import { paths } from '@/config/paths';

const formSchema = z.object({
  firstName: z.string().min(1, { message: 'First Name is required' }),
  lastName: z.string().min(1, { message: 'Last Name is required' }),
  email: z.string().min(1, { message: 'Email is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

const RegisterForm = ({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });
  const registerMutation = useRegister();
  function onSubmit(values: typeof formSchema._type) {
    const payload: RegisterRequest = {
      email: values.email,
      password: values.password,
      name: `${values.firstName} ${values.lastName}`.trim(),
    };
    registerMutation.mutate(payload);
  }
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-8">
            <div className="flex flex-col items-center gap-2">
              <Link to={paths.home.getHref()} className="flex flex-col items-center gap-2 font-medium">
                <div className="flex size-12 items-center justify-center rounded-md">
                  <ReactIcon />
                </div>
                <span className="sr-only">React Starter</span>
              </Link>
              <h1 className="text-xl font-bold">Welcome to React Starter</h1>
            </div>
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <Button className="w-full" type="submit">
              Sign Up
            </Button>
          </div>

          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <Link to={paths.auth.login.getHref()} className="underline underline-offset-4">
              Login
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
