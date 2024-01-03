import express from 'express';
import cors from 'cors';
import { API_KEY } from './util';
const app = express();
app.use(cors());
const apiKey = API_KEY;

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
