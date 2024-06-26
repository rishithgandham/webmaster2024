import { Loader } from '@googlemaps/js-api-loader';
import { findClosestBuildingInsights } from '@nora-soderlund/google-maps-solar-api';

const loader = new Loader({
  apiKey: process.env.REACT_APP_GOOGLE,
  version: 'weekly',
});


const {
  AutocompleteService,
  PlacesService,
  AutocompleteSessionToken,
  PlacesServiceStatus,
} = await loader.importLibrary('places');

const autocomplete = new AutocompleteService();
const placesService = new PlacesService(
  document.getElementById('googlemaps-attribution-container')
);

export async function getSuggestions(placeQuery, session) {
  return new Promise(function (resolve, reject) {
    autocomplete.getPlacePredictions(
      {
        input: placeQuery,
        session: session,
      },
      (predictions, status) => {
        console.log('API getPlacePredictions req -> ', predictions, status);
        if (status !== PlacesServiceStatus.OK) {
          resolve([]);
        } else {
          resolve(predictions);
        }
      }
    );
  });
}

// function to get the detail of a location selected from the autocomplete, session token to couple with the autocomplete request.
export async function getPlaceDetail(suggestion, session) {
  return new Promise(function (resolve, reject) {
    placesService.getDetails(
      {
        placeId: suggestion.place_id,
        fields: ['geometry.location', 'formatted_address', 'name'],
      },
      (place, status) => {
        console.log('API getDetail req -> ', place, status);
        if (status === PlacesServiceStatus.OK) {
          resolve(place);
        }
      }
    );
  });
}

export function getNewToken() {
  return new AutocompleteSessionToken();
}

// functions for SOLAR API

// return annual sunshine, roof area, max panel cound, C02 savings, monetary savings, break even year.

export async function getInsights(lat, long, panel_count, address) {
  const insights = await fetchInsights(lat, long);
  console.log(insights)

  const configs = insights.solarPotential.solarPanelConfigs;

  // insight calculation
  const annualSunshine = insights.solarPotential.maxSunshineHoursPerYear;
  const roofArea = insights.solarPotential.buildingStats.areaMeters2;
  const maxPanelCount = insights.solarPotential.maxArrayPanelsCount;
  const c02saving = insights.solarPotential.carbonOffsetFactorKgPerMwh;
  const yearlyEnergy =
    configs[Math.min(panel_count, configs[configs.length - 1].panelsCount) - 4]
      .yearlyEnergyDcKwh;
  const maxYearlyEnergy = configs[configs.length - 1].yearlyEnergyDcKwh
  console.log(yearlyEnergy)

  return {
    annualSunshine: annualSunshine,
    roofArea: roofArea,
    maxPanelCount: maxPanelCount,
    c02saving: c02saving,
    yearlyEnergy: yearlyEnergy,
    panelCount: Math.min(panel_count, configs[configs.length - 1].panelsCount),
    maxYearlyEnergy: maxYearlyEnergy,
    address: address
  };
}

export async function fetchInsights(lat, long) {
  return await findClosestBuildingInsights(
    process.env.REACT_APP_GOOGLE,
    {
      location: {
        latitude: lat,
        longitude: long,
      },
    }
  );
}
