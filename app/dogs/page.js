export default async function Dog() {
  const dogResponse = await fetch("https://dog.ceo/api/breeds/image/random");
  const dog = await dogResponse.json();

  return (
    <div className="flex flex-col justify-center items-center gap-10 font-sans dark:bg-black">
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        Random dog picture
      </h1>
      <img src={dog.message} alt="" />
    </div>
  );
}
