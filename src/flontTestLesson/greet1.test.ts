import { greet } from './greet'

test('greet', () => {
  expect(greet('Taro')).toBe('Hello Taro')
})
