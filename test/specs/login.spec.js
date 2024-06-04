import { browser, $, expect } from '@wdio/globals'

describe('FITUR LOGIN', function (){
    it('Login dengan username dan password yang benar', async function(){
        await browser.url('https://www.saucedemo.com/')

        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()


        //await browser.pause(4000)

        const inventoryPageTitle = await $('span[data-test="title"]')

        //expect kl udh berhasil login mengarah ke halaman apa
        await expect (browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

        //expect buat cek apakah didalem halaman inventory ada test "products"
        await expect (inventoryPageTitle).toHaveText('Products')
    })

    it('Login dengan username yang benar tapi password yang salah', async function () {
        await browser.url('https://www.saucedemo.com/')

        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('ssengaja-salah')
        await $('#login-button').click()

        const errorMsg = await $('h3[data-test="error"]')
        await expect (errorMsg).toHaveText(
            expect.stringContaining('Username and password do not match')
        )
    })
})