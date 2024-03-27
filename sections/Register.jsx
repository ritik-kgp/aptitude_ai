"use client";

const Register = () => {
  return (
    <>
      <div
        className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-slate-900 p-[2px] cursor-pointer
      animate-bounce"
        // onClick={handleGetStartedClick}
      >
        <div
          className= "flex justify-center items-center flex-col bg-gradient-to-r from-violet-500 via-blue-300 to-blue-600 w-[100%] h-[100%] rounded-full"
        >
          <div className="flex justify-center items-center flex-row">
            <p className="font-medium text-[18px] leading-[23.4px]">
              <span className="text-slate-900">Get</span>
            </p>
            <img
              src="/arrow-up.svg"
              alt="arrow-up"
              className="w-[23px] h-[23px] object-contain"
            />
          </div>

          <p className="font-medium text-[18px] leading-[23.4px]">
            <span className="text-slate-900">Started</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;


// import { useEffect, useState } from 'react';

// const Register = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     let lastScrollY = window.scrollY;

//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setIsVisible(currentScrollY !== lastScrollY);
//       setScrollY(currentScrollY);
//       lastScrollY = currentScrollY;
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Wavy motion parameters
//   const waveAmplitude = 700; // Adjust for horizontal movement range
//   const waveFrequency = 0.003; // Adjust for the frequency of the waves

//   // Calculate horizontal offset
//   const horizontalOffset = Math.sin(scrollY * waveFrequency) * waveAmplitude;

//   // Conditional styles for visibility
//   const visibilityStyle = isVisible ? {} : { display: 'none' };

//   return (
//     <>
//       <div
//         style={{
//           ...visibilityStyle,
//           transform: `translateX(${horizontalOffset}px)`
//         }}
//         className="fixed top-[75%] left-[80%] translate-x-[-50%] z-10"
//       >
//         <div
//           className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-slate-900 p-[2px] cursor-pointer"
//         >
//           <div className="flex justify-center items-center flex-col bg-gradient-to-r from-violet-500 via-blue-300 to-blue-600 w-[100%] h-[100%] rounded-full">
//             <div className="flex justify-center items-center flex-row">
//               <p className="font-medium text-[18px] leading-[23.4px]">
//                 <span className="text-slate-900">Get</span>
//               </p>
//               <img
//                 src="/arrow-up.svg"
//                 alt="arrow-up"
//                 className="w-[23px] h-[23px] object-contain"
//               />
//             </div>
//             <p className="font-medium text-[18px] leading-[23.4px]">
//               <span className="text-slate-900">Started</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;

