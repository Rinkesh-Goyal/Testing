// const { test } = require('jest-circus');
const capitalize = require('./capitalize');

test('hello becomes Hello', () => {
  expect(capitalize('hello')).toMatch(/Hello/);
});

test('Blank string', () => {
    expect(capitalize('')).toMatch(/ERROR/);
});

test('Not a string', () => {
   expect(capitalize(12345)).toMatch(/ERROR/);
});

test('Already capitalized', () => {
    expect(capitalize('Hello')).toMatch(/Hello/);
});

test('first character should not be a number', () => {
    expect(capitalize('1Hello')).toMatch(/ERROR/);
});

test('Capital String', () => {
    expect(capitalize('HELLO')).toMatch(/HELLO/);
});

test('String with spaces', () => {
    expect(capitalize('HELLO Everyone')).toMatch(/HELLO Everyone/);
});

test('String with spaces', () => {
    expect(capitalize('hello Everyone')).toMatch(/Hello Everyone/);
});

test('String with spaces', () => {
    expect(capitalize('$ELLO Everyone')).toMatch(/ERROR/);
});
 