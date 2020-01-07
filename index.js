import puppeteer from 'puppeteer'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

;(async () => {
	dotenv.config()
    const SELECTOR = process.env.SELECTOR
    let transporter = nodemailer.createTransport(transport[, defaults])


	const browser = await puppeteer.launch()
	const page = await browser.newPage()
	await page.goto(process.env.URL)
	await page.waitForSelector(SELECTOR)

	const jobs = await page.evaluate(selector => {
		const jobNodeList = document.querySelectorAll(selector)
		const jobArr = []
		jobNodeList.forEach(job => jobArr.push(job.textContent))

		return jobArr
	}, SELECTOR)

	console.log(jobs)

	await browser.close()
})()
