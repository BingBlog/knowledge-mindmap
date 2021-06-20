/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 一个输是否对称，
 *
 * @param {TreeNode} root
 * @return {boolean}
 *
 */
var isSymmetric = function (root) {
    return isMirror(root, root);

    function isMirror(root1, root2) {
        if (!root & !root2) {
            return true;
        }

        if (!root1 || !root2) {
            return false;
        }

        return (root1.val === root2.val) && isMirror(root1.left, root2.right) && isMirror(root1.right, root2.left);
    }
};
