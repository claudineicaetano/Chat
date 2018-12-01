const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
        id: '1',
        name: 'Alice',
        room: 'Angular dev'
    }, {
        id: '2',
        name: 'Bob',
        room: 'Angular dev'
    }, {
        id: '3',
        name: 'Eve',
        room: 'Angular business'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '12345678',
      name: 'Alice',
      room: 'Angular developer office'
    };

    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '3';
    var user = users.removeUser(userId);
    
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userId = '30';
    var user = users.removeUser(userId);
    
    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);
    
    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '40';
    var user = users.getUser(userId);
    
    expect(user).toBeFalsy();
  });

  it('should return names for Angular dev', () => {
    var userList = users.getUserList('Angular dev');
    
    expect(userList).toEqual(['Alice', 'Bob']);
  });

  it('should return names for Angular business', () => {
    var userList = users.getUserList('Angular business');
    
    expect(userList).toEqual(['Eve']);
  });
});