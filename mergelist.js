const sorted = (a1, a2) => {
  const arr = [];

  let i = 0;
  let j = 0;

  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      arr.push(a1[i]);
      i += 1;
      continue;
    }
    if (a1[i] === a2[j]) {
      arr.push(a1[i]);
      arr.push(a2[j]);
      i += 1;
      j += 1;
      continue;
    }
    if (a1[i] > a2[j]) {
      arr.push(a2[j]);
      j += 1;
      continue;
    }
  }
  if (i !== a1.length) {
    arr.push(...a1.slice(i));
  }
  if (j !== a2.length) {
    arr.push(...a2.slice(j));
  }
  return arr;
}

// console.log(sorted([1,2,3,4,5,6], [2,4,6,8]));

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  insert(value) {
    this.next = new Node(value);
  }
}

const a = new Node(1);
a.insert(2);
a.next.insert(3);
a.next.next.insert(4);
a.next.next.next.insert(5);
a.next.next.next.next.insert(6);

const b = new Node(2);
b.insert(4);
b.next.insert(6);
b.next.next.insert(8);

const sortList = (n1, n2) => {
  let n3 = new Node(null);
  let head = n3;
  while (n1 && n2) {
    if (n1.value < n2.value) {
      n3.value = n1.value;
      n3.next = new Node(null);
      n3 = n3.next;
      n1 = n1.next
      continue;
    }
    if (n1.value === n2.value) {
      n3.value = n1.value;
      n3.next = new Node(n2.value);
      n3 = n3.next;
      n3.next = new Node(null);
      n3 = n3.next;
      n1 = n1.next;
      n2 = n2.next;
      continue;
    }

    if (n1.value > n2.value) {
      n3.value = n2.value;
      n3.next = new Node(null);
      n3 = n3.next;
      n2 = n2.next;
      continue;
    }
  }
  while (n1) {
    n3.next = new Node(n1.value);
    n3 = n3.next;
  }
  while (n2) {
    n3.next = new Node(n2.value);
    n3 = n3.next;
    n2 = n2.next;
  }
  return head;
}

console.log(sortList(a, b));

let rt = sortList(a, b);
const arr = []
while (rt) {
  arr.push(rt.value);
  rt = rt.next
}

console.log(arr);
