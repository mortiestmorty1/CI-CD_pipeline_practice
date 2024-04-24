// updateSatelliteData.js
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Environment variables for API key and Satellite ID
const apiKey = process.env.N2YO_API_KEY;  // Ensure this is set in your GitHub Actions secrets
const satelliteId = 25544;  // NORAD ID for the ISS

const apiUrl = `https://api.n2yo.com/rest/v1/satellite/tle/${satelliteId}&apiKey=${apiKey}`;

async function fetchAndUpdateTLE() {
    try {
        const response = await axios.get(apiUrl);
        const tleData = response.data;

        // Construct the file path where the TLE data will be saved
        const filePath = path.join(__dirname, 'ISS_TLE.json');

        // Write the TLE data to a JSON file
        fs.writeFileSync(filePath, JSON.stringify(tleData, null, 2), 'utf8');
        console.log('TLE data for ISS updated successfully.');

    } catch (error) {
        console.error('Failed to fetch TLE data:', error);
    }
}

fetchAndUpdateTLE();
