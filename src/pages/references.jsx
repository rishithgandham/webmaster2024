import { motion } from "framer-motion";
import React from "react";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function References(props) {
  return (
    <>
      <main className="  min-h-screen  w-full bg-gradient-to-b from-black   to-emerald-950 to-100% text-white ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="flex flex-col w-full h-full lg:px-32 md:px-32 px-5 xl:px-40 2xl:px-60  pt-44 "
        >
          <div className="text-center">
            <p className="text-3xl font-bold">Webmaster 2024</p>
            <p className="text-lg font-bold">TSA States - Hampton Virginia</p>
            <p className="text-lg font-bold">Team ID: 21648-1</p>
          </div>
          <div className="grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 w-full h-full">
            <div className="lg:col-start-1 lg:row-start-1 mt-10 col-span-1 flex flex-col items-center ">
              <p className="text-center font-bold text-2xl">Works Cited</p>
              <a
                href="/pdf/citations.pdf"
                target="_blank"
                className="flex justify-center"
              >
                <img
                  src="/images/citations_image.png"
                  className="w-5/12 rounded-xl mt-5 aspect-auto  hover:scale-[102%] transition-all ease-in-out"
                  alt=""
                />
              </a>
            </div>
            <div className="lg:col-start-1 lg:row-start-2  mt-10 col-span-1 flex flex-col items-center ">
              <p className="text-center font-bold text-2xl">Plan of work log</p>
              <a
                href="/pdf/plan.pdf"
                target="_blank"
                className="flex justify-center"
              >
                <img
                  src="/images/plan.png"
                  className="w-5/12 rounded-xl mt-5 aspect-auto  hover:scale-[102%] transition-all ease-in-out"
                  alt=""
                />
              </a>
            </div>
            <div className="lg:col-start-2 lg:row-start-1 mt-10 col-span-1 flex flex-col items-center ">
              <p className="text-center font-bold text-2xl">
                Student Copyright
              </p>
              <a
                href="/pdf/student-copyright-checklist.pdf"
                target="_blank"
                className="flex justify-center"
              >
                <img
                  src="/images/student.png"
                  className="w-5/12 rounded-xl mt-5 aspect-auto  hover:scale-[102%] transition-all ease-in-out"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="md:text-2xl text-xl text-center font-bold lg:px-72 mt-20 mb-20">
            This website was programmed entirely by our team using the
            javascript framework react and css styling library tailwind, view{" "}
            <span>
              <a
                href="https://github.com/rishithgandham/webmaster2024"
                className="underline"
              >
                source code
              </a>
            </span>{" "}
            here.
          </div>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3975856365207951"
            crossorigin="anonymous"
          ></script>
        </motion.div>
      </main>
    </>
  );
}
