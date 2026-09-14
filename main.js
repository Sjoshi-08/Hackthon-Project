// ===============================
// SPOTLY - MAIN JAVASCRIPT
// ===============================

const businesses = [
    {
        name: "Saffron Courtyard",
        category: "Restaurants",
        area: "Punjabi Bagh",
        location: "Punjabi Bagh, Delhi",
        distance: "0.8 km",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
        offer: "20% OFF on your first order",
        description: "Modern Indian restaurant with a premium dining experience.",
        hours: "12:00 PM - 11:00 PM",
        avatar: "SC"
    },
    {
        name: "Punjabi Tadka House",
        category: "Restaurants",
        area: "Punjabi Bagh",
        location: "Punjabi Bagh, Delhi",
        distance: "1.2 km",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",
        offer: "Free dessert on orders above ₹999",
        description: "Authentic North Indian food with a Punjabi touch.",
        hours: "11:00 AM - 11:30 PM",
        avatar: "PT"
    },
    {
        name: "Brew & Bean",
        category: "Cafés",
        area: "Janakpuri",
        location: "Janakpuri, Delhi",
        distance: "1.4 km",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80",
        offer: "Buy 1 Get 1 Coffee",
        description: "Cozy café serving specialty coffee and fresh snacks.",
        hours: "8:00 AM - 10:30 PM",
        avatar: "BB"
    },
    {
        name: "Janakpuri Fresh Mart",
        category: "Shopping",
        area: "Janakpuri",
        location: "Janakpuri, Delhi",
        distance: "1.8 km",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=900&q=80",
        offer: "10% OFF on groceries",
        description: "Daily groceries, fresh fruits, vegetables and household products.",
        hours: "7:00 AM - 11:00 PM",
        avatar: "JM"
    },
    {
        name: "Urban Glow Studio",
        category: "Salons & Beauty",
        area: "Tilak Nagar",
        location: "Tilak Nagar, Delhi",
        distance: "1.1 km",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
        offer: "30% OFF on selected services",
        description: "Premium salon offering hair, skin and beauty services.",
        hours: "10:00 AM - 9:00 PM",
        avatar: "UG"
    },
    {
        name: "QuickFix Services",
        category: "Services",
        area: "Tilak Nagar",
        location: "Tilak Nagar, Delhi",
        distance: "0.9 km",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
        offer: "Free inspection",
        description: "Reliable home repair, electrical and plumbing services.",
        hours: "8:00 AM - 9:00 PM",
        avatar: "QF"
    },
    {
        name: "Westside Streetwear",
        category: "Shopping",
        area: "Tilak Nagar",
        location: "Tilak Nagar, Delhi",
        distance: "1.5 km",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80",
        offer: "Flat 25% OFF",
        description: "Trendy streetwear, sneakers and fashion accessories.",
        hours: "10:30 AM - 9:30 PM",
        avatar: "WS"
    },
    {
        name: "Pulse Fitness Club",
        category: "Fitness & Gyms",
        area: "Dwarka",
        location: "Dwarka, Delhi",
        distance: "2.1 km",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
        offer: "7 Days Free Trial",
        description: "Modern gym with strength training, cardio and personal trainers.",
        hours: "5:30 AM - 11:00 PM",
        avatar: "PF"
    },
    {
        name: "Weekend House Social",
        category: "Entertainment",
        area: "Dwarka",
        location: "Dwarka, Delhi",
        distance: "2.5 km",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80",
        offer: "Entry starting ₹299",
        description: "Live music, DJ nights and weekend entertainment.",
        hours: "6:00 PM - 1:00 AM",
        avatar: "WH"
    },
    {
        name: "Dwarka Coffee Lab",
        category: "Cafés",
        area: "Dwarka",
        location: "Dwarka, Delhi",
        distance: "1.7 km",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
        offer: "15% OFF on breakfast",
        description: "Specialty coffee, breakfast and work-friendly seating.",
        hours: "7:30 AM - 10:00 PM",
        avatar: "DC"
    },
    {
        name: "The Local Edit",
        category: "Shopping",
        area: "Rajouri Garden",
        location: "Rajouri Garden, Delhi",
        distance: "2.8 km",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
        offer: "20% OFF on selected items",
        description: "Fashion, lifestyle products and local brands.",
        hours: "11:00 AM - 9:30 PM",
        avatar: "LE"
    },
    {
        name: "Glow & Go Salon",
        category: "Salons & Beauty",
        area: "Rajouri Garden",
        location: "Rajouri Garden, Delhi",
        distance: "2.4 km",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
        offer: "Haircut + Styling ₹499",
        description: "Professional beauty and grooming services.",
        hours: "10:00 AM - 9:00 PM",
        avatar: "GG"
    },
    {
        name: "Delhi Beats Night",
        category: "Events",
        area: "Connaught Place",
        location: "Connaught Place, Delhi",
        distance: "5.2 km",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=80",
        offer: "Early Bird Tickets Available",
        description: "Live music and nightlife events in central Delhi.",
        hours: "6:00 PM - 12:00 AM",
        avatar: "DB"
    },
    {
        name: "CP Social Kitchen",
        category: "Restaurants",
        area: "Connaught Place",
        location: "Connaught Place, Delhi",
        distance: "5.0 km",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
        offer: "Happy Hours 4 PM - 7 PM",
        description: "Contemporary restaurant and social dining space.",
        hours: "12:00 PM - 12:00 AM",
        avatar: "CS"
    },
    {
        name: "Lajpat Local Bazaar",
        category: "Shopping",
        area: "Lajpat Nagar",
        location: "Lajpat Nagar, Delhi",
        distance: "4.2 km",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=900&q=80",
        offer: "Special Weekend Deals",
        description: "Local fashion, accessories and lifestyle shopping.",
        hours: "10:30 AM - 9:30 PM",
        avatar: "LB"
    },
    {
        name: "Lajpat Fitness Arena",
        category: "Fitness & Gyms",
        area: "Lajpat Nagar",
        location: "Lajpat Nagar, Delhi",
        distance: "4.0 km",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
        offer: "Monthly Membership ₹999",
        description: "Fitness center with cardio, weights and group workouts.",
        hours: "5:00 AM - 10:30 PM",
        avatar: "LA"
    }
];

