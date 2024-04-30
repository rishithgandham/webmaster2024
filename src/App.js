import './App.css';
import { Link } from 'react-router-dom';
import EnergyQuiz from './components/EnergyQuiz';
import { motion } from 'framer-motion';

function App() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <>
      <main className="h-screen  w-full border-t-0  bg-black text-white landing">
        <motion.div
          className="h-full flex justify-center flex-col  items-center "
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <p className="text-5xl font-bold green-gradient pb-5">Evergreen</p>
          <p
            className={`text-2xl font-extrabold tracking-tight text-center mx-5  sm:text-4xl kalam-bold mb-5 mt-3`}
          >
            Illuminate Your Path to Sustainability, {' '}
            <p className="font-bold inline green-gradient">
              Staying Evergreen
            </p>
          </p>

          <img
            src="/images/landing_solar.jpg"
            className="h-3/8 mx-20  rounded-3xl md:block hidden aspect-video mb-10 my-2"
            alt=""
          ></img>
          <p className="text-lg  font-bold mx-5 text-center">
            VIRGINIA STATE CONFERENCE 2024 - Hampton, Virginia
          </p>
          <div className=" mt-5 sm:flex font-bold hidden">
            <div className="relative rounded-full scale-110 text-xs leading-6 ring-1 ring-white py-[2px] px-4 hover:scale-[102%] transition-all ease-in-out ">
              Announcing our solar energy calculator{' '}
              <a href="/calculator" className={`font-semibold green-gradient`}>
                <span className="absolute inset-0" aria-hidden="true" />
                Try it out! <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          
        </motion.div>
      </main>

      <main className="   w-full border-t-0  bg-gradient-to-b from-black to-slate-950 text-white landing pb-32">
        <div className="flex flex-col w-full h-full lg:px-40 md:px-16 px-5 xl:px-48  py-28  ">
          <div className="grid w-full lg:grid-cols-2 grid-cols-1 pt-16 gap-x-20">
            {/* content */}

            <div>
              <div className="text-3xl font-bold text-center">Overview</div>
              <div className="text-lg font-semibold pt-10 text-center">
                Green energy for homes is all about using clean and sustainable
                sources like sunlight, the wind, and the earth's heat to power
                household activities. It's like making a smart choice for the
                environment and our homes. For example, installing solar panels
                on the roof helps to catch sunlight and turn it into electricity
                that we can use for our appliances and lights. Wind turbines use
                the power of the wind to make electricity too. Additionally,
                some homes use geothermal systems, which work by using the
                earth's heat to warm or cool the house. By making these green
                energy choices, we can spend less money on electricity and help
                the planet by using less of the non-renewable stuff that makes
                pollution. It's like taking a small step to make a big
                difference in the fight against climate change.
              </div>
            </div>

            {/* image */}
            <div className="w-full flex  mt-5 lg:mt-0 justify-center items-center ">
              <img
                src="/images/green_energy_overview.avif"
                className="aspect-video w-full rounded-lg shadow-xl"
                alt="solar panel home"
              ></img>
            </div>
          </div>

          <EnergyQuiz />
        </div>
      </main>

      <EnergyTypes />
    </>
  );
}

function EnergyTypes() {
  return (
    <main className=" min-h-screen  w-full  bg-slate-950 text-white ">
      <div className="grid grid-cols-1 py-10 gap-4  lg:grid-cols-2 xl:grid-cols-3 w-full min-h-screen  px-10">
        {energy_types.map((e, i) => (
          <>
            <div
              // href={e.link}
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}${e.img_url})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
              className={`grid rounded-md shadow-xl h-screen  grid-rows-2 hover:scale-[101%] p-10  group transition-all ease-in-out  border border-white`}
            >
              <div className="flex items-end justify-center">
                <p className="text-3xl font-bold text-center ">{e.name}</p>
              </div>
              <div className="  mb-2 hidden group-hover:flex items-start justify-center">
                <Link
                  to={e.link}
                  className=" text-sm mt-3 border  border-white px-5 py-2 hover:bg-opacity-45 hover:bg-white  transition-all ease-in-out"
                >
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
    img_url: '/images/solar.avif',
    link: '/solar',
  },
  {
    name: 'Wind Energy',
    img_url: '/images/wind.webp',
    link: '/wind',
  },
  {
    name: 'Geothermal Energy',
    img_url: '/images/geothermal.avif',
    link: '/geothermal',
  },
];

console.log(process.env.PUBLIC_URL);

export default App;
