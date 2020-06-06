import { templateUtils } from "./templateUtils.js";

// const apiHost = "https://restcountries.eu/rest/v2/all";
const apiHost = "./api-data.json";

const config = {
  method: "GET",
  headers: {},
  cache: "default",
};
let countriesRequest = new Request(apiHost, config);

async function home() {
  let countries = await datax();
  const res = templateUtils(countries);
  return res;
}

async function datax() {
  let countries = [];
  await fetch(countriesRequest)
    .then((resp) => resp.json())
    .then((data) => (countries = data));
  return countries;
}

export { home };
