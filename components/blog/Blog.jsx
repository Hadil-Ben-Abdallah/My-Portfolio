'use client'

import { useState } from 'react'
import Image from 'next/image';
import HyperOne from '../customH1/HyperOne';

const blogPosts = [
  {
    id: 6,
    title: "v0.dev: Your New Favorite Playground for UI Development 🔥🚀",
    description: "An article about the v0.dev, the new AI tool for UI Development.",
    image: "/imgs/article6.jpg?height=200&width=300",
    link: "https://dev.to/hadil/v0dev-your-new-favorite-playground-for-ui-development-59oa"
  },
  {
    id: 5,
    title: "🧠 Level Up Your Coding Skills: The Problem-Solving Adventure! 🚀",
    description: "This article covers the importance of problem-solving, and recommends several popular problem-solving websites.",
    image: "/imgs/article5.png?height=200&width=300",
    link: "https://dev.to/hadil/level-up-your-coding-skills-the-problem-solving-adventure-3oc2"
  },
  {
    id: 4,
    title: "📚 Unleash Your Inner Code Wizard with Free Programming Books! 🧙‍♂️💻",
    description: "This article recommends Books.Goalkicker.com website which is a real treasure for anyone who's looking for a good source to learn a new programming language.",
    image: "/imgs/article4.jpg?height=200&width=300",
    link: "https://dev.to/hadil/unleash-your-inner-code-wizard-with-free-programming-books-30pn"
  },
  {
    id: 3,
    title: "What is Git ? 🤔",
    description: "This article will provide you with a comprehensive understanding of Git.",
    image: "/imgs/article3.jpeg?height=200&width=300",
    link: "https://dev.to/hadil/what-is-git--51j9"
  },
  {
    id: 2,
    title: "The Difference Between Visual Studio and Visual Studio Code 💻",
    description: "In this article I highlighted the difference between 'Visual Studio' and 'Visual Studio Code'.",
    image: "/imgs/article2.png?height=200&width=300",
    link: "https://dev.to/hadil/the-difference-between-visual-studio-vs-visual-studio-code-35oh"
  },
  {
    id: 1,
    title: "11 amazing games to master CSS in a fun way 🎮🔥",
    description: "In this article I highlighted 11 amazing CSS games you can play. Either you are a beginner or an expert, you will enjoy playing these games.",
    image: "/imgs/article1.png?height=200&width=300",
    link: "https://dev.to/hadil/11-amazing-games-to-master-css-in-a-fun-may-36ph"
  },
]

const POSTS_PER_PAGE = 6

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const visiblePosts = blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <HyperOne value={'Blog'} />
          {/* <p className="text-center mt-2 lg:mx-32 lg:text-2xl text-xl">
            Sharing knowledge through writing is a passion of mine, as it allows me to reflect on my learning journey and help others along the way. Below are some of my articles on programming, where I explore key concepts and trends. Writing about these topics not only strengthens my understanding but also fosters a collaborative community of growth and innovation.{' '}
          </p> */}
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePosts.map((post) => (
            <div
              key={post.id}
              className="transform hover:rotate-2 hover:scale-105 transition-transform duration-300"
            >
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <div className="border border-gray-300 rounded-lg overflow-hidden h-full flex flex-col">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-4 flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{post.description}</p>
                  </div>
                  <div className="p-4 mt-auto">
                    <button className="text-sky-600 dark:text-blue-400 hover:underline">Read More</button>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div> */}
        <div id="blog" className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePosts.map((post) => (
            <div
              key={post.id}
              className="w-96 mx-auto transform hover:rotate-2 hover:scale-105 transition-transform duration-300"
            >
              <div className="border border-gray-300 rounded-lg overflow-hidden h-full flex flex-col">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-4 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{post.description}</p>
                </div>
                <div className="p-4 mt-auto">
                  <button className="text-sky-600 dark:text-blue-400 font-bold hover:no-underline">
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                      Read More
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            className="px-3 py-2 rounded border border-gray-300 dark:border-gray-600 disabled:opacity-50"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`px-3 py-2 rounded ${currentPage === page
                  ? 'bg-sky-600 text-white'
                  : 'border border-gray-300 dark:border-gray-600'
                }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="px-3 py-2 rounded border border-gray-300 dark:border-gray-600 disabled:opacity-50"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  )
}