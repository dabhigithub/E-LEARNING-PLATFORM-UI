/**
 * E-Learning Platform JavaScript
 * Main script file for handling interactive elements across the platform
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive components
    initNavigation();
    initDropdowns();
    initTabs();
    initSearchBars();
    initCoursesFilters();
    initLearningChart();
    initVideoPlayer();
    initCourseProgress();
    initMobileSearch();
    initHomeSearch();
    initAuthButtons();
});

/**
 * Authentication buttons functionality
 */
function initAuthButtons() {
    // For demo purposes, toggle between auth buttons and user profile
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    const userProfile = document.querySelector('.user-profile');
    
    if (loginBtn && userProfile) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Check if we're on a page that should redirect to dashboard
            const currentPath = window.location.pathname;
            if (currentPath.includes('dashboard.html') || currentPath.includes('video-player.html')) {
                // Already on a protected page, just show the user profile
                toggleAuthUI(true);
            } else {
                // Simulate login and redirect to dashboard
                toggleAuthUI(true);
                
                // Store login state in localStorage
                localStorage.setItem('learnet_logged_in', 'true');
                
                // Optional: redirect to dashboard after short delay
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 500);
            }
        });
    }
    
    // Check if user is logged in from localStorage
    const isLoggedIn = localStorage.getItem('learnet_logged_in') === 'true';
    
    // Handle logout
    const logoutBtn = document.querySelector('.dropdown-menu a[href="#"]:last-child');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove logged in state
            localStorage.removeItem('learnet_logged_in');
            
            // Toggle UI
            toggleAuthUI(false);
            
            // Redirect to home if on a protected page
            const currentPath = window.location.pathname;
            if (currentPath.includes('dashboard.html') || currentPath.includes('video-player.html')) {
                window.location.href = 'index.html';
            }
        });
    }
    
    // Initialize UI based on login state
    toggleAuthUI(isLoggedIn);
    
    // Function to toggle between auth buttons and user profile
    function toggleAuthUI(isLoggedIn) {
        if (loginBtn && signupBtn && userProfile) {
            if (isLoggedIn) {
                loginBtn.style.display = 'none';
                signupBtn.style.display = 'none';
                userProfile.style.display = 'block';
            } else {
                loginBtn.style.display = 'inline-block';
                signupBtn.style.display = 'inline-block';
                userProfile.style.display = 'none';
            }
        }
    }
}

/**
 * Navigation functionality
 */
function initNavigation() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Add active class to current page in navigation
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentLocation.includes(linkPath) && linkPath !== '/') {
            link.classList.add('active');
        } else if (currentLocation === '/' && linkPath === '/') {
            link.classList.add('active');
        }
    });
}

/**
 * Dropdown menus functionality
 */
function initDropdowns() {
    // User profile dropdown
    const userProfiles = document.querySelectorAll('.user-profile');
    
    userProfiles.forEach(userProfile => {
        const dropdownMenu = userProfile.querySelector('.dropdown-menu');
        
        if (dropdownMenu) {
            // Toggle dropdown on click
            userProfile.addEventListener('click', function(e) {
                e.stopPropagation();
                
                // Close all other dropdowns first
                document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
                    if (menu !== dropdownMenu) {
                        menu.classList.remove('active');
                    }
                });
                
                // Toggle current dropdown
                dropdownMenu.classList.toggle('active');
            });
            
            // Handle dropdown menu item clicks
            const menuItems = dropdownMenu.querySelectorAll('a');
            menuItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    // Don't close dropdown if it's a submenu toggle
                    if (this.classList.contains('submenu-toggle')) {
                        e.preventDefault();
                        e.stopPropagation();
                        const submenu = this.nextElementSibling;
                        if (submenu) {
                            submenu.classList.toggle('active');
                        }
                    } else {
                        // Regular menu item - allow normal navigation
                        dropdownMenu.classList.remove('active');
                    }
                });
            });
        }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
            menu.classList.remove('active');
        });
    });
    
    // Prevent dropdown from closing when clicking inside it
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
}

/**
 * Tabs functionality
 */
function initTabs() {
    const tabLinks = document.querySelectorAll('.tab-links li a');
    
    if (tabLinks.length) {
        tabLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const tabId = this.getAttribute('href');
                const tabContent = document.querySelectorAll('.tab-content > div');
                
                // Remove active class from all tabs
                tabLinks.forEach(link => link.classList.remove('active'));
                tabContent.forEach(content => content.classList.remove('active'));
                
                // Add active class to current tab
                this.classList.add('active');
                document.querySelector(tabId).classList.add('active');
            });
        });
        
        // Activate first tab by default
        tabLinks[0].click();
    }
}

