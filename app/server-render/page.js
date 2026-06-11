import Link from "next/link";
import blogs from "../data";

export default function ServerComponent() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Link
        href="/"
        className="inline-flex h-10 items-center rounded-2xl border border-gray-100 shadow-sm px-4 text-sm font-medium text-gray-500 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 mb-8"
      >
        ← Back to main page
      </Link>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
        Latest Posts
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <li
            key={blog.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between min-h-64 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <div>
              <span className="text-xs font-medium text-blue-500 uppercase tracking-widest mb-3 block">
                {blog.category}
              </span>
              <h1 className="text-xl font-semibold text-gray-900 mb-3 leading-snug">
                {blog.title}
              </h1>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">
                {blog.content}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-400">#{blog.id}</span>
              <span className="text-xs font-medium text-blue-500 hover:underline cursor-pointer">
                Read more →
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
