import Link from "next/link";

export default async function Dog({ searchParams }) {
  const query = await searchParams;
  const breed = query.breed;
  const dogResponse = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random`,
  );
  if (!dogResponse.ok)
    throw new Error(
      `HTTP Error: ${dogResponse.status} ${dogResponse.statusText}`,
    );

  const dog = await dogResponse.json();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-8 px-4  font-sans">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-amber-900 dark:text-amber-100">
          Random Dog Picture
        </h1>
        <p className="text-base text-amber-700 dark:text-amber-400">
          A new pup every time you visit
        </p>
      </div>

      <div className="rounded-2xl overflow-hidden shadow-xl ring-4 ring-amber-200 dark:ring-amber-800 max-w-sm w-full">
        <img
          src={dog.message}
          alt="A random dog"
          className="w-full h-80 object-cover"
        />
      </div>

      <p className="text-sm text-amber-700 dark:text-amber-400">
        Want a different breed? Change the URL to{" "}
        <code className="bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 text-xs font-mono px-1.5 py-0.5 rounded">
          ?breed=your-breed
        </code>
      </p>

      <span className="text-4xl">🐶</span>

      <Link
        href="/"
        className="flex h-12 items-center justify-center rounded-full border border-solid border-amber-300 dark:border-amber-700 px-5 text-sm font-medium text-amber-900 dark:text-amber-100 transition-colors hover:bg-amber-100 dark:hover:bg-amber-900"
      >
        ← Back to main page
      </Link>
    </div>
  );
}
