import { Given ,When ,Then } from "@wdio/cucumber-framework"
import chai from "chai"


Given(/^Login to inventory webapp$/, async function(){
    /* Login to inventory app*/ 
    await browser.url("https://www.saucedemo.com");
    // await browser.setTimeout({implicit: 15000,pageLoad: 10000})
    // await browser.maximizeWindow()

    try {
        await $('#user-name').setValue("standard_user");
        await $('#password').setValue("secret_sauce");
        await $('#login-button').click();
    } catch (err) {
        console.log("Error in first login. Retrying . . .")
        await browser.refresh()
        await browser.pause(2000)
        await $('#user-name').setValue("standard_user");
        await $('#password').setValue("secret_sauce");
        await $('#login-button').click();

    }

    // await browser.pause(2000)
    // await browser.reloadSession()

    // await browser.url("https://www.saucedemo.com");
    // // await browser.setTimeout({implicit: 15000,pageLoad: 10000})
    // // await browser.maximizeWindow()

    // await $('#user-name').setValue("problem_user");
    // await $('#password').setValue("secret_sauce");
    // await $('#login-button').click();
    
    // await browser.back()
    // await browser.pause(2000)
    // await browser.forward()
    await browser.debug()

})