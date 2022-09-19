import { randomVehicleAlgorithm } from "./main/random-vehicle-algorithm";
import { randomNumbers } from "./utils/random-numbers";

const customerNames = ["Ana", "Joana", "Helena", "João"];

export default function clientCode() {
  for (let i = 0; i < 10; i++) {
    const vehicle = randomVehicleAlgorithm();
    const name = customerNames[randomNumbers(customerNames.length)];
    vehicle.pickUp(name);
    vehicle.stop();
    console.log("----");
  }
}
