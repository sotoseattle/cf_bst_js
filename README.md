# Binary Search Tree

## as a JavaScript object

The tree has the following methods:

### insert(val)

Inserts the value val into the BST.
If val is already present, it will be ignored.

### contains(val):

Returns True if val is in the BST, False if not.
Traverses first left then right, in a depth first manner, pre-order.

### size():

will return the integer size of the BST (equal to the total number of values stored in the tree), 0 if the tree is empty.

### depth():

will return an integer representing the total number of levels in the tree. If there is one value, the depth should be 1, if two values it will be 2, if three values it may be 2 or three, depending, etc.

### balance():

will return an integer, positive or negative that represents how well balanced the tree is. Trees which are higher on the left than the right should return a positive value, trees which are higher on the right than the left should return a negative value.  An ideally-balanced tree should return 0.

