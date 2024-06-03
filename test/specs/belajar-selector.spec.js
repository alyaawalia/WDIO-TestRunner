import { browser, $, expect } from '@wdio/globals'

describe('BELAJAR SELECTOR', function (){
    it('Menggunakan CSS selector', async function(){
        await browser.url('https://www.saucedemo.com/')

        const loginButton = await $('input#login-button').click()
        await loginButton.click()

        await browser.pause(4000)
    })

    it('Menggunakan link selector', async function (){ // it.only --> agar it bagian ini aja yg dijalankan, yg atas ga
        await browser.url('https://the-internet.herokuapp.com/')

        await $('=Basic Auth').click()

        await browser.pause(4000)

    })

    it('Menggunakan text selector', async function(){
        await browser.url('https://www.saucedemo.com/')

        const title = await $('div.*=wag')
        //penjelasan :
        // titik artinya insensitif
        // * aartinya partial / sebagian aja
        const titleText = await title.getText()

        console.log('==>> ini titlenya ==>>', titleText)     
    })

    it.only('Menggunakan XPath selector', async function(){
        await browser.url('https://www.saucedemo.com/')

        const inputUsername = await $('//input[@data-test="username"]')
        await inputUsername.setValue('user alya')

        await browser.pause(4000)

    })
})