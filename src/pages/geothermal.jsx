import React from "react";
import { motion } from "framer-motion";
import logo from "./logo.png";
import map from "./map.png";
const Wind = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const windEnergySources = [
    { name: "Geothermal Farm 1", location: { lat: 51.5074, lng: -0.1278 } },
    { name: "Geothermal Farm 2", location: { lat: 40.7128, lng: -74.006 } },
    { name: "Geothermal Farm 3", location: { lat: -33.8688, lng: 151.2093 } },
  ];
  const locations = ["Virginia", "Texas", "California"];

  const handleCheckout = () => {
    console.log("Checkout process initiated...");
  };
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-black to-slate-950 text-white">
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
            Geothermal energy, a renewable energy source, taps into the Earth's
            internal heat to produce electricity and heat buildings. It offers a
            reliable, sustainable alternative to traditional fossil fuels.
            Geothermal power plants harness this energy through various
            technologies, including dry steam, flash steam, and binary cycle
            systems. These systems extract heat from reservoirs of hot water or
            steam located deep underground. Geothermal energy is abundant in
            regions with high volcanic activity or tectonic plate boundaries,
            such as Iceland, the United States, and the Philippines.
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="text-3xl font-bold pt-20"
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
              <div className="text-2xl">Renewable and Sustainable</div>
              <div className="text-lg pt-4">
                Geothermal energy derives from the Earth's heat, which is
                continuously replenished, making it a sustainable energy source
                for the long term.
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl">Reliable and Constant</div>
              <div className="text-lg pt-4">
                Unlike solar and wind power, geothermal energy is available
                24/7, providing a consistent source of electricity and heat,
                even during adverse weather conditions.
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl">Low Operating Costs</div>
              <div className="text-lg pt-4">
                Once installed, geothermal systems have relatively low operating
                and maintenance costs compared to traditional heating and
                cooling systems, leading to long-term savings.
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl">Job Creation</div>
              <div className="text-lg pt-4">
                The development and operation of geothermal power plants create
                employment opportunities in construction, engineering, and
                maintenance sectors, boosting local economies.
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl">Energy Independence</div>
              <div className="text-lg pt-4">
                Harnessing geothermal energy reduces reliance on imported fossil
                fuels, enhancing energy security and reducing exposure to
                volatile fuel prices.
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="text-3xl font-bold pt-20"
          >
            Information On geothermal energy
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
              className="border border-gray-300 rounded-lg p-4 lg:p-6"
            >
              <div className="text-2xl">Types of geothermal energy</div>
              <div className="text-lg pt-4">
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

            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl">
                Suitable locations for geothermal energy usage
              </div>
              <div className="text-lg pt-4">
                Suitable locations for geothermal energy are typically found in
                regions with active tectonic activity or volcanic features, as
                these geological conditions create ideal environments for
                harnessing Earth's heat. Areas along tectonic plate boundaries,
                such as the Pacific Ring of Fire, often exhibit high geothermal
                potential due to the presence of magma chambers and elevated
                subsurface temperatures. Additionally, regions with geothermal
                gradients—where the temperature increases with depth—are
                conducive to geothermal development. Countries like Iceland, the
                United States (particularly the western states), the
                Philippines, Indonesia, and New Zealand boast significant
                geothermal resources and have established robust geothermal
                industries. However, advancements in technology, such as
                enhanced geothermal systems (EGS), are expanding the potential
                for geothermal energy development in areas previously considered
                less favorable. Factors such as proximity to population centers,
                geological stability, and regulatory frameworks also influence
                the suitability of locations for geothermal energy projects.
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl">Environmental considerations</div>
              <div className="text-lg pt-4">
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
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="text-3xl font-bold pt-20"
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
              <div className="text-2xl">Initial Installation Costs</div>
              <div className="text-lg pt-4">
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
              <div className="text-2xl">Long-Term Savings:</div>
              <div className="text-lg pt-4">
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
              <div className="text-2xl">Financing Options</div>
              <div className="text-lg pt-4">
                Financing programs, such as low-interest loans or energy
                efficiency mortgages, may be available to help offset the
                initial investment and make geothermal energy more accessible to
                homeowners and businesses.
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="text-3xl font-bold pt-20"
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
              <div className="text-2xl">Federal Tax Credits:</div>
              <div className="text-lg pt-4">
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
            className="text-3xl font-bold pt-20"
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
              <div className="text-2xl"> Maintenance Tips</div>
              <div className="text-lg pt-4">
                Best practices for geothermal energy encompass a multifaceted
                approach aimed at ensuring sustainable development,
                environmental stewardship, community engagement, technological
                innovation, regulatory compliance, collaboration, capacity
                building, risk management, and continuous monitoring and
                evaluation. This involves conducting comprehensive resource
                assessments to identify suitable locations, implementing
                sustainable practices to safeguard geothermal resources,
                mitigating environmental impacts through effective management
                strategies, engaging with local communities and stakeholders to
                build support and address concerns, investing in research and
                development to advance technologies and improve efficiency,
                adhering to regulatory requirements and obtaining necessary
                permits, fostering collaboration and knowledge sharing among
                industry stakeholders, building a skilled workforce through
                education and training initiatives, managing risks through
                thorough assessments and mitigation plans, and monitoring
                project performance to optimize outcomes and ensure
                accountability. By integrating these best practices into
                geothermal development initiatives, stakeholders can promote
                responsible and sustainable utilization of geothermal energy
                resources, contributing to a cleaner, more resilient energy
                future.
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.section
          variants={variants}
          initial="hidden"
          animate="visible"
          className="py-10"
        >
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

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 flex justify-center ">
              Nearby Geothermal Energy Sources
            </h2>
            <ul>
              {windEnergySources.map((source, index) => (
                <li key={index} className="mb-2 flex justify-center">
                  {source.name} - Latitude: {source.location.lat}, Longitude:{" "}
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
          <div className="flex justify-center">
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="video-container"
            >
              <iframe
                width="850"
                height="560"
                src="https://www.youtube.com/embed/-36VWp9Sf4A?si=2VawjHM5mBTeq-1q"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};
export default Wind;
