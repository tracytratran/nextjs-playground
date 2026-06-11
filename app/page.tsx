import Image from "next/image";
import Link from "next/link";

const routes = [
  { href: "/dogs?breed=labrador", label: "Random dog picture" },
  { href: "/blogs", label: "Vercel blog unique categories" },
  { href: "/blogs/getting-started-with-next-js", label: "Dynamic blog post" },
  { href: "/client-render", label: "Client render" },
  { href: "/server-render", label: "Server render" },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            HackYourFuture
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            React Week 5 - Assignment, Part 1
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-5 text-sm font-medium transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            >
              {route.label}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
