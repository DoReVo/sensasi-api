import parser from 'fast-xml-parser'
import { Params } from 'tiny-request-router'

export async function getLatestNews(request: Request): Promise<Response> {
  // Get latest news
  const res = await fetch('http://english.astroawani.com/rss/latest/public')

  // Parsed from XML to json
  const parsed = parser.parse(await res.text())
  const jsonData = JSON.stringify(parsed)

  return new Response(jsonData)
}

export async function getMalaysiaNews(request: Request): Promise<Response> {
  // Get latest news
  const res = await fetch('http://english.astroawani.com/rss/national/public')

  // Parsed from XML to json
  const parsed = parser.parse(await res.text())
  const jsonData = JSON.stringify(parsed)

  return new Response(jsonData)
}

export async function getWorldNews(request: Request): Promise<Response> {
  // Get latest news
  const res = await fetch(
    'http://english.astroawani.com/rss/international/public',
  )

  // Parsed from XML to json
  const parsed = parser.parse(await res.text())
  const jsonData = JSON.stringify(parsed)

  return new Response(jsonData)
}
