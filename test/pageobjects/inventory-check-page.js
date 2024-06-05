import { $, browser } from '@wdio/globals'

class inventoryPage {
    // element locators
    get pageTitle() { return $ ('span[data-test="title"]')}
    get productSortSelect () { return $ ('[data-test="product-sort-container"]')}
    get optionNameDescending () { return this.productSortSelect.$ ('[value="za"]')}
    get allProductNameElement() { return $$ ('[data-test="inventory-item-name"]')}


    //page actions
    async orderProductByNamedesc () {
        await this.productSortSelect.click()
        await this.optionNameDescending.click()
    }

    async getAllProductName () {
        const allProductNameText = []

        const products = await this.allProductNameElement

        for(const productName of products) {
            const productNameText = await productName.getText()
            allProductNameText.push(productNameText)
        }
        return allProductNameText
    }

    async openPage () {
        await browser.url('https://www.saucedemo.com/inventory.html')
    }
}

export default new inventoryPage ()