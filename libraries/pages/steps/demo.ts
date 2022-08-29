import { Given, When, Then } from "@wdio/cucumber-framework"
import chai from "chai"

Given(/^Google page is opened$/, async function () {
    await browser.url("https://www.google.com/");
    await browser.pause(7000);
    // console.log(">> Browser Obj:"+ JSON.stringify(browser))
})


When(/^Search with (.*)$/, async function (searchitem) {
    console.log("Search Item >>>>>>>" + searchitem);
    let ele = await $('[name=q]')
    await ele.setValue(searchitem)
    await browser.keys("Enter")
    // console.log(">> Element Obj:"+ JSON.stringify(ele))
})

Then(/^Click on first search result$/, async function () {
    let ele = await $('<h3>')
    ele.click()
})

Then(/^URl should match (.*)$/, async function (expectedurl) {
    console.log("expectedurl" + expectedurl)
    await browser.waitUntil(async function () {
        return await browser.getTitle() === "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
    },{timeout:20000, interval:500,timeoutMsg:'Failed loading WDIO web page '+await browser.getTitle()})
    let url = await browser.getUrl();
    chai.expect(url).to.equal(expectedurl)

})


Given(/^A web page is opened$/, async function () {
    await browser.url("");
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 })
    await browser.maximizeWindow()
})


