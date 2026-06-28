import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-green-dark flex flex-col items-center justify-center text-light px-5">
      <Image src="/logo.png" alt="Finx" width={160} height={48} className="mb-8" style={{ height: 'auto' }} />
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-text-disabled mb-8">This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="flex items-center space-x-2 bg-green-accent text-light rounded-full px-6 py-3 font-medium"
      >
        Go back home
      </Link>
    </div>
  );
}
