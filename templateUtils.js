function templateUtils(elements) {
  let templateRes = document.createElement("div");
  let templateContent = `<div>${setBadges(elements)}</div>`;
  templateRes.innerHTML = templateContent;
  return templateRes;
}

function setBadges(countries) {
  let wrapper = document.createElement("div");
  let wElement = document.createElement("div");
  // const dataLength = countries.length;
  const dataLength = 6;
  wElement.classList.add("wrapper");
  for (let i = 0; i < dataLength; i++) {
    const country = countries[i];
    const cElement = createBadge(country);
    wElement.appendChild(cElement);
  }
  wrapper.appendChild(wElement);
  return wrapper.innerHTML;
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
