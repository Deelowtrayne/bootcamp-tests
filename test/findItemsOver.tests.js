describe('findItemsOver function', function(){
  let items = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
  ];
  it('findItemsOver() should return a list of items with quantity over 5', function(){
    assert.deepEqual(findItemsOver(items, 5),[{name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27}]);
  });
  it('findItemsOver() should return a list of items with quantity over 30', function(){
    assert.deepEqual(findItemsOver(items, 30),[{name : 'pears', qty : 37}]);
  });
});
