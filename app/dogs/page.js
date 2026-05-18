export default async function Dog() {
  const dogResponse = await fetch("https://dog.ceo/api/breeds/image/random");
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

      <span className="text-4xl">🐶</span>
    </div>
  );
}
