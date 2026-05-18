"use client";

import { useParams } from "next/navigation";

export default function BlogPage() {
  const params = useParams();
  const dynamicRoute = params.dynamicRoute;
  const formatted = formatString(dynamicRoute);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
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
    </div>
  );
}

function formatString(str) {
  const strWithSpace = str.replaceAll("-", " ");
  return strWithSpace.charAt(0).toUpperCase() + strWithSpace.slice(1);
}
