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

it('Calculator input type check', () => {
  expect(index.calculator.add('one', 2)).toBe('Arguments must be a number');
});

it('Calculator sum', () => {
  expect(index.calculator.add(2, 5)).toBe(7);
});

it('Calculator subtract', () => {
  expect(index.calculator.subtract(20, 5)).toBe(15);
});

it('Calculator multiply', () => {
  expect(index.calculator.multiply(3, 4)).toBe(12);
});

it('Calculator divide', () => {
  expect(index.calculator.divide(14, 2)).toBe(7);
});

it('Calculator divide by zero', () => {
  expect(index.calculator.divide(14, 0)).toBe(`Error: can't divide by zero`);
});

it('Caesar cipher simple', () => {
  expect(index.caesar('abc', 1)).toBe('bcd');
});

it('Caesar cipher cycle', () => {
  expect(index.caesar('xyz', 1)).toBe('yza');
});

it('Caesar cipher negative offset', () => {
  expect(index.caesar('abc', -1)).toBe('zab');
});

it('Caesar cipher big offset', () => {
  expect(index.caesar('abc', 100)).toBe('wxy');
});

it('Caesar cipher punctuation', () => {
  expect(index.caesar('a bc!', 1)).toBe('b cd!');
});

it('Caesar cipher digits', () => {
  expect(index.caesar('abc2', 1)).toBe('bcd2');
});

it('Caesar cipher same', () => {
  expect(index.caesar('abc', 0)).toBe('abc');
});

it('Caesar cipher different case', () => {
  expect(index.caesar('Abc', 1)).toBe('Bcd');
});
