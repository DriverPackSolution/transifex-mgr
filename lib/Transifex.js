import request from 'superagent'
const debug = (...args) => console.log('Transifex', ...args)

require('superagent-promise')(require('superagent'), Promise)

export default class Transifex {
  constructor (options) {
    this.endpoint = 'https://www.transifex.com/api/2'
    Object.assign(this, options)
  }

  async get (apiUrl) {
    const { endpoint } = this
    debug('GET', apiUrl)
    const res = await request
      .get(endpoint + apiUrl)
      .auth(this.username, this.password)
    return res.body
  }

  url (source_string_hash) {
    const { endpoint, project_slug, resource_slug } = this
    // return `${endpoint}project/${project_slug}/resource/driverpack-solution/?details`
  }


  url2 (source_string_hash) {
    const {project_slug, resource_slug} = this
    return `${endpoint}project/${project_slug}/resource/driverpack-solution/translation/en/`
    // return `${endpoint}project/${project_slug}/resource/driverpack-solution/content`
    // return `/project/${project_slug}/resource/${resource_slug}/source/${source_string_hash}/`
  }

  async statistics () {
    const { project_slug } = this
    return this.get(`/project/${project_slug}/resource/driverpack-solution/stats/`)
  }

  async downloadResource () {
    // url = `-X PUT -H "Content-Type: application/json" \ --data '{"comment": "Foo string", "tags": ["foo"], "character_limit": 140}'`
    const apiUrl = this.url('en.js')
  }

  async uploadResource () {
      // url = `curl -i -L --user username:password
     // -X PUT
      // -H "Content-Type: application/json"
      // \ --data '{"comment": "Foo string", "tags": ["foo"], "character_limit": 140}'`

  }
}
