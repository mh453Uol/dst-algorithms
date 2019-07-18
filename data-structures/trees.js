class TNode {

    constructor(value) {
        this.value = value;
    }
    value;
    children = [];
}

class Tree {
    /*
        Tree {
            root: {
                value: 1,
                children: [
                    { value: 2, children: [...] },
                    { value: 3, children: [...] }
                ]
            }
        }
    */
    root = null;


    traverse(callback) {
        // Define a walk function which calls the callback and recursively
        // calls itself.
        function walk(node) {
            callback(node);
            // recursivley call walk for each node
            node.children.forEach(walk);
        }
        walk(this.root);
    }

    /**
     * Add node to parent node children
     * @param {string} value 
     * @param {TNode} parentNode 
     */
    add(value, parentValue) {
        let node = new TNode(value);
        let parent = null;

        // handle when root is empty
        if (this.root === null) {
            this.root = node;
            return;
        }

        // if we find the parent then set its children/
        this.traverse((_node) => {
            if (_node.value == parentValue) {
                parent = _node;
            }
        });

        if (parent != null) {
            parent.children.push(node);
        }
    }

    print(node) {
        console.log(`${node.value}`);
    }
}

/*
  Imagine taking a sequence of numbers:
 *
 *     1  2  3  4  5  6  7
 *
 * And turning it into a tree starting from the center.
 *
 *              4
 *           /     \
 *        2           6
 *      /   \       /   \
 *     1     3     5     7
 *    -^--^--^--^--^--^--^-
 *     1  2  3  4  5  6  7
 *
 * This is how a binary tree works. Each node can have two children:
 *
 *     - Left: Less than parent node's value.
 *     - Right: Greater than parent node's value.
 *
 * > Note: In order to make this work all values must be unique in the tree.
 */

class BNode {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
    value;
    left;
    right;
}
class BinarySearchTree {

    // Root 
    //      -> LEFT (always less than root)
    //      -> RIGHT (always greater than root)
    root = null;

    contains(value) {
        function traverse(node) {
            if(node === undefined) {
                return false;
            }
            if (value == node.value) {
                return true;
            } else if (value < node.value) {
                return traverse(node.left);
            } else if (value > node.value) {
                return traverse(node.right);
            }
        }

        return traverse(this.root);
    }

    add(value) {
        
    }
}