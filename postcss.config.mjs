const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    'postcss-prefix-selector': {
      prefix: '.freshy-cms',
      includeFiles: [/app\/admin\/cms\.css$/],
      transform(prefix, selector, prefixedSelector) {
        if (selector.includes('&')) return selector
        if (/^(html|body|:root|:host)(?=[\s.:[\]]|$)/.test(selector)) {
          return selector.replace(/^(html|body|:root|:host)/, prefix)
        }
        return prefixedSelector
      },
    },
  },
}

export default config
