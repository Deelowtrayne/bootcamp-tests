describe('totalPhoneBill function', function(){
  let data = 'call, sms, call, sms, sms';
  it('totalPhoneBill should return the total bill like: R7.45', function(){
    assert.deepEqual(totalPhoneBill(data), 'R7.45');
  });
  it('totalPhoneBill should return false if the output is not R7.45', function(){
    assert.notDeepEqual(totalPhoneBill(data), 'R30.00', false);
  });
});
