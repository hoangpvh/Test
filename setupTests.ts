import '@testing-library/jest-dom'

declare global {
  interface SVGElement {
    getBBox(): { x: number; y: number; width: number; height: number }
  }
}

window.SVGElement.prototype.getBBox = () => ({
  x: 0,
  y: 0,
  width: 0,
  height: 0,
})

afterEach(() => {
  jest.restoreAllMocks()
})
