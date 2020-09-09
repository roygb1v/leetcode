class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = this.right = null;
    }
    insertLeft(value) {
        this.left = new TreeNode(value);
        return this.left;
    }
    insertRight(value) {
        this.right = new TreeNode(value);
        return this.right;
    }
}

const fallingLeaves = (root) => {
    const arr = [];
    let height = getMaxDepth(root);
    for (let i = 0; i < height; i += 1) {
        arr.push([]);
    }
    const dfs = (node, result) => {
        if (!node) {
            return 0;
        }
        let left = dfs(node.left, result);
        let right = dfs(node.right, result);
        let n = Math.max(left, right) + 1;
        result[n-1].push(node.value);
        return n;
    }
    dfs(root, arr);
    return arr;
}

const getMaxDepth = (node) => {
    if (!node) {
        return 0;
    }
    let left = getMaxDepth(node.left);
    let right = getMaxDepth(node.right);
    let height = Math.max(left, right) + 1;
    return height;
}
