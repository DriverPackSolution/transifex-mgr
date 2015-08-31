export default class DumpCommand {
  constructor (options) {
    Object.assign(this, options)
  }

  async listLanguages () {
    const { transifex } = this
    console.log('listing')
    const stats = await transifex.statistics()
    const languages = Object.entries(stats)
      .filter(([key, lang]) => lang.translated_entities > 0)
      .map(([key, lang]) => {
        return key
      })
    this.languages = languages
  }

  async downloadAllResources () {
    const { transifex } = this
    const res = await transifex.downloadResource()
    console.log(res.body)
  }

  async storeAllResources () {

  }

  async run () {
    await this.listLanguages()
    console.log('lang', this.languages);
    // await this.downloadAllResources()
    // await this.storeAllResources()
  }
}
