"use strict";

// fetch data

// const apiHost = "https://restcountries.eu/rest/v2/all";
const API_HOST = "./api-data.json";

const config = {
  method: "GET",
  headers: {},
  cache: "default",
};
let countriesRequest = new Request(API_HOST, config);

const rootDiv = document.getElementById("root");
const detailDiv = document.getElementById("detail");
let content = "<p>Shaizxe</p>";

fetch(countriesRequest)
  .then((resp) => resp.json())
  .then((data) => templateUtils(data))
  .then((resu) => {
    content = resu.innerHTML;
    rootDiv.innerHTML = resu.innerHTML;
  });

detailDiv.innerHTML = country();

// country

function country(data) {
  if (!data) {
    data = {
      flag: "https://restcountries.eu/data/col.svg",
      population: "45.770.900",
      region: "Americas",
      cpital: "Bogotá",
    };
  }
  return `<section class="country">
  <div class="badge">
    <img
      src=${data.flag}
      alt="flag"
      class="badge-flag"
    />
    <div class="badge-info">
      <span class="badge-info-title">
        Colombia
      </span>
      <div>
        <span class="strong">Population:</span>
        <span>${data.population}</span>
      </div>
      <div>
        <span class="strong">Region:</span>
        <span>${data.region}</span>
      </div>
      <div>
        <span class="strong">Capital:</span>
        <span>${data.capital}</span>
      </div>
    </div>
  </div>
  </section> `;
}
