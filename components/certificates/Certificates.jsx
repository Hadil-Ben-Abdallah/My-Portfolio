// import HyperOne from '../customH1/HyperOne';

// const Certificates = () => {
//   return (
//     <div id="certificates" className="py-16">
//       <HyperOne value="Certificates" />
//       {/* <div className="my-12 grid lg:grid-cols-3 sm:grid-cols-1 m-5 md:grid-cols-2 gap-8">
//         {testimonialsData.map((testimonial) => (
//           <TestimonialCard key={testimonial.id} {...testimonial} />
//         ))}
//       </div> */}
//       <p className="text-center mt-2 lg:mx-32 lg:text-2xl sm:text-2xl">
//         Soon...
//       </p>
//     </div>
//   );
// };

// export default Certificates;



import React from 'react';
import HyperOne from '../customH1/HyperOne';

const Certificates = () => {
  // const certificates = [
  //   { id: 1, name: 'Certificate 1', image: '/api/placeholder/200/100' },
  //   { id: 2, name: 'Certificate 2', image: '/api/placeholder/200/100' },
  //   { id: 3, name: 'Certificate 3', image: '/api/placeholder/200/100' },
  //   { id: 4, name: 'Certificate 4', image: '/api/placeholder/200/100' },
  //   { id: 5, name: 'Certificate 5', image: '/api/placeholder/200/100' },
  // ];

  return (
    <div id="certificates" className="py-16">
      <HyperOne value="Certificates" />

      {/* can get the code in the bottom */}

      <p className="text-center mt-2 lg:mx-32 lg:text-2xl sm:text-2xl">
          Soon...
      </p>
    </div>
  );
};

export default Certificates;


{/* <div className="mt-8 overflow-hidden">
<div className="flex animate-scroll">
  {[...certificates, ...certificates].map((cert, index) => (
    <div key={`${cert.id}-${index}`} className="flex-shrink-0 w-64 mx-4">
      <img src={cert.image} alt={cert.name} className="w-full h-auto" />
      <p className="mt-2 text-center">{cert.name}</p>
    </div>
  ))}
</div>
</div> */}