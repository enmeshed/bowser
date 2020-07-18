import createConfig from './rollup.config.base.js'

const config = createConfig({
  projectPath: __dirname,
  targets: {
    "index": {},
    "main": {}
  }
})

export default config
