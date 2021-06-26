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
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }

    let maxDepth = 1;
    root.depth = 1;
    travel(root);

    return maxDepth;

    function travel(root) {
        if (!root) {
            return;
        }
        if (root.left) {
            root.left.depth = root.depth + 1;
            if (root.left.depth + 1 > maxDepth) {
                maxDepth = root.left.depth;
            }
            travel(root.left);
        }

        if (root.right) {
            root.right.depth = root.depth + 1;
            if (root.right.depth + 1 > maxDepth) {
                maxDepth = root.right.depth;
            }
            travel(root.right);
        }
    }
};