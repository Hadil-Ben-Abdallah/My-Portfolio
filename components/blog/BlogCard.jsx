import Image from 'next/image';

const BlogCard = ({ post }) => {
  return (
    <div className="transform hover:rotate-2 hover:scale-105 transition-transform duration-300">
      <div className="border border-gray-300 rounded-lg overflow-hidden h-full flex flex-col">
        <div className="relative h-48 w-full">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4 flex-grow">
          <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{post.description}</p>
        </div>
        <div className="p-4 mt-auto">
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0EA5E9] font-bold hover:no-underline"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;




// import Image from 'next/image';

// const BlogCard = ({ post }) => {
//   return (
//     <div className="transform hover:rotate-2 hover:scale-105 transition-transform duration-300">
//       <div className="border border-gray-300 rounded-lg overflow-hidden h-full flex flex-col">
//         <div className="relative h-48 w-full">
//           <Image
//             src={post.image}
//             alt={post.title}
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>
//         <div className="p-4 flex-grow">
//           <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
//           <p className="text-gray-600 dark:text-gray-300">{post.description}</p>
//         </div>
//         <div className="p-4 mt-auto">
//           <a
//             href={post.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[#0EA5E9] font-bold hover:no-underline"
//           >
//             Read More
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;