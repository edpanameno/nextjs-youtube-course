import { cookies } from 'next/headers';
import { JwtPayload } from '@/types/jwtPayload';

const HomePage = async ({ searchParams }: { searchParams?: Record<string, string> }) => {
  
  // Access query parameters from searchParams
  const tokenValue = searchParams?.token;

  // Parse JWT token if present
  let jwtPayload: Record<string, JwtPayload> | undefined;
  if (tokenValue) {
    try {
      const [, payload] = tokenValue.split('.');
      if (payload) {
        const decoded = Buffer.from(payload, 'base64').toString('utf-8');
        jwtPayload = JSON.parse(decoded);
      }
    } catch (e) {
      // Handle invalid token
      jwtPayload = undefined;
    }
  }

  // Example: Make a secure API call using fetch (server-side)
  // You can use cookies or environment variables for secrets
  // const res = await fetch('https://api.example.com/data?param=' + paramValue, {
  //   headers: { Authorization: `Bearer ${process.env.API_KEY}` }
  // });
  // const data = await res.json();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>This is the home page of this sample application.</p>
        <pre>{JSON.stringify(jwtPayload, null, 2)}</pre>
        <pre>{JSON.stringify(jwtPayload.sub, null, 2)}</pre>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Hey, this am the footer.</p>
      </footer>
    </div>
  );
};

export default HomePage;
