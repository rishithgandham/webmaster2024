import logo from './logo.svg';
import './App.css'
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <main className=" min-h-screen  h-full w-full bg-gradient-to-b from-black to-slate-950 text-white ">
        <div className="flex justify-center flex-col w-full h-full lg:px-36 md:px-20 px-10 xl:px-72  ">
          <p className="text-5xl font-bold green-gradient pb-5">Green Energy</p>
          <p className="text-lg  font-bold">
            TSA WEBMASTER 2024 - Hampton, Virginia
          </p>
          <div className=" mt-5 sm:flex hidden">
            <div className="relative rounded-full  text-xs leading-6 ring-1 ring-white py-[2px] px-4 hover:scale-[102%] transition-all ease-in-out ">
              Announcing our solar energy calculator{' '}
              <a href="#" className={`font-semibold green-gradient`}>
                <span className="absolute inset-0" aria-hidden="true" />
                Try it out! <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <EnergyTypes/>
      </>
  );
}


function EnergyTypes() {
  return (
    <main className=" min-h-screen  w-full bg-gradient-to-b from-slate-950 to-black text-white ">
      <div className="grid grid-cols-1 py-10 gap-4  lg:grid-cols-2 xl:grid-cols-4 w-full min-h-screen  px-10">
        {energy_types.map((e, i) => (
          <>
            <div
              // href={e.link}
              className={`grid rounded-md shadow-xl h-screen  grid-rows-2 p-10  group transition-all ease-in-out hover:scale-x-[102%] border border-white`}
            >
              <div className="flex items-end justify-center">
                <p className="text-3xl font-bold text-center ">{e.name}</p>
              </div>
              <div className="  mb-2 hidden group-hover:flex items-start justify-center">
                <Link to={e.link} className="  text-sm mt-3 border  border-white px-5 py-2 hover:bg-opacity-45 hover:bg-white  transition-all ease-in-out">
                  Learn More
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </main>
  );
}

let energy_types = [
  {
    name: 'Solar Energy',
    img_class: 'solar',
    link: '/solar',
  },
  {
    name: 'Wind Energy',
    img_class: 'wind',
    link: '#',
  },
  {
    name: 'Geothermal Energy',
    img_class: 'geothermal',
    link: '#',
  },
];


export default App;
