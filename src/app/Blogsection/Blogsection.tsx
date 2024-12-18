"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

type Blog = {
  id: number;
  imgSrc: string;
  title: string;
  readTime: string;
  date: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    imgSrc: "/1 com.jpg",
    title: "Going all in with millennial design",
    readTime: "5 min read",
    date: "12 Oct 2023",
  },
  {
    id: 2,
    imgSrc: "/2 com.jpg",
    title: "Exploring modern art trends",
    readTime: "6 min read",
    date: "13 Oct 2023",
  },
  {
    id: 3,
    imgSrc: "/3 com.jpg",
    title: "The future of creative design",
    readTime: "5 min read",
    date: "14 Oct 2023",
  },
];

const Blogsection = () => {
  return (
    <section className="text-center py-16 bg-white">
      {/* Section Header */}
      <h2 className="text-3xl font-semibold mb-4">Our Blogs</h2>
      <p className="text-gray-600 text-sm mb-8">
        Find a bright idea to suit your taste with our grand selection.
      </p>

      {/* Blog Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-72 transition-transform duration-300 hover:scale-105"
          >
            <Link href={`/blogs/${blog.id}`}>
              <div className="relative w-full h-44">
                <Image
                  src={blog.imgSrc}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {blog.readTime} | {blog.date}
                </p>
                <span
                  className="text-blue-500 text-sm hover:underline"
                  aria-label={`Read more about ${blog.title}`}
                >
                  Read More
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* View All Posts */}
      <div className="mt-8">
        <Link
          href="/blogs"
          className="text-blue-500 text-base hover:underline"
          aria-label="View all blog posts"
        >
          View All Posts
        </Link>
      </div>
    </section>
  );
};

export default Blogsection;
