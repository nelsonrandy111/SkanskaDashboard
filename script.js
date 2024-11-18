// Initialize the map
const map = L.map('map').setView([40.7128, -74.0060], 10); // Coordinates for New York City

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add markers for materials
const materials = [
    { coords: [40.73061, -73.935242], info: 'Steel Beams - Site A' },
    { coords: [40.650002, -73.949997], info: 'Concrete Blocks - Site B' },
    { coords: [40.712217, -74.016058], info: 'Recycled Timber - Site C' },
    { coords: [40.758896, -73.985130], info: 'Glass Panels - Site D' },
];

materials.forEach(material => {
    L.marker(material.coords).addTo(map).bindPopup(material.info);
});
