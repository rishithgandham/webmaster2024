import React from 'react';

const Solar = () => {
  return (
    <>
      <main className=" min-h-screen   w-full bg-gradient-to-b from-black   to-emerald-950 to-100% text-white ">
        <div className="flex flex-col w-full h-full lg:px-52 md:px-20 px-10 xl:px-96 py-28  ">
          <div className="title text-4xl font-extrabold">
            Solar Energy For Homes
          </div>

          {/* image */}

          <div className="w-full flex  my-10 justify-center items-center ">
            <img
              src="/images/solar_article_main.jpg"
              className="aspect-video w-full rounded-lg shadow-xl"
              alt="solar panel home"
            ></img>
          </div>

          {/* overview */}
          <div className="text-3xl font-bold pt-10 ">Overview</div>
          <div className="text-lg font-semibold pt-10">
            Solar Panels work by utilizing panels, which absorb sunlight, and
            turn it into DC energy, which is then fed into an inverter to become
            the AC energy required by all of the appliances, lights, computers,
            air conditioning, and more that your house utilizes. Solar Panels
            can be installed in any area with access to direct sunlight, like a
            yard, garden, or rooftop.
          </div>
          <div className="text-lg font-semibold pt-10">
            Solar energy presents a compelling opportunity for homeowners
            seeking to minimize their home energy bill, and stay green. The cost
            of solar panels is continuing to decline, this factor tied with
            increasing environmental awareness is causing homeowners to turn to
            solar energy at unprecedented rates. Solar Panel installations in
            the UK have doubled, reaching 1.2 million households. Solar energy
            is also predicted to grow as a power generation source for the next
            two years in the US.
          </div>
          <div className="text-lg font-semibold pt-10">
            Some of the benefits of residential solar energy include decreased
            energy bills (or no energy bills), and their big environmental
            impact. Solar Energy is a clean, renewable energy source which
            reduces air pollution and dependence on non-renewable energy
            sources, which plays a key factor in mitigating climate change. This
            also promotes energy independence, which ultimately leads to
            increased self sustainability.
          </div>
          <div className="text-lg font-semibold pt-10">
            One of the main reasons for solar installations is the reduced
            energy bill cost. On average, Homeowners can save up to 62% of their
            energy bills by installing solar panels, but this depends heavily on
            how much sunlight your panels have access to, and seasonal changes
            in sunlight amount. Generally, solar panels include battery
            installations to store excess energy generation. A process known as
            “net metering,” allows homeowners to feed extra energy back into the
            grid to further reduce their energy bill. Optimizing the placement
            of your solar panels and how many you install is crucial to maximize
            savings and determining when your investment will break even.
          </div>
          {/* End of Overview */}

          {/* Info */}
          <div className="text-3xl font-bold pt-20 ">
            Solar Panel Information
          </div>
          <div className="grid w-full lg:grid-cols-2 grid-cols-1 pt-16 gap-x-20">
            {/* content */}
            <div>
              <div className="text-2xl font-bold ">
                Type of Installation (Panel vs. Tile)
              </div>
              <div className="text-lg font-semibold pt-10">
                A solar panel is made up of a series of photovoltaic cells
                (solar cells) placed on a flat surface. To make electricity,
                several solar panels are connected together and placed to catch
                as much sunlight as possible. This sunlight turns into
                electricity that can be saved in batteries. The solar panels are
                set up on the roof of a home, garage, or patio using special
                brackets, leaving some space between the panels and the roof.
                It's important to position them so they get the most sunlight
                and produce the most electricity.
              </div>
              <div className="text-lg font-semibold pt-10">
                Solar shingles, also called solar roof tiles, appear like
                regular roofing materials or asphalt tiles. Solar roof tiles
                also create electricity just as efficiently or more efficient
                than standard solar panels. They work like solar panels, using
                the same method to generate electricity from sunlight, but they
                are smaller. This allows more to be placed on one roof, thus
                creating more energy. These panels can also be connected to a
                battery for excess energy storage.
              </div>
            </div>

            {/* image */}
            <div className="w-full flex  mt-5 md:mt-0 justify-center items-center ">
              <img
                src="/images/solar_panel_tiles.avif"
                className="aspect-square w-full rounded-lg shadow-xl"
                alt="solar panel home"
              ></img>
            </div>
          </div>

          <div className="text-2xl font-bold pt-16">
            Solar Panel Maintenance
          </div>
          <div className="text-lg font-semibold pt-10">
            Solar Panels are expensive, so like other home systems, they need to
            be regularly maintained. Although they last 25-30 years on average,
            return on investment can take a while, making it crucial to properly
            take care of your panels. Generally, solar panel maintenance is
            minimal, but simple tasks like clearing ice and snow off your panels
            during the winter can do nothing but good. Keeping panels clear of
            sun-blocking materials like dust or snow does not only increase the
            lifespan of your solar panels, but also lets them generate more
            energy! You should aim to clean your solar panels once a year, and
            it is recommended to schedule an annual appointment with a solar
            specialist.
          </div>
          {/* End of Info */}

          {/* Cost */}

          <div className="text-3xl font-bold pt-20 ">Solar Panel Cost</div>

          <div className="text-2xl font-bold pt-16">Initial Cost</div>

          <div className="text-lg font-semibold pt-10">
            An average size residential solar panel system is about 25000
            dollars, including installation. The cost of your solar panels +
            installation also depends on where you live. A typical home requires
            around 6 - 10 kilowatts, so an 8 kilowatt system will cost around
            $20,000, including installation. This will provide around 10,000 kWh
            of energy per year.
          </div>
          <div className="text-lg font-semibold pt-10">
            The type of solar panel you choose will also have an impact on your
            cost. The least efficient panel type, thin film, will cost on
            average $5600 to $8000. The most efficient panels, Monocrystalline
            panels, will cost upwards of $12,000 (could be even greater
            depending on roof size). Other initial costs can include
            inspections, permissions, landscaping (removing trees, flattening
            land, etc.), and more.
          </div>

          <div className="text-2xl font-bold pt-16">
            Estimated savings over time
          </div>

          <div className="grid w-full lg:grid-cols-2 grid-cols-1 pt-16 gap-x-20">
              

            {/* image */}
            <div className="w-full flex mb-5 md:mb-0  justify-center items-center ">
              <img
                src="/images/solar_home_roof.avif"
                className="aspect-auto w-full rounded-lg shadow-xl"
                alt="solar panel home"
              ></img>
            </div>
            <div className="text-lg font-semibold ">
                Installing solar panels can increase the value of your home -
                homes that include solar panels selling for 4% more on average.
                This means that you can get most of your money back after you
                sell your house. In addition to this, solar panels reduce your
                energy cost, or in some cases, eliminate it entirely. On
                average, the return on investment for solar panels is 10-15
                years on average. Again, offsetting the cost of your energy
                usage is the main reason that people buy solar panels to begin
                with. If you use the maximum amount of energy that your solar
                panel generates, you should expect a shorter payback period. On
                the other hand, if you use little to none of the energy your
                panels generate, then the payback period will be extremely long.
              </div>
          </div>

          

          {/* End Cost */}
        </div>
      </main>
    </>
  );
};

const texts = {
  overview: {},
};

export default Solar;
