import { random, shuffleArray } from '@/shared/utils'

test('random', () => {
  expect(random.constructor === Function).toBe(true)
  expect(random(10,10)).toBe(10);
  let nRandom = random(50,200)
  expect(nRandom).toBeGreaterThanOrEqual(50)
  expect(nRandom).toBeLessThanOrEqual(200)
  nRandom = random(80,100)
  expect(nRandom).toBeGreaterThanOrEqual(80)
  expect(nRandom).toBeLessThanOrEqual(100)
  nRandom = random(100,101)
  expect(nRandom).toBeGreaterThanOrEqual(100)
  expect(nRandom).toBeLessThanOrEqual(101)
});

test('shuffleArray', () => {
  expect(shuffleArray.constructor === Function).toBe(true)
  let testArray = [1,2,3]
  expect(shuffleArray(testArray).constructor === Array).toBe(true)
  testArray = [{a:1},{a:2},{a:3}]
  expect(shuffleArray(testArray).constructor === Array).toBe(true)
})
