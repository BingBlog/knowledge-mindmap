/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    const cache = new Set();
    while (head) {
        if (cache.has(head)) {
            return true;
        }
        cache.add([head);
    }
    return false;
};


// 快慢指针
var hasCycleA = function (head) {
    let slowPoint = head;
    let fastPoint = head.next;
    while (fastPoint) {
        if (slowPoint === fastPoint) {
            return false;
        }
        if (!fastPoint.next) {
            return false;
        }
        slowPoint = slowPoint.next;
        fastPoint = fastPoint.next.next;
    }
    return false;
};
