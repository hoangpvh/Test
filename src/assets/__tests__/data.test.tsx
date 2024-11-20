import { menuItems, techList } from '../data'

describe('Data Assets', () => {
  describe('techList', () => {
    it('should have the correct number of tech items', () => {
      expect(techList).toHaveLength(3)
    })

    it('should have correct structure for each tech item', () => {
      techList.forEach((tech) => {
        expect(tech).toHaveProperty('className')
        expect(tech).toHaveProperty('logos')
        expect(Array.isArray(tech.logos)).toBe(true)
      })
    })

    it('should have correct logos for each tech item', () => {
      techList.forEach((tech) => {
        tech.logos.forEach((logo) => {
          expect(logo).toHaveProperty('name')
          expect(logo).toHaveProperty('alt')
        })
      })
    })
  })

  describe('menuItems', () => {
    it('should have the correct number of menu items', () => {
      expect(menuItems).toHaveLength(4)
    })

    it('should have correct structure for each menu item', () => {
      menuItems.forEach((item) => {
        expect(item).toHaveProperty('key')
        expect(item).toHaveProperty('href')
        expect(item).toHaveProperty('label')
      })
    })
  })
})
