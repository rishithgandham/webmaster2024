import React from 'react';

const Solar = () => {
  return (
    <>
      <main className=" min-h-screen  h-full w-full bg-gradient-to-b from-black to-slate-950 text-white ">
        <div className="flex flex-col w-full h-full lg:px-52 md:px-20 px-10 xl:px-72 py-28  ">
        <div className="title text-4xl font-bold">Solar Energy For Homes</div>
          {/* overview */}
          <div className='text-3xl font-semibold pt-20 '>Overview</div>
          <div className="text-2xl  pt-10">
            Solar Panels work by utilizing panels, which absorb sunlight, and
            turn it into DC energy, which is then fed into an inverter to become
            the AC energy required by all of the appliances, lights, computers,
            air conditioning, and more that your house utilizes. Solar Panels
            can be installed in any area with access to direct sunlight, like a
            yard, garden, or rooftop.
          </div>
          <div className="text-2xl  pt-10">
            Solar energy presents a compelling opportunity for homeowners
            seeking to minimize their home energy bill, and stay green. The cost
            of solar panels is continuing to decline, this factor tied with
            increasing environmental awareness is causing homeowners to turn to
            solar energy at unprecedented rates. Solar Panel installations in
            the UK have doubled, reaching 1.2 million households. Solar energy
            is also predicted to grow as a power generation source for the next
            two years in the US.
          </div>
        </div>
      </main>
    </>
  );
};

const texts = {
    overview: {

    }
}

export default Solar;
