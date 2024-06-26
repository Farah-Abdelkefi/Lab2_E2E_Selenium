// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('multiplication and division test', function() {
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
  it('multiplication and division test', async function() {
    // Test name: multiplication and division test
    // Step # | name | target | value
    // 1 | open | https://safatelli.github.io/tp-test-logiciel/assets/calc.html | 
    await driver.get("https://safatelli.github.io/tp-test-logiciel/assets/calc.html")
    // 2 | click | id=num1 | 
    await driver.findElement(By.id("num1")).click()
    // 3 | type | id=num1 | 5
    await driver.findElement(By.id("num1")).sendKeys("5")
    // 4 | click | id=num2 | 
    await driver.findElement(By.id("num2")).click()
    // 5 | type | id=num2 | 4
    await driver.findElement(By.id("num2")).sendKeys("4")
    // 6 | click | id=operator | 
    await driver.findElement(By.id("operator")).click()
    // 7 | select | id=operator | label=*
    {
      const dropdown = await driver.findElement(By.id("operator"))
      await dropdown.findElement(By.xpath("//option[. = '*']")).click()
    }
    // 8 | click | css=button | 
    await driver.findElement(By.css("button")).click()
    // 9 | assertText | id=result | Résultat : 20
    assert(await driver.findElement(By.id("result")).getText() == "Résultat : 20")
    // 10 | type | id=num1 | 3
    await driver.findElement(By.id("num1")).sendKeys("3")
    // 11 | click | id=num1 | 
    await driver.findElement(By.id("num1")).click()
    // 12 | click | id=operator | 
    await driver.findElement(By.id("operator")).click()
    // 13 | select | id=operator | label=/
    {
      const dropdown = await driver.findElement(By.id("operator"))
      await dropdown.findElement(By.xpath("//option[. = '/']")).click()
    }
    // 14 | click | css=button | 
    await driver.findElement(By.css("button")).click()
    // 15 | assertText | id=result | Résultat : 0.75
    assert(await driver.findElement(By.id("result")).getText() == "Résultat : 0.75")
  })
})
