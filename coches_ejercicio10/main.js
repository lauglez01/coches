import "./style.css";
import { cars } from "./data/mockData";
import {
  promiseParserToClass,
  promiseFilter,
  promiseCreateDivCars,
} from "./utils-promises";
import { createFilter } from "./filters";

let containerDiv = document.createElement("div");
containerDiv.classList.add("container");

let h1 = document.createElement("h1");
h1.textContent = "Filtrar coches";

const FILTERS = ["Year", "Make", "Model", "Type"];

const uniqueValuesFilters = {
  year: [...new Set(cars.map((car) => car.year)), "ALL"], // Creamos un array con valores sin repetir
  make: [...new Set(cars.map((car) => car.make)), "ALL"],
  model: [...new Set(cars.map((car) => car.model)), "ALL"],
  type: [...new Set(cars.map((car) => car.type)), "ALL"],
};

let containerFilter = createFilter(FILTERS, uniqueValuesFilters);

containerDiv.appendChild(h1);
document.body.appendChild(containerDiv);
containerDiv.appendChild(containerFilter);

let getCars = async (cars, year, make, model, type) => {
  let carsClass = await promiseParserToClass(cars);
  let carsFiltered = await promiseFilter(carsClass, year, make, model, type);
  let carsDivs = await promiseCreateDivCars(carsFiltered);

  let divBlock = document.createElement("div");
  divBlock.className = "block";
  divBlock.append(...carsDivs);
  containerDiv.appendChild(divBlock);
};

let selectorFilter = document.querySelectorAll("select");

selectorFilter.forEach((select) => {
  select.addEventListener("change", () => {
    let divBlock = document.querySelector(".block");
    if (divBlock) {
      divBlock.remove();
    }
    const [year, make, model, type] = Array.from(selectorFilter).map(
      (select) => select.value
    );
    getCars(cars, year, make, model, type);
  });
});

getCars(cars, "ALL", "ALL", "ALL", "ALL");
