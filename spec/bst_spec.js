var should = chai.should();

describe('Node', function() {
  it('create an empty tree', function() {
    var bt = new BST(5);
    bt.val.should.equal(5);
    bt.size().should.equal(1);
    should.equal(bt.left, null);
    should.equal(bt.right, null);
    bt.depth().should.equal(1);
  });

  it('insert in a tree', function(){
    var bt = new BST(5);
    bt.insert(4);
    bt.val.should.equal(5);
    bt.left.val.should.equal(4);
    should.equal(bt.right, null);
    should.equal(bt.left.left, null);
    should.equal(bt.left.right, null);
    bt.size().should.equal(2);
    bt.balance().should.equal(1);
    bt.depth().should.equal(2);
  });

  it('insert and query the tree', function(){
    bt = new BST(5)
    bt.depth().should.equal(1);

    bt.insert(6)
    bt.balance().should.equal(-1);
    bt.depth().should.equal(2);
    bt.size().should.equal(2);

    bt.insert(7)
    bt.balance().should.equal(-2);
    bt.depth().should.equal(3);
    bt.size().should.equal(3);

    bt.insert(4)
    bt.depth().should.equal(3);
    bt.size().should.equal(4);

    bt.insert(2)
    bt.balance().should.equal(0);
    bt.depth().should.equal(3);
    bt.size().should.equal(5);

    bt.insert(3)
    bt.insert(1)
    bt.balance().should.equal(0);
    bt.depth().should.equal(4);
    bt.size().should.equal(7);

    bt.contains(0).should.equal(false);
    bt.contains(1).should.equal(true);
    bt.contains(2).should.equal(true);
    bt.contains(3).should.equal(true);
    bt.contains(4).should.equal(true);
    bt.contains(5).should.equal(true);
    bt.contains(6).should.equal(true);
    bt.contains(7).should.equal(true);
    bt.contains(8).should.equal(false);
  });

  it('deep search in pre order', function(){
    bt.search_by_depth('pre').should.eql([5, 4, 2, 1, 3, 6, 7]);
  });

  it('deep search in order', function(){
    bt.search_by_depth('in').should.eql([1, 2, 3, 4, 5, 6, 7]);
  });

  it('deep search post order', function(){
    bt.search_by_depth('post').should.eql([1, 3, 2, 4, 7, 6, 5]);
  });

  it('breadth first search', function(){
    bt.breadth_first_search().should.eql([5, 4, 6, 2, 7, 1, 3]);
  });

});

