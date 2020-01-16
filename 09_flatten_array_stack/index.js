// Flatten an array of arrays
// But DON'T Use Recursion, Use a Stack Solution Instead

/**
 * @param {[]}
 * @return {[]}
 */

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
  }

  peek() {
    if (this.items.length > 0) {
      return this.items[this.items.length - 1];
    }
  }

  size() {
    return this.items.length;
  }
}

const flatten = array => {
  const stack = new Stack();
  const output = [];

  stack.push(array);

  while (stack.size() > 0) {
    const nextItem = stack.pop();
    if (Array.isArray(nextItem)) {
      //Fill Stack with Array
      for (let i = 0; i < nextItem.length; i++) {
        const item = nextItem[i];
        stack.push(item);
      }
    } else {
      output.push(nextItem);
    }
  }
  return output;
};

module.exports = { flatten };
