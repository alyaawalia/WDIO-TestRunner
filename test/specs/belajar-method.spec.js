import { browser, $, expect } from '@wdio/globals'

describe('Belajar Method', function (){
    it.only('Method click', async function (){
        await browser.url('https://webdriver.io/docs/api/element/click')

        const themeToggleButton = await $ ('.toggleButton_gllP')
        await themeToggleButton.click()

        await browser.pause(4000)
    })

    it('Method getText', async function (){
        await browser.url('https://webdriver.io/docs/api/element/getText')

        const paragraf = await $ ('.theme-doc-markdown p')
        const paragrafText = await paragraf.getText()

        console.log('<||||> ini text nya <||||>', paragrafText)
    })

    it('Method setValue & getValue', async function (){
        await browser.url('https://duckduckgo.com/')

        const searchInput = await $ ('#searchbox_input')
        await searchInput.setValue('Contoh pencarian')

        const searchInputValue = await searchInput.getValue()

        await browser.pause(3000)

        console.log('<||||> ini text nya <||||>', searchInputValue)
    })
})