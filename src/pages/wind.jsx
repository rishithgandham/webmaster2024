import React from 'react';
import { motion } from 'framer-motion';


import { InteractiveTabsWind } from '../components/InteractiveTabs';
const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function WindNew() {
  return (
    <>
      <main className=" min-h-screen   w-full bg-gradient-to-b from-black   to-emerald-950 to-100% text-white ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="flex flex-col w-full h-full lg:px-52 md:px-20 px-10 xl:px-96 py-28  "
        >
          {/* title */}
          <div className="title text-4xl font-extrabold">
            Wind Energy Turbines
          </div>

          {/* image */}
          <div className="w-full flex  my-10 justify-center items-center ">
            <img
              src="/images/wind_landing.jpg"
              className="aspect-video w-full rounded-lg shadow-xl"
              alt="solar panel home"
            ></img>
          </div>

          <InteractiveTabsWind/>

          {/* overview */}
          <div className="text-3xl font-bold pt-10 ">Overview</div>
          <div className="text-lg font-semibold pt-10">
            Not every property is suitable for solar panels, but that does not
            mean that you can’t generate clean energy that will help the Earth
            and your wallet. Small wind turbines are a popular choice for
            homeowners looking to generate clean electricity on their properties
            that have an abundance of wind. The best locations for these
            turbines are places that experience consistent high wind speed,
            which makes it a useful energy generation tool for places without
            sunlight. Small Wind Turbine systems work best when there are no
            obstacles obstructing the blades, or the blades access to open air.
          </div>
          <div className="text-lg font-semibold pt-10">
            Wind energy turbines work when the force of the wind spins the
            turbine blades. This rotary motion drives a generator that produces
            electricity. Many turbines will adjust their angles/position to be
            able to catch the most wind.
          </div>

          {/* COMPONENTS OF WIND TURBINE */}
          {/* COMPONENTS OF WIND TURBINE */}
          {/* COMPONENTS OF WIND TURBINE */}
          {/* COMPONENTS OF WIND TURBINE */}
          <div className="text-3xl font-bold pt-10 ">
            Components of a wind turbine
          </div>

          <div className="grid 2xl:grid-cols-2 grid-cols-1 gap-x-10 pt-16">
            {/* components */}

            <div className="">
              {/* turbine */}
              <div className="text-2xl font-bold ">Turbine</div>
              <div className="text-lg font-semibold pt-10">
                The turbine of this machine is the main component of power
                generation. On the turbine frame, the generator, the rotor, and
                tail are attached. The tail is a component on the opposite side
                that the blades are on, and serves to balance the whole machine
                and help it remain upright. The amount of energy that your wind
                turbine generates is dependent entirely on the diameter of the
                rotor. This diameter defines a wind turbine’s “swept area”, or
                the area where the blades are able to catch wind. A bigger
                “swept area” generally means more wind catches the blades,
                spinning the rotor faster and more often, generating more
                electricity
              </div>

              {/* tower */}
              <div className="text-2xl font-bold pt-16">Tower</div>
              <div className="text-lg font-semibold pt-10">
                The amount of wind the turbine catches is the most important
                factor in the amount of power you generate. Since wind speeds
                and quantity increase with altitude, it makes sense why many
                industrial turbines are extremely tall. The same applies to
                smaller, home wind turbines. Many manufacturers of home turbines
                will include towers, or some prefer to install them on top of
                houses. Two types of towers include free-standing towers, and
                guyed (towers supported by cables).
              </div>

              {/* other */}
              <div className="text-3xl font-bold pt-16">Other</div>
              <div className="text-lg font-semibold pt-10">
                Other components depend on whether your wind turbine is
                grid-connected, stand alone, or hybrid. Some components you
                might need depending on your install include A controller,
                batteries, grounding systems, power conditioning unit (to
                convert DC into usable AC power), wires, foundations, and more.
              </div>
            </div>

            {/* image vertical wind turbine */}

            <div className="w-full  h-full  items-center 2xl:mt-0 mt-10">
              <img
                src="/images/wind_turbine.jpg"
                className=" w-full h-full rounded-lg shadow-xl"
                alt="solar panel home"
              ></img>
            </div>
          </div>

          {/* END OF COMPONENTS */}
          {/* END OF COMPONENTS */}
          {/* END OF COMPONENTS */}
          {/* END OF COMPONENTS */}
          {/* END OF COMPONENTS */}

          {/* START OF TYPES */}
          {/* START OF TYPES */}
          {/* START OF TYPES */}
          {/* START OF TYPES */}
          {/* START OF TYPES */}

          <div className="text-3xl font-bold pt-16">
            Types of wind turbine systems
          </div>
          <div className="grid 2xl:grid-cols-2 grid-cols-1 pt-10 gap-x-10">
            {/* image */}
            <div className="w-full  aspect-video h-full  ">
              <img
                src="/images/power_grid.avif"
                className=" w-full h-full rounded-lg shadow-xl"
                alt="solar panel home"
              ></img>
            </div>

            {/* grid connected */}
            <div>
              <div className="text-2xl font-bold  mt-10">Grid-connected Systems</div>
              <div className="text-lg font-semibold pt-10">
                Small wind energy turbines can be connected to external
                electricity systems like the grid. This makes it so that you can
                offset some of the energy that you use during a month with wind,
                and take the rest of the energy you need from the grid. Systems
                like these often include batteries to store excess energy when
                you are not using any energy.
              </div>
            </div>
          </div>
          <div className="grid 2xl:grid-cols-2 grid-cols-1 pt-10 gap-x-10">
            {/* off the grid */}
            <div>
              <div className="text-2xl font-bold">Off the grid systems</div>
              <div className="text-lg font-semibold pt-10">
                On off the grid properties, renewable energy systems are the
                only option for many. These systems need to provide all the
                power for your house, and include batteries to store excess
                power generation. These systems require that you live in an area
                with average annual wind speed of at least 9 miles per hour (4.0
                meters per second).
              </div>
            </div>
            {/* image */}
            <div className="w-full  aspect-video h-full  mt-10 ">
              <img
                src="/images/off_the_grid.avif"
                className=" w-full h-full rounded-lg shadow-xl"
                alt="solar panel home"
              ></img>
            </div>
          </div>

          {/* INSTALLATION/MAINTENANCE */}
          {/* INSTALLATION/MAINTENANCE */}
          {/* INSTALLATION/MAINTENANCE */}
          {/* INSTALLATION/MAINTENANCE */}
          {/* INSTALLATION/MAINTENANCE */}

          <div className="text-[27px] font-bold pt-16">
            Installation/Maintenance
          </div>
          <div className="text-lg font-semibold pt-16">
            Getting a wind system installed involves contacting a credible
            installer. These companies will provide services like permitting,
            and surveying. They will then help you find the best location for
            your turbine. They will walk you through the types of turbines you
            can choose, and the components you will need (foundations,
            batteries, pcu, etc.) You will be given an estimate, at which it's
            your call on whether to proceed.
          </div>
          <div className="text-lg font-semibold pt-16">
            Maintenance of wind turbines includes Checking and tightening bolts
            and electrical connections as necessary, checking machines for
            corrosion and the guy wires for proper tension, checking for and
            replace any worn leading edge tape on the turbine blades, if
            appropriate, replacing components such as turbine blades and/or
            bearings as needed. With proper maintenance and installation, you
            can expect a turbine system to last up to 20 years.
          </div>

          {/* INSTALLATION/MAINTENANCE */}
          {/* INSTALLATION/MAINTENANCE */}
          {/* INSTALLATION/MAINTENANCE */}
          {/* INSTALLATION/MAINTENANCE */}

          {/* ENERGY OUTPUT */}
          {/* ENERGY OUTPUT */}
          {/* ENERGY OUTPUT */}

          <div className="text-3xl font-bold pt-16">
            Energy Output and Return on Investment
          </div>

          <div className="text-lg font-semibold pt-16">
            According to the American Wind Energy Association (AWEA), small wind
            turbines cost between $3,000 to $5,000. Again, these numbers heavily
            depend on the type, size, location, and numerous other factors. Here
            is a chart of some small wind turbine systems and how much they will
            cost. The amount of energy your turbine produces depends on factors
            like Particular wind turbine power curve, average annual wind speed
            at your site, height of the tower that you plan to use, and
            frequency distribution of the wind -- that is, an estimate of the
            number of hours that the wind will blow at each speed during an
            average year. Your installer can go over these factors as they apply
            to your property, and give you an estimate on how much energy you
            can generate. The payback period for using energy associated with
            wind can be around six months. However this varies for smaller
            turbines.
          </div>

          {/* ENERGY OUTPUT */}
          {/* ENERGY OUTPUT */}
          {/* ENERGY OUTPUT */}
          {/* ENERGY OUTPUT */}

          {/* INTERACTIVES/RELATED VIDEOS */}

          <div className="title text-4xl font-extrabold text-center mt-40">
            Related Videos
          </div>

          <div className="flex justify-center pt-20 pb-10   ">
            <iframe
              src="https://www.youtube.com/embed/xy9nj94xvKA?si=FTGuqJeTZPkyAAHL  "
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-3xl aspect-video  w-5/6"
            ></iframe>
          </div>
        </motion.div>

        {/*  */}
      </main>
    </>
  );
}

export default WindNew;
