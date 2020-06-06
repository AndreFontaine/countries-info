function templateUtils(elements) {
  let templateRes = document.createElement("div");
  let templateContent = `<header>
    <h2>Where in the world?</h2>
    <h3>Dark Mode</h3>
  </header>
  <div class="actions">
    <section>
        <input
            class="search"
            type="search"
            name=""
            id=""
            placeholder="Search for a country ..."
        />
    </section>
    <section>
    <select class="filter" name="" id="">
        <option value="none" selected disabled hidden>
        Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>
    </section>
  </div>
  ${setBadges(elements)}`;

  templateRes.innerHTML = templateContent;
  return templateRes;
}

function setBadges(countries) {
  let wElement = document.createElement("div");
  for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    const cElement = createBadge(country);
    wElement.appendChild(cElement);
  }
  return wElement.innerHTML;
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

export { templateUtils };
