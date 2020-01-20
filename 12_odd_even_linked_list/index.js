/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const oddEvenList = function(head) {
  if (!head) return head;
  const oddVals = [];
  const evenVals = [];

  let currentOdd = head;
  let currentEven = head.next;
  while (currentOdd !== null && currentEven !== null) {
    oddVals.unshift(currentOdd.val);
    evenVals.unshift(currentEven.val);
    currentOdd = currentEven.next;
    if (currentOdd) currentEven = currentOdd.next;
  }
  if (currentOdd) oddVals.unshift(currentOdd.val);

  let newList = null;
  const vals = [...evenVals, ...oddVals];

  for (let i = 0; i < vals.length; i++) {
    const val = vals[i];
    const temp = newList;
    newList = new ListNode(val);
    newList.next = temp;
  }
  return newList;
};

module.exports = { oddEvenList };
