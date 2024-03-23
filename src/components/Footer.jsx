import {
    CopyrightIcon,
  Facebook,
  GithubIcon,
  Instagram,
  Leaf,
  LeafIcon,
  LeafyGreen,
  Mail,
  Quote,
  Twitter,
  Youtube,
} from 'lucide-react';
import React from 'react';

export default function Footer(props) {
  return (
    <>
      <footer className="w-full bg-black border-white border-t pt-10  lg:px-36 md:px-20 px-10 xl:px-72  p-5 text-white min-h-20   shadow-xl">
        <div className="flex justify-center items-center flex-col">
          {/* links buttons */}
          <div className="flex justify-between items-center  gap-x-3 ">
            <Icon icon={<GithubIcon size={13}/>}/>
            <Icon icon={<Mail size={13}/>}/>
            <Icon icon={<Instagram size={13}/>}/>
            <Icon icon={<Twitter size={13}/>}/>
            <Icon icon={<Facebook size={13}/>}/>
            <Icon icon={<Youtube size={13}/>}/>
            
          </div>
          <Leaf  size={50} className='my-10 text-emerald-950'/>

          <div className="grid grid-cols-4 md:w-2/4 w-full  gap-x-10 underline text-xs font-semibold text-gray-700 ">

            <p className=" text-center ">Portfolio</p>
            <p className=" text-center ">Student Copyright</p>
            <p className=" text-center ">Plan of Worklog</p>
            <p className=" text-center ">Citations</p>
          </div>
          <div className="flex justify-between items-center text-[10px] font-bold text-gray-700 gap-x-3 mt-5">
          <CopyrightIcon size={10} />
          <p>2024</p>
          </div>

        </div>
      </footer>
    </>
  );
}

function Icon({icon}) {
  return (
    <>
      <a
        href="http://"
        className="w-10 h-10  font-extrabold rounded-xl flex justify-center items-center border border-white p-2"
      >
        {icon}
      </a>
    </>
  );
}

export function NotFooter(props) {
  return (
    <div>
      {/* <div class="custom-shape-divider-bottom-1711165709">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div> */}

      <footer className="w-full bg-black border-white border-t-2 t  lg:px-36 md:px-20 px-10 xl:px-72  p-5 text-white min-h-20   shadow-xl">
        <div className=" grid md:grid-cols-2 grid-cols-1 h-full p-5">
          {/* logo */}
          <div className="flex h-full md:justify-start justify-center items-center mb-10">
            <p className="text-5xl font-bold green-gradient pb-5">
              Green Energy
            </p>
          </div>

          {/* grid for all app links, socials, contact, etc. */}

          <div className="grid grid-cols-3 gap-x-20  pl-0 w-full">
            {/* links */}
            <div className="flex  items-center h-full flex-col px-5">
              <p className="font-bold text-xs">Links</p>
              <a
                href="https://github.com/rishithgandham/webmaster2024"
                className="flex items-center hover:bg-slate-50 transition-all mt-5 rounded-md py-1 px-2  ease-in-out hover:scale-110"
              >
                <GithubIcon size={13} />{' '}
                <p className="text-xs font-bold pl-3">Github</p>
              </a>
              <a
                href="/pdf/citations"
                className="flex items-center hover:bg-slate-50 transition-all mt-5 rounded-md py-1 px-2  ease-in-out hover:scale-110"
              >
                <Quote size={13} />
                <p className="text-xs font-bold pl-3">Citations</p>
              </a>
              <a
                href="mailto:greenenergy@gmail.com"
                className="flex items-center hover:bg-slate-50 transition-all mt-5 rounded-md py-1 px-2  ease-in-out hover:scale-110"
              >
                <Mail size={13} />
                <p className="text-xs font-bold pl-3">Contact Us</p>
              </a>
            </div>
            {/* end links */}

            {/* socials */}
            <div className="flex  items-center h-full flex-col px-5">
              <p className="font-bold text-xs">Socials</p>
              <a
                href="https://github.com/rishithgandham/webmaster2024"
                className="flex items-center hover:bg-slate-50 transition-all mt-5 rounded-md py-1 px-2  ease-in-out hover:scale-110"
              >
                <Instagram size={13} />{' '}
                <p className="text-xs font-bold pl-3">Instagram</p>
              </a>
              <a
                href="/pdf/citations"
                className="flex items-center hover:bg-slate-50 transition-all mt-5 rounded-md py-1 px-2  ease-in-out hover:scale-110"
              >
                <Twitter size={13} />
                <p className="text-xs font-bold pl-3">Twitter</p>
              </a>
              <a
                href="mailto:greenenergy@gmail.com"
                className="flex items-center hover:bg-slate-50 transition-all mt-5 rounded-md py-1 px-2  ease-in-out hover:scale-110"
              >
                <Facebook size={13} />
                <p className="text-xs font-bold pl-3">Facebook</p>
              </a>
              <a
                href="mailto:greenenergy@gmail.com"
                className="flex items-center hover:bg-slate-50 transition-all mt-5 rounded-md py-1 px-2  ease-in-out hover:scale-110"
              >
                <Youtube size={13} />
                <p className="text-xs font-bold pl-3">Youtube</p>
              </a>
            </div>
            {/* end socials */}

            {/* socials */}
            <div className="flex  items-center h-full flex-col px-5">
              <p className="font-bold text-xs text-center mb-3">
                Documents (TSA)
              </p>
              <a
                href="https://github.com/rishithgandham/webmaster2024"
                className="flex items-center hover:bg-slate-50 transition-all  rounded-md py-1 px-2  ease-in-out hover:scale-110"
              >
                <p className="text-xs font-bold  underline text-center">
                  Plan of Work Log
                </p>
              </a>
              <a
                href="/pdf/citations"
                className="flex items-center hover:bg-slate-50 transition-all  rounded-md py-1 px-2  ease-in-out hover:scale-110"
              >
                <p className="text-xs font-bold   underline text-center">
                  Student Copy Right Checklist
                </p>
              </a>
              <a
                href="mailto:greenenergy@gmail.com"
                className="flex items-center hover:bg-slate-50 transition-all mt-5 rounded-md py-1 px-2  ease-in-out hover:scale-110"
              >
                <p className="text-xs font-bold pl-3 underline text-center">
                  Portfolio
                </p>
              </a>
            </div>
            {/* end socials */}
          </div>
        </div>
      </footer>
    </div>
  );
}
