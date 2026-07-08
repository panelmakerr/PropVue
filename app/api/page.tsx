'use client';
import Link from 'next/link';

export default function APIDocs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2A2A2A] to-[#3A3A3A] text-[#E8E0D8] p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-[#C47A4E] hover:underline text-sm mb-8 inline-block">← Back to Home</Link>
        <h1 className="font-serif text-4xl mb-8">propvue API</h1>
        <p className="text-[#8A8278] mb-12">RESTful API endpoints for Smarter Real Estate Intelligence. All endpoints return JSON.</p>
        <div className="space-y-8">
          <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h2 class="text-xl font-semibold mb-4 capitalize">/properties</h2>
            <div class="space-y-2 font-mono text-sm">
              <div class="flex gap-4 items-center"><span class="text-green-400 w-12">GET</span><span>/properties → List</span></div>
              <div class="flex gap-4 items-center"><span class="text-blue-400 w-12">POST</span><span>/properties → Create</span></div>
              <div class="flex gap-4 items-center"><span class="text-yellow-400 w-12">PUT</span><span>/properties/[id] → Update</span></div>
              <div class="flex gap-4 items-center"><span class="text-red-400 w-12">DEL</span><span>/properties/[id] → Delete</span></div>
            </div>
          </div>
          <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h2 class="text-xl font-semibold mb-4 capitalize">/listings</h2>
            <div class="space-y-2 font-mono text-sm">
              <div class="flex gap-4 items-center"><span class="text-green-400 w-12">GET</span><span>/listings → List</span></div>
              <div class="flex gap-4 items-center"><span class="text-blue-400 w-12">POST</span><span>/listings → Create</span></div>
              <div class="flex gap-4 items-center"><span class="text-yellow-400 w-12">PUT</span><span>/listings/[id] → Update</span></div>
              <div class="flex gap-4 items-center"><span class="text-red-400 w-12">DEL</span><span>/listings/[id] → Delete</span></div>
            </div>
          </div>
          <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h2 class="text-xl font-semibold mb-4 capitalize">/clients</h2>
            <div class="space-y-2 font-mono text-sm">
              <div class="flex gap-4 items-center"><span class="text-green-400 w-12">GET</span><span>/clients → List</span></div>
              <div class="flex gap-4 items-center"><span class="text-blue-400 w-12">POST</span><span>/clients → Create</span></div>
              <div class="flex gap-4 items-center"><span class="text-yellow-400 w-12">PUT</span><span>/clients/[id] → Update</span></div>
              <div class="flex gap-4 items-center"><span class="text-red-400 w-12">DEL</span><span>/clients/[id] → Delete</span></div>
            </div>
          </div>
          <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h2 class="text-xl font-semibold mb-4 capitalize">/tours</h2>
            <div class="space-y-2 font-mono text-sm">
              <div class="flex gap-4 items-center"><span class="text-green-400 w-12">GET</span><span>/tours → List</span></div>
              <div class="flex gap-4 items-center"><span class="text-blue-400 w-12">POST</span><span>/tours → Create</span></div>
              <div class="flex gap-4 items-center"><span class="text-yellow-400 w-12">PUT</span><span>/tours/[id] → Update</span></div>
              <div class="flex gap-4 items-center"><span class="text-red-400 w-12">DEL</span><span>/tours/[id] → Delete</span></div>
            </div>
          </div>
          <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h2 class="text-xl font-semibold mb-4 capitalize">/valuations</h2>
            <div class="space-y-2 font-mono text-sm">
              <div class="flex gap-4 items-center"><span class="text-green-400 w-12">GET</span><span>/valuations → List</span></div>
              <div class="flex gap-4 items-center"><span class="text-blue-400 w-12">POST</span><span>/valuations → Create</span></div>
              <div class="flex gap-4 items-center"><span class="text-yellow-400 w-12">PUT</span><span>/valuations/[id] → Update</span></div>
              <div class="flex gap-4 items-center"><span class="text-red-400 w-12">DEL</span><span>/valuations/[id] → Delete</span></div>
            </div>
          </div>

        </div>
        <footer className="mt-16 pt-8 border-t border-white/[0.04] text-center text-sm text-[#8A8278]">
          <p>Built by <span style={{color:'#C47A4E'}}>Raymora</span> — Premium Web Engineering</p>
        </footer>
      </div>
    </div>
  );
}
