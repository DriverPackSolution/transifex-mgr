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

  async downloadOriginal () {
    const { transifex } = this
    const res = await transifex.originalContent()
    this.files.original = res
  }

  async downloadTranslations () {
    const { transifex } = this
    await* this.languages.map(async lang => {
      const res = await transifex.translationContent(lang)
      this.files[lang] = res
    })
  }


  async storeAllResources () {

  }

  async run () {
    this.files = {}
    await this.listLanguages()
    await this.downloadOriginal()
    await this.downloadTranslations()
    // await this.storeAllResources()
    console.log('files', this.files)
  }
}
