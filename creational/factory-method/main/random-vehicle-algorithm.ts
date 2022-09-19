import { BicycleFactory } from "../factories/bicicle-factory";
import { CarFactory } from "../factories/car-factory";
import { randomNumbers } from "../utils/random-numbers";
import { Vehicle } from "../vehicle/vehicle";

export function randomVehicleAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  const car1 = carFactory.getVehicle("Fusca");
  const car2 = carFactory.getVehicle("Celta");

  const bicycle1 = bicycleFactory.getVehicle("Bicicleta");

  const vehicles = [car1, car2, bicycle1];
  return vehicles[randomNumbers(vehicles.length)];
}
