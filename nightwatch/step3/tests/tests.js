const selectors = require('../support/selectors')
const functions = require('../support/functions')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    'UI Check': browser => functions.uiChecker(browser),

    '2+2=4': browser => {
        //I click all the appropriate buttons and check the display for the appropriate results, per the steps of my test case
        functions.clickCheck('2', '2', browser)
        functions.clickCheck('+', '0', browser)
        functions.clickCheck('2', '2', browser)
        functions.clickCheck('=', '4', browser)
    },

    '32.1*2=64.2' : browser => {
        functions.buttonClicker(browser, '3')
        functions.buttonClicker(browser, '2')
        functions.buttonClicker(browser, '.')
        functions.buttonClicker(browser, '1')
        functions.buttonClicker(browser, '*')
        functions.buttonClicker(browser, '2')
        functions.buttonClicker(browser, '=')
        browser.expect.element(selectors['result']).text.to.equal('64.2')
    }
}