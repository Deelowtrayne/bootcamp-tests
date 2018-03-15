describe("regCheck function", function() {
  it('regCheck() should return true if the registration number ends with GP, L, EC or MP', function(){
    assert.equal(regCheck('DV 23 NB GP', 'GP'), true);
  });
  it('regCheck() should return false if the registration number does not end with GP, L, EC or MP', function(){
    assert.equal(regCheck('DV 23 NB GP', 'GP'), true);
  });
});
