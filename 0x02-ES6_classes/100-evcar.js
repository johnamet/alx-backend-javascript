import Car from './10-car';

const rangeSymbol = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this[rangeSymbol];
  }

  cloneCar() {
    return new Car(this.brand, this.motor, this.color);
  }
}
