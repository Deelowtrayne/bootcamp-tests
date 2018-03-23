describe('countAllPaarl function', function(){
  let list = 'CJ623772, CY97305, CJ294756, CJ872348, CA274350';
  it('countAllPaarl() should return the number of registrations belonging to Paarl', function(){
    assert.equal(countAllPaarl(list), 3);
  });
  it('This should return true if the countAllPaarl() output is a number', function(){
    assert.isNumber(countAllPaarl(list), true);
  });
});
