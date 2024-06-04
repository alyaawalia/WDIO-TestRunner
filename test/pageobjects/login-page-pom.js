// POM --> script test agar tidak abstrak
// mengambil dr codingan login-POM.spec.js

import { $ } from '@wdio/globals'

class LoginPage {
    // element locators
    get userNameInput() { return $('#user-name')}
    get passwordInput() { return $('#password')}
    get submitButton() { return $('#login-button')}
    get errorMessage() { return $('h3[data-test="error"]')}

    // page actions
    async loginProcess (username, password) {
        await this.userNameInput.setValue(username)
        await this.passwordInput.setValue(password)
        await this.submitButton.click()

    }
    async openPage () {
        await browser.url('https://www.saucedemo.com/')
    }
}

export default new LoginPage 
// kenapa ga login page aja tanpa new? 
//karena saat diexport login pagenya sekalian diinisiasi 
//sehingga ketika diimport sudah menjadi object bukan menjadi class lagi