
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'ISS_TLE.json');

function cleanupOldData() {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Failed to delete old TLE data file:', err);
            return;
        }
        console.log('Old TLE data file deleted successfully.');
    });
}

cleanupOldData();
