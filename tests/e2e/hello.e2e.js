const { expect } = require('@wdio/globals')
const HelloPage = require('../pages/hello.page')

describe('My hello world page', () => {
    it('Проверка кнопки toogle', async () => {
        await HelloPage.open()
        await HelloPage.toogleTitleWithInput('hello')
        await expect(HelloPage.title).toBeExisting()
        await HelloPage.toggleBtn.click()
        await expect(HelloPage.title).not.toBeExisting()
    })
    it('Проверка некоректного текста toogle', async () => {
        await HelloPage.open()
        await HelloPage.toogleTitleWithInput('некоректный текст')
        await expect(HelloPage.title).not.toBeExisting()
    })

})

