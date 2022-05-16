const { test, expect } = require('@playwright/test');

test('loaded home', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  await page.waitForResponse('https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/offer')

  const title = await page.locator('h4').nth(0)
  await expect(title).toHaveText('Estamos quase lá!')
})

test('tried to success page but it\'s redirected', async ({ page }) => {
  await page.goto('http://localhost:3000/success')
  
  await expect(page).toHaveURL('http://localhost:3000/')
})

test('hide select installments when anual offer is selected', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  await page.waitForResponse('https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/offer')

  await page.locator('li').nth(1).click()

  const select = await page.locator('select')
  await expect(select).toBeHidden()
})

test('fill form', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  await page.waitForResponse('https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/offer')

  await page.locator('input[name="creditCardNumber"]').type('1234 5678 9123 4567')
  await page.locator('input[name="creditCardExpirationDate"]').type('1222')
  await page.locator('input[name="creditCardCVV"]').type('123')
  await page.locator('input[name="creditCardHolder"]').type('Fulano da Silva')
  await page.locator('input[name="creditCardCPF"]').type('49010083071')
  await page.locator('select[name="installments"]').selectOption('6')
  await page.locator('button').click()

  await page.waitForResponse('https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/subscription')

  await expect(page).toHaveURL('http://localhost:3000/success')
})