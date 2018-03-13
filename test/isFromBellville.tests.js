describe("isFromBellville function", function(){
  // local vairables
  var regNumber = 'CY982364';
  var args;
  //tests
  it('isFromBellville() should return true if the regitration number is from Bellville', function(){
    assert.equal(isFromBellville(regNumber), true);
    args = isFromBellville(regNumber).arguments;
  });

  it('isFromBellville() takes a one parameter', function(){
    // This tests calling Sohalo with no arguments whatsoever.
    assert.typeOf(args, 'string');
  });


});
