import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'propvue — Smarter Real Estate Intelligence', description: 'Smarter Real Estate Intelligence' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang=\"en\"><body>{children}</body></html>;
}
