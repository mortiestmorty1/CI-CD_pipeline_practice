
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const apiKey = process.env.N2YO_API_KEY; 
const satelliteId = 25544;  

const apiUrl = `https://api.n2yo.com/rest/v1/satellite/tle/${satelliteId}&apiKey=${apiKey}`;

async function fetchAndUpdateTLE() {
    try {
        const response = await axios.get(apiUrl);
        const tleData = response.data;

    
        const filePath = path.join(__dirname, 'ISS_TLE.json');

  
        fs.writeFileSync(filePath, JSON.stringify(tleData, null, 2), 'utf8');
        console.log('TLE data for ISS updated successfully.');

    } catch (error) {
        console.error('Failed to fetch TLE data:', error);
    }
}

fetchAndUpdateTLE();
