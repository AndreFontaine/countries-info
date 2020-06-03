// const apiHost = "https://restcountries.eu/rest/v2/all";
import Router from "./router.js";
const apiHost = "./api-data.json";

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

async function setBadges(total) {
  let wElement = document.getElementsByClassName("wrapper")[0];
  const countries = await callApi();

  for (let i = 0; i < total; i++) {
    const country = countries[i];
    const cElement = createBadge(country);
    wElement.appendChild(cElement);
  }
}

function createBadge(country) {
  let container = document.createElement("section");
  container.classList.add("country");

  let badge = document.createElement("div");
  badge.classList.add("badge");

  let flag = document.createElement("img");
  flag.src = country.flag;
  flag.classList.add("badge-flag");

  let badgeInfo = document.createElement("div");
  badgeInfo.classList.add("badge-info");

  let badgeInfoTitle = document.createElement("div");
  badgeInfoTitle.innerText = country.name;
  badgeInfoTitle.classList.add("badge-info-title");

  let badgePopulation = document.createElement("div");
  let badgePopulationContent = `<div>
      <span class="strong">Population: </span>
      <span>${country.population.toLocaleString("en-IN")}</span>
    </div>`;
  badgePopulation.innerHTML = badgePopulationContent;

  let badgeRegion = document.createElement("div");
  let badgeRegionContent = `<div>
      <span class="strong">Region: </span>
      <span>${country.region}</span>
    </div>`;
  badgeRegion.innerHTML = badgeRegionContent;

  let badgeCapital = document.createElement("div");
  let badgeCapitalContent = `<div>
      <span class="strong">Capital: </span>
      <span>${country.capital}</span>
    </div>`;
  badgeCapital.innerHTML = badgeCapitalContent;

  badgeInfo.appendChild(badgeInfoTitle);
  badgeInfo.appendChild(badgePopulation);
  badgeInfo.appendChild(badgeRegion);
  badgeInfo.appendChild(badgeCapital);

  badge.appendChild(flag);
  badge.appendChild(badgeInfo);

  container.appendChild(badge);

  return container;
}

const router = new Router();
router.get("/", function (req) {
  setBadges(20);
});

router.get("/colombia", function (req) {
  console.log("esta es la pagina de colombia");
  setBadges(3);
});

router.init();
window.router = router;
