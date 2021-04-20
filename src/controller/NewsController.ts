import parser from 'fast-xml-parser'
import { Params } from 'tiny-request-router'

export async function getLatestNews(params: Params): Promise<Response> {
  // Get latest news
  const res = await fetch('http://english.astroawani.com/rss/latest/public')

  // Parsed from XML to json
  const parsed = parser.parse(await res.text())
  const jsonData = JSON.stringify(parsed)

  return new Response(jsonData)
}

export async function getMalaysiaNews(params: Params): Promise<Response> {
  // Get latest news
  const res = await fetch('http://english.astroawani.com/rss/national/public')

  // Parsed from XML to json
  const parsed = parser.parse(await res.text())
  const jsonData = JSON.stringify(parsed)

  return new Response(jsonData)
}

export async function getWorldNews(params: Params): Promise<Response> {
  // Get latest news
  const res = await fetch(
    'http://english.astroawani.com/rss/international/public',
  )

  // Parsed from XML to json
  const parsed = parser.parse(await res.text())
  const jsonData = JSON.stringify(parsed)

  return new Response(jsonData)
}
