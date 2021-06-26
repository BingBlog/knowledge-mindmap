/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let cacheA = new Set();
    let tempHeadA = headA;
    while(tempHeadA) {
        cacheA.add(tempHeadA);
        tempHeadA = tempHeadA.next;
    }

    let tempHeadB = headB;
    while(tempHeadB) {
        if (cacheA.has(tempHeadB)) {
            return tempHeadB;
        }
        else {
            tempHeadB = tempHeadB.next;
        }
    }
    return null;
};