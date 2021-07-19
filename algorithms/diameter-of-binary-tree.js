/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;
    depth(root);

    return maxDiameter;


    function depth(root) {
        if (!root) {
            return;
        }
        let leftDepth = depth(root.left);
        let rightDepth = depth(root.right);

        let currentDiameter = leftDepth + rightDepth + 1;

        if (currentDiameter > maxDiameter) {
            maxDiameter = currentDiameter;
        }
    }
};