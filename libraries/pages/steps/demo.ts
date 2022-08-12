import { Given ,When ,Then } from "@wdio/cucumber-framework"
import chai from "chai"

Given(/^Google page is opened$/,function(){
    browser.url("https://www.google.com/");
    browser.pause(70000);
})


When(/^Search with (.*)$/,async function(searchitem){
    console.log("Search Item >>>>>>>"+searchitem);
    let ele = await $('[name=q]')
    await ele.setValue(searchitem)
    await browser.keys("Enter")
})

Then(/^Click on first search result$/,async function(){
    let ele = await $('<h3>')
    ele.click()
})

Then(/^URl should match (.*)$/,async function(expectedurl){
    console.log("expectedurl"+expectedurl)
    let url = await browser.getUrl();
    chai.expect(url).to.equal(expectedurl)

})