/**
 * Search functionality
 */
function initSearchBars() {
    const searchForms = document.querySelectorAll('.search-bar');
    
    // Sample search suggestions data
    const searchSuggestions = [
        { text: 'Web Development', icon: 'fas fa-code', category: 'Category' },
        { text: 'JavaScript Fundamentals', icon: 'fab fa-js', category: 'Course' },
        { text: 'React for Beginners', icon: 'fab fa-react', category: 'Course' },
        { text: 'CSS Animations', icon: 'fas fa-paint-brush', category: 'Topic' },
        { text: 'Python Programming', icon: 'fab fa-python', category: 'Course' },
        { text: 'Data Science', icon: 'fas fa-chart-bar', category: 'Category' },
        { text: 'Machine Learning', icon: 'fas fa-brain', category: 'Topic' },
        { text: 'UI/UX Design', icon: 'fas fa-pencil-ruler', category: 'Category' }
    ];
    
    searchForms.forEach(form => {
        const searchInput = form.querySelector('input');
        const searchButton = form.querySelector('button');
        
        // Create suggestions container
        const suggestionsContainer = document.createElement('div');
        suggestionsContainer.className = 'search-suggestions';
        form.appendChild(suggestionsContainer);
        
        // Handle input changes for suggestions
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                const query = this.value.trim().toLowerCase();
                
                if (query.length >= 2) {
                    // Filter suggestions based on input
                    const filteredSuggestions = searchSuggestions.filter(suggestion => 
                        suggestion.text.toLowerCase().includes(query)
                    );
                    
                    // Display suggestions
                    if (filteredSuggestions.length > 0) {
                        suggestionsContainer.innerHTML = '';
                        
                        filteredSuggestions.forEach(suggestion => {
                            const suggestionItem = document.createElement('div');
                            suggestionItem.className = 'suggestion-item';
                            suggestionItem.innerHTML = `
                                <div class="suggestion-icon"><i class="${suggestion.icon}"></i></div>
                                <div class="suggestion-text">${highlightMatch(suggestion.text, query)}</div>
                                <div class="suggestion-category">${suggestion.category}</div>
                            `;
                            
                            suggestionItem.addEventListener('click', function() {
                                searchInput.value = suggestion.text;
                                suggestionsContainer.classList.remove('show');
                                form.dispatchEvent(new Event('submit'));
                            });
                            
                            suggestionsContainer.appendChild(suggestionItem);
                        });
                        
                        suggestionsContainer.classList.add('show');
                    } else {
                        suggestionsContainer.classList.remove('show');
                    }
                } else {
                    suggestionsContainer.classList.remove('show');
                }
            });
            
            // Close suggestions when clicking outside
            document.addEventListener('click', function(e) {
                if (!form.contains(e.target)) {
                    suggestionsContainer.classList.remove('show');
                }
            });
            
            // Handle keyboard navigation in suggestions
            searchInput.addEventListener('keydown', function(e) {
                const suggestionItems = suggestionsContainer.querySelectorAll('.suggestion-item');
                
                if (!suggestionItems.length) return;
                
                const activeItem = suggestionsContainer.querySelector('.suggestion-item.active');
                
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    
                    if (!activeItem) {
                        suggestionItems[0].classList.add('active');
                    } else {
                        activeItem.classList.remove('active');
                        const nextItem = activeItem.nextElementSibling || suggestionItems[0];
                        nextItem.classList.add('active');
                    }
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    
                    if (!activeItem) {
                        suggestionItems[suggestionItems.length - 1].classList.add('active');
                    } else {
                        activeItem.classList.remove('active');
                        const prevItem = activeItem.previousElementSibling || suggestionItems[suggestionItems.length - 1];
                        prevItem.classList.add('active');
                    }
                } else if (e.key === 'Enter' && activeItem) {
                    e.preventDefault();
                    searchInput.value = activeItem.querySelector('.suggestion-text').textContent;
                    suggestionsContainer.classList.remove('show');
                    form.dispatchEvent(new Event('submit'));
                }
            });
        }
        
        // Handle form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = this.querySelector('input').value.trim();
            
            if (searchInput.length > 2) {
                // Show loading state
                if (searchButton) {
                    searchButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
                    searchButton.disabled = true;
                }
                
                // Simulate search delay
                setTimeout(() => {
                    // Reset button state
                    if (searchButton) {
                        searchButton.innerHTML = '<i class="fas fa-search"></i>';
                        searchButton.disabled = false;
                    }
                    
                    // Redirect to search results page
                    window.location.href = `search-results.html?q=${encodeURIComponent(searchInput)}`;
                }, 500);
            }
        });
    });
    
    // Highlight matching text in suggestions
    function highlightMatch(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<strong>$1</strong>');
    }
    
    // Parse URL parameters for search query
    function parseSearchQuery() {
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('q');
        
        if (searchQuery) {
            // Update search inputs with the query
            document.querySelectorAll('.search-bar input').forEach(input => {
                input.value = searchQuery;
            });
            
            // Update search results title if on results page
            const searchResultsTitle = document.querySelector('.search-results-title');
            if (searchResultsTitle) {
                searchResultsTitle.textContent = `Search results for "${searchQuery}"`;
            }
            
            // Update search results count if on results page
            const searchResultsCount = document.querySelector('.search-results-count span');
            if (searchResultsCount) {
                // In a real application, this would be the actual count from the backend
                const randomCount = Math.floor(Math.random() * 50) + 5;
                searchResultsCount.textContent = randomCount;
            }
        }
    }
    
    // Initialize with URL parameters
    parseSearchQuery();
}

