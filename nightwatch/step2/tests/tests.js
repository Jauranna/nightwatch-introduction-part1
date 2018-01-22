const selectors = require('../support/selectors')
const functions = require('../support/test_functions')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    '2+2=4': browser => {
        //I click all the appropriate buttons and check the display for the appropriate results, per the steps of my test case
        functions.clickCheck('2', '2', browser)
        functions.clickCheck('add', '0', browser)
        functions.clickCheck('2', '2', browser)
        functions.clickCheck('equals', '4', browser)
    }
}