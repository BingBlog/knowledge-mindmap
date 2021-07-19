/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let list = [];

    while (head) {
        list.push(head);
        head = head.next;
    }

    let length = list.length;
    for (let i = 0, j = length; i < j; i++, j--) {
        if (list[i] !== list[j]) {
            return false;
        }
    }

    return true;
};