const valid = (s) => {
  const stack = [];
  const index = [];
  for (let i = 0; i < s.length; i += 1) {
    let c = s[i];
    if (c === "(") {
      stack.push("(")
      index.push(i);
    }
    if (c === ")") {
      if (stack.length === 0 || stack[stack.length - 1] === ")") {
        stack.push(")");
        index.push(i);
      } else {
        stack.pop();
        index.pop();
      }
    }
  }
  if (index.length === 0) {
    return s;
  }
  let str = s.split('');
  for (let i = 0; i < index.length; i += 1) {
    str[index[i]] = '';
  }
  return str.join('');
}

console.log(valid('lee(t(c)o)de)'));
console.log(valid('a)b(c)d'));
console.log(valid('))(('));
console.log(valid('a(b(c)d)'));
