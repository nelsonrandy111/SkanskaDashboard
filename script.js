// Initialize the map
const map = L.map('map').setView([40.7128, -74.0060], 10); // New York City

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Updated material data with random NY addresses and revised environmental impact phrasing
const materials = [
    { coords: [40.73061, -73.935242], name: 'Steel Beams', location: '1234 Broadway, New York, NY', company: 'Skanska', price: '$2000', savings: '$300', impact: '20%' },
    { coords: [40.650002, -73.949997], name: 'Concrete Blocks', location: '567 Flatbush Ave, Brooklyn, NY', company: 'Turner Construction', price: '$1500', savings: '$200', impact: '15%' },
    { coords: [40.712217, -74.016058], name: 'Recycled Timber', location: '8 Battery Pl, New York, NY', company: 'Bechtel', price: '$1000', savings: '$400', impact: '30%' },
    { coords: [40.758896, -73.985130], name: 'Glass Panels', location: '1515 Broadway, New York, NY', company: 'Skanska', price: '$2500', savings: '$500', impact: '10%' },
    { coords: [40.7061, -74.0086], name: 'Aluminum Sheets', location: '1 Wall St, New York, NY', company: 'Fluor', price: '$1800', savings: '$350', impact: '25%' },
    { coords: [40.7528, -73.9772], name: 'Roof Tiles', location: '405 Lexington Ave, New York, NY', company: 'Skanska', price: '$1300', savings: '$200', impact: '15%' },
    { coords: [40.7192, -73.9923], name: 'PVC Pipes', location: '100 Delancey St, New York, NY', company: 'Jacobs', price: '$900', savings: '$150', impact: '20%' },
    { coords: [40.7484, -73.9857], name: 'Insulation Foam', location: '350 5th Ave, New York, NY', company: 'AECOM', price: '$2200', savings: '$450', impact: '40%' }
];

// Array to hold map markers and their corresponding list items
let markers = [];

// Populate the sidebar and add map markers
materials.forEach((material, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>Material:</strong> ${material.name} <br>
        <strong>Location:</strong> ${material.location} <br>
        <strong>Company:</strong> ${material.company} <br>
        <strong>Price:</strong> ${material.price} <br>
        <strong>Savings:</strong> ${material.savings} <br>
        <div class="impact">
            <span class="leaf">🌿</span> 
            <strong>Estimated Relative CO2 Emissions:</strong> 
            <span class="arrow">↓</span> 
            <span class="percent">${material.impact}</span>
        </div>
        <a class="details-link">Details</a>
    `;
    
    // Add hover events for sidebar
    li.addEventListener('mouseover', () => {
        markers[index].openPopup(); // Open popup on hover
        li.style.backgroundColor = "#d1f7d1"; // Change background on hover
    });
    
    li.addEventListener('mouseout', () => {
        markers[index].closePopup(); // Close popup when mouse leaves
        li.style.backgroundColor = ""; // Reset background color
    });
    
    document.getElementById('material-list').appendChild(li);

    // Create marker for map
    const marker = L.marker(material.coords).addTo(map).bindPopup(`
        <strong>${material.name}</strong><br>
        ${material.location}<br>
        Price: ${material.price}<br>
        Savings: ${material.savings}
    `);

    // Store marker in the markers array
    markers.push(marker);

    // Add hover events for map marker
    marker.on('mouseover', () => {
        li.style.backgroundColor = "#d1f7d1"; // Change sidebar item background on hover
        
        // Scroll the sidebar if necessary
        const liRect = li.getBoundingClientRect();
        const listContainer = document.getElementById('material-list');
        const listContainerRect = listContainer.getBoundingClientRect();

        // If the item is out of view, scroll it into view
        if (liRect.top < listContainerRect.top || liRect.bottom > listContainerRect.bottom) {
            li.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });

    marker.on('mouseout', () => {
        li.style.backgroundColor = ""; // Reset sidebar item background
    });
});



