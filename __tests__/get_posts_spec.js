const frisby = require('frisby');
const baseUrl = require('../support/helpers').baseUrl;
const userId = require('../support/routes').userId;
const pageId = require('../support/routes').pageId;

describe ('A GET request on baseUrl', () => {
  it('should return a response in JSON', () => {
    return frisby.get(baseUrl)
    .expect('status', 200)
    .expect('header', 'Content-Type', 'application/json; charset=utf-8')
  });
});

describe ('A GET request on baseUrl with a userID', () => {
  it('should return a response in JSON with all the user details', () => {
    return frisby.get(baseUrl + userId)
    .expect('status', 200)
    .expect('header', 'Content-Type', 'application/json; charset=utf-8')
    .then((res) => {
      var response  = JSON.parse(res['_body']);
      expect(response.data['id']).toBe(1);
      expect(response.data['first_name']).toBe("George");
      expect(response.data['last_name']).toBe("Bluth");
      expect(response.data['avatar']).toBe("https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg");
    })
  });
});

describe ('A GET request on baseUrl with a page number', () => {
  it('should return a response in JSON with all the user details for the page', () => {
    return frisby.get(baseUrl + pageId)
    .expect('status', 200)
    .expect('header', 'Content-Type', 'application/json; charset=utf-8')
    .then((res) => {
      var response  = JSON.parse(res['_body']);
      expect(response.page).toBe(2);
    })
  });
});

