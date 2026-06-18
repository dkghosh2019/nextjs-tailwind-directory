// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-md">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight">Next.js Framework Hub</h1>
        <p className="mt-3 text-gray-500 text-sm">Your modern development platform setup is completely live and tracking branch features.</p>
        
        {/* Next.js client link component for blazing fast navigation */}
        <div className="mt-6">
          <Link href="/projects" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition-colors">
            View Project Hub →
          </Link>
        </div>
      </div>
    </main>
  );
}
