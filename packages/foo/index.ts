import { createCoreContext, translate } from '@intlify/core'

const ctx = createCoreContext({
  locale: 'en',
  messages: {
    en: {
      hello: 'Hello World!',
    },
  },
})

console.log(translate(ctx, 'hello')) // -> 'Hello World!'
