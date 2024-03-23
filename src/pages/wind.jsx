import React from "react";
import { motion } from "framer-motion";
import logo from "./logo.png";
import map from "./map.png";
import Slider from "react-slick";
const Wind = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const windEnergySources = [
    { name: "Wind Farm 1", location: { lat: 51.5074, lng: -0.1278 } },
    { name: "Wind Farm 2", location: { lat: 40.7128, lng: -74.006 } },
    { name: "Wind Farm 3", location: { lat: -33.8688, lng: 151.2093 } },
  ];
  const locations = ["Virginia", "Texas", "California"];

  const handleCheckout = () => {
    console.log("Checkout process initiated...");
  };
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-black to-slate-950 text-white">
        <div className="flex flex-col lg:px-52 md:px-20 px-10 xl:px-96 py-28">
          <div class="container mx-auto py-8 px-4">
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
              <div className="text-2xl">Abundant and Renewable</div>
              <div className="text-lg pt-4">
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
              <div className="text-2xl">Clean and Environmentally Friendly</div>
              <div className="text-lg pt-4">
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
              <div className="text-2xl">Cost-Effective</div>
              <div className="text-lg pt-4">
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
              <div className="text-2xl">Energy Independence and Security</div>
              <div className="text-lg pt-4">
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
              <div className="text-2xl">Job Creation and Economic Benefits</div>
              <div className="text-lg pt-4">
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
              <div className="text-2xl">Scalability and Flexibility</div>
              <div className="text-lg pt-4">
                Wind power projects can range from small-scale installations for
                individual homes or businesses to massive utility-scale wind
                farms that cover extensive regions. This flexibility enables
                personalized solutions to satisfy various energy needs and grid
                constraints, while also complementing other renewable energy
                sources like solar and hydroelectric power.
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl">
                Technological Innovation and Growth Potential
              </div>
              <div className="text-lg pt-4">
                Continued research and development in wind energy technology
                promises to enhance efficiency, dependability, and energy
                output. Offshore wind, in particular, has enormous growth
                potential since it taps into strong and persistent wind
                resources near coastal locations, allowing for the construction
                of large-scale wind farms with minimum land use effect.
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="text-3xl font-bold pt-20"
          >
            Information On Wind Turbines
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
              <div className="text-2xl">Types of wind turbines</div>
              <div className="text-lg pt-4">
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
              <div className="text-2xl">
                Suitable locations for wind turbine installation
              </div>
              <div className="text-lg pt-4">
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
              <div className="text-2xl">Environmental considerations</div>
              <div className="text-lg pt-4">
                Proper siting, environmental impact assessments, and mitigation
                strategies are critical for reducing negative effects on
                species, habitats, and landscapes during wind turbine
                construction and operation.
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10"
          >
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl">Breakdown of turbine costs</div>
              <div className="text-lg pt-4">
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
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl">Installation expenses</div>
              <div className="text-lg pt-4">
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
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl">Long-term maintenance costs</div>
              <div className="text-lg pt-4">
                Long-term maintenance expenditures generally range between 1-2%
                of the overall project cost every year. Inspections,
                lubrication, blade cleaning, and component replacement are all
                routine maintenance duties. Major overhauls or component
                improvements may be necessary every 5-10 years, depending on
                turbine age and operating circumstances.
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10"
          >
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              className="border border-gray-300 rounded-lg p-6"
            >
              <div className="text-2xl">
                Available Tax Credits and Incentives for Wind Energy
              </div>
              <div className="text-lg pt-4">
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
            className="text-3xl font-bold pt-20"
          >
            Best Practices for Wind Turbine Maintenance
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
              <div className="text-2xl"> Maintenance Tips</div>
              <div className="text-lg pt-4">
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
        <motion.section
          variants={variants}
          initial="hidden"
          animate="visible"
          className="py-10"
        >
          <div className="flex flex-col items-center mb-8">
            <div className="title text-4xl font-extrabold mt-4 mb-6">
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
                  className="border p-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="paymentMethod" className="text-lg mb-1">
                  Payment Method:
                </label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  className="border p-2 rounded"
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
                src="https://www.youtube.com/embed/8S5I4pmmnG4?si=6tKqNqLIPkclneWL"
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
