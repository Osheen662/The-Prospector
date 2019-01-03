var object = {}
var testData = require('../data/goldData')
var prospectors = require('../data/pickAndShovel')

module.exports = {
    beforeEach: browser => {
        object = browser.page.objects()
        object.navigate()
        object.waitForElementPresent('@searchBar', 4000, 'Found the site ')
    },

    after: browser => {
        browser.end()
    },

    //Signed in
    "Sign in and execute": () => {
        

        prospectors.searchInputs.forEach(test => {
            object
                .signIn(test.username, test.password)

            testData.searchInputs.forEach(test => {
                object
                    .bingSearch(test.search)
            })
            object.signOut()
            object.navigate()
        })
    },

}