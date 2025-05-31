import Navbar from '@/components/navbar';
import Hero from '@/features/home/components/hero';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 pb-20 sm:p-20">
      <Navbar />
      <main className="flex h-full w-full flex-1 flex-col">
        <Hero />
      </main>
    </div>
  );
}
