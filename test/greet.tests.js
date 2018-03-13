
describe('greet function', function(){
  // Local variables
  var personName = "Luvuyo";
  it('greet() should return a greeting message like: Hello, Tshepo', function(){
    assert.equal(greet(personName), 'Hello, ' + personName);
  });
  it('greet() should return a string', function(){
    assert.typeOf(greet(personName), 'string');
  });
});