/**
 * Enhanced home search functionality
 */
function initHomeSearch() {
    const heroSearchBar = document.querySelector('.hero .search-bar');
    
    if (heroSearchBar) {
        const searchInput = heroSearchBar.querySelector('input');
        const searchButton = heroSearchBar.querySelector('button');
        
        // Add focus effect to the search bar
        if (searchInput) {
            // Focus animation
            searchInput.addEventListener('focus', function() {
                heroSearchBar.classList.add('focused');
                
                // Add trending searches if no input yet
                if (this.value.trim() === '') {
                    showTrendingSearches();
                }
            });
            
            // Show trending searches
            function showTrendingSearches() {
                const suggestionsContainer = heroSearchBar.querySelector('.search-suggestions');
                if (!suggestionsContainer) return;
                
                const trendingSearches = [
                    { text: 'JavaScript', icon: 'fab fa-js', category: 'Trending' },
                    { text: 'Python for Beginners', icon: 'fab fa-python', category: 'Popular' },
                    { text: 'Web Development 2023', icon: 'fas fa-code', category: 'Trending' },
                    { text: 'Data Science Bootcamp', icon: 'fas fa-chart-bar', category: 'Popular' }
                ];
                
                suggestionsContainer.innerHTML = '<div class="suggestion-header">Trending Searches</div>';
                
                trendingSearches.forEach(trend => {
                    const trendItem = document.createElement('div');
                    trendItem.className = 'suggestion-item';
                    trendItem.innerHTML = `
                        <div class="suggestion-icon"><i class="${trend.icon}"></i></div>
                        <div class="suggestion-text">${trend.text}</div>
                        <div class="suggestion-category">${trend.category}</div>
                    `;
                    
                    trendItem.addEventListener('click', function() {
                        searchInput.value = trend.text;
                        suggestionsContainer.classList.remove('show');
                        heroSearchBar.dispatchEvent(new Event('submit'));
                    });
                    
                    suggestionsContainer.appendChild(trendItem);
                });
                
                suggestionsContainer.classList.add('show');
            }
            
            // Add pulse animation to search button
            if (searchButton) {
                setInterval(() => {
                    searchButton.classList.add('pulse');
                    setTimeout(() => {
                        searchButton.classList.remove('pulse');
                    }, 1000);
                }, 5000);
            }
        }
    }
}

/**
 * Mobile search functionality
 */
function initMobileSearch() {
    const mobileSearchToggle = document.querySelector('.mobile-search-toggle');
    const mobileSearchContainer = document.querySelector('.mobile-search-container');
    const mobileSearchClose = document.querySelector('.mobile-search-close');
    
    if (mobileSearchToggle && mobileSearchContainer) {
        mobileSearchToggle.addEventListener('click', function() {
            mobileSearchContainer.classList.add('show');
            const searchInput = mobileSearchContainer.querySelector('input');
            if (searchInput) {
                searchInput.focus();
            }
        });
    }
    
    if (mobileSearchClose && mobileSearchContainer) {
        mobileSearchClose.addEventListener('click', function() {
            mobileSearchContainer.classList.remove('show');
        });
    }
}

/**
 * Course filters functionality
 */
