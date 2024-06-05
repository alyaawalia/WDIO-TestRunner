import { $, browser } from '@wdio/globals'

class inventoryPage {
    // element locators
    get pageTitle() { return $ ('span[data-test="title"]')}

    //page actions

}

export default new inventoryPage ()