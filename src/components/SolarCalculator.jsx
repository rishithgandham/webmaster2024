import React, { useEffect, useRef, useState } from 'react';
import {
  getNewToken,
  getSuggestions,
  getPlaceDetail,
  getInsights,
} from '../services/adress';

export default function SolarCalculator() {
  const [placeDetail, setPlaceDetail] = useState({});
  const [panelCount, setPanelCount] = useState(0);
  const [monthlyAverageBill, setMonthlyAverageBill] = useState(0);

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

  return (
    <>
      <div className="flex flex-col justify-center items-center text-white pb-20">
        <AutocompleteInput
          setPlaceDetail={setPlaceDetail}
          placeDetail={placeDetail}
        />
        <div className="md:w-1/2 w-3/4 my-5">
          <label className="mb-3 ml-1 text-xs font-bold">
            Monthly Average Energy Bill ($)
          </label>

          <input
            type="number"
            className="px-3 w-full py-2  rounded-xl text-black"
            onChange={e => {
              setMonthlyAverageBill(e.target.value);
            }}
            value={monthlyAverageBill}
            placeholder="105$"
          />
        </div>

        <div className="md:w-1/2 w-3/4 my-5">
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
          className="py-2 px-3 font-bold bg-green-500 text-white rounded-xl shadow-xl text-xs transition-all ease-in-out"
          disabled={!placeDetail || !panelCount || !monthlyAverageBill}
          onClick={handleSubmit}
        >
          Calculate
        </button>
        {insights ? (
          <>
            <div className="my-20 mx-5">
              <p className="text-center sm:text-xl md:text-3xl lg:text-4xl mb-10 font-bold text-white">
                Solar Analysis of 4213 Triscari Lane, Glen Allen, VA, 23060
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5 md:grid-rows-3 w-full">
                <div className="md:col-start-1 md:row-start-1 transition-all ease-in-out hover:scale-[102%]">
                  <p className="text-left font-bold text-md ml-1 mb-3">
                    {' '}
                    Annual Sunshine (hrs)
                  </p>
                  <div className="w-full h-40 flex justify-center  items-center border rounded-xl  border-white  text-2xl font-bold">
                    1446.1 hrs
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
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
      <div className="md:w-1/2 w-3/4">
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
