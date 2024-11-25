import './style.css';
import { Car } from "./Car.class";
import { cars } from './mockData';

const mapCars = async (array) => {
  return array.map((item) => {
    const car = new Car(item.id, item.make);
    car.year = item.year;
    car.model = item.model;
    car.type = item.type;
    return car;
  });
};

const filterCars = async (array) => {
  return array.filter((car) => car.year >= 2010);
};

const createDivs = async (array) => {
  return array.map((item) => {
    const block = document.createElement('div');
    block.classList.add('block');

    const div = document.createElement('div');

    const makeModel = document.createElement('h3');
    makeModel.textContent = `${item.make} ${item.model}`;
    div.appendChild(makeModel);

    const year = document.createElement('p');
    year.textContent = `Year: ${item.year}`;
    div.appendChild(year);

    const type = document.createElement('p');
    type.textContent = `Type: ${item.type}`;
    div.appendChild(type);

    block.appendChild(div);

    return block;
  });
};

const initializeCars = async () => {
  const container = document.createElement('div');
  container.classList.add('container');

  const header = document.createElement('h1');
  header.textContent = 'Car List';
  container.appendChild(header);  
  document.body.appendChild(container);

  const mappedCars = await mapCars(cars);
  const filteredCars = await filterCars(mappedCars);
  const divs = await createDivs(filteredCars);

  divs.forEach((div) => container.appendChild(div)); 
};

initializeCars();
