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

const oddEvenList = function(head) {
  if (!head) return head;

  let odd = head;
  let even = head.next;
  while (odd.next && odd.next.next) {
    //Even Pointer
    let evenPointer = odd.next;

    //Connect Even to Next Even
    odd.next = odd.next.next;

    //Connect Odd to Next Odd
    odd = odd.next;

    //Connect Even Chain to Next Even
    evenPointer.next = odd.next;
  }
  //Connect Even to Odd Chain
  odd.next = even;
  return head;
};

module.exports = { oddEvenList };
