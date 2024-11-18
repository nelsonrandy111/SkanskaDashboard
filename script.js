// Initialize the map
const map = L.map('map').setView([40.7128, -74.0060], 10); // New York City

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Material data
const materials = [
    { coords: [40.73061, -73.935242], name: 'Steel Beams', location: 'Site A', price: '$2000', savings: '$300', impact: '20% reduction in CO₂ emissions' },
    { coords: [40.650002, -73.949997], name: 'Concrete Blocks', location: 'Site B', price: '$1500', savings: '$200', impact: '15% reduction in water usage' },
    { coords: [40.712217, -74.016058], name: 'Recycled Timber', location: 'Site C', price: '$1000', savings: '$400', impact: '30% reduction in deforestation' },
    { coords: [40.758896, -73.985130], name: 'Glass Panels', location: 'Site D', price: '$2500', savings: '$500', impact: '10% increase in energy efficiency' },
];

// Populate the sidebar and add map markers
materials.forEach(material => {
    // Add to sidebar
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>Material:</strong> ${material.name} <br>
        <strong>Location:</strong> ${material.location} <br>
        <strong>Price:</strong> ${material.price} <br>
        <strong>Savings:</strong> ${material.savings} <br>
        <strong>Impact:</strong> ${material.impact}
    `;
    document.getElementById('material-list').appendChild(li);

    // Add marker to the map
    L.marker(material.coords).addTo(map).bindPopup(`
        <b>${material.name}</b><br>
        ${material.location}<br>
        Price: ${material.price}
    `);
});
