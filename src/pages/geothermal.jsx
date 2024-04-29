import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from './logo.png';
import map from './map.png';
import geothermal_gif from './Geothermal-heat-pump-GHP-in-Winter-Summer.gif';
import geothermal_img_two from './CI_Map_geothermalnrel_US_133_161003.jpg';
import geothermal_img_three from './Geothermal-Energy-Costs.jpg';
const Geothermal = () => {
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
    { name: 'Geothermal Farm 1', location: { lat: 51.5074, lng: -0.1278 } },
    { name: 'Geothermal Farm 2', location: { lat: 40.7128, lng: -74.006 } },
    { name: 'Geothermal Farm 3', location: { lat: -33.8688, lng: 151.2093 } },
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
                  Geothermal Energy for Homes
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
            {/* <motion.img
              variants={variants}
              initial="hidden"
              animate="visible"
              height={1080}
              width={1920}
              src={geothermal_start}
              alt="geothermal_start"
              className="wind rounded-3xl aspect-video object-cover"
            /> */}
          </div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="text-3xl font-bold pt-20"
          >
            Overview
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="text-lg font-semibold pt-10"
          >
            Geothermal energy, a sustainable energy source, uses the Earth's
            internal heat to generate power and heat buildings. It provides a
            dependable, sustainable alternative to conventional fossil fuels.
            Geothermal power plants use a variety of technologies to harvest
            this energy, such as dry steam, flash steam, and binary cycle
            systems. These systems draw heat from hot water or steam reservoirs
            that are deep below. Geothermal energy is abundant in areas of
            significant volcanic activity or tectonic plate borders, such as
            Iceland, the United States, and the Philippines.
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
            className="grid grid-cols-2 grid-rows-1 gap-10 pt-10"
          >
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl font-bold">
                Renewable and Sustainable
              </div>
              <div className="text-lg pt-4 font-semibold">
                Geothermal energy derives from the Earth's heat, which is
                continuously replenished, making it a sustainable energy source
                for the long term.
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="col-start-1 row-start-2 border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl font-bold">Reliable and Constant</div>
              <div className="text-lg pt-4 font-semibold">
                Unlike solar and wind power, geothermal energy is available
                24/7, providing a consistent source of electricity and heat,
                even during adverse weather conditions.
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="row-start-3 border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl font-bold">Low Operating Costs</div>
              <div className="text-lg pt-4 font-semibold">
                Once installed, geothermal systems have relatively low operating
                and maintenance costs compared to traditional heating and
                cooling systems, leading to long-term savings.
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="row-start-3 border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl font-bold">Job Creation</div>
              <div className="text-lg pt-4 font-semibold">
                The development and operation of geothermal power plants create
                employment opportunities in construction, engineering, and
                maintenance sectors, boosting local economies.
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="col-span-2 row-start-4 border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl font-bold">Energy Independence</div>
              <div className="text-lg pt-4 font-semibold">
                Harnessing geothermal energy reduces reliance on imported fossil
                fuels, enhancing energy security and reducing exposure to
                volatile fuel prices.
              </div>
            </motion.div>
            <div className="image w-full my-10">
              <motion.img
                variants={variants}
                initial="hidden"
                animate="visible"
                height={1080}
                width={1920}
                src={geothermal_gif}
                alt="geothermal_gif"
                className="wind rounded-3xl aspect-sqaure h-full object-cover"
              />
              <motion.div variants={variants} initial="hidden" animate="visible">
                <div className="mb-4 flex justify-center text-xs font-bold mt-2">
                  {' '}
                  Geothermal energy is capable of running in all seasons{' '}
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
            Information On geothermal energy
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2  grid-rows-1 gap-10 pt-10"
          >
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-4 lg:p-6"
            >
              <div className="text-2xl font-bold">
                Types of geothermal energy
              </div>
              <div className="text-lg pt-4 font-semibold">
                Geothermal energy encompasses various systems for harnessing
                Earth's heat, including hydrothermal systems, which tap into
                natural reservoirs of hot water or steam through wells for
                electricity generation; enhanced geothermal systems (EGS),
                employing engineering techniques to stimulate heat exchange in
                rock formations; geothermal heat pumps, utilizing stable
                underground temperatures for efficient heating and cooling in
                buildings; and direct use applications, where geothermal energy
                is used directly for heating purposes without electricity
                generation. Each type offers distinct advantages and
                applications, contributing to a diverse and sustainable energy
                portfolio.
              </div>
            </motion.div>
            <div className="image w-full">
              {/* <motion.img
                variants={variants}
                initial="hidden"
                animate="visible"
                height={1080}
                width={1920}
                src={geothermal_img}
                alt="geothermal_img"
                className="wind rounded-3xl aspect-sqaure h-full object-cover"
              /> */}
            </div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="col-span-2 col-start-1 row-start-2 border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl font-bold">
                Environmental considerations
              </div>
              <div className="text-lg pt-4 font-semibold">
                Geothermal energy is a clean, low-carbon source of power that
                produces minimal greenhouse gas emissions. It helps reduce
                reliance on fossil fuels, mitigating air pollution and combating
                climate change. Geothermal power plants have a small physical
                footprint compared to other energy sources, and they operate
                quietly, minimizing disturbances to surrounding ecosystems.
                However, careful management of geothermal resources is essential
                to prevent depletion and ensure long-term sustainability.
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="col-span-2 row-start-3 border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl font-bold">
                Suitable locations for geothermal energy usage
              </div>
              <div className="text-lg pt-4 font-semibold">
                Geothermal energy is best suited to places with active tectonic
                activity or volcanic features, since these geological factors
                produce perfect circumstances for harvesting the Earth's heat.
                Areas bordering tectonic plate borders, such as the Pacific Ring
                of Fire, frequently have great geothermal potential due to the
                existence of magma chambers and rising subsurface temperatures.
                Furthermore, geothermal gradients—where the temperature rises
                with depth—are ideal for geothermal development. Iceland, the
                United States (especially the western states), the Philippines,
                Indonesia, and New Zealand all have major geothermal resources
                and well-developed geothermal industry. However, technological
                breakthroughs such as improved geothermal systems (EGS) are
                widening the possibility for geothermal energy production in
                previously underserved areas.
              </div>
            </motion.div>
            <div className="row-start-4 col-span-2 image flex flex-col items-center justify-center">
              <motion.img
                variants={variants}
                initial="hidden"
                animate="visible"
                src={geothermal_img_two}
                alt="geothermal_img_two"
                className="wind rounded-3xl aspect-sqaure object-cover"
              />
              <motion.div ariants={variants} initial="hidden" animate="visible">
                <div className="mb-4 flex justify-center text-xs font-bold mt-2">
                  {' '}
                  Geothermal resources of the Unites States Of America{' '}
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
            Cost
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="grid grid-rows-1 lg:grid-rows-2 gap-10 pt-10"
          >
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl font-bold">
                Initial Installation Costs
              </div>
              <div className="text-lg pt-4 font-semibold">
                The initial cost of installing a geothermal system can be higher
                than traditional heating and cooling systems due to drilling and
                equipment expenses.
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl font-bold">Long-Term Savings:</div>
              <div className="text-lg pt-4 font-semibold">
                Despite the higher upfront costs, geothermal systems often
                provide significant long-term savings on energy bills, resulting
                in a favorable return on investment over time.
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl font-bold">Financing Options</div>
              <div className="text-lg pt-4 font-semibold">
                Financing programs, such as low-interest loans or energy
                efficiency mortgages, may be available to help offset the
                initial investment and make geothermal energy more accessible to
                homeowners and businesses.
              </div>
            </motion.div>
            <div className="col-start-2 image flex flex-col items-center justify-center w-full">
              <motion.img
                variants={variants}
                initial="hidden"
                animate="visible"
                src={geothermal_img_three}
                alt="geothermal_img_three"
                className="wind rounded-3xl aspect-sqaure h-full object-cover"
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
              <div className="text-2xl font-bold">Federal Tax Credits:</div>
              <div className="text-lg pt-4 font-semibold">
                The U.S. federal government offers a tax credit of up to 26% of
                the cost of installing a geothermal heat pump system for
                residential properties. State Rebates: Many states provide
                additional rebates or incentives for installing geothermal
                systems, such as cash rebates, sales tax exemptions, or property
                tax incentives. Some utility companies offer incentives, such as
                rebates or discounted rates, to customers who install geothermal
                heating and cooling systems, promoting energy efficiency and
                sustainability.
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="text-3xl font-extrabold pt-20"
          >
            Best practices for geothermal maintenance
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="pt-10"
          >
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl font-bold"> Maintenance Tips</div>
              <div className="text-lg pt-4 font-semibold">
                Geothermal energy best practices prioritize sustainable
                development, environmental stewardship, community engagement,
                technological innovation, regulatory compliance, collaboration,
                capacity building, risk management, and continuous monitoring
                and evaluation. This involves conducting resource assessments to
                identify suitable locations, implementing sustainable practices
                to safeguard geothermal resources, mitigating environmental
                impacts through effective management strategies, engaging with
                local communities and stakeholders to build support, and
                investing in research and development to advance technology. By
                integrating these best practices into geothermal development
                initiatives, stakeholders can promote responsible and
                sustainable utilization of geothermal energy resources,
                contributing to a cleaner, more resilient energy future.
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.section variants={variants} initial="hidden" animate="visible">
          <div className="flex flex-col items-center">
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

          <div className="max-w-4xl mx-auto mt-10">
            <h2 className="text-3xl font-bold mb-4 flex justify-center">
              Nearby Geothermal Energy Sources
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
          <div className="flex justify-center pt-20 pb-10   ">
            <iframe
              src="https://www.youtube.com/embed/-36VWp9Sf4A?si=2VawjHM5mBTeq-1q"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-3xl aspect-video  w-5/6"
            ></iframe>
          </div>
        </motion.section>
      </main>
    </>
  );
};
// export default Geothermal;

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};
function GeothermalNew() {
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
          <div className="title text-4xl font-extrabold">Geothermal Energy</div>

          {/* image */}
          <div className="w-full flex  my-10 justify-center items-center ">
            <img
              src="/images/geothermal.webp"
              className="aspect-video w-full rounded-lg shadow-xl"
              alt="solar panel home"
            ></img>
          </div>

          {/* overview */}
          <div className="text-3xl font-bold pt-10 ">Overview</div>
          <div className="text-lg font-semibold pt-10">
            By using the heat that comes from under the Earth's surface,
            geothermal energy provides a constant and long-lasting option for
            warming up and cooling down places. This uses heat pumps placed
            underground to move warmth either into or out of the ground to keep
            inside temperatures steady throughout different times of the year.
            To put this system in place, pipes filled with liquid are put deep
            in the ground on someone's land where they can take in or let go of
            heat whenever it is necessary. People who own their homes, when they
            take part in this activity, can enjoy a nice warm or cool feeling
            inside their houses. Furthermore, they reduce how much they rely on
            oil and gas. This helps to cut down a lot of carbon emissions that
            affect the atmosphere and the planet as a whole.
          </div>
          <div className="text-lg font-semibold pt-10">
            The integration of geothermal energy into houses has one major
            benefit: its outstanding ability to save on energy. In contrast with
            usual heating and cooling systems, which rely on burning fossil
            fuels or electricity from sources that might run out, geothermal
            solutions make use of the steady and renewable warmth found in the
            ground beneath us. By using this resource that comes from nature,
            geothermal heat pumps can reach up to 400% efficiency for heating
            and even approach up to 600% for cooling. Homeowners see big savings
            on energy and witness their energy bills go down because of this.
            Geothermal systems need little upkeep and make hardly any noise,
            offering dependable performance over a long time. At the same time,
            they also help with environmental aims by cutting down a lot on
            greenhouse gas emissions.
          </div>

          {/* COMPONENTS OF WIND TURBINE */}
          {/* COMPONENTS OF WIND TURBINE */}
          {/* COMPONENTS OF WIND TURBINE */}
          {/* COMPONENTS OF WIND TURBINE */}
          <div className="text-3xl font-bold pt-20">
            How do geothermal heating systems work?
          </div>

          <div className="text-lg font-semibold pt-10">
            Temperatures underground are unique in the fact that they stay at a
            constant temperature throughout the entire year. Around 4 feet below
            earth’s surface is where ground temps remain the same throughout
            multiple seasons. During different seasons of the year, a geothermal
            system can capitalize on this “free energy, ” in various ways. For
            example, during the winter, pipes that are placed underground and
            filled with fluid absorb heat in the ground. The indoor unit
            compresses this heat to a higher temperature and distributes it
            throughout the home. In the summer, the indoor unit pools heat from
            the building, and distributes it along the pipes placed under ground
            to absorb into the ground. The three main parts of any geothermal
            installation will be the indoor unit, the piping system (open or
            closed loop), and the ductwork (to distribute air throughout/funnel
            air out of the house).
          </div>

          <div className="text-3xl font-bold pt-20 ">
            Open vs. closed loop geothermal system.
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 pt-16">
            {/* Open loop */}
            <div>
              <div className="text-2xl font-bold ">Open Loop</div>
              <div className="text-lg font-semibold pt-5">
                Open loop systems use the fluid from a nearby water source, use
                it to extract or absorb thermal energy from or into the ground
                (depending on the season), and then discharge it outside
                (discharge is different depending on where the water comes
                from). The properties of water as a thermal conductor and
                groundwater’s natural insulation/close temperatures to the
                ground make these systems very efficient. One downside to this
                type of geothermal system is durability. If the water that the
                system uses has quality issues, then the system will degrade.
                Homeowners also need to make sure that the water source that
                they are pulling from meets the systems gallons-per-flow
                requirement.
              </div>
            </div>

            {/* Closed loop */}

            <div>
              <div className="text-2xl font-bold lg:pt-0 pt-10">Closed Loop</div>
              <div className="text-lg font-semibold pt-5">
                As the name suggests, closed loop geothermal systems function by
                circulating a closed loop of fluid through underground pipes,
                extracting thermal energy from or releasing it into the ground
                depending on the season. This closed loop setup ensures
                durability and resilience to external water quality issues,
                unlike open loop systems. However, the upfront investment for
                closed loop systems may be higher due to the installation of
                ground loop infrastructure, and their efficiency can be
                influenced by factors such as soil composition and available
                land area. Overall, closed loop geothermal systems offer
                increased durability and flexibility compared to open loop
                systems, making them suitable for a wider range of geographical
                locations.
              </div>
            </div>
          </div>
          <div className="w-full flex  my-10 justify-center items-center ">
            <img
              src="/images/closed_loop.webp"
              className="aspect-video w-full rounded-lg shadow-xl"
              alt="solar panel home"
            ></img>
          </div>

          {/* END OF COMPONENTS */}
          {/* END OF COMPONENTS */}
          {/* END OF COMPONENTS */}
          {/* END OF COMPONENTS */}
          {/* END OF COMPONENTS */}

          {/* INSTALLATION/MAINTENANCE */}
          {/* INSTALLATION/MAINTENANCE */}
          {/* INSTALLATION/MAINTENANCE */}
          {/* INSTALLATION/MAINTENANCE */}
          {/* INSTALLATION/MAINTENANCE */}

          <div className="text-[27px] font-bold pt-16">
            Installation/Maintenance
          </div>
          <div className="text-lg font-semibold pt-16">
            Installing a geothermal system begins with a site assessment to
            determine feasibility, considering factors like soil composition and
            available space. The appropriate system type (open loop or closed
            loop) is then chosen, and installation starts with excavating the
            ground for piping or ground loops, which are connected to the indoor
            geothermal heat pump unit. Proper insulation and sealing of the
            ground loops are vital to prevent heat loss or gain. You should
            verify the credibility of youre installer to make sure that they
            understand how to properly install the system. Once installed, the
            system undergoes testing to ensure efficient operation. Regular
            maintenance is often required for open loop geothermal systems, as
            locations that use poor water will have degrading issues. On the
            other hand, closed loop systems require zero to no maintenance and
            will last for 50+ to a hundred years.
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
            Generally, the cost of a geothermal system depend on factors such as
            loop system, ground conditions, type of pump, system size, and
            location. Closed loop systems are generally more expensive than open
            loop, as more groundwork is required for installation. Bigger
            building will more likely need bigger systems. This means more
            pipes, and more often then not, more indoor units. The US office of
            Energy Efficiency and Renewable Energy states that homeowners are
            eligible for a 30% tax credit for installations between 2021 - 2033,
            26% from 2033 - 2034, and 23% from 2034 to 2035. Additionally, low
            income homeowners may also be subject to installation discounts.
            This information is exclusive to the US only and may be different
            for other countries.
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

export default GeothermalNew;
