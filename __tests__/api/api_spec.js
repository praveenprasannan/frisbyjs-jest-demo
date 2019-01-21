const frisby = require('frisby');

describe('FrisbyJS GET request', () => {
  it('should return the response in JSON', () => {
    return frisby.get('https://reqres.in/api/users/1')
      .expect('status', 200);
  })
});
