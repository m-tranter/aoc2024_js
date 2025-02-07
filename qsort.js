const partition = (arr, lo, hi) => {
  const swap = (i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  // set up pivot
  let p1 = Math.ceil((lo + hi) / 2);

  // Median optimisation
  if (arr[p1] < arr[lo]) {
    swap(p1, lo);
  }
  if (arr[hi] < arr[lo]) {
    swap(hi, lo);
  }
  if (arr[p1] < arr[hi]) {
    swap(p1, hi);
  }

  let pivot = arr[p1];

  // Keep track of equal values
  let eq = lo;
  let l = lo;
  let r = hi;
  while (eq <= r) {
    if (arr[eq] < pivot) {
      swap(eq, l);
      l += 1;
      eq += 1;
    } else if (arr[eq] > pivot) {
      swap(eq, r);
      r -= 1;
    } else {
      eq += 1;
    }
  }
  return { l, r };
};

const qsort = (arr, lo, hi) => {
  if (lo >= 0 && lo < hi) {
    let { l, r } = partition(arr, lo, hi);
    qsort(arr, lo, l - 1);
    qsort(arr, r + 1, hi);
  }
};
let a = [1, 3, 2, 5, 2, 3, 7, 5, 4];
qsort(a, 0, a.length - 1);
console.log(a);
