import Link from "next/link";
import blogs from "../data";

export default function Blog() {
  // const blogResponse = await fetch("https://api.vercel.app/blog");
  // if (!blogResponse.ok)
  //   throw new Error(`HTTP Error: ${blogResponse.status} ${blogResponse.statusText}`);

  // const blog = await blogResponse.json();

  // const categories = blogs.map((blog) => {
  //   return { id: blog.id, category: blog.category };
  // });
  const categories = blogs.map((blog) => blog.category);
  const uniqueCategories = [...new Set(categories)];

  return (
    <>
      <Link
        href="/"
        className="inline-flex h-10 items-center rounded-lg px-4 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 mb-6"
      >
        ← Back to main page
      </Link>
      <div className="max-w-2xl mx-auto p-6 font-sans">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Total unique categories:{" "}
          <span className="text-blue-600">{uniqueCategories.length}</span>
        </h1>
        <ul className="space-y-2">
          {uniqueCategories.map((category) => (
            <li
              key={category}
              className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-700 shadow-sm hover:bg-blue-50 hover:border-blue-300 transition-colors"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
