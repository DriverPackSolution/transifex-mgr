import Transifex from './lib/Transifex'
import DumpCommand from './lib/DumpCommand'

function getConfig () {
  return require('./config.json')
}

const config = getConfig()

async function main (argument) {
  const transifex = new Transifex({
    project_slug: 'driverpack-solution-rus',
    resource_slug: 'driverpack-solution',
    ...config.transifex
  })
  const cmd = new DumpCommand({transifex})
  await cmd.run()
}

main().then(
  () => {console.log('done')},
  (err) => {console.error('main:', err.stack); process.exit(1)}
)