When(/^Perform web interactions$/, async function () {

    /*let num=12345
    var numstr = num.toString();
    numstr ="1234"
    num=3456
    var ele = await $('[type=number]');
    await ele.click();
    await ele.setValue(numstr);
    //await ele.addValue(num);
    await browser.pause(3000);*/


    /*let ele = await $("//select//option[@selected=\"selected\"]")
    let val = await ele.getText()
    chai.expect(val).to.equal("Please select an option")
    await browser.debug()*/

    // var ddele = await $("#dropdown");
    // //await ddele.selectByVisibleText("Option 1");
    // //await ddele.selectByAttribute("value","1")
    // //await ddele.selectByIndex(2)
    // await browser.debug();

    // let eleArr = await $$("//select//option");
    // let arr = [];

    // for(let i=0; i < eleArr.length;i++){
    //     let ele = eleArr[i];
    //     let val = await ele.getText();
    //     arr.push(val);
    //     console.log("value :"+val);

    // }

    // console.log(">> Options Array:"+arr);

    // let ele = $("//form[@id='checkboxes']//input[1]")
    // // if(!await ele.isSelected()){
    // //     await ele.click();

    // // }

    // let isChecked = await ele.isSelected()
    // chai.expect(isChecked).to.be.false

    // let eleArr = await $$("//form[@id='checkboxes']//input")

    // for(let i=0; i<eleArr.length;i++){
    //     let ele =eleArr[i]

    //     if(!await ele.isSelected()){
    //         ele.click()
    //     }
    // }

    // await $('=Click Here').click();
    // await $('=Elemental Selenium').click();
    // let currentwindowtitle = await browser.getTitle();
    // let parentwindowhandle = await browser.getWindowHandle();
    // console.log(">> current window title"+currentwindowtitle);

    // let windowhandles = await browser.getWindowHandles();

    // for(let i=0;i < windowhandles.length;i++){
    //     console.log('>> win handle: '+windowhandles[i]);
    //     await browser.switchToWindow(windowhandles[i]);
    //     currentwindowtitle = await browser.getTitle();
    //     if(currentwindowtitle ==="Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro"){
    //         await browser.switchToWindow(windowhandles[i]);
    //         let headertextlabel = await $('<h1>').getText();
    //         console.log(">> header text title"+headertextlabel);
    //         break
    //     }


    // }

    //  await browser.switchToWindow(parentwindowhandle);
    //  let parentwindowtextlabel = await $('<h3>').getText();
    //  console.log(">> header text title"+parentwindowtextlabel);

    // await $('button=Click for JS Confirm').click();

    // if(await browser.isAlertOpen()){
    //     await browser.acceptAlert();
    // }

    // if(await browser.isAlertOpen()){
    //     await browser.dismissAlert();
    //     await browser.pause(2000);
    // }
    // await $('button=Click for JS Prompt').click();
    // if(await browser.isAlertOpen()){
    //     let alerttext = await browser.getAlertText();
    //     console.log(">> Alert Text: "+alerttext);

    //     await browser.sendAlertText("Hello JS prompt ...")
    //     await browser.acceptAlert();
    //     await browser.pause(2000);

    //     }

    // console.log(">> process "+process.cwd());
    // await $('#file-upload').addValue(process.cwd()+"/data/file-upload/demo.txt");
    // await $('#file-submit').click();

    // await $('=iFrame').click();
    // let ele = await $('#mce_0_ifr');
    // await browser.switchToFrame(ele);
    // await $('#tinymce').click();
    // // await $('#tinymce').setValue("Typing into a frame ...")
    // // await $('#tinymce').click();
    // // await browser.keys(["\uE009","A"]);
    // await browser.keys(["Control","A"]);
    // await browser.keys(["Control","C"]);

    // await browser.pause(1000);
    // await browser.keys("Delete");
    // await browser.pause(8000);
    // await browser.keys(["Control","V"]);
    // // await $('#tinymce').addValue("Typing into a frame ...")
    // await browser.switchToParentFrame();

    // await $("//span[text()='Routines']").scrollIntoView();
    // await $("//h2[text()='Prime deal: CuboAi baby monitors']").scrollIntoView();
    // await $("//h2[text()='More titles to explore than ever']").scrollIntoView(false);
    // await $("//h2[text()='New series: \"Paper Girls\"']").scrollIntoView();

    // let rowcount = await $$('//table[@id="table1"]//tbody//tr').length
    // chai.expect(rowcount).to.equal(4)
    // console.log(">> Number of rows" + rowcount)
    // let colcount = await $$('//table[@id="table1"]//thead//th').length
    // console.log(">> Number of columns" + colcount)
    // chai.expect(colcount).to.equal(6)


    // let arr = [];
    // for(let i =0; i < rowcount;i++){
    //     let personObject = {
    //         lastname: "",
    //         firstname:"",
    //         email: "",
    //         due:"",
    //         web:"",

    //     }
    //     for(let j = 0; j< colcount;j++){
    //         let celVal = await $('//table[@id="table1"]//tbody//tr['+(i+1)+']/td['+(j+1)+']').getText()
    //         let firstname = await $('//table[@id="table1"]//tbody//tr['+(i+1)+']/td[2]').getText()
    //         if(firstname === "Jason"){         
    //         console.log('>> Cell Value: '+celVal);
    //         if(j === 0) personObject.lastname = celVal
    //         if(j === 1) personObject.firstname = celVal
    //         if(j === 2) personObject.email = celVal
    //         if(j === 3) personObject.due = celVal
    //         if(j === 4) personObject.web = celVal
    //     }
    //     }
    //     if(personObject.firstname){
    //         arr.push(personObject)
    //     }
    // }

    // console.log('Whole table'+ JSON.stringify(arr))

    // let arr = [];
    // for(let i = 0; i<rowcount;i++) {
    //     let cellVal = await $('//table[@id="table1"]//tbody//tr['+(i+1)+']/td[4]').getText();
    //     arr.push(cellVal);
    // } 

    // console.log("--> singl cell values"+arr)


    // let arr = [];
    // for (let i = 0; i < rowcount; i++) {

    //     // for(let j =0;j < colcount;j++){
    //     // let cellVal = await $('//table[@id="table1"]//tbody//tr['+(i+1)+']/td['+(j+1)+']').getText();
    //     let price = await $('//table[@id="table1"]//tbody//tr[' + (i + 1) + ']/td[4]').getText();
    //     let firstname = await $('//table[@id="table1"]//tbody//tr[' + (i + 1) + ']/td[2]').getText();
    //     if (+(price.replace("$", "")) > 50) {
    //         arr.push(firstname)
    //     }
    //     // }


    // }

    // console.log("--> singl cell values: " + arr)

    await browser.execute(() => {
        window.scrollBy(0, window.innerHeight)
    })

    await browser.pause(2000)

    await browser.execute(() => {
        window.scrollBy(0, -window.innerHeight)
    })

    await browser.pause(2000)

    await browser.execute(() => {
        window.scrollTo(0, document.body.scrollHeight)
    })

    await browser.pause(2000)
    await browser.execute(() => {
        window.scrollTo(0, document.body.scrollTop)
    })


    // await browser.debug();

})