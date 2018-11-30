var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Alice';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(typeof message.createAt).toBe('number');
    expect(message).toMatchObject({from, text});

  });
}); 

describe('generateLocationMessage', () => {
  it('hould generate correct location Object', () => {
    var from = 'Alice';
    var latitude = 100;
    var longitude = 100;
    var url = 'https://www.google.com/maps?q=100,100';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createAt).toBe('number');
    expect(message).toMatchObject({from, url});
  }); 
});