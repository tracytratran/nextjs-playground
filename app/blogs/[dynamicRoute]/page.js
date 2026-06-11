"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogPage() {
  const params = useParams();
  const dynamicRoute = params.dynamicRoute;
  const formatted = formatString(dynamicRoute);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Link
        href="/"
        className="inline-flex h-10 items-center rounded-full border border-solid border-blue-200 px-4 text-sm font-medium text-blue-500 transition-colors hover:bg-blue-50 hover:border-blue-300 mb-8"
      >
        ← Back to main page
      </Link>
      <span className="text-xs font-medium text-blue-500 uppercase tracking-widest mb-3 block">
        Blog Post
      </span>
      <h1 className="text-3xl font-bold text-gray-900 leading-snug mb-4">
        {formatted}
      </h1>
      <p className="text-gray-400 text-sm leading-relaxed">
        You are viewing the blog post for{" "}
        <span className="text-blue-400 font-medium">/{dynamicRoute}</span>
      </p>
      <p className="text-gray-500 text-sm leading-relaxed mt-3">
        You can create your own dynamic route by writing after the slash. The
        format should be{" "}
        <code className="bg-gray-100 text-gray-700 text-xs font-mono px-1.5 py-0.5 rounded">
          /this-is-your-dynamic-route
        </code>
        .
      </p>
    </div>
  );
}

function formatString(str) {
  const strWithSpace = str.replaceAll("-", " ");
  return strWithSpace.charAt(0).toUpperCase() + strWithSpace.slice(1);
}
