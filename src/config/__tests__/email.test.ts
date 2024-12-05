describe('Email Config', () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...OLD_ENV }
  })

  afterAll(() => {
    process.env = OLD_ENV
  })

  it('should use TEST_EMAIL_CONFIG in test environment', () => {
    const originalEnv = process.env.NODE_ENV
    Object.defineProperty(process.env, 'NODE_ENV', { value: 'test' })
    const { EMAIL_CONFIG } = require('@/')

    expect(EMAIL_CONFIG).toEqual({
      SERVICE_ID: 'service_r1404pk',
      TEMPLATE_ID: 'template_ww5aa56',
      ADMIN_EMAIL: 'hhh28110101@gmail.com',
      PUBLIC_KEY: '3WsPc_1dJjxodHzik',
    })

    Object.defineProperty(process.env, 'NODE_ENV', { value: originalEnv })
  })

  it('should use PROD_EMAIL_CONFIG with environment variables', () => {
    const originalEnv = process.env.NODE_ENV
    Object.defineProperty(process.env, 'NODE_ENV', { value: 'production' })
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID = 'prod_service_id'
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = 'prod_template_id'
    process.env.NEXT_PUBLIC_ADMIN_EMAIL = 'prod@example.com'
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = 'prod_public_key'

    const { EMAIL_CONFIG } = require('@/config/email')

    expect(EMAIL_CONFIG).toEqual({
      SERVICE_ID: 'prod_service_id',
      TEMPLATE_ID: 'prod_template_id',
      ADMIN_EMAIL: 'prod@example.com',
      PUBLIC_KEY: 'prod_public_key',
    })

    Object.defineProperty(process.env, 'NODE_ENV', { value: originalEnv })
  })

  it('should use empty strings for undefined environment variables', () => {
    const originalEnv = process.env.NODE_ENV
    Object.defineProperty(process.env, 'NODE_ENV', { value: 'production' })
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID = undefined
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = undefined
    process.env.NEXT_PUBLIC_ADMIN_EMAIL = undefined
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = undefined

    const { EMAIL_CONFIG } = require('@/config/email')

    expect(EMAIL_CONFIG).toEqual({
      SERVICE_ID: '',
      TEMPLATE_ID: '',
      ADMIN_EMAIL: '',
      PUBLIC_KEY: '',
    })

    Object.defineProperty(process.env, 'NODE_ENV', { value: originalEnv })
  })
})