function initCoursesFilters() {
    const filterCheckboxes = document.querySelectorAll('.courses-filters input[type="checkbox"]');
    const sortSelect = document.querySelector('.sort-options select');
    
    // Handle filter changes
    if (filterCheckboxes.length) {
        filterCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                applyFilters();
            });
        });
    }
    
    // Handle sort changes
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            applyFilters();
        });
    }
    
    // Apply filters function
    function applyFilters() {
        // Get selected filters
        const selectedFilters = {
            categories: [],
            levels: [],
            price: [],
            ratings: []
        };
        
        filterCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const filterType = checkbox.closest('.filter-group').classList[1];
                const filterValue = checkbox.value;
                
                if (filterType) {
                    selectedFilters[filterType].push(filterValue);
                } else if (checkbox.id.includes('cat-')) {
                    selectedFilters.categories.push(filterValue);
                } else if (checkbox.id.includes('level-')) {
                    selectedFilters.levels.push(filterValue);
                } else if (checkbox.id.includes('price-')) {
                    selectedFilters.price.push(filterValue);
                } else if (checkbox.id.includes('rating-')) {
                    selectedFilters.ratings.push(filterValue);
                }
            }
        });
        
        // Get sort option
        const sortOption = sortSelect ? sortSelect.value : 'relevance';
        
        // Log selected filters and sort option (in a real app, this would filter the courses)
        console.log('Selected Filters:', selectedFilters);
        console.log('Sort Option:', sortOption);
        
        // In a real application, you would filter the courses based on the selected filters
        // and sort them based on the sort option
        // For now, we'll just simulate a loading state
        
        const coursesList = document.querySelector('.courses-grid');
        if (coursesList) {
            coursesList.style.opacity = '0.5';
            
            setTimeout(() => {
                coursesList.style.opacity = '1';
            }, 500);
        }
    }
}

/**
 * Learning chart functionality
 */
function initLearningChart() {
    const chartContainer = document.getElementById('learning-chart');
    
    if (chartContainer) {
        // Sample data for the chart
        const chartData = [
            { day: 'Mon', hours: 1.5 },
            { day: 'Tue', hours: 2.0 },
            { day: 'Wed', hours: 1.0 },
            { day: 'Thu', hours: 3.0 },
            { day: 'Fri', hours: 2.5 },
            { day: 'Sat', hours: 1.0 },
            { day: 'Sun', hours: 1.0 }
        ];
        
        // Create chart HTML
        let chartHTML = '';
        const maxHours = Math.max(...chartData.map(item => item.hours));
        
        chartData.forEach(item => {
            const barHeight = (item.hours / maxHours) * 100;
            
            chartHTML += `
                <div class="chart-bar-container">
                    <div class="chart-bar-tooltip">${item.hours} hrs</div>
                    <div class="chart-bar" style="height: ${barHeight}%" data-hours="${item.hours}"></div>
                    <div class="chart-bar-label">${item.day}</div>
                </div>
            `;
        });
        
        chartContainer.innerHTML = chartHTML;
        
        // Add hover effect for tooltips
        const chartBars = chartContainer.querySelectorAll('.chart-bar-container');
        
        chartBars.forEach(bar => {
            bar.addEventListener('mouseenter', function() {
                this.querySelector('.chart-bar-tooltip').style.opacity = '1';
            });
            
            bar.addEventListener('mouseleave', function() {
                this.querySelector('.chart-bar-tooltip').style.opacity = '0';
            });
        });
    }
}

/**
 * Video player functionality
 */
