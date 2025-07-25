'use client'

import { useState, useEffect } from 'react';
import HyperOne from '../customH1/HyperOne';
import BlogCard from './BlogCard';

const blogPosts = [
  {
    id: 46,
    title: "🚀 5 VSCode Extensions That Will Make You Actually Enjoy Coding Again 🎉",
    description: "An article about 5 VSCode extensions that will make you enjoy coding with your new friends.",
    image: "/imgs/article46.png?height=200&width=300",
    link: "https://dev.to/hadil/5-vscode-extensions-that-will-make-you-actually-enjoy-coding-again-372n"
  },
  {
    id: 45,
    title: "🎯 How to Structure the Perfect Answer for “Tell Me About Yourself” in 2025 Interviews 🗣️",
    description: "An article about the perfect answer for “Tell Me About Yourself” in 2025 Interviews.",
    image: "/imgs/article45.png?height=200&width=300",
    link: "https://dev.to/finalroundai/how-to-structure-the-perfect-answer-for-tell-me-about-yourself-in-2025-interviews-270o"
  },
  {
    id: 44,
    title: "🎯 Top 30 Behavioral Interview Questions That Can Make or Break Your Interview 🔥",
    description: "An article about 30 Behavioral Interview Questions That Can Make or Break Your Interview.",
    image: "/imgs/article44.png?height=200&width=300",
    link: "https://dev.to/finalroundai/top-30-behavioral-interview-questions-that-can-make-or-break-your-interview-4elm"
  },
  {
    id: 43,
    title: "💻 If You Can’t Answer These 40 Next.js Questions, You’re Not Ready for 2025 Interviews ⚠️",
    description: "An article about 40 Next.js Interview Questions you Should Prepare in 2025.",
    image: "/imgs/article43.png?height=200&width=300",
    link: "https://dev.to/finalroundai/if-you-cant-answer-these-40-nextjs-questions-youre-not-ready-for-2025-interviews-1lfd"
  },
  {
    id: 42,
    title: "💻 40 Full-Stack Interview Questions Every Developer Should Prepare in 2025 🔥",
    description: "An article about 40 Full-Stack Interview Questions you Should Prepare in 2025.",
    image: "/imgs/article42.png?height=200&width=300",
    link: "https://dev.to/finalroundai/40-full-stack-interview-questions-every-developer-should-prepare-in-2025-2cdo"
  },
  {
    id: 41,
    title: "🚀 30 DSA Patterns You Need to Master Before Your Next Interview in 2025 🔥",
    description: "An article about 30 DSA Patterns You Need to Master Before Your Next Interview in 2025.",
    image: "/imgs/article41.png?height=200&width=300",
    link: "https://dev.to/finalroundai/30-dsa-patterns-you-need-to-master-before-your-next-interview-in-2025-1gcp"
  },
  {
    id: 40,
    title: "💻 40 JavaScript Interview Questions Every Frontend Developer Should Prepare in 2025 🔥",
    description: "An article about 40 JavaScript Interview Questions you Should Prepare in 2025.",
    image: "/imgs/article40.png?height=200&width=300",
    link: "https://dev.to/finalroundai/40-javascript-interview-questions-every-frontend-developer-should-prepare-in-2025-eal"
  },
  {
    id: 39,
    title: "🧠 40 System Design Questions That Could Land You a $150K Job in 2025 💰",
    description: "An article about 40 System Design Questions That Could Land You a $150K Job in 2025.",
    image: "/imgs/article39.png?height=200&width=300",
    link: "https://dev.to/finalroundai/40-system-design-questions-that-can-land-you-a-150k-job-in-2025-18j2"
  },
  {
    id: 38,
    title: "🐍 40 Python Interview Questions for 2025 — How Many Can You Answer? 🎯",
    description: "An article about 40 Python Interview Questions for 2025.",
    image: "/imgs/article38.png?height=200&width=300",
    link: "https://dev.to/finalroundai/40-python-interview-questions-for-2025-how-many-can-you-answer-9k6"
  },
  {
    id: 37,
    title: "🚀 40 React Interview Questions Top Tech Companies Are Asking in 2025 🔥",
    description: "An article about 40 React Interview Questions Top Tech Companies Are Asking in 2025.",
    image: "/imgs/article37.png?height=200&width=300",
    link: "https://dev.to/finalroundai/40-react-interview-questions-top-tech-companies-are-asking-in-2025-26op"
  },
  {
    id: 36,
    title: "💻 40 Web Developer Questions Recruiters Actually Ask in 2025 🔥",
    description: "An article about 40 Web Developer Interview Questions With Smart Answers.",
    image: "/imgs/article36.png?height=200&width=300",
    link: "https://dev.to/finalroundai/40-web-developer-questions-recruiters-actually-ask-in-2025-aaf"
  },
  {
    id: 35,
    title: "Web3 Gaming and the Metaverse: The Future of Play and Ownership🎮",
    description: "An article about Web3 Gaming and the Metaverse.",
    image: "/imgs/article35.png?height=200&width=300",
    link: "https://dev.to/hadil/web3-gaming-and-the-metaverse-the-future-of-play-and-ownership-amb"
  },
  {
    id: 34,
    title: "15 Skills Every Software Engineer Should Have in 2025 🚀",
    description: "An article about 15 Skills Every Software Engineer Should Have in 2025.",
    image: "/imgs/article34.png?height=200&width=300",
    link: "https://dev.to/hadil/15-skills-every-software-engineer-should-have-in-2025-47ph"
  },
  {
    id: 33,
    title: "RESTful vs. GraphQL: Which One Should You Choose? 🤔",
    description: "An article about RESTful vs. GraphQL and their differences.",
    image: "/imgs/article33.png?height=200&width=300",
    link: "https://dev.to/hadil/restful-vs-graphql-which-one-should-you-choose-2850"
  },
  {
    id: 32,
    title: "Top 10 JavaScript Animation Libraries in 2025 🔥",
    description: "An article about the best 10 JavaScript animation libraries.",
    image: "/imgs/article32.jpg?height=200&width=300",
    link: "https://dev.to/hadil/top-10-javascript-animation-libraries-in-2025-2ch5"
  },
  {
    id: 31,
    title: "AI in Web3: A Complete Guide to Decentralized Intelligence 🚀",
    description: "An article about AI in Web3. The future of decentralized intelligence.",
    image: "/imgs/article31.png?height=200&width=300",
    link: "https://dev.to/hadil/ai-in-web3-a-complete-guide-to-decentralized-intelligence-4pp1"
  },
  {
    id: 30,
    title: "15 Must-Have Chrome Extensions for Web Developers in 2025 🔥",
    description: "An article about the best 15 Chrome extensions for web developers.",
    image: "/imgs/article30.png?height=200&width=300",
    link: "https://dev.to/favtutor/15-must-have-chrome-extensions-for-web-developers-in-2025-88i"
  },
  {
    id: 29,
    title: "How to Structure a React App Like a Pro 🔥",
    description: "An article about how to structure a React app like a pro.",
    image: "/imgs/article29.png?height=200&width=300",
    link: "https://dev.to/hadil/how-to-structure-a-react-app-like-a-pro-20b9"
  },
  {
    id: 28,
    title: "15 Delightful Clean Code Rules That Will Make Your Code Sparkle ✨",
    description: "An article about 15 Delightful Clean Code Rules That Will Make Your Code Sparkle.",
    image: "/imgs/article28.png?height=200&width=300",
    link: "https://dev.to/hadil/15-delightful-clean-code-rules-that-will-make-your-code-sparkle-30g7"
  },
  {
    id: 27,
    title: "🦊 React-Fox-Toast: A Silent but Powerful Presence in Your UI",
    description: "An article about React-Fox-Toast, a lightweight and silent React component for creating toast notifications.",
    image: "/imgs/article27.png?height=200&width=300",
    link: "https://dev.to/hadil/react-fox-toast-a-silent-but-powerful-presence-in-your-ui-4k9c"
  },
  {
    id: 26,
    title: "How to Run DeepSeek Locally: A Simple Guide to Your Personal AI 🐋",
    description: "An article about how to run DeepSeek locally.",
    image: "/imgs/article26.jpeg?height=200&width=300",
    link: "https://dev.to/hadil/how-to-run-deepseek-locally-a-simple-guide-to-your-personal-ai-5613"
  },
  {
    id: 25,
    title: "10 No-Code Tools for Developers in 2025 (with Best Use Cases) 🔥",
    description: "An article about the best no-code tools for developers.",
    image: "/imgs/article25.png?height=200&width=300",
    link: "https://dev.to/favtutor/10-no-code-tools-for-developers-in-2025-with-best-use-cases-26lk"
  },
  {
    id: 24,
    title: "🚀 The Ultimate List of 27 Frontend Libraries for Creative Developers",
    description: "An article about the best frontend libraries for creative developers.",
    image: "/imgs/article24.png?height=200&width=300",
    link: "https://dev.to/hadil/the-ultimate-list-of-27-frontend-libraries-for-creative-developers-15go"
  },
  {
    id: 23,
    title: "How to Become a Monster Problem Solver: The Ultimate Guide 👹",
    description: "An article about how to think like a problem solver.",
    image: "/imgs/article23.png?height=200&width=300",
    link: "https://dev.to/hadil/how-to-become-a-monster-problem-solver-the-ultimate-guide-4o38"
  },
  {
    id: 22,
    title: "Exploring Better Alternatives to console.log in JavaScript 🚀✨",
    description: "An article about better alternatives to console.log in JavaScript.",
    image: "/imgs/article22.png?height=200&width=300",
    link: "https://dev.to/hadil/exploring-better-alternatives-to-consolelog-in-javascript-497e"
  },
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

    // Scroll to the top of the blog section
    const blogSection = document.getElementById('blog');
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
  const endIndex = startIndex + POSTS_PER_PAGE;
  const visiblePosts = blogPosts.slice(startIndex, endIndex);

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