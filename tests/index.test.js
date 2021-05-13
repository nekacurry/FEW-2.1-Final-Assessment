const ci = require('../index.js');

test('formatPhone', () => {
  expect(ci.formatPhone('1234567890')).toBe(('(123) 456-7890'))
})

test('formatPhone empty', () => {
  expect(ci.formatPhone('')).toBe(('No number on file'))
})