function initVideoPlayer() {
    const videoPlayer = document.querySelector('.video-player video');
    const playPauseBtn = document.querySelector('.video-controls .play-pause');
    const volumeBtn = document.querySelector('.video-controls .volume');
    const volumeSlider = document.querySelector('.video-controls .volume-slider');
    const fullscreenBtn = document.querySelector('.video-controls .fullscreen');
    const progressBar = document.querySelector('.video-progress-bar');
    const progressFilled = document.querySelector('.video-progress-filled');
    const currentTimeDisplay = document.querySelector('.video-time-current');
    const durationDisplay = document.querySelector('.video-time-duration');
    
    if (videoPlayer) {
        // Play/Pause
        if (playPauseBtn) {
            playPauseBtn.addEventListener('click', function() {
                if (videoPlayer.paused) {
                    videoPlayer.play();
                    this.innerHTML = '<i class="fas fa-pause"></i>';
                } else {
                    videoPlayer.pause();
                    this.innerHTML = '<i class="fas fa-play"></i>';
                }
            });
        }
        
        // Volume
        if (volumeBtn && volumeSlider) {
            volumeBtn.addEventListener('click', function() {
                if (videoPlayer.muted) {
                    videoPlayer.muted = false;
                    this.innerHTML = '<i class="fas fa-volume-up"></i>';
                    volumeSlider.value = videoPlayer.volume;
                } else {
                    videoPlayer.muted = true;
                    this.innerHTML = '<i class="fas fa-volume-mute"></i>';
                    volumeSlider.value = 0;
                }
            });
            
            volumeSlider.addEventListener('input', function() {
                videoPlayer.volume = this.value;
                
                if (this.value == 0) {
                    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
                    videoPlayer.muted = true;
                } else {
                    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
                    videoPlayer.muted = false;
                }
            });
        }
        
        // Fullscreen
        if (fullscreenBtn) {
            fullscreenBtn.addEventListener('click', function() {
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                } else {
                    videoPlayer.requestFullscreen();
                }
            });
        }
        
        // Progress bar
        if (progressBar && progressFilled) {
            videoPlayer.addEventListener('timeupdate', function() {
                const percent = (videoPlayer.currentTime / videoPlayer.duration) * 100;
                progressFilled.style.width = `${percent}%`;
                
                if (currentTimeDisplay) {
                    currentTimeDisplay.textContent = formatTime(videoPlayer.currentTime);
                }
            });
            
            progressBar.addEventListener('click', function(e) {
                const progressTime = (e.offsetX / this.offsetWidth) * videoPlayer.duration;
                videoPlayer.currentTime = progressTime;
            });
        }
        
        // Duration
        videoPlayer.addEventListener('loadedmetadata', function() {
            if (durationDisplay) {
                durationDisplay.textContent = formatTime(videoPlayer.duration);
            }
        });
        
        // Format time
        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            seconds = Math.floor(seconds % 60);
            
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
    }
}

/**
 * Course progress tracking
 */
function initCourseProgress() {
    const lectureItems = document.querySelectorAll('.lecture-item');
    const progressBars = document.querySelectorAll('.progress-bar[data-progress]');
    
    // Mark lectures as completed
    if (lectureItems.length) {
        lectureItems.forEach(item => {
            const checkbox = item.querySelector('input[type="checkbox"]');
            
            if (checkbox) {
                // Load saved state
                const lectureId = checkbox.getAttribute('data-lecture-id');
                const isCompleted = localStorage.getItem(`lecture_${lectureId}`) === 'completed';
                
                if (isCompleted) {
                    checkbox.checked = true;
                    item.classList.add('completed');
                }
                
                // Handle checkbox change
                checkbox.addEventListener('change', function() {
                    if (this.checked) {
                        item.classList.add('completed');
                        localStorage.setItem(`lecture_${lectureId}`, 'completed');
                    } else {
                        item.classList.remove('completed');
                        localStorage.removeItem(`lecture_${lectureId}`);
                    }
                    
                    updateSectionProgress();
                });
            }
        });
    }
    
    // Update section progress
    function updateSectionProgress() {
        const sections = document.querySelectorAll('.course-section');
        
        sections.forEach(section => {
            const totalLectures = section.querySelectorAll('.lecture-item').length;
            const completedLectures = section.querySelectorAll('.lecture-item.completed').length;
            
            const progressPercent = totalLectures > 0 ? (completedLectures / totalLectures) * 100 : 0;
            
            const progressBar = section.querySelector('.progress-bar');
            const progressText = section.querySelector('.progress-text');
            
            if (progressBar) {
                progressBar.style.width = `${progressPercent}%`;
            }
            
            if (progressText) {
                progressText.textContent = `${completedLectures}/${totalLectures}`;
            }
        });
    }
    
    // Initialize progress bars with data-progress attribute
    if (progressBars.length) {
        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = `${progress}%`;
        });
    }
    
    // Initial update
    updateSectionProgress();
}

// Add CSS for pulse animation and dropdown menu
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .pulse {
        animation: pulse 1s ease;
    }
    
    .search-bar.focused {
        box-shadow: 0 0 0 3px var(--primary-light);
    }
    
    .suggestion-header {
        padding: 10px 15px;
        font-weight: 600;
        color: var(--text-medium);
        background-color: var(--bg-light);
        border-bottom: 1px solid var(--border-color);
    }
    
    /* Dropdown menu styles */
    .dropdown-menu {
        display: none;
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    .dropdown-menu.active {
        display: block;
        opacity: 1;
        transform: translateY(0);
    }
    
    .user-profile {
        cursor: pointer;
    }
`;
document.head.appendChild(style); 