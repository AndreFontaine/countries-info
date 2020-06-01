// const apiHost = "https://restcountries.eu/rest/v2/all";
const apiHost =
  "https://3e875a26-dfb8-4fb7-9020-955dfc5b94b5.mock.pstmn.io/rest/v2/all";

const config = {
  method: "GET",
  headers: {},
  cache: "default",
};
let countriesRequest = new Request(apiHost, config);

async function callApi() {
  let countries = [];

  try {
    await fetch(countriesRequest)
      .then((resp) => resp.json())
      .then((data) => (countries = data));
  } catch (error) {
    console.log("Err: ", error);
  }

  return countries;
}

async function setBadges() {
  let wElement = document.getElementsByClassName("wrapper")[0];
  const countries = await callApi();

  for (let i = 0; i < 21; i++) {
    const country = countries[i];
    const cElement = createBadge(country);
    wElement.appendChild(cElement);
  }
}

function createBadge(country) {
  var container = document.createElement("section");
  container.classList.add("country");

  var badge = document.createElement("div");
  badge.classList.add("badge");

  var flag = document.createElement("img");
  flag.src = country.flag;
  flag.classList.add("badge-flag");

  var badgeInfo = document.createElement("div");
  badgeInfo.classList.add("badge-info");

  var badgeInfoTitle = document.createElement("span");
  badgeInfoTitle.classList.add("badge-info-title");

  var badgePopulation = document.createElement("div");

  let populationTitle = document.createElement("span");
  populationTitle.classList.add("strong");
  populationTitle.innerText = "Population: ";

  let populationNumber = document.createElement("span");
  populationNumber.innerText = country.population.toLocaleString("en-IN");

  badgePopulation.appendChild(populationTitle);
  badgePopulation.appendChild(populationNumber);

  var badgeRegion = document.createElement("div");

  let regionTitle = document.createElement("span");
  regionTitle.classList.add("strong");
  regionTitle.innerText = "Region: ";

  let regionText = document.createElement("span");
  regionText.innerText = country.region;

  badgeRegion.appendChild(regionTitle);
  badgeRegion.appendChild(regionText);

  var badgeCapital = document.createElement("div");

  let capitalTitle = document.createElement("span");
  capitalTitle.classList.add("strong");
  capitalTitle.innerText = "Capital: ";

  let capitalText = document.createElement("span");
  capitalText.innerText = country.capital;

  badgeCapital.appendChild(capitalTitle);
  badgeCapital.appendChild(capitalText);

  var countryName = document.createTextNode(country.name);

  badgeInfoTitle.appendChild(countryName);
  badgeInfo.appendChild(badgeInfoTitle);
  badgeInfo.appendChild(badgePopulation);
  badgeInfo.appendChild(badgeRegion);
  badgeInfo.appendChild(badgeCapital);

  badge.appendChild(flag);
  badge.appendChild(badgeInfo);

  container.appendChild(badge);

  return container;
}

setBadges();
