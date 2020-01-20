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
  if (!root) return output;

  stack.push(root);
  while (stack.length !== 0) {
    const node = stack.pop();
    //Push Right onto the Stack
    if (node.right) stack.push(node.right);
    //If there is a Left
    if (node.left) {
      //Push a scraped node(to avoid loops) back onto the stack
      stack.push({ val: node.val });
      //Push Left onto the stack
      stack.push(node.left);
    } else {
      //If no left or right, push to output
      output.push(node.val);
    }
  }
  return output;
};

module.exports = { inorderTraversal };
