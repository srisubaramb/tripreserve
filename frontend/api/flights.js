export default async function handler(req, res) {
  const query = new URLSearchParams(req.query).toString();

  const response = await fetch(
    `https://api.travelpayouts.com/aviasales/v3/prices_for_dates?${query}`
  );

  const data = await response.json();

  res.status(response.status).json(data);
}