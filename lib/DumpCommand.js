export default class DumpCommand {
  constructor (options) {
    Object.assign(this, options)
  }

  async downloadAllResources () {
    const { transifex } = this
    console.log('reading')
    const res = await transifex.downloadResource()
    console.log(res.body.content)

  }

  async storeAllResources () {

  }

  async run () {
    await this.downloadAllResources()
    await this.storeAllResources()
  }
}
