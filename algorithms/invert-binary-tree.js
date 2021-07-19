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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    travel(root);

    return root;

    function travel(root) {
        if (!root) {
            return;
        }
        
        exchange(root);

        if (root.left) {
            travel(root.left);
        }

        if (root.right) {
            travel(root.right);
        }
    }

    function exchange(root) {
        let temp = root.right;
        root.right = root.left;
        root.left = temp;
    }
};


