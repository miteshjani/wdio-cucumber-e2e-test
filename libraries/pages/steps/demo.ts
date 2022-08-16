import { Given ,When ,Then } from "@wdio/cucumber-framework"
import chai from "chai"

Given(/^Google page is opened$/,async function(){
    await browser.url("https://www.google.com/");
    await browser.pause(7000);
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


Given(/^A web page is opened$/, async function(){
    await browser.url("/inputs");
    await browser.setTimeout({implicit: 15000,pageLoad: 10000})
    await browser.maximizeWindow()
})


When(/^Perform web interactions$/, async function(){

let num=12345
var numstr = num.toString();
numstr ="1234"
num=3456
var ele = await $('[type=number]');
await ele.click();
await ele.setValue(numstr);
//await ele.addValue(num);
await browser.pause(3000);
})