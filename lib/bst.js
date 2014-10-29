(function(exports) {

  var add_node = function(bst, value, side) {
    var new_node = new BST(value);
    new_node.root = bst.root;
    new_node.node_level = bst.node_level + 1;
    side == 'left' ? bst.left = new_node : bst.right = new_node;
    update_root(bst, new_node.node_level, side);
  };

  var update_root = function(bst, level, side) {
    bst.root.level = Math.max(level, bst.root.level);
    bst.root.count++;
    side=='left' ? bst.root.bal++ : bst.root.bal--;
  };

  function BST(val) {
    this.val = val;
    this.left = null;
    this.right = null;

    this.root = this;
    this.node_level = 1;
  }

  BST.prototype = {
    contains: function(value) {
      if (this.val === value) { return true };
      if (value < this.val) {
        if (this.left) { return this.left.contains(value) }
      } else {
        if (this.right) { return this.right.contains(value) }
      };
      return false;
    },

    insert: function(value) {
      if (this.val === value) { return };
      if (value < this.val) {
        if (this.left) { this.left.insert(value) }
        else { add_node(this, value, 'left') };
      } else {
        if (this.right) { this.right.insert(value) }
        else { add_node(this, value, 'right') }
      }
    },

    size: function() { return this.root.count },
    depth: function() { return this.root.level; },
    balance: function() { return this.root.bal; },

    search_by_depth: function(mode) {
      var sol = [];
      switch(mode) {
        case 'pre':
          sol = sol.concat([this.val])
                   .concat(this.go_left(mode))
                   .concat(this.go_right(mode));
          break;
        case 'in':
          sol = sol.concat(this.go_left(mode))
                   .concat([this.val])
                   .concat(this.go_right(mode));
          break;
        case 'post':
          sol = sol.concat(this.go_left(mode))
                   .concat(this.go_right(mode))
                   .concat([this.val]);
          break;
        default:
          return "unrecognized mode";
      }
      return sol;
    },

    go_left:  function(mode) { return this.left ? this.left.search_by_depth(mode) : [] },
    go_right: function(mode) { return this.right ? this.right.search_by_depth(mode) : [] },

    breadth_first_search: function(queue){
      if (!queue) { var queue = [] };
      var sol = [this.val];

      if (this.left) { queue.push(this.left)};
      if (this.right) { queue.push(this.right) };

      while (queue.length > 0) {
        sol = sol.concat(queue.shift().breadth_first_search(queue));
      }
      return sol
    }
  };

  exports.BST = BST;
})(this);

(function(exports) {
  function Root(val) {
    BST.call( this, val );
    this.level = 1;
    this.bal = 0;
    this.count = 1;
  };
  Root.prototype = new BST();

  exports.Root = Root;
})(this);
