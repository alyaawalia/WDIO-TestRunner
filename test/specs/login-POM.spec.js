import { browser, $, expect } from '@wdio/globals'
import loginPagePom from '../pageobjects/login-page-pom.js'
import inventoryPagePOM  from '../pageobjects/inventory-page-POM.js'


describe('FITUR LOGIN', function (){
    it('Login dengan username dan password yang benar', async function(){
        await loginPagePom.openPage()

        await loginPagePom.loginProcess('standard_user', 'secret_sauce')

        //expect kl udh berhasil login mengarah ke halaman apa
        await expect (browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

        //expect buat cek apakah didalem halaman inventory ada test "products"
        await expect (inventoryPagePOM.pageTitle).toHaveText('Products')
    })

    it('Login dengan username yang benar tapi password yang salah', async function () {
        await loginPagePom.openPage()

        await loginPagePom.loginProcess('standard_user', 'ssengaja-salah')

        await expect (loginPagePom.errorMessage).toHaveText(
            expect.stringContaining('Username and password do not match')
        )
    })
})