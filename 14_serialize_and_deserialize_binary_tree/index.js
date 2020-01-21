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
  if (!root || !root.val) {
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
  const array = string.substring(1, string.length - 1).split(",");

  let tree = new TreeNode(parseInt(array[0]));

  const buildTree = (index, nodeRef) => {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    let leftVal = null;
    let rightVal = null;

    if (array[leftIndex]) {
      leftVal = parseInt(array[leftIndex]);
    }

    if (array[rightIndex]) {
      rightVal = parseInt(array[rightIndex]);
    }

    if (leftVal || leftVal === 0) {
      nodeRef.left = new TreeNode(leftVal);
      buildTree(leftIndex, nodeRef.left);
    }
    if (rightVal || rightVal === 0) {
      nodeRef.right = new TreeNode(rightVal);
      buildTree(rightIndex, nodeRef.right);
    }
    return nodeRef;
  };

  return buildTree(0, tree);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

module.exports = { serialize, deserialize };
