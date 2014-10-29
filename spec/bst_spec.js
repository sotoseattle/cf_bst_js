var should = chai.should();

describe('BST', function() {
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

  it('seach the tree', function(){
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
});

