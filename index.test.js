const capitalize = require('./index');

it('Lower case to capitalize', () => {
  expect(capitalize('hello world!')).toBe('Hello world!');
});

it('CAPS to capitalize', () => {
  expect(capitalize('HELLO WORLD!')).toBe('Hello world!');
});
