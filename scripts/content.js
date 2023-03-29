let fastFoodChains = ["Starbucks", "Dunkin'", "McDonald's"];

function filterFastFoodChains() {
    let listings = document.querySelectorAll("[aria-label*='Starbucks'], [aria-label*=\"Dunkin'\"] , [aria-label*=\"McDonald's\"]");
    listings.forEach(function (listing) {
        listing.style.display = "none";
    });
}

setInterval(filterFastFoodChains, 1000);