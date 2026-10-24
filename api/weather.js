export default async function handler(req, res) {
  const city = req.query.q
  if (!city) {
    res.status(400).json({ error: 'No city given' })
    return
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`
  try {
    const response = await fetch(url)
    const data = await response.json()
    res.status(response.status).json(data)
  } catch (error) {
    res.status(502).json({ error: 'Weather service did not answer' })
  }
}
