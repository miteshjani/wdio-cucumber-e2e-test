import {config as baseconfig } from "../wdio.conf";
export const config = Object.assign(baseconfig,{
//All test env specific key val pair
environment: "TEST",
sauseDemoURL: "https://www.saucedemo.com"

})