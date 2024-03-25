import { motion } from 'framer-motion';
import React from 'react';



const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

export default function References(props) {
  return (
    <>
      <main className="  h-full  w-full bg-gradient-to-b from-black   to-emerald-950 to-100% text-white ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="flex flex-col w-full h-full lg:px-40 md:px-16 px-5 xl:px-40  pt-44 "
        >

            <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
                <div className="col-start-1 row-start-1 flex flex-col items-center">
                  <p className="text-center font-bold text-2xl">Citations</p>
                  <p className="text-center font-bold text-xl mt-10">TBA after run off</p>

                
                </div>
                <div className="col-start-2 row-start-1 flex flex-col  items-center">
                  <p className="text-center font-bold text-2xl">Student Copyright</p>
                  <p className="text-center font-bold text-xl mt-10">TBA after run off</p>

                
                </div>
                <div className="col-start-1 row-start-2 flex flex-col  items-center">
                  <p className="text-center font-bold text-2xl">Plan of Work Log</p>
                  <p className="text-center font-bold text-xl mt-10">TBA after run off</p>

                
                </div>

            </div>

            <div className="md:text-2xl text-xl text-center font-bold lg:px-72 mb-20">This website was programmed entirely by our team using the javascript framework react and css styling library tailwind, view <span><a href="https://github.com/rishithgandham/webmaster2024" className='underline'>source code</a></span> here.</div>

        </motion.div>
      </main>
    </>
  );
}
