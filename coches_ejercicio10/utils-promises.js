import { Car } from "./classes/Car.class";

export let promiseParserToClass = (literObjectCars) => {
  return new Promise((resolve, reject) => {
    if (literObjectCars !== null && literObjectCars !== undefined) {
      let carsClass = literObjectCars.map((car) => {
        let newCar = new Car(car.id, car.make);
        newCar.model = car.model;
        newCar.type = car.type;
        newCar.year = car.year;
        return newCar;
      });
      resolve(carsClass);
    } else {
      reject("promiseParserToClass: literObjectCars is null or undefined");
    }
  });
};

export let promiseFilter = (cars, year, make, model, type) => {
  return new Promise((resolve, reject) => {
    if (cars !== null && cars !== undefined) {
      let carsFiltered = cars.filter((car) => {
        return (
          (year === "ALL" || car.year >= parseInt(year)) &&
          (make === "ALL" || car.make === make) &&
          (model === "ALL" || car.model === model) &&
          (type === "ALL" || car.type === type)
        );
      });
      resolve(carsFiltered);
    } else {
      let error = new Error("Cars is null or undefined");
      reject(error);
    }
  });
};

export let promiseCreateDivCars = (cars) => {
    return new Promise((resolve, reject) => {
      if (cars !== null && cars !== undefined) {
        let carsDivs = cars.map((car) => {
          let div = document.createElement("div");
          let modelMakeParagraph = document.createElement("p");
          modelMakeParagraph.textContent = `Model: ${car.model}, Make: ${car.make}`;
          let typeYearParagraph = document.createElement("p");
          typeYearParagraph.textContent = `Type: ${car.type}, Year: ${car.year}`;
          divs.append(modelMakeParagraph, typeYearParagraph);
          return div;
        });
        resolve(carsDivs);
      } else {
        reject("promiseCreateDivCars: cars is null or undefined");
      }
    });
  };