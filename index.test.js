const index = require('./index');

it('Lower case to capitalize', () => {
  expect(index.capitalize('hello world!')).toBe('Hello world!');
});

it('CAPS to capitalize', () => {
  expect(index.capitalize('HELLO WORLD!')).toBe('Hello world!');
});

it('Reverse string simple', () => {
  expect(index.reverse('Hello')).toBe('olleH');
});

it('Reverse string with punctuation', () => {
  expect(index.reverse('Hello world!')).toBe('!dlrow olleH');
});