let selectedArea = "All";
let selectedCategory = "All";
let savedPlaces = new Set();
let currentUser = null;

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    loadDelhiWeather();
    setupSearch();
    showHome();
});

// NAVIGATION LOGIC

// Step 1: "Continue as User" -> show the detail registration screen
function goToUserRegistration() {
    document.getElementById("welcomeScreen").classList.add("hidden");
    document.getElementById("userRegisterScreen").classList.remove("hidden");
    if (window.lucide) lucide.createIcons();
}

// Back arrow on the registration screen -> return to welcome/role screen
function backToWelcome() {
    document.getElementById("userRegisterScreen").classList.add("hidden");
    document.getElementById("welcomeScreen").classList.remove("hidden");
}

const API_BASE_URL = "http://localhost:5000";

// Step 2: registration form submit -> validate, save to backend, enter the app
async function submitUserRegistration(event) {
    event.preventDefault();

    const name = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const phone = document.getElementById("regPhone").value.trim();
    const city = document.getElementById("regCity").value;
    const password = document.getElementById("regPassword").value;

    if (!name || !email || !phone || !city || password.length < 6) {
        showToast("Please fill every field (password min. 6 characters)");
        return;
    }

    const submitBtn = event.target.querySelector("button[type=submit]");
    submitBtn.disabled = true;

    try {
        const response = await fetch(`${API_BASE_URL}/api/users/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone, city, password })
        });

        const data = await response.json();

        if (!response.ok) {
            showToast(data.error || "Something went wrong. Please try again.");
            submitBtn.disabled = false;
            return;
        }

        currentUser = { name, email, phone, city };

        document.getElementById("userRegisterScreen").classList.add("hidden");
        enterUser();
        showToast(`Welcome to Spotly, ${name.split(" ")[0]}!`);

    } catch (err) {
        showToast(`Could not reach the server. Is the backend running on ${API_BASE_URL}?`);
    } finally {
        submitBtn.disabled = false;
    }
}

function enterUser() {
    document.getElementById("welcomeScreen").classList.add("hidden");
    document.getElementById("userRegisterScreen").classList.add("hidden");
    document.getElementById("userApp").classList.remove("hidden");
    document.getElementById("businessApp").classList.add("hidden");

    if (currentUser) {
        const nameEl = document.getElementById("profileName");
        if (nameEl) nameEl.textContent = currentUser.name;
        const locEl = document.getElementById("locationText");
        if (locEl) locEl.textContent = currentUser.city + ", Delhi";
    }

    showHome();
}

function enterBusiness() {
    document.getElementById("welcomeScreen").classList.add("hidden");
    document.getElementById("userRegisterScreen").classList.add("hidden");
    document.getElementById("businessRegisterScreen").classList.remove("hidden");
    if (window.lucide) lucide.createIcons();
}

function backToWelcomeFromBusiness() {
    document.getElementById("businessRegisterScreen").classList.add("hidden");
    document.getElementById("welcomeScreen").classList.remove("hidden");
}

function enterBusinessDashboard() {
    document.getElementById("welcomeScreen").classList.add("hidden");
    document.getElementById("businessRegisterScreen").classList.add("hidden");
    document.getElementById("userApp").classList.add("hidden");
    document.getElementById("businessApp").classList.remove("hidden");
    if (window.lucide) lucide.createIcons();
}

async function submitBusinessRegistration(event) {
    event.preventDefault();

    const errorBox = document.getElementById("businessRegisterError");
    const submitBtn = document.getElementById("businessRegisterSubmitBtn");
    errorBox.classList.add("hidden");
    errorBox.textContent = "";

    const payload = {
        businessName: document.getElementById("bizName").value.trim(),
        ownerName: document.getElementById("bizOwnerName").value.trim(),
        email: document.getElementById("bizEmail").value.trim(),
        phone: document.getElementById("bizPhone").value.trim(),
        category: document.getElementById("bizCategory").value,
        address: document.getElementById("bizAddress").value.trim(),
        password: document.getElementById("bizPassword").value
    };

    if (!payload.businessName || !payload.ownerName || !payload.email ||
        !payload.phone || !payload.category || !payload.address || !payload.password) {
        errorBox.textContent = "Please fill in every field.";
        errorBox.classList.remove("hidden");
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Registering...";

    try {
        const response = await fetch(`${API_BASE_URL}/api/businesses/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok) {
            errorBox.textContent = data.error || "Something went wrong. Please try again.";
            errorBox.classList.remove("hidden");
            return;
        }

        document.getElementById("businessRegisterForm").reset();
        enterBusinessDashboard();
        showToast("Business registered successfully 🎉");

    } catch (err) {
        errorBox.textContent = `Could not reach the server. Is the backend running on ${API_BASE_URL}?`;
        errorBox.classList.remove("hidden");
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Register business <i data-lucide="arrow-right"></i>';
        if (window.lucide) lucide.createIcons();
    }
}

