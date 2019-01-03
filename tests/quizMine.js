var object = {}


module.exports = {
    beforeEach: browser => {
        object = browser.page.objects()
        browser.url('https://microsoft.com/rewards/')
            .waitForElementPresent('#headerRegion', 4000, 'Found the site ')
    },

    after: browser => {
        browser.end()
    },
    //Sign In
    "Signed In": () => {
        /*object
            .click('#mectrl_headerPicture')
            .waitForElementPresent('#mectrl_currentAccount_primary', 3000)
            .api.pause(800)
        object.expect.element('#mectrl_currentAccount_primary').text.to.contain('Bracken Mudrow')
        object.click('#mectrl_headerPicture')*/
        object
        .click('div[class="msame_Header_name msame_TxtTrunc"]')
        .api.pause(800)
        object.setValue('input[name="loginfmt"]',email)
        .click('#idSIButton9')
        object.api.pause(1000)
        object.setValue('#i0118',password)
        .click('#idSIButton9')
        object.api.pause(4000)
        object.click('div[class="msame_Header_piccont"]')
        .click('div[class="msame_Drop_rewards"]')
        object.api.pause(8000)


   
//card1
    
        object
            .waitForElementPresent('@card1', 3000)
            .click('@card1')
            .api.pause(1000)
    
    
        object
            .waitForElementPresent('@card3', 3000)
            .click('@card3')
            .api.pause(1500)
            object.api.windowHandles(function (result) {
                var handle = result.value[2];
                console.log(handle)
                object.api.switchWindow(handle);
            })
//card2
        
     /*  object.api.pause(2000)
        object.click('@answer0')
        .click('@answer1')
        .click('@answer2')
        .click('@answer3')
        .api.pause(1000)
        object.click('@answer0')
        .click('@answer1')
        .click('@answer2')
        .click('@answer3')
        .api.pause(1000)
        object.click('@answer0')
        .click('@answer1')
        .click('@answer2')
        .click('@answer3')
        .api.pause(1000)
        object.click('@answer0')
        .click('@answer1')
        .click('@answer2')
        .click('@answer3')
        .api.pause(4000)
        */
                
//card3    
        object
            .waitForElementPresent('@card2', 5000)
            .click('@card2')
            .api.pause(3000)
            object.api.windowHandles(function (result) {
                var handle = result.value[3];
                console.log(handle)
                object.api.switchWindow(handle);
            })
            .click('#btoption0')
        object.api.pause(500)
    }
}