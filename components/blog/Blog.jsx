'use client';

import { useState } from 'react';
import HyperOne from '../customH1/HyperOne';
import BlogCard from './BlogCard';
import React, { useEffect } from 'react';

const blogPosts = [
  {
    id: 31,
    title: 'Discover 5 Hidden Chrome DevTools Features for QA 🕵️‍♂️🔧',
    description:
      'This article provides insights into hidden Chrome DevTools features every QA should know.',
    image: '/imgs/article19.png?height=200&width=300',
    link: 'https://www.linkedin.com/pulse/5-hidden-chrome-devtools-features-every-qasdet-must-know-chotaliya-yizof/',
  },
  {
    id: 30,
    title: 'Write Effective Commit Messages for QA Engineers 📝🔧',
    description:
      'This article provides tips on writing effective commit messages for QA engineers.',
    image: '/imgs/article19.png?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/commit-messages-for-qa-engineers',
  },
  {
    id: 29,
    title: 'Enhance QA with Responsively App for Responsive Testing 📱🔍',
    description:
      'This article recommends using Responsively App for QA responsive testing.',
    image: '/imgs/article19.png?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/responsively-app-for-qa-responsive-testing',
  },
  {
    id: 28,
    title: 'Craft the Perfect Tech Resume 📝💼',
    description:
      'This article provides tips on creating an outstanding tech resume.',
    image: '/imgs/article19.png?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/craft-perfect-tech-resume',
  },
  {
    id: 27,
    title: 'Master Test Data Generation Tools for QA Testing 🛠️🔍',
    description:
      'This article provides tips and plugins for mastering test data generation.',
    image: '/imgs/article19.png?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/mastering-test-data-generation-tools-tips-plugins-for-qa-testing',
  },
  {
    id: 26,
    title: '🧠 Understand Behavior Driven Development (BDD)',
    description:
      'This article provides an overview of Behavior Driven Development (BDD).',
    image: '/imgs/article19.png?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/what-is-behavior-driven-development-bdd',
  },
  {
    id: 25,
    title: '📧 Automate Email Reports for Failures Effortlessly ⚙️',
    description:
      'This article covers how to send email reports for automation failures.',
    image: '/imgs/article19.png?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/send-email-report-automation-failures',
  },
  {
    id: 24,
    title: '📋 Enhance Console Logging: Global Log Wrapper in WebdriverIO',
    description:
      'An article about enhancing console logging with a global log wrapper in WebdriverIO.',
    image: '/imgs/article19.png?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/enhance-console-logging-global-log-wrapper-webdriverio',
  },
  {
    id: 23,
    title:
      '🔧 WebdriverIO Configuration Guide: Setting Up Your Test Automation Framework',
    description:
      'An article about configuring WebdriverIO for your test automation framework.',
    image: '/imgs/article19.png?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/webdriverio-configuration-guide-setting-up-your-test-automation-framework',
  },
  {
    id: 22,
    title: '🛠️ The Ultimate Toolset for Becoming a Top 1% SDET',
    description:
      'An article about essential tools for developing a test automation framework.',
    image: '/imgs/article19.png?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/the-ultimate-toolset-for-becoming-a-top-1-sdet-must-have-tools-before-developing-a-test-automation-framework',
  },
  {
    id: 21,
    title: '🚀 WebdriverIO v9: Features & Updates 2024',
    description:
      'An article about the new features and updates in WebdriverIO v9 for 2024.',
    image: '/imgs/article19.png?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/webdriverio-v9-features-updates-2024',
  },
  {
    id: 20,
    title: '🌐 WebDriver BiDi: Browser Automation Protocol Guide',
    description:
      'An article about using the WebDriver BiDi protocol for browser automation.',
    image: '/imgs/article19.png?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/webdriver-bidi-browser-automation-protocol-guide',
  },
  {
    id: 19,
    title: '🛒 Image Testing & Optimization: E-commerce Guide',
    description:
      'An article about optimizing and testing images for e-commerce platforms.',
    image: '/imgs/article19.png?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/image-testing-optimization-ecommerce-guide',
  },
  {
    id: 18,
    title: '🌐 Mastering Browser Architecture for QA Testers',
    description:
      'An article about understanding and mastering browser architecture for QA testers.',
    image: '/imgs/article18.png?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/mastering-browser-architecture-for-qa-testers',
  },
  {
    id: 17,
    title: '📈 Load & Performance Testing: Gatling Recorder Guide',
    description:
      'An article about using Gatling Recorder for load and performance testing.',
    image: '/imgs/article17.png?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/load-performance-testing-gatling-recorder-guide',
  },
  {
    id: 16,
    title: '💻 Install Gatling on Mac: VS Code & Scala Guide',
    description:
      'An article about installing Gatling on Mac using VS Code and Scala.',
    image: '/imgs/article16.jpg?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/install-gatling-mac-vs-code-scala-guide',
  },
  {
    id: 15,
    title: '🔐 Automate Basic Authentication Popups: WebdriverIO Guide',
    description:
      'An article about automating basic authentication popups using WebdriverIO.',
    image: '/imgs/article15.png?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/automate-basic-authentication-popups-webdriverio-guide',
  },
  {
    id: 14,
    title: '🖼️ WebdriverIO Image Validation: Automate Broken Images',
    description:
      'An article about automating image validation and detecting broken images using WebdriverIO.',
    image: '/imgs/article14.jpg?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/webdriverio-image-validation-automate-broken-images',
  },
  {
    id: 13,
    title: '🚀 Performance Testing with WebdriverIO: A Guide',
    description: 'An article about performance testing using WebdriverIO.',
    image: '/imgs/article13.jpeg?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/performance-testing-webdriverio-guide',
  },
  {
    id: 12,
    title: '📅 QA Lead Daily Tasks: Ensuring Software Quality',
    description:
      'An article about the daily tasks of a QA lead to ensure software quality.',
    image: '/imgs/article12.png?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/qa-lead-daily-tasks-software-quality',
  },
  {
    id: 11,
    title:
      '🔀 The Ultimate Guide to Naming Git Branches: Best Practices and Tips',
    description:
      'An article about best practices and tips for naming Git branches.',
    image: '/imgs/article11.jpg?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/the-ultimate-guide-to-naming-git-branches-best-practices-and-tips',
  },
  {
    id: 10,
    title:
      '🌐 How to Set Up a World Object: Seamlessly Exchange Data Between Steps in WebdriverIO TypeScript Cucumber Automation Framework',
    description:
      'An article about setting up a World object to exchange data between steps in WebdriverIO TypeScript Cucumber frameworks.',
    image: '/imgs/article10.jpg?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/how-to-set-up-a-world-object-seamlessly-exchange-data-between-steps-in-webdriverio-typescript-cucumber-automation-framework',
  },
  {
    id: 9,
    title:
      '🔍 Understanding the Difference Between Data Tables and Scenario Outlines in BDD Framework',
    description:
      'An article about the differences between data tables and scenario outlines in BDD frameworks.',
    image: '/imgs/article9.png?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/understanding-the-difference-between-data-tables-and-scenario-outlines-in-bdd-framework',
  },
  {
    id: 8,
    title:
      '🔧 Setting Up a .env Environment File for WebdriverIO TypeScript Framework',
    description:
      'An article about setting up a .env environment file in WebdriverIO TypeScript frameworks.',
    image: '/imgs/article8.jpg?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/setting-up-a-env-environment-file-for-webdriverio-typescript-framework',
  },
  {
    id: 7,
    title:
      '📋 A Complete Guide to Setting Up Logging in WebdriverIO Frameworks',
    description:
      'An article about setting up effective logging in WebdriverIO frameworks.',
    image: '/imgs/article7.png?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/a-complete-guide-to-setting-up-logging-in-webdriverio-frameworks',
  },
  {
    id: 6,
    title: '🐞 Efficient Bug Tracking in Jira: A Guide',
    description: 'An article about efficient bug tracking practices in Jira.',
    image: '/imgs/article6.jpg?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/efficient-bug-tracking-in-jira-guide',
  },
  {
    id: 5,
    title: '🧹 Automation Testing Best Practices: Clean Code',
    description:
      'An article about best practices for writing clean code in automation testing.',
    image: '/imgs/article5.png?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/automation-testing-best-practices-clean-code',
  },
  {
    id: 4,
    title: '📝 Test Case Naming Convention for Automation Frameworks',
    description:
      'An article about effective test case naming conventions for automation frameworks.',
    image: '/imgs/article4.jpg?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/test-case-naming-convention-for-automation-frameworks',
  },
  {
    id: 3,
    title:
      '🎭 Unleashing the Power of BDD: Writing Effective Scenarios Beyond the UI',
    description:
      'An article about writing effective BDD scenarios beyond the UI.',
    image: '/imgs/article3.jpeg?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/unleashing-the-power-of-bdd-writing-effective-scenarios-beyond-the-ui',
  },
  {
    id: 2,
    title: '🛠️ QA Automation: Challenges and Solutions',
    description:
      'An article about common QA automation challenges and solutions.',
    image: '/imgs/article2.png?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/qa-automation-challenges-and-solutions',
  },
  {
    id: 1,
    title: '🔀 WebdriverIO v7 to v8 Migration Guide',
    description: 'A guide to transitioning from WebdriverIO v7 to v8.',
    image: '/imgs/article1.png?height=200&width=300',
    link: 'https://hardikchotaliya.hashnode.dev/webdriverio-v7-to-v8-migration-guide',
  },
];

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
              className={`px-3 py-2 rounded ${
                currentPage === page
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
