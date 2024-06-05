import { expect, browser } from '@wdio/globals'
import { isDescending } from '../../helpers/checkSorting.js'
import LoginPage  from '../pageobjects/login-page-pom.js'
import inventoryPage from '../pageobjects/inventory-check-page.js'

describe('FITUR INVENTORY', function () {
    before('User harus login', async function () {
        await LoginPage.openPage()
        await LoginPage.loginProcess('standard_user', 'secret_sauce')
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    }) // jadi, sebelum test inventory kan harus login nah kita masukkin kondisi loginnya dulu baru deh ke inventory


    it('Urutkan produk berdasarkan nama descending', async function () {
        // ambil element untuk mengurutkan produk
        await inventoryPage.openPage()

        //pilih opsi name (Z to A)
        await inventoryPage.orderProductByNamedesc()


        //ambil semua element yang berisi judul produk
        const allProductName = inventoryPage.getAllProductName()

        // lakukan assertion untuk mengecek apakah judulnya berhasil diurutkan
        const isProductSortedDesc = isDescending(allProductName) //<-- bukan async sehingga gapake await

        //cek hasil nya apakah true atau tidak. kalau true berarti benar
        await expect(isProductSortedDesc).toBe(true)
    })
    
})