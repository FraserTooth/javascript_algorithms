// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Example:

// You may serialize the following tree:

//     1
//    / \
//   2   3
//      / \
//     4   5

// as "[1,2,3,null,null,4,5]"

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const serialize = function(root) {
  if (!root) {
    return "[]";
  }
  const vals = [];

  const queue = [];
  queue.unshift(root);
  while (queue.length > 0) {
    if (
      queue.every(item => {
        return item === null;
      })
    ) {
      break;
    }
    const node = queue.pop();
    if (node) {
      vals.push(node.val);
    } else {
      queue.unshift(null, null);
      vals.push("null");
      continue;
    }
    queue.unshift(node.left);
    queue.unshift(node.right);
  }

  return "[" + vals.join(",") + "]";
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function(string) {
  if (string === "[]" || string.length < 2) {
    return null;
  }
  const output = string
    .substring(1, string.length - 1)
    .split(",")
    .map((val, i, array) => {
      if (val === "null") return null;
      let thisNode;
      if (!(val instanceof TreeNode)) {
        const num = parseInt(val);
        thisNode = new TreeNode(num);
      } else {
        thisNode = val;
      }

      const leftIndex = i * 2 + 1;
      const rightIndex = i * 2 + 2;

      if (array[leftIndex] !== undefined && array[leftIndex] !== "null") {
        array[leftIndex] = new TreeNode(parseInt(array[leftIndex]));
        thisNode.left = array[leftIndex];
      }
      if (array[rightIndex] !== undefined && array[rightIndex] !== "null") {
        array[rightIndex] = new TreeNode(parseInt(array[rightIndex]));
        thisNode.right = array[rightIndex];
      }
      return thisNode;
    });
  return output[0];
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

module.exports = { serialize, deserialize };
