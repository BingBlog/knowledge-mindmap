/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let newHead = null;

    while (head) {
        let temp = newHead;

        let newNode = new ListNode();
        newNode.val = head.val;
        newNode.next = temp;
        newHead = newNode;

        head = head.next;
    }

    return newHead;
};