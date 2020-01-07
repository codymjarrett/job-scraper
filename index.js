import puppeteer from 'puppeteer'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import { CronJob } from 'cron'
import moment from 'moment'

// '*/10 * * * * *' - to test every ten seconds 

const job = new CronJob('00 00 09 * * 1-5', function() {
	//  run M-F @ 9am 
	(async () => {
			dotenv.config()
		    const SELECTOR = process.env.SELECTOR
		    // let transporter = nodemailer.createTransport(transport[, defaults])
		
		
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
			const date = moment().format("MMM Do YY")

			console.log(date, jobs)
		
			await browser.close()
		})()

  });

job.start()
