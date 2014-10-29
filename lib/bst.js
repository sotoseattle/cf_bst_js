(function(exports) {

  function BST(val) {
    this.val = val;
    this.left = null;
    this.right = null;

    this.root = this;
    this.level = 1
    this.node_level = 1;

    this.bal = 0;
    this.count = 1;
  }

  BST.prototype = {
    contains: function(value) {
      if (this.val === value) { return true };
      if (value < this.val) {
        if (this.left) { return this.left.contains(value); }
      } else if (this.right) {
        return this.right.contains(value);
      };
      return false;
    },

    insert: function(value) {
      if (this.val === value) { return };
      if (value < this.val) {
        if (this.left) { this.left.insert(value) }
        else { this.add_node(value, 'left') };
      } else {
        if (this.right) { this.right.insert(value) }
        else { this.add_node(value, 'right') }
      }
    },

    add_node: function(value, side) {
      var new_node = new BST(value);

      new_node.root = this.root;
      new_node.node_level = this.node_level + 1;
      this.root.level = Math.max(new_node.node_level, this.root.level)
      this.root.count++;

      if (side == 'left') {
        this.root.bal++;
        this.left = new_node
      } else {
        this.root.bal--;
        this.right = new_node;
      }
    },

    size: function() { return this.root.count },
    depth: function() { return this.root.level; },
    balance: function() { return this.root.bal; }
  };

  exports.BST = BST;
})(this);

