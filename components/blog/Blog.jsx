'use client'

import { useState } from 'react';
import HyperOne from '../customH1/HyperOne';
import BlogCard from './BlogCard';
import React, { useEffect } from 'react';

const blogPosts = [
  {
    id: 21,
    title: "🎮 Level Up Your JavaScript Skills with These Fun Games! 🕹️",
    description: "An article about amazing JavaScript coding games.",
    image: "/imgs/article21.png?height=200&width=300",
    link: "https://dev.to/hadil/level-up-your-javascript-skills-with-these-fun-games-2a7f"
  },
  {
    id: 20,
    title: "🐒🍌CodeMonkey: Turning Kids into Coding Ninjas! 💻🎮",
    description: "An article about CodeMonkey, the coding game for kids.",
    image: "/imgs/article20.png?height=200&width=300",
    link: "https://dev.to/hadil/codemonkey-turning-kids-into-coding-ninjas-cpl"
  },
  {
    id: 19,
    title: "Level Up Your Python Skills with These Fun Coding Games! 🎮🐍",
    description: "An article about amazing Python and coding games.",
    image: "/imgs/article19.png?height=200&width=300",
    link: "https://dev.to/hadil/level-up-your-python-skills-with-these-fun-coding-games-1no7"
  },
  {
    id: 18,
    title: "🧹 The Art of Writing Clean Code: Why It Matters and How to Do It",
    description: "An article about the importance of writing clean code.",
    image: "/imgs/article18.png?height=200&width=300",
    link: "https://dev.to/hadil/the-art-of-writing-clean-code-why-it-matters-and-how-to-do-it-6ll"
  },
  {
    id: 17,
    title: "🎯 The Art of Writing Awesome Commit Messages: Why It Matters and How to Nail It",
    description: "An article about the art of writing awesome commit messages.",
    image: "/imgs/article17.png?height=200&width=300",
    link: "https://dev.to/hadil/the-art-of-writing-awesome-commit-messages-why-it-matters-and-how-to-nail-it-3jm2"
  },
  {
    id: 16,
    title: "20 Must-Have VS Code Extensions for Web Developers 🚀💻",
    description: "An article about the best 20 VS Code extensions for web developers.",
    image: "/imgs/article16.jpg?height=200&width=300",
    link: "https://dev.to/hadil/20-must-have-vs-code-extensions-for-web-developers-5fg7"
  },
  {
    id: 15,
    title: "🕸️ MDN Web Docs: The Ultimate Developer's Toolbox 🌟",
    description: "An article about MDN Web Docs, the real treasure for every developer who's looking for a good source to learn.",
    image: "/imgs/article15.png?height=200&width=300",
    link: "https://dev.to/hadil/mdn-web-docs-the-ultimate-developers-toolbox-5b84"
  },
  {
    id: 14,
    title: "🚀 5 Essential Development Principles Every Coder Should Know",
    description: "An article about 5 Essential Development Principles Every Coder Should Know.",
    image: "/imgs/article14.jpg?height=200&width=300",
    link: "https://dev.to/hadil/5-essential-development-principles-every-coder-should-know-2m8m"
  },
  {
    id: 13,
    title: "20 Essential Tips for Full-Stack Developers: Level Up Your Skills! 🚀",
    description: "An article about 20 Essential Tips for Full-Stack Developers.",
    image: "/imgs/article13.jpeg?height=200&width=300",
    link: "https://dev.to/hadil/20-essential-tips-for-full-stack-developers-level-up-your-skills-4ehi"
  },
  {
    id: 12,
    title: "🚀 React.js vs. Next.js: The Ultimate Showdown! 💥",
    description: "A deep comparaison between React.js and Next.js, the two most popular JavaScript frameworks.",
    image: "/imgs/article12.png?height=200&width=300",
    link: "https://dev.to/hadil/reactjs-vs-nextjs-the-ultimate-showdown-432c"
  },
  {
    id: 11,
    title: "✈️ Plane: The Project Management Tool That'll Make You Say \"Oh, Ship!\" 🚀",
    description: "An article about Plane, the open-source project management tool.",
    image: "/imgs/article11.jpg?height=200&width=300",
    link: "https://dev.to/hadil/plane-the-project-management-tool-thatll-make-you-say-oh-ship-4512"
  },
  {
    id: 10,
    title: "🎨 shadcn: The Rebel Without a Cause in the UI Framework World 🚀",
    description: "An article about shadcn, the open-source UI framework.",
    image: "/imgs/article10.jpg?height=200&width=300",
    link: "https://dev.to/hadil/shadcn-the-rebel-without-a-cause-in-the-ui-framework-world-pm7"
  },
  {
    id: 9,
    title: "🚀 Git and GitHub: Your Ticket to Time Travel and Collaboration! 🕰️👥",
    description: "An article about Git and GitHub.",
    image: "/imgs/article9.png?height=200&width=300",
    link: "https://dev.to/hadil/git-and-github-your-ticket-to-time-travel-and-collaboration-kaj"
  },
  {
    id: 8,
    title: "🚀 The Ultimate Guide to DOs and DON'Ts for Software Developers 🛠️",
    description: "An article contains some important advices for software developers.",
    image: "/imgs/article8.jpg?height=200&width=300",
    link: "https://dev.to/hadil/the-ultimate-guide-to-dos-and-donts-for-software-developers-2o34"
  },
  {
    id: 7,
    title: "Notion: Your Digital Swiss Army Knife 🇨🇭🔪",
    description: "An article about Notion, the productivity and note-taking web application.",
    image: "/imgs/article7.png?height=200&width=300",
    link: "https://dev.to/hadil/notion-your-digital-swiss-army-knife-4407"
  },
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

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const handlePageChange = (newPage, event) => {
    if (event) {
      event.preventDefault();
    }
    setCurrentPage(newPage);
  };

  useEffect(() => {
    // Only scroll to the blog section if the URL contains "#blog"
    if (window.location.hash === '#blog') {
      const blogSection = document.getElementById('blog');
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [currentPage]);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const blogText = `Sharing knowledge through writing is a passion of mine, as it allows me to reflect on my learning journey and help others along the way. Below are some of my articles on programming, where I explore key concepts and trends.`;

  return (
    <section id="blog">
      <div className="container lg:my-24">
        <div className="flex flex-col items-center">
          <HyperOne value="Blog" />
          <p className="lg:text-2xl lg:text-center text-xl p-4 text-justify">
            {blogText}
          </p>
        </div>
        <div className="px-5 grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {visiblePosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            className="px-3 py-2 rounded border border-gray-300 dark:border-gray-600 disabled:opacity-50 cursor-custom"
            onClick={(e) => handlePageChange(currentPage - 1, e)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`px-3 py-2 rounded ${currentPage === page
                ? 'bg-[#0EA5E9] text-white'
                : 'border border-gray-300 dark:border-gray-600'
                }`}
              onClick={(e) => handlePageChange(page, e)}
            >
              {page}
            </button>
          ))}
          <button
            className="px-3 py-2 rounded border border-gray-300 dark:border-gray-600 disabled:opacity-50 cursor-custom"
            onClick={(e) => handlePageChange(currentPage + 1, e)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;