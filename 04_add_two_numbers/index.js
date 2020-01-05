/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const addTwoNumbers = function(l1, l2, carry = 0) {
  const node = new ListNode(l1.val + l2.val + carry);
  if (node.val >= 10) {
    node.val = node.val % 10;
    node.next = addTwoNumbers(
      l1.next || new ListNode(0),
      l2.next || new ListNode(0),
      1
    );
  } else if (l1.next || l2.next) {
    node.next = addTwoNumbers(
      l1.next || new ListNode(0),
      l2.next || new ListNode(0),
      0
    );
  }
  return node;
};

module.exports = { addTwoNumbers };
