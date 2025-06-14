// Navigation - Bar



const tabs = document.querySelectorAll('nav ul li a');
    const ACTIVE_TAB_KEY = 'activeTab';

    // Function to set active tab
    const setActiveTab = (id) => {
      tabs.forEach((tab) => tab.classList.remove('active'));
      const activeTab = document.getElementById(id);
      if (activeTab) activeTab.classList.add('active');
      localStorage.setItem(ACTIVE_TAB_KEY, id);
    };

    // Initialize on page load
    const savedTabId = localStorage.getItem(ACTIVE_TAB_KEY);
    if (savedTabId) {
      setActiveTab(savedTabId);
    } else {
      setActiveTab('home'); // Default tab
    }

    // Add click event listeners
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        setActiveTab(tab.id);
      });
    });
    
// services section
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".count");

    counters.forEach(counter => {
        let target = +counter.getAttribute("data-target");
        let count = 0;
        let increment = target / 100; // Adjust speed here

        const updateCount = () => {
            count += increment;

            if (count < target) {
                counter.innerText = Math.ceil(count) + (counter.innerText.includes('%') ? '%' : '+');
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target + (counter.innerText.includes('%') ? '%' : '+');
            }
        };

        updateCount();
    });
});

// about section
function openTab(event, tabId) {
    // Remove active class from all tabs and contents
    const tabs = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to clicked tab and corresponding content
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}


// Certification tab - Zoom functionality
function zoomImage(imgElement) {
    let overlay = document.querySelector(".overlay");

    if (!imgElement.classList.contains("zoomed")) {
        imgElement.classList.add("zoomed");
        overlay.style.display = "block"; // Show overlay
    } else {
        imgElement.classList.remove("zoomed");
        overlay.style.display = "none"; // Hide overlay
    }
}
// Navigation Button - Certification
let certIndex = 0;
const certBoxes = document.querySelectorAll(".certification-box");

function changeCertificate(direction) {
    certBoxes[certIndex].classList.remove("active"); // Hide current

    certIndex += direction;

    // Loop through certificates when reaching start/end
    if (certIndex < 0) {
        certIndex = certBoxes.length - 1;
    } else if (certIndex >= certBoxes.length) {
        certIndex = 0;
    }

    certBoxes[certIndex].classList.add("active"); // Show next
}
