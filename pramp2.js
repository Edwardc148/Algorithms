// Constructor to create a new Node
function Node(key) {
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}

// Constructor to create a new BST
function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.findLargestSmallerKey = function(num) {
  debugger;
  const rootNode = this.root; // 20
  if (rootNode.key > num) {
    if (rootNode.left) {
      const BST = new BinarySearchTree();
      BST.root = rootNode.left;
      BST.findLargestSmallerKey(num);
    } else {
      return -1;
    }
  } else if (rootNode.right) {
    const right_BST = new BinarySearchTree();
    right_BST.root = rootNode.right;
    right_BST.findLargestSmallerKey(num);
  } else {
    return this.root.key;
  }
  // your code goes here
};


BinarySearchTree.prototype.insert = function(key) {
  var root = this.root;

  // 1. If the tree is empty, create the root
  if(!root) {
      this.root = new Node(key);
      return;
  }

  // 2) Otherwise, create a node with the key
  //    and traverse down the tree to find where to
  //    to insert the new node
  var currentNode = root;
  var newNode = new Node(key);

  while(currentNode !== null) {
      if(key < currentNode.key) {
          if(!currentNode.left) {
              currentNode.left = newNode;
              newNode.parent = currentNode;
              break;
          } else {
              currentNode = currentNode.left;
          }
      } else {
          if(!currentNode.right) {
              currentNode.right = newNode;
              newNode.parent = currentNode;
              break;
          } else {
              currentNode = currentNode.right;
          }
      }
  }
};

var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);


var result = bst.findLargestSmallerKey(17);

console.log("Largest smaller number is " + result);



function findLargestSmallerKey(rootNode, num):
    result = -1

    while (rootNode != null):
        if (rootNode.key < num):
            result = rootNode.key
            rootNode = rootNode.right
        else:
            rootNode = rootNode.left

    return result
end 
