import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from './logo.png';
import map from './map.png';
import wind_start from './wind_two.jpg';
import wind_side from './wind_three.jpg';
import wind_gif from './windmill_03.gif';
import wind_turbine from './wind_turbine.jpg';
const Wind = () => {
  useEffect(
    () => () => {
      // <-- Now we return the useEffect teardown effect, which will be fired only after the path/search change for the first time
      try {
        // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'auto',
        });
      } catch (error) {
        // just a fallback for older browsers
        window.scrollTo(0, 0);
      }
    },
    []
  );

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const windEnergySources = [
    { name: 'Wind Farm 1', location: { lat: 51.5074, lng: -0.1278 } },
    { name: 'Wind Farm 2', location: { lat: 40.7128, lng: -74.006 } },
    { name: 'Wind Farm 3', location: { lat: -33.8688, lng: 151.2093 } },
  ];
  const locations = ['Virginia', 'Texas', 'California'];

  const handleCheckout = () => {
    console.log('Checkout process initiated...');
  };
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-black   to-emerald-950 text-white">
        <div className="flex flex-col lg:px-52 md:px-20 px-10 xl:px-96 py-28">
          <div class="container py-8">
            <div class="flex justify-between items-center">
              <div class="title text-4xl font-extrabold">
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  height={1080}
                  width={1920}
                >
                  Wind Energy for Homes
                </motion.div>
              </div>
              <div className="image w-1/4 ml-4">
                <motion.img
                  src={logo}
                  alt="Logo"
                  className="logo rounded-full"
                  whileTap={{ rotate: 360, transition: { delay: 0.1 } }}
                />
              </div>
            </div>
          </div>
          <div className="image w-full my-10 ">
            <motion.img
              variants={variants}
              initial="hidden"
              animate="visible"
              height={1080}
              width={1920}
              src={wind_start}
              alt="wind_start"
              className="wind rounded-3xl aspect-video object-cover"
            />
          </div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="text-3xl font-extrabold"
          >
            Overview
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="text-lg font-semibold pt-10"
          >
            Wind energy is an important component of the renewable energy
            sector, harnessing the natural power of the wind to generate
            electricity using wind turbines. According to the International
            Renewable Energy Agency (IRENA), wind generating capacity will
            exceed 743 gigawatts (GW) worldwide by the end of 2020, indicating
            tremendous expansion in the renewable energy environment. According
            to IPCC reports, wind energy plays an important role in decreasing
            greenhouse gas emissions and solving climate change problems. The US
            Department of Energy (DOE) emphasizes wind energy's environmental
            advantages, citing its contribution to improved air quality and
            decreased reliance on nonrenewable energy sources. The National
            Renewable Energy Laboratory's (NREL) research emphasizes wind
            energy's scalability and decentralized nature, which allows for
            dispersed generation and increases energy resiliency. Wind energy is
            becoming more cost-effective, with the American Wind Energy
            Association (AWEA) reporting comparable levelized costs of energy
            (LCOE) compared to traditional fossil fuels. Furthermore, federal
            tax credits and state incentives, along with lower turbine costs,
            have made wind energy more accessible and financially viable.
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="text-3xl font-extrabold pt-20"
          >
            Advantages Of Wind Power In Renewable Energy Production
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10"
          >
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl font-bold">Abundant and Renewable</div>
              <div className="text-lg pt-4 font-semibold">
                Wind energy is obtained from the natural movement of air masses,
                making it a virtually infinite supply. Wind energy will be
                accessible to capture as long as the sun continues to heat the
                Earth's surface unevenly, resulting in wind patterns.
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl font-bold">
                Clean and Environmentally Friendly
              </div>
              <div className="text-lg pt-4 font-semibold">
                Wind power generating emits no greenhouse gases, air pollutants,
                or water pollutants during operation. It dramatically decreases
                dependency on fossil fuels, lowering air pollution, addressing
                climate change, and protecting ecosystems and biodiversity.
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl font-bold">Cost-Effective</div>
              <div className="text-lg pt-4 font-semibold">
                Wind energy has become much more affordable in recent years
                thanks to technological improvements, economies of scale, and
                simplified manufacturing processes. Wind power is presently one
                of the most cost-effective types of energy generation,
                frequently similar to or even less expensive than fossil fuels
                in many areas.
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl font-bold">
                Energy Independence and Security
              </div>
              <div className="text-lg pt-4 font-semibold">
                Wind energy is a decentralized energy source that enables towns,
                regions, and countries to diversify their energy portfolios and
                lessen their reliance on imported fossil fuels. This improves
                energy security, resilience, and stability while lowering
                vulnerability to geopolitical tensions and supply interruptions.
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl font-bold">
                Job Creation and Economic Benefits
              </div>
              <div className="text-lg pt-4 font-semibold">
                The wind energy industry supports a wide range of jobs across
                various sectors, including manufacturing, construction,
                installation, operations, maintenance, and research. Wind power
                projects also stimulate local economies through investments, tax
                revenues, land lease payments, and community development
                initiatives.
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl font-bold">
                Scalability and Flexibility
              </div>
              <div className="text-lg pt-4 font-semibold">
                Wind power projects can range from small-scale installations for
                individual homes or businesses to massive utility-scale wind
                farms that cover extensive regions. This flexibility enables
                personalized solutions to satisfy various energy needs and grid
                constraints, while also complementing other renewable energy
                sources like solar and hydroelectric power.
              </div>
            </motion.div>
            <motion.div
              ariants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6 flex flex-col"
            >
              <div className="text-2xl font-bold">
                Technological Innovation and Growth Potential
              </div>
              <div className="text-lg pt-4 font-semibold">
                Continued research and development in wind energy technology
                promises to enhance efficiency, dependability, and energy
                output. Offshore wind, in particular, has enormous growth
                potential since it taps into strong and persistent wind
                resources near coastal locations, allowing for the construction
                of large-scale wind farms with minimum land use effect.
              </div>
            </motion.div>
            <div className="image w-full my-10 ">
              <motion.img
                variants={variants}
                initial="hidden"
                animate="visible"
                height={1080}
                width={1920}
                src={wind_gif}
                alt="wind_gif"
                className="wind rounded-3xl aspect-sqaure h-full object-cover"
              />
              <motion.div ariants={variants} initial="hidden" animate="visible">
                <div className="mb-4 flex justify-center text-xs font-bold mt-2">
                  {' '}
                  A single wind turbine can power 500 homes.{' '}
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="text-3xl font-extrabold pt-20"
          >
            Information On Wind Turbines
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="grid grid-rows-1 lg:grid-cols-3 gap-10 pt-10"
          >
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl font-bold">Types of wind turbines</div>
              <div className="text-lg pt-4 font-semibold">
                There are two primary types of wind turbines: horizontal axis
                and vertical axis. Horizontal-axis turbines, which are
                positioned parallel to the ground, are the most frequent and
                efficient variety, making them ideal for big wind farms.
                Vertical-axis turbines, which have a vertical rotor shaft, are
                less common yet adaptable. They can capture wind from any
                direction and are frequently utilized in urban or decentralized
                situations.
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl font-bold ">
                Suitable locations for wind turbine installation
              </div>
              <div className="text-lg pt-4 font-semibold">
                Wind turbines thrive in places where wind speeds are steady and
                powerful, averaging 6-9 meters per second (m/s). Coastal
                regions, plains, ridges, and wide landscapes are appropriate for
                wind energy projects, but site selection must take into account
                local wind patterns, terrain, and zoning rules.
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl font-bold">
                Environmental considerations
              </div>
              <div className="text-lg pt-4 font-semibold">
                Proper siting, environmental impact assessments, and mitigation
                strategies are critical for reducing negative effects on
                species, habitats, and landscapes during wind turbine
                construction and operation.
              </div>
            </motion.div>
          </motion.div>
          <div className="image w-full my-10 ">
            <motion.img
              variants={variants}
              initial="hidden"
              animate="visible"
              height="100%"
              width="100%"
              src={wind_side}
              alt="wind_side"
              className="wind rounded-3xl aspect-video object-cover"
            />
          </div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="text-3xl font-extrabold pt-20"
          >
            Cost
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 grid-rows-3 gap-10 pt-10"
          >
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl font-bold">
                Breakdown of turbine costs
              </div>
              <div className="text-lg pt-4 font-semibold">
                Turbine prices vary depending on size, capacity, and technology,
                with average utility-scale turbines costing between $2 million
                and $4 million. Installation costs include site preparation,
                foundation building, and labor, whereas long-term maintenance
                generally accounts for 1-2% of the overall project cost every
                year.
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="col-start-1 row-start-2 border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl font-bold">Installation expenses</div>
              <div className="text-lg pt-4 font-semibold">
                Installation costs include site preparation, foundation
                construction, transportation, crane hire, and labor.
                Installation costs for onshore projects can vary from $40,000 to
                $70,000 per turbine, however offshore installations may be more
                expensive owing to maritime logistics.
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="col-start-1 row-start-3 border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl font-bold">
                Long-term maintenance costs
              </div>
              <div className="text-lg pt-4 font-semibold">
                Long-term maintenance expenditures generally range between 1-2%
                of the overall project cost every year. Inspections,
                lubrication, blade cleaning, and component replacement are all
                routine maintenance duties. Major overhauls or component
                improvements may be necessary every 5-10 years, depending on
                turbine age and operating circumstances.
              </div>
            </motion.div>
            <div className="row-span-3 col-start-2 row-start-1  image w-full h-full">
              <motion.img
                variants={variants}
                initial="hidden"
                animate="visible"
                src={wind_turbine}
                alt="wind_turbine"
                className="wind rounded-3xl aspect-video object-cover h-full w-full"
              />
            </div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="text-3xl font-extrabold pt-20"
          >
            Tax Rebate Information
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="pt-10"
          >
            <motion.div variants={variants} initial="hidden" animate="visible">
              <div className="text-2xl font-bold">
                Available Tax Credits and Incentives for Wind Energy
              </div>
              <div className="text-lg pt-4 font-semibold">
                Federal tax credits, such as the PTC and ITC, provide financial
                incentives for wind energy installations. State-level incentives
                for wind energy development may include rebates, subsidies, and
                property tax exemptions. Federal and state tax credits and
                incentives encourage wind energy development by providing
                financial benefits to qualifying projects. To earn tax credits
                or incentives, claimants must fulfill particular criteria and
                comply with certain duties.
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="text-3xl font-extrabold pt-20 mb-10"
          >
            Best Practices for Wind Turbine Maintenance
          </motion.div>
          <motion.div variants={variants} initial="hidden" animate="visible">
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl font-bold"> Maintenance Tips</div>
              <div className="text-lg pt-4 font-semibold">
                Wind turbines require regular maintenance and inspection to
                guarantee maximum performance, dependability, and safety. Best
                practices include monitoring turbine functioning, lubricating
                moving components, examining blades for deterioration, and
                responding quickly to maintenance concerns. Scheduled
                maintenance procedures should be completed in accordance with
                manufacturer guidelines and industry standards to save downtime
                and increase energy output. Best practices for wind turbine
                maintenance assure peak performance, dependability, and safety,
                whilst environmental impact studies assist limit negative
                effects on ecosystems and communities throughout project
                construction.
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.section variants={variants} initial="hidden" animate="visible">
          <div className="flex flex-col items-center mb-8">
            <div className="title text-4xl font-extrabold mb-6">
              <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                height={1080}
                width={1920}
              >
                Find the service you need near you!
              </motion.div>
            </div>
            <div className="image w-1/2">
              <img src={map} className="map object-contain" alt="Map" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 flex justify-center ">
              Nearby Wind Energy Sources
            </h2>
            <ul>
              {windEnergySources.map((source, index) => (
                <li key={index} className="mb-2 flex justify-center">
                  {source.name} - Latitude: {source.location.lat}, Longitude:{' '}
                  {source.location.lng}
                </li>
              ))}
            </ul>
          </div>
          <div className="max-w-md mx-auto mt-8 bg-black p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold mb-4">Book your appointment</h2>
            <form onSubmit={handleCheckout} className="flex flex-col space-y-4">
              <div className="flex flex-col">
                <label htmlFor="quantity" className="text-lg mb-1">
                  Time:
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  className="border p-2 rounded text-black"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="paymentMethod" className="text-lg mb-1">
                  Payment Method:
                </label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  className="border p-2 rounded text-black"
                >
                  <option value="credit">Credit Card</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
              >
                Checkout
              </button>
            </form>
          </div>
          <div className="flex justify-center pb-10">
            <motion.div variants={variants} initial="hidden" animate="visible">
              <iframe
                width="850"
                height="560"
                src="https://www.youtube.com/embed/8S5I4pmmnG4?si=6tKqNqLIPkclneWL"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-3xl"
              ></iframe>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

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

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 pt-16">
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
              <div className="text-2xl font-bold pt-16">Other</div>
              <div className="text-lg font-semibold pt-10">
                Other components depend on whether your wind turbine is
                grid-connected, stand alone, or hybrid. Some components you
                might need depending on your install include A controller,
                batteries, grounding systems, power conditioning unit (to
                convert DC into usable AC power), wires, foundations, and more.
              </div>
            </div>

            {/* image vertical wind turbine */}

            <div className="w-full  h-full  items-center ">
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
          <div className="grid lg:grid-cols-2 grid-cols-1 pt-10 gap-x-10">
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
              <div className="text-2xl font-bold md:mt-0 mt-10">Grid-connected Systems</div>
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
          <div className="grid lg:grid-cols-2 grid-cols-1 pt-10 gap-x-10">
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
            <div className="w-full  aspect-video h-full md:mt-0 mt-10 ">
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
              src="https://www.youtube.com/embed/-36VWp9Sf4A?si=2VawjHM5mBTeq-1q"
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
