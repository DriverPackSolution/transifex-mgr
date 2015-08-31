import request from 'superagent'
const debug = (...args) => console.log(...args)

require('superagent-promise')(require('superagent'), Promise)

export default class Transifex {
  constructor (options) {
    Object.assign(this, options)
  }

  url (source_string_hash) {
    const {project_slug, resource_slug} = this
    const endpoint = 'http://www.transifex.com/api/2/'
    return `${endpoint}project/${project_slug}/resource/driverpack-solution/content`
    // return `/project/${project_slug}/resource/${resource_slug}/source/${source_string_hash}/`
  }

  async downloadResource () {
    // url = `-X PUT -H "Content-Type: application/json" \ --data '{"comment": "Foo string", "tags": ["foo"], "character_limit": 140}'`
    const apiUrl = this.url('en.js')
    debug('url', apiUrl)
    // --user username:password
    return await request
      .get(apiUrl)
      .auth(this.username, this.password)
  }

  async uploadResource () {
      // url = `curl -i -L --user username:password
     // -X PUT
      // -H "Content-Type: application/json"
      // \ --data '{"comment": "Foo string", "tags": ["foo"], "character_limit": 140}'`

  }
}
