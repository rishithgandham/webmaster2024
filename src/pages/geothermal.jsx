/* eslint-disable react/jsx-no-target-blank */
import { motion } from "framer-motion";

import { InteractiveTabsGeothermal } from "../components/InteractiveTabs";

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

          <InteractiveTabsGeothermal />

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
              <div className="text-2xl font-bold lg:pt-0 pt-10">
                Closed Loop
              </div>
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
            Related Videos and Interactives
          </div>

          <div className="flex justify-center pt-20 pb-10   ">
            <iframe
              src="https://www.youtube.com/embed/-36VWp9Sf4A?si=2VawjHM5mBTeq-1q"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-3xl aspect-video  w-full"
            ></iframe>
          </div>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3975856365207951"
            crossorigin="anonymous"
          ></script>
        </motion.div>

        {/*  */}
      </main>
    </>
  );
}

export default GeothermalNew;
