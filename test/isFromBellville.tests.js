describe("isFromBellville function", function(){
  // local vairables
  var regNumber = 'CY982364';

  //tests
  it('isFromBellville() should return true if the regitration number is from Bellville', function(){
    assert.equal(isFromBellville(regNumber), true);
  });
  
});
