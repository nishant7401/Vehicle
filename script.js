// ============================================
// SCRIPT.JS — VEHICLE RENTAL NEPAL
// Shared logic + Nepal vehicle database
// Prices in NPR (daily rental rates)
// ============================================

// ============================================
// NAVBAR
// ============================================
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
});

document.getElementById('navToggle')?.addEventListener('click', () => {
    document.getElementById('navLinks')?.classList.toggle('open');
});

document.querySelectorAll('.nav-links a')?.forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks')?.classList.remove('open');
    });
});

// ============================================
// NEPAL VEHICLE DATABASE (2026 Market)
// ============================================
const cars = [
    // ============ HATCHBACKS ============
    {
        id: 'wagonr',
        name: 'Suzuki WagonR',
        type: 'Hatchback',
        price: 4500,
        image: 'https://images.unsplash.com/photo-1549925862-990f9e4f43a7?w=800&q=80',
        fuel: 'Petrol',
        gear: 'Manual',
        seats: '5 Seats'
    },
    {
        id: 'swift',
        name: 'Suzuki Swift',
        type: 'Hatchback',
        price: 5000,
        image: 'https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=800&q=80',
        fuel: 'Petrol',
        gear: 'Manual',
        seats: '5 Seats'
    },
    {
        id: 'tiago',
        name: 'Tata Tiago EV',
        type: 'Electric',
        price: 5800,
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
        fuel: 'Electric',
        gear: 'Auto',
        seats: '5 Seats'
    },

    // ============ COMPACT SUVs ============
    {
        id: 'brezza',
        name: 'Suzuki Brezza',
        type: 'SUV',
        price: 6800,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
        fuel: 'Hybrid',
        gear: 'Auto',
        seats: '5 Seats'
    },
    {
        id: 'nexon',
        name: 'Tata Nexon EV',
        type: 'Electric',
        price: 7200,
        image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
        fuel: 'Electric',
        gear: 'Auto',
        seats: '5 Seats'
    },
    {
        id: 'atto2',
        name: 'BYD Atto 2',
        type: 'Electric',
        price: 7500,
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
        fuel: 'Electric',
        gear: 'Auto',
        seats: '5 Seats'
    },

    // ============ MID SUVs ============
    {
        id: 'creta',
        name: 'Hyundai Creta',
        type: 'SUV',
        price: 8500,
        image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&q=80',
        fuel: 'Petrol',
        gear: 'Auto',
        seats: '5 Seats'
    },
    {
        id: 'seltos',
        name: 'Kia Seltos',
        type: 'SUV',
        price: 9500,
        image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800&q=80',
        fuel: 'Petrol',
        gear: 'Auto',
        seats: '5 Seats'
    },

    // ============ 4x4 SUVs / JEEPS ============
    {
        id: 'scorpio',
        name: 'Mahindra Scorpio-N',
        type: 'Jeep',
        price: 11000,
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
        fuel: 'Diesel',
        gear: 'Manual',
        seats: '7 Seats'
    },
    {
        id: 'thar',
        name: 'Mahindra Thar ROXX',
        type: 'Jeep',
        price: 12000,
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
        fuel: 'Diesel',
        gear: 'Manual',
        seats: '5 Seats'
    },

    // ============ BIKES ============
    {
        id: 'honda',
        name: 'Honda CB Shine',
        type: 'Bike',
        price: 1500,
        image: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=800&q=80',
        fuel: 'Petrol',
        gear: 'Manual',
        seats: '2 Seats'
    },
    {
        id: 'pulsar',
        name: 'Bajaj Pulsar 150',
        type: 'Bike',
        price: 2000,
        image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80',
        fuel: 'Petrol',
        gear: 'Manual',
        seats: '2 Seats'
    },
    {
        id: 'yamaha',
        name: 'Yamaha FZ-S',
        type: 'Bike',
        price: 2500,
        image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80',
        fuel: 'Hybrid',
        gear: 'Manual',
        seats: '2 Seats'
    },
    {
        id: 'royalenfield',
        name: 'Royal Enfield 350',
        type: 'Bike',
        price: 3500,
        image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80',
        fuel: 'Petrol',
        gear: 'Manual',
        seats: '2 Seats'
    }
];

// ============================================
// NPR FORMATTER
// ============================================
function formatNPR(amount) {
    return 'रू ' + amount.toLocaleString('en-IN');
}

// ============================================
// CAR CARD HTML BUILDER
// ============================================
function carCardHTML(car) {
    const isBike = car.type === 'Bike';
    return `
        <div class="car-card">
            <div class="car-image">
                <span class="car-badge">✓ Available</span>
                <img src="${car.image}" alt="${car.name}" loading="lazy">
            </div>
            <div class="car-body">
                <div class="car-title-row">
                    <div>
                        <h3>${car.name}</h3>
                        <p class="type">${car.type} · ${car.fuel}</p>
                    </div>
                    <div class="car-price">
                        <span class="amount">${formatNPR(car.price)}</span>
                        <span class="per">per day</span>
                    </div>
                </div>
                <div class="car-specs">
                    <span><i class="fa-solid fa-cogs"></i> ${car.gear}</span>
                    <span><i class="fa-solid fa-gas-pump"></i> ${car.fuel}</span>
                    <span><i class="fa-solid ${isBike ? 'fa-wind' : 'fa-snowflake'}"></i> ${isBike ? 'Open' : 'AC'}</span>
                </div>
                <div class="car-actions">
                    <a href="individualVehicle.html?id=${car.id}" class="btn btn-primary">
                        View Details
                    </a>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// AUTO-RENDER if containers exist
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Home page — featured grid
    const featured = document.getElementById('featuredCars');
    if (featured && featured.children.length === 0) {
        featured.innerHTML = cars.slice(0, 10).map(carCardHTML).join('');
    }

    // Vehicle page — full grid
    const allCars = document.getElementById('allCars');
    if (allCars && allCars.children.length === 0) {
        allCars.innerHTML = cars.map(carCardHTML).join('');
    }
});