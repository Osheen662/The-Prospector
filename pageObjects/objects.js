var signOutFunction = {
    signOut: function () {
        this.api.pause(1000)
        this.click('#id_n')
        this.api.pause(800)
        this.click('span[class="id_link_text"]')
        this.api.pause(800)
        return this
    }
}
var signInFunctions = {
    signIn: function (username, password) {
        this.api.pause(300)
        this.click('#id_s')
        this.api.pause(1000)
        this.setValue('input[name="loginfmt"]', username)
        this.click('#idSIButton9')
        this.waitForElementPresent('input[name="passwd"]', 3000)
        this.api.pause(700)
        this.setValue('#i0118', password)
        this.click('input[type="submit"]')
        this.waitForElementPresent('@searchBar', 3000)
        return this
    }
}

var bingSerchFunctions = {
    bingSearch: function (search) {
        this.setValue('@searchBar', search)
        this.click('@searchButton')
        this.api.pause(200)
        this.waitForElementPresent('@results', 3000, 'Seach Confirmed')
        return this
    }
}

module.exports = {
    url: 'https://www.bing.com/',
    commands: [signOutFunction, signInFunctions, bingSerchFunctions],
    elements: {
        signedIn: '#id_n',
        searchBar: 'input[class="b_searchbox"]',
        searchButton: 'input[class="b_searchboxSubmit"]',
        results: '#b_results',
        card1: '#daily-sets > mee-card-group:nth-child(7) > div > mee-card.ng-scope.ng-isolate-scope.c-card.f-double > div > card-content > mee-rewards-daily-set-item-content > div > div.actionLink > a',
        card2: '#daily-sets > mee-card-group:nth-child(7) > div > mee-card:nth-child(3) > div > card-content > mee-rewards-daily-set-item-content > div > div.actionLink > a',
        card3: '#daily-sets > mee-card-group:nth-child(7) > div > mee-card:nth-child(2) > div > card-content > mee-rewards-daily-set-item-content > div > div.actionLink > a',
        answer0: '#rqAnswerOption0',
        answer1: '#rqAnswerOption1',
        answer2: '#rqAnswerOption2',
        answer3: '#rqAnswerOption3',
    },

}