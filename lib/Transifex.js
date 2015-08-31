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

  async statistics () {
    const { project_slug } = this
    return this.get(`/project/${project_slug}/resource/driverpack-solution/stats/`)
  }

  async originalContent () {
    const { project_slug } = this
    const res = await this.get(`/project/${project_slug}/resource/driverpack-solution/content`)
    return res.content
  }

  async translationContent (lang) {
    const { project_slug } = this
    const res = await this.get(`/project/${project_slug}/resource/driverpack-solution/translation/${lang}`)
    return res.content
  }
}
