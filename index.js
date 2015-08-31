import Transifex from './lib/Transifex'

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
  console.log('reading');
  const res = await transifex.downloadResource()
  console.log(res.body.content)
}

let f = () => console.log('3334');
f()

main().then(
  () => {console.log('done')},
  (err) => {console.log('err', err.stack)}
)
