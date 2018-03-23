describe('countRegNumber function', function(){
  it('countRegNumber() should return a number', function(){
    assert.isNumber(countRegNumber('CA 182736,CY 523519,CJ 812328,CJ 852328'), true);
  });
  it('countRegNumber() should return the number of registration numbers in the passed list', function(){
    assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328,CJ 852328'), 4);
  });
});