function logout() {
    currentUser = null;
    document.getElementById("userApp").classList.add("hidden");
    document.getElementById("businessApp").classList.add("hidden");
    document.getElementById("userRegisterScreen").classList.add("hidden");
    document.getElementById("businessRegisterScreen").classList.add("hidden");
    document.getElementById("welcomeScreen").classList.remove("hidden");
}

function hideAllUserSections() {
    const sections = ["homePage", "categoryPage", "detailPage", "socialPage", "profilePage", "notificationPage"];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add("hidden");
    });
}

function showHome() {
    hideAllUserSections();
    const home = document.getElementById("homePage");
    if (home) home.classList.remove("hidden");

    const grid = document.getElementById("businessGrid");
    if (!grid) return;

    const filteredBusinesses = getFilteredBusinesses();
    grid.innerHTML = "";

    if (filteredBusinesses.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <h3>No businesses found</h3>
                <p>Try selecting another area or category.</p>
            </div>
        `;
        updateNearbyCount(0);
        return;
    }

    filteredBusinesses.forEach((business) => {
        grid.innerHTML += createBusinessCard(business);
    });

    updateNearbyCount(filteredBusinesses.length);
    updateRecommendedTitle();
    if (window.lucide) lucide.createIcons();
}

function showProfile() {
    hideAllUserSections();
    document.getElementById("profilePage").classList.remove("hidden");
    if (window.lucide) lucide.createIcons();
}

function showNotifications() {
    hideAllUserSections();
    document.getElementById("notificationPage").classList.remove("hidden");
}

function showSaved() {
    hideAllUserSections();
    const catPage = document.getElementById("categoryPage");
    catPage.classList.remove("hidden");
    
    document.getElementById("categoryTitle").textContent = "Saved Places";
    const grid = document.getElementById("categoryGrid");
    grid.innerHTML = "";
    
    const savedItems = businesses.filter(b => savedPlaces.has(b.name));
    if (savedItems.length === 0) {
        grid.innerHTML = `<div class="empty-state"><div>❤️</div><h3>No saved places yet</h3><p>Click the save button on any card to store it here.</p></div>`;
    } else {
        savedItems.forEach(b => {
            grid.innerHTML += createBusinessCard(b);
        });
    }
    if (window.lucide) lucide.createIcons();
}

// BUSINESS APP NAVIGATION
function businessPage(pageId, btn) {
    document.querySelectorAll(".business-section, #businessDashboard").forEach(sec => sec.classList.add("hidden"));
    document.querySelectorAll(".side-nav").forEach(nav => nav.classList.remove("active"));
    
    const targetMap = {
        'dashboard': 'businessDashboard',
        'ads': 'businessAds',
        'createAd': 'createAdPage',
        'analytics': 'businessAnalytics',
        'businessProfile': 'businessProfile',
        'admin': 'adminPage'
    };
    
    const target = document.getElementById(targetMap[pageId]);
    if (target) target.classList.remove("hidden");
    if (btn) btn.classList.add("active");
    if (window.lucide) lucide.createIcons();
}

function businessPageById(pageId) {
    const navButtons = document.querySelectorAll(".side-nav");
    const map = {'dashboard': 0, 'ads': 1, 'createAd': 2, 'analytics': 3, 'businessProfile': 4, 'admin': 5};
    businessPage(pageId, navButtons[map[pageId]]);
}

// UI HELPERS & UTILITIES
function toggleSave(name, event) {
    if (event) event.stopPropagation();
    if (savedPlaces.has(name)) {
        savedPlaces.delete(name);
        showToast("Removed from saved places");
    } else {
        savedPlaces.add(name);
        showToast("Saved successfully");
    }
    showHome();
}

function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
}

function toggleMobileMenu() {
    const searchBox = document.getElementById("searchBox");
    if (searchBox) searchBox.classList.toggle("mobile-search-open");
}

function selectRadius(btn) {
    btn.parentElement.querySelectorAll("button").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
}

function submitAdvertisement() {
    showToast("Campaign submitted for approval!");
    businessPageById('ads');
}

// CARD CREATION
function createBusinessCard(business) {
    const isSaved = savedPlaces.has(business.name);
    return `
        <article class="business-card" onclick="openBusiness('${business.name}')">
            <div class="business-image">
                <img src="${business.image}" alt="${business.name}" loading="lazy">
                <span class="business-category">${business.category}</span>
                <button class="favorite-button ${isSaved ? 'saved' : ''}" onclick="toggleSave('${business.name}', event)">
                    <i data-lucide="heart" ${isSaved ? 'fill="#b14d61"' : ''}></i>
                </button>
            </div>
            <div class="business-content">
                <div class="card-top">
                    <h3>${business.name}</h3>
                    <span class="business-rating">★ ${business.rating}</span>
                </div>
                <p class="business-location">📍 ${business.location}</p>
                <p class="business-distance">${business.distance} away</p>
                <p class="business-description">${business.description}</p>
                <div class="offer-tag">🎁 ${business.offer}</div>
                <button class="outline-button">View Details</button>
            </div>
        </article>
    `;
}

// FILTERING & SEARCH
function getFilteredBusinesses() {
    return businesses.filter((business) => {
        const areaMatch = selectedArea === "All" || business.area === selectedArea;
        const categoryMatch = selectedCategory === "All" || business.category === selectedCategory;
        return areaMatch && categoryMatch;
    });
}

function filterArea(area, button) {
    selectedArea = area;
    selectedCategory = "All";

    document.querySelectorAll(".area-chip").forEach((chip) => chip.classList.remove("active"));
    if (button) button.classList.add("active");

    document.querySelectorAll(".category-btn").forEach((btn) => btn.classList.remove("active"));
    showHome();
}

function filterCategory(category) {
    selectedCategory = category;
    document.querySelectorAll(".category-btn").forEach((button) => {
        const buttonCategory = button.dataset.category || button.textContent.trim();
        button.classList.toggle("active", buttonCategory === category);
    });
    showHome();
}

function searchBusinesses() {
    const searchInput = document.getElementById("searchInput");
    if (!searchInput) return;

    const searchTerm = searchInput.value.toLowerCase().trim();
    const grid = document.getElementById("businessGrid");
    if (!grid) return;

    if (!searchTerm) {
        showHome();
        return;
    }

    const results = businesses.filter((business) => {
        const areaMatch = selectedArea === "All" || business.area === selectedArea;
        const categoryMatch = selectedCategory === "All" || business.category === selectedCategory;
        const searchMatch =
            business.name.toLowerCase().includes(searchTerm) ||
            business.category.toLowerCase().includes(searchTerm) ||
            business.area.toLowerCase().includes(searchTerm) ||
            business.location.toLowerCase().includes(searchTerm) ||
            business.description.toLowerCase().includes(searchTerm);

        return areaMatch && categoryMatch && searchMatch;
    });

    grid.innerHTML = "";
    if (results.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <h3>No results found</h3>
                <p>Try searching for restaurants, cafés, salons, gyms or shops.</p>
            </div>
        `;
    } else {
        results.forEach((business) => {
            grid.innerHTML += createBusinessCard(business);
        });
    }
    updateNearbyCount(results.length);
    if (window.lucide) lucide.createIcons();
}

