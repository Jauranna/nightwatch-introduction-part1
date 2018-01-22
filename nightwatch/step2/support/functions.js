const selectors = require('../support/selectors')

module.exports = {

    clickCheck: (num, display, browser) => {
        browser
            .click(selectors[num])
            .expect.element(selectors.result).text.to.equal(display)
    }

}