const puppeteer = require('puppeteer')

;(async () => {
	const environment = require('./env')
    // const fs = require('fs')
    // const { Console } = require('console');
    // const output = fs.createWriteStream('./stdout.log');

    // const logger = new Console({ stdout: output});

	const browser = await puppeteer.launch()
	const page = await browser.newPage()
	await page.goto(environment.url)

	// const jobsContainer = await page.$('#jobsContainer');

	// const html = await page.evaluate(jobs => jobs.innerHTML, jobsContainer)

	const developmentSection = await page.evaluate(() => {
		const nodeList = document.querySelector('[data-development]').children[0]
			.children[1].children
		Array.from(nodeList).forEach(i => logger.log(i.innerText))
    })
    
	await browser.close()
})()