function setupSearch() {
    const searchInput = document.getElementById("searchInput");
    if (!searchInput) return;
    searchInput.addEventListener("input", searchBusinesses);
}

function updateNearbyCount(count) {
    const countElement = document.getElementById("nearbyCount");
    if (countElement) countElement.textContent = count;
}

function updateRecommendedTitle() {
    const title = document.getElementById("recommendedTitle");
    if (!title) return;
    title.textContent = selectedArea === "All" ? "Recommended in Delhi" : `Recommended in ${selectedArea}`;
}

// WEATHER INTEGRATION
function getWeatherDescription(code) {
    const weatherCodes = {
        0: { icon: "☀️", text: "Clear sky" },
        1: { icon: "🌤️", text: "Mainly clear" },
        2: { icon: "⛅", text: "Partly cloudy" },
        3: { icon: "☁️", text: "Overcast" },
        45: { icon: "🌫️", text: "Foggy" },
        61: { icon: "🌦️", text: "Light rain" },
        63: { icon: "🌧️", text: "Rain" },
        95: { icon: "⛈️", text: "Thunderstorm" }
    };
    return weatherCodes[code] || { icon: "🌤️", text: "Delhi weather" };
}

async function loadDelhiWeather() {
    const weatherIcon = document.getElementById("weatherIcon");
    const weatherTemp = document.getElementById("weatherTemp");
    const weatherCondition = document.getElementById("weatherCondition");
    const weatherFeels = document.getElementById("weatherFeels");

    if (!weatherIcon || !weatherTemp || !weatherCondition) return;

    try {
        const apiURL = "https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current=temperature_2m,apparent_temperature,weather_code&timezone=Asia%2FKolkata";
        const response = await fetch(apiURL);
        if (!response.ok) throw new Error("Weather API error");
        
        const data = await response.json();
        const current = data.current;
        const weather = getWeatherDescription(current.weather_code);

        weatherIcon.textContent = weather.icon;
        weatherTemp.textContent = `${Math.round(current.temperature_2m)}°C`;
        weatherCondition.textContent = weather.text;
        if (weatherFeels) weatherFeels.textContent = `Feels like ${Math.round(current.apparent_temperature)}°C`;
    } catch (error) {
        weatherIcon.textContent = "🌤️";
        weatherTemp.textContent = "--°C";
        weatherCondition.textContent = "Weather unavailable";
        if (weatherFeels) weatherFeels.textContent = "Check connection";
    }
}

