import {Builder, Capabilities} from "selenium-webdriver"
import {empInfo} from '../testData'
import { empVerify } from "../src/empVerify"


const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:3000/')
})
afterAll(async () => {
    await driver.quit
})

test('verify each employee', async () => {
    for(let i=0; i <empInfo.length; i++){
        await empVerify(driver,i)
    }
})



