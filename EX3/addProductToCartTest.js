// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Add a product to cart test', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Add a product to cart test', async function() {
    await driver.get("https://www.demoblaze.com/")
    await driver.manage().window().setRect({ width: 784, height: 816 })
    await driver.findElement(By.css(".col-lg-4:nth-child(1) .card-img-top")).click()
    await driver.findElement(By.linkText("Add to cart")).click()
    assert(await driver.switchTo().alert().getText() == "Product added.")
    await driver.findElement(By.id("cartur")).click()
    await driver.wait(until.elementLocated(By.css("td:nth-child(2)")), 30000)
    await driver.close()
  })
})
