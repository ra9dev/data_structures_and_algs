function heapify(arr, length, i) {
	let largest = i;
	let left = 2 * i + 1;
	let right = left + 1;

	if (left < length && arr[left] > arr[largest]) {
		largest = left;
	}

	if (right < length && arr[right] > arr[largest]) {
		largest = right;
	}

	if (largest !== i) {
		[arr[i], arr[largest]] = [arr[largest], arr[i]];
		heapify(arr, length, largest);
	}

	return arr;
}

function heap_sort(arr) {
	let length = arr.length;
	let i = Math.floor(length / 2 - 1);
	let k = length - 1;

	while (i >= 0) {
		heapify(arr, length, i);
		i--;
	}

	while (k >= 0) {
		[arr[0], arr[k]] = [arr[k], arr[0]];
		heapify(arr, k, 0);
		k--;
	}

	return arr;
}

console.log(heap_sort([2, 1, 3, 15, 52, 46, 99]));