// DETAIL MODAL VIEW
function openBusiness(name) {
    const business = businesses.find((item) => item.name === name);
    if (!business) return;

    hideAllUserSections();
    const detailPage = document.getElementById("detailPage");
    const detailContent = document.getElementById("detailContent");

    detailContent.innerHTML = `
        <div class="detail-cover">
            <img src="${business.image}" alt="${business.name}">
            <button class="detail-save" onclick="toggleSave('${business.name}')">Save Spot</button>
        </div>
        <div class="detail-content">
            <div>
                <span class="eyebrow">${business.category.toUpperCase()} • ${business.area.toUpperCase()}</span>
                <h1>${business.name}</h1>
                <div class="detail-rating">★ ${business.rating} <span>(High user rating)</span></div>
                <p class="detail-description">${business.description}</p>

                <div class="detail-info">
                    <div><i data-lucide="map-pin"></i> ${business.location} (${business.distance})</div>
                    <div><i data-lucide="clock"></i> Open: ${business.hours}</div>
                </div>

                <div class="detail-offer">
                    <strong>Special Promotion</strong>
                    <p>🎁 ${business.offer}</p>
                </div>
            </div>
            <div class="recommend-box">
                <h3>Smart Match</h3>
                <p>Matches your active location preferences in Delhi.</p>
                <div class="match-score">94%</div>
            </div>
        </div>
    `;

    detailPage.classList.remove("hidden");
    if (window.lucide) lucide.createIcons();
}