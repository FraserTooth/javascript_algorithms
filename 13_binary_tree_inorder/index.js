// Given a binary tree, return the inorder traversal of its nodes' values.
// LEFT - NODE - RIGHT

// Example:

// Input: [1,null,2,3]
//     1
//   /  \
// null  2
//      /  \
//     3   null

// Output: [1,3,2]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
  const stack = [];
  const output = [];

  stack.push(root);
  while (stack.length !== 0) {
    console.log(stack);
    const node = stack.pop();
    if (node.right) stack.push(node.right);
    if (node.left) {
      stack.push(node.left);
    } else {
      output.push(node.val);
    }
  }
  return output;
};

module.exports = { inorderTraversal };
