// Initialize the map
const map = L.map('map').setView([40.7128, -74.0060], 10); // Coordinates for New York City

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add markers for materials
L.marker([40.73061, -73.935242]).addTo(map).bindPopup('Steel Beams - Site A');
L.marker([40.650002, -73.949997]).addTo(map).bindPopup('Concrete Blocks - Site B');
