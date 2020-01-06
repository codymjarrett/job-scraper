import axios from 'axios'
import dotenv from 'dotenv'
import cheerio from 'cheerio'
dotenv.config()

const rolesKeywords = [
	'Front',
	'End',
	'React',
	'Engineer',
	'Front-end',
	'Front-end Engineer',
	'Front End Engineer - React',
]

const getHTML = async url => {
	const { data: html } = await axios.get(url)
	return html
}

const go = async url => {
	parseHTML(await getHTML(url))
}

const parseHTML = async html => {
	const $ = cheerio.load(html)
	const openings = $('div[data-development].department-section')
	console.log(openings.find('div'))
}

go(process.env.URL)
