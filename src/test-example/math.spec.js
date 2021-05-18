import { add } from './math'

describe('math', () => {
  describe('add', () => {
    it('should return 5 with arguments 3 and 2', () => {
      const result = add(3, 2)
      expect(result).toBe(5)
    })

    it('returns 5 for add(5)', () => {
      const result = add(5)
      expect(result).toBe(5)
    })
    it('returns 6 for add(1, 2, 3)', () => {
      const result = add(1, 2, 3)
      expect(result).toBe(6)
    })
  })
})
