import puppeteer from 'puppeteer-extra'
// import StealthPlugin from 'puppeteer-extra-plugin-stealth'

import webGl from 'puppeteer-extra-plugin-stealth/evasions/webgl.vendor';
import userAgent from 'puppeteer-extra-plugin-stealth/evasions/user-agent-override';
import webDriver from 'puppeteer-extra-plugin-stealth/evasions/navigator.webdriver';

async function browserLaunchBasedOnProfile({userAgentData, webGLData, userProfileData}) {

  const userDataDir = `./profiles/${userProfileData}`;
    //custom profile
    puppeteer.use(userAgent(userAgentData))
    .use(webGl(webGLData))
    .use(webDriver());

  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
    devtools: false,
    userDataDir,

    // executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    // args: [
    //   '--proxy-server=http://190.2.130.11:9999'
    // ]
  })

  // const page = await browser.newPage()

  // page.authenticate({
  //   username: 'ttzh535q0o-res-country-US-state-4736286-city-4180439-hold-hardsession-session-67050d7792d97',
  //   password: 'vIyakqZ20ulAT3Nz'
  // })

//   await page.goto('https://www.browserscan.net/bot-detection');
  // await page.goto('https://bot.sannysoft.com/')
}

export default browserLaunchBasedOnProfile
