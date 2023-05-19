import { makeAutoObservable } from "mobx";

class Counter {
  constructor() {
    makeAutoObservable(this);
  }
  count = 0;

  incriment() {
    this.count++;
  }
  decriment() {
    this.count--;
    if (this.count <= 0) {
      this.count = 0;
    }
  }

  get total() {
    return `Total: ${this.count + 150}`;
  }
}

const counter = new Counter();
export default counter;
