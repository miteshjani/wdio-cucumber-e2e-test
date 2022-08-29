import { Given ,When ,Then } from "@wdio/cucumber-framework"
import chai from "chai"


Then(/^Inventory page should list (.*)$/, async function(numberofproducts){

    if(!numberofproducts) throw Error ( 'Invalid number count provided '+numberofproducts)

    let elearr = await $$('.inventory_item_name')
    chai.expect(elearr.length).to.equal(parseInt(numberofproducts))
})

Then(/^Validate all products have valid price$/,async function(){
    let eleArr = await $$('.inventory_item_price')
    let priceStrArr = []
    for(let i=0; i < eleArr.length;i++){
        let priceStr = await eleArr[i].getText()
        priceStrArr.push(priceStr)
    }
    console.log('>> price with $:'+priceStrArr)
    // let priceNumArr = priceStrArr.map(ele => parseInt(ele.replace("$","")))
    let priceNumArr = priceStrArr.map(ele => +(ele.replace("$","")))
    console.log('>> price in numbers'+priceNumArr)
    let invalidPriceArr = priceNumArr.filter(ele => ele <= 0)
    chai.expect(invalidPriceArr.length).to.equal(0)
})