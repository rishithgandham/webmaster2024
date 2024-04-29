import React from 'react';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

import {
  getInsights,
  getNewToken,
  getSuggestions,
  getPlaceDetail,
} from '../services/adress';

export default function SolarCalculatorPage(props) {
  const [placeDetail, setPlaceDetail] = useState({});
  const [panelCount, setPanelCount] = useState(0);

  const [insights, setInsights] = useState();

  useEffect(() => {
    console.log(placeDetail);
    // console.log('Selected Place: ', placeDetail.address);
    // set loading to true -> freeze input submit, fetch solar API
    // set loading to false -> unfreezes input for another API request
  }, [placeDetail]);

  async function handleSubmit() {
    const lat = placeDetail.geometry.location.lat();
    const long = placeDetail.geometry.location.lng();

    const insights = await getInsights(lat, long, panelCount);

    setInsights(insights);
  }
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <>
      <main className=" min-h-screen   w-full bg-gradient-to-b from-black   to-emerald-950 to-100% text-white ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="flex flex-col w-full h-full lg:px-40 md:px-20 px-10 xl:px-72 2xl:px-96 py-28  "
        >
          <div className="title lg:text-4xl text-2xl mb-3 font-extrabold">
            Solar Energy Calculator
            <p className="text-lg font-semibold mt-2">
              Powered by <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC04]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span> solar API
            </p>
            <p className="text-xs font-semibold mt-2 lg:w-3/4 w-full">
              The Google Solar API utilizes maps data to precisely analyze a
              roof's solar potential, integrating geographical information with
              advanced algorithms. By assessing factors like roof area,
              orientation, and shading, it provides accurate insights into the
              feasibility of solar panel installation. Users can gain a
              comprehensive understanding of the potential benefits, including
              the number of panels needed and the expected yearly energy output.
              Ultimately, this data empowers individuals to make informed
              decisions about adopting solar energy, considering both
              environmental impact and financial returns.
            </p>
          </div>
          <AutocompleteInput
            setPlaceDetail={setPlaceDetail}
            placeDetail={placeDetail}
          />

          <div className="w-full my-5">
            <label className="mb-3 ml-1 text-xs font-bold">
              Panel Count (if above max, it will calculate for max)
            </label>
            <input
              type="number"
              className="px-3 w-full py-2   rounded-xl text-black"
              onChange={e => {
                setPanelCount(e.target.value);
              }}
              value={panelCount}
              placeholder="102"
            />
          </div>

          <button
            className="py-2 px-3 font-bold bg-green-500 text-white rounded-xl shadow-xl text-xs hover:scale-105 transition-all ease-in-out"
            disabled={!placeDetail || !panelCount}
            onClick={handleSubmit}
          >
            Calculate
          </button>
          {insights ? (
            <>
                <hr className='mt-10' />
              <div className="my-20 mx-5">
                <p className="text-center sm:text-xl md:text-3xl lg:text-4xl mb-10 font-bold text-white">
                  Solar Analysis of {placeDetail.formatted_address}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5 md:grid-rows-3 w-full">
                  {/* TOP ROW */}
                  <div className="md:col-start-1 md:row-start-1 transition-all ease-in-out hover:scale-[102%]">
                    <p className="text-left font-bold text-md ml-1 mb-3">
                      {' '}
                      Panels
                    </p>
                    <div className="w-full h-40 flex justify-center  items-center border rounded-xl  border-white  text-2xl font-bold">
                      {insights.panelCount} / {insights.maxPanelCount} max
                      panels
                    </div>
                  </div>
                  <div className="md:col-start-2 md:row-start-1 transition-all ease-in-out hover:scale-[102%]">
                    <p className="text-left font-bold text-md ml-1 mb-3">
                      {' '}
                      Energy (Kwh)
                    </p>
                    <div className="w-full h-40 flex justify-center  items-center border rounded-xl  border-white  text-2xl font-bold">
                      {Math.round(insights.yearlyEnergy)} /{' '}
                      {Math.round(insights.maxYearlyEnergy)}  Kwh
                    </div>
                  </div>
                  {/* END OF TOP ROW */}

                  {/*  2 ROW */}
                  <div className="md:col-start-1 md:row-start-2 transition-all ease-in-out hover:scale-[102%]">
                    <p className="text-left font-bold text-md ml-1 mb-3">
                      {' '}
                      Roof Area (meters<span>&#178;</span>)
                    </p>
                    <div className="w-full h-40 flex justify-center  items-center border rounded-xl  border-white  text-2xl font-bold">
                      {insights.roofArea} m<span>&#178;</span>
                    </div>
                  </div>
                  <div className="md:col-start-2 md:row-start-2 transition-all ease-in-out hover:scale-[102%]">
                    <p className="text-left font-bold text-md ml-1 mb-3">
                      {' '}
                      Annual Sunshine (Hours)
                    </p>
                    <div className="w-full h-40 flex justify-center  items-center border rounded-xl  border-white  text-2xl font-bold">
                      {Math.round(insights.annualSunshine)} hrs
                    </div>
                  </div>
                  {/* END  2 ROW */}

                  <div className=" md:col-span-2  transition-all ease-in-out hover:scale-[102%]">
                    <p className="text-left font-bold text-md ml-1 mb-1">
                      {' '}
                      Carbon Offset (kg)
                    </p>
                    <p className="text-left font-bold text-sm ml-1 mb-3">
                      {' '}
                      Equivalent amount of CO2 produced per MWh of grid
                      electricity. This is a measure of the carbon intensity of
                      grid electricity displaced by solar electricity.
                    </p>
                    <div className="w-full h-40 flex justify-center bg-opacity-40 bg-green-600 items-center border rounded-xl  border-white  md:text-2xl text-xs font-bold">
                      {Math.round(insights.c02saving)} kg per MWh of grid electricity 
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </motion.div>
      </main>
    </>
  );
}

function AutocompleteInput({ setPlaceDetail, placeDetail }) {
  const [suggestions, setSuggestions] = useState([]);
  const [input, setInput] = useState('');
  const tokenRef = useRef();

  //   control api calls? -> setTimeout()?
  async function populateSuggestions(i) {
    // if input length is less than 4, return and clear suggestions
    if (i.length < 4) {
      setSuggestions([]);
      return;
    }

    // getToken if not exists in ref
    if (!tokenRef.current) {
      tokenRef.current = getNewToken();
    }

    // debounce calls
    const suggestions = await getSuggestions(i, tokenRef.current);
    setSuggestions(suggestions);
    console.log(suggestions);
  }

  // get the geometry for the suggestion to use as an input for the Solar API
  async function getDetail(suggestion) {
    setSuggestions([]);
    setInput(suggestion.description);
    // clear token per autocomplete/detail request
    const token = tokenRef.current;
    tokenRef.current = undefined;

    const detail = await getPlaceDetail(suggestion, token);
    setPlaceDetail(detail);
  }

  return (
    <>
      <div className="w-full">
        <label className="mb-3 ml-1 text-xs font-bold">Address</label>
        <input
          type="text"
          className="px-3 w-full py-2   rounded-xl text-black"
          onChange={e => {
            populateSuggestions(e.target.value);
            setInput(e.target.value);

            if (placeDetail) {
              setPlaceDetail(undefined);
            }
          }}
          value={input}
        />

        {suggestions.length > 0 ? (
          <ul className="w-full shadow-xl rounded-2xl bg-white  divide-y-2 my-5 py-3 ">
            {suggestions.map((s, i) => (
              <button
                className="text-black w-full  font-bold bg-white py-3 hover:bg-slate-200 transition-all ease-in-out hover:scale-105  text-xs"
                key={i}
                onClick={() => {
                  getDetail(s);
                }}
              >
                {s.description}
              </button>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
