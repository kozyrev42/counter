import { makeAutoObservable } from "mobx";

class Counter {
	count = 0;			/* переменная является стэйтом */

	constructor() {
		makeAutoObservable(this);
	}

	increment () {			/* экшен - который меняет стэйт */
		this.count = this.count + 1;
		console.log('metod-1', this.count)
	}

	decrement () {
		this.count = this.count - 1
		console.log('metod-2', this.count)
	}
}

export default new Counter();