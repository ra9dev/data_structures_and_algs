class QElement {
	constructor(element, priority) {
		this.element = element;
		this.priority = priority;
	}
}

// PriorityQueue class
class PriorityQueue {
	constructor() {
		this.items = [];
	}

	isEmpty() {
		return this.items.length === 0;
	}

	enqueue(element, priority) {
		let qElement = new QElement(element, priority);
		let contain = false;

		for (let i = 0; i < this.items.length; i++) {
			if (this.items[i].priority < qElement.priority) {
				this.items.splice(i, 0, qElement);
				contain = true;
				break;
			}
		}

		if (!contain) {
			this.items.push(qElement);
		}
	}

	dequeue() {
		if(this.isEmpty()) {
			return "Underflow";
		}
		return this.items.shift();
	}

	front() {
		if(this.isEmpty()) {
			return 'No elements in Queue'
		}
		return this.items[0];
	}

	back() {
		if(this.isEmpty()) {
			return 'No elements in Queue'
		}
		return this.items[this.items.length - 1];
	}
}

let priorityQueue = new PriorityQueue();

console.log(priorityQueue.isEmpty());

priorityQueue.enqueue("Sumit", 2);
priorityQueue.enqueue("Gourav", 1);
priorityQueue.enqueue("Piyush", 1);
priorityQueue.enqueue("Sunny", 2);
priorityQueue.enqueue("Sheru", 3);

console.log(priorityQueue);
