import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./meal-box";
import { Rice, Beans, Beverage, Dessert } from "./meals";

// Classe de Builder, que nos permite criar um Dish padrão.
// Todo metódo que retorna o this, permite fazer um encadeamento de
// chamadas.
// Temos um metódo reset, que reseta o Builder para ele não precisar
// ser sempre instanciado novamente.
export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice("Arroz", 50);
    const beans = new Beans("Feijão", 100);
    this._meal.add(rice, beans);
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage("Bebida", 100);
    this._meal.add(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert("Sobremesa", 150);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
