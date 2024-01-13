import { greet, sayGoodBye } from './greet'

jest.mock('./greet')

jest.mock('./greet', () => ({
  ...jest.requireActual('./greet'),
  sayGoodBye: (name: string) => `Good byd, ${name}`,
}))

test('greet', () => {
  expect(greet('Taro')).toBe('Hello Taro')
})

test('sayGoodBye', () => {
  expect(sayGoodBye('Taro')).toBe('Good byd, Taro')
})
