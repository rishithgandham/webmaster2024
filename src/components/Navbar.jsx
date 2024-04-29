import { Menu, Transition } from '@headlessui/react';
import {
  CalculatorIcon,
  ChevronDownIcon,
  ChevronFirst,
  ChevronLast,
  ChevronUp,
  CloudLightning,
  Earth,
  File,
  Home,
  HomeIcon,
  Leaf,
  PanelBottom,
  PanelBottomCloseIcon,
  QuoteIcon,
  SquareMenu,
  Wind,
  Zap,
} from 'lucide-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function EnergyMenu(props) {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex w-full justify-between gap-x-2 items-center rounded-md  px-4 py-2 text-sm font-medium text-white hover:bg-gray-950 ">
            <Zap className=" text-violet-200 hover:text-violet-100" size={20} />

            <ChevronDownIcon size={18} />
          </Menu.Button>
        </div>

        <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ">
          <div className="px-1 py-1 ">
            <Menu.Item>
              <Link
                to="/solar"
                className={`text-black hover:bg-gray-300 group flex justify-between w-full h-full items-center rounded-md px-2 py-2 text-xs font-bold`}
              >
                Solar
                <SquareMenu size={13} />
              </Link>
            </Menu.Item>
          </div>
          <div className="px-1 py-1 ">
            <Menu.Item>
              <Link
                to="/wind"
                className={`text-black hover:bg-gray-300 group flex justify-between w-full h-full items-center rounded-md px-2 py-2 text-xs font-bold`}
              >
                Wind
                <Wind size={13} />
              </Link>
            </Menu.Item>
          </div>
          <div className="px-1 py-1 ">
            <Menu.Item>
              <Link
                to="/geothermal"
                className={`text-black hover:bg-gray-300 group flex justify-between w-full h-full items-center rounded-md px-2 py-2 text-xs font-bold`}
              >
                Geothermal
                <Earth size={13} />
              </Link>
            </Menu.Item>
          </div>
          <div className="px-1 py-1 ">
            <Menu.Item>
              <Link
                to="/calculator"
                className={`text-black hover:bg-gray-300 group flex justify-between w-full h-full items-center rounded-md px-2 py-2 text-xs font-bold`}
              >
                Solar Calculator
                <CalculatorIcon size={13} />
              </Link>
            </Menu.Item>
          </div>
          
        </Menu.Items>
      </Menu>
    </>
  );
}

export default function Navbar() {
  return (
    <>
      <nav className="min-h-14  flex justify-between border-b-0 items-center md:px-10 bg-black text-white px-5">
        <div className="w-1/3 md:block hidden">
          <Link to="/" className={`text-sm font-bold  text-emerald-950`}>
            <Leaf size={35} />
          </Link>
        </div>
        <div className="flex p-2 items-center md:justify-end justify-center md:w-1/3 w-full bg-transparent ">
          <NavbarLink
            href="/"
            name="Home"
            icon={<HomeIcon size={18} />}
          />
          
          <NavbarLink
            href="/references"
            name="References"
            icon={<QuoteIcon size={18} />}
          />
          
          <EnergyMenu />

          {/* dropdown */}
          {/* <NavbarLink href="/tsa" name="TSA" icon={<File size={18}/>} /> */}
        </div>
      </nav>
    </>
  );
}

function NavbarLink({ icon, href, name }) {
  return (
    <Link
      to={href}
      className="flex py-2   rounded-md px-4 items-center transition-all ease-in-out  m-5 hover:bg-gray-950    xl:mx-10"
    >
      {<p className="mr-3">{icon}</p>}
      <p className="font-semibold md:block hidden text-xs">{name}</p>
    </Link>
  );
}

// export default function Navbar(props) {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <nav
//         className={`w-screen  fixed float-start top-0 left-0 flex flex-col bg-[#131313]  shadow-md`}
//       >

//         {/* open/close panel */}
//         <div className={`p-4  flex ${open ? "justify-start" : "justify-center"} hover:scale-[102%] transition-all ease-in-out items-center`}>
//           <button
//             onClick={() => setOpen(prev => !prev)}
//             className="p-1.5 hover:scale-[102%] rounded-lg text-white hover:bg-gray-950"
//           >
//             {open ? <ChevronFirst /> : <ChevronLast />}
//           </button>
//         </div>

//         {/* sidebar content */}
//         <div className="p-4 pb-10 h-full flex flex-col justify-end items-center gap-y-10 text-white">
//           <SidebarButton
//             open={open}
//             name="Solar"
//             link="/solar"
//             icon={<SquareMenu size={20} />}
//           />
//           <SidebarButton
//             open={open}
//             name="Wind"
//             link="/wind"
//             icon={<Wind size={20} />}
//           />
//           <SidebarButton
//             open={open}
//             name="Geothermal"
//             link="/geothermal"
//             icon={<Earth size={20} />}
//           />
//         </div>
//       </nav>
//     </>
//   );
// }

// const SidebarButton = ({ icon, link, open, name }) => {
//   const navigate = useNavigate();
//   return (
//     <>
//       {open ? (
//         // sidebar button if opened
//         <button
//           onClick={() => navigate(link)}
//           className="flex justify-between items-center hover:scale-[102%] transition-all ease-in-out w-full h-12 px-8  hover:bg-gray-950 text-white rounded-lg"
//         >
//           <div>{icon}</div>
//           <div className='text-xs font-semibold'>{name}</div>
//         </button>
//       ) : (
//         // sidebar button if closed
//         <button
//           onClick={() => navigate(link)}
//           className="flex justify-center items-center hover:scale-[102%] transition-all ease-in-out w-12 h-12  hover:bg-gray-950 text-white rounded-lg"
//         >
//           {icon}
//         </button>
//       )}
//     </>
//   );
// };
