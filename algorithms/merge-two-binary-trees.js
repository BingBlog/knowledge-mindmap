/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    let root = new TreeNode();

    merge(root1, root2, root);

    return root;

    function merge(root1, root2, root) {
        // 两个子树都不存在
        if (!root1 && !root2) {
            root = null;
        }
        
        else if (!root1 && root2) {
            root = root2;
        }

        else if (root1 && !root2) {
            root = root1;
        }
        else {
            // 合并当前节点
            root.val = root1.val + root2.val;
            // 递归左边
            root.left = new TreeNode();
            merge(root1.left, root2.left, root.left);
            // 递归右边
            root.right = new TreeNode();
            merge(root1.right, root2.right, root.right);
        }
    }
};