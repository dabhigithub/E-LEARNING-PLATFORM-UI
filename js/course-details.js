document.addEventListener('DOMContentLoaded', function() {
    // Tab Functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the tab id from data attribute
            const tabId = this.getAttribute('data-tab');
            
            // Add active class to corresponding pane with smooth animation
            const targetPane = document.getElementById(tabId);
            targetPane.classList.add('active');
            
            // Smooth scroll to the tabs on mobile
            if (window.innerWidth < 768) {
                this.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
        });
    });

    // Curriculum Section Toggling
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    sectionHeaders.forEach(header => {
        // Initialize sections - set initial state
        const sectionId = header.getAttribute('data-section');
        const contentId = `section-${sectionId}-content`;
        const content = document.getElementById(contentId);
        
        // Default first section to be open, others closed
        if (sectionId === '1') {
            content.classList.add('show');
            header.setAttribute('aria-expanded', 'true');
        } else {
            content.classList.remove('show');
            header.setAttribute('aria-expanded', 'false');
        }
        
        header.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            const contentId = `section-${sectionId}-content`;
            const content = document.getElementById(contentId);
            
            // Toggle the content visibility using the class
            if (content.classList.contains('show')) {
                content.classList.remove('show');
                this.setAttribute('aria-expanded', 'false');
            } else {
                content.classList.add('show');
                this.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Video Preview Functionality
    const videoOverlay = document.getElementById('video-overlay');
    const courseVideo = document.getElementById('course-video');
    const playBtn = document.getElementById('play-btn');
    
    if (videoOverlay && courseVideo && playBtn) {
        videoOverlay.addEventListener('click', function() {
            // Hide overlay with animation
            this.style.opacity = '0';
            setTimeout(() => {
                this.style.display = 'none';
                this.style.opacity = '1';
            }, 300);
            
            // Play video
            courseVideo.play();
        });
        
        // Pause video when it ends and show overlay again
        courseVideo.addEventListener('ended', function() {
            videoOverlay.style.display = 'flex';
            courseVideo.load(); // Reset the video
        });
        
        // Handle pause event to show the overlay
        courseVideo.addEventListener('pause', function() {
            if (!courseVideo.seeking) {
                videoOverlay.style.display = 'flex';
            }
        });
    }

    // Course Hero Card Effects
    const courseHeroCard = document.querySelector('.course-hero-card');
    if (courseHeroCard) {
        courseHeroCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 20px 30px rgba(0, 0, 0, 0.2)';
        });
        
        courseHeroCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
    }

    // Wishlist Button Toggle with localStorage persistence
    const wishlistBtns = document.querySelectorAll('.wishlist-button');
    if (wishlistBtns.length > 0) {
        // Function to set wishlist state
        const setWishlistState = (button, isWishlisted) => {
            const icon = button.querySelector('i');
            
            if (isWishlisted) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                button.classList.add('active');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                button.classList.remove('active');
            }
        };
        
        // Check localStorage for saved wishlist state
        const courseId = document.querySelector('.course-hero').getAttribute('data-course-id') || 'web-dev-course';
        const isWishlisted = localStorage.getItem(`wishlist_${courseId}`) === 'true';
        
        // Apply saved state to all wishlist buttons
        wishlistBtns.forEach(btn => {
            setWishlistState(btn, isWishlisted);
            
            btn.addEventListener('click', function() {
                const currentState = this.classList.contains('active');
                const newState = !currentState;
                
                // Update all instances of the wishlist button
                wishlistBtns.forEach(button => {
                    setWishlistState(button, newState);
                });
                
                // Save to localStorage
                localStorage.setItem(`wishlist_${courseId}`, newState);
                
                // Provide visual feedback
                const feedbackMessage = document.createElement('div');
                feedbackMessage.className = 'wishlist-feedback';
                feedbackMessage.textContent = newState ? 'Added to wishlist!' : 'Removed from wishlist';
                feedbackMessage.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background-color: #3b82f6;
                    color: white;
                    padding: 10px 20px;
                    border-radius: 4px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                    z-index: 9999;
                    animation: fadeInOut 2.5s ease forwards;
                `;
                
                // Add keyframe animation to the document if it doesn't exist
                if (!document.querySelector('#wishlist-feedback-animation')) {
                    const style = document.createElement('style');
                    style.id = 'wishlist-feedback-animation';
                    style.textContent = `
                        @keyframes fadeInOut {
                            0% { opacity: 0; transform: translateY(-20px); }
                            10% { opacity: 1; transform: translateY(0); }
                            90% { opacity: 1; transform: translateY(0); }
                            100% { opacity: 0; transform: translateY(-20px); }
                        }
                    `;
                    document.head.appendChild(style);
                }
                
                document.body.appendChild(feedbackMessage);
                
                // Remove the element after animation completes
                setTimeout(() => {
                    document.body.removeChild(feedbackMessage);
                }, 2500);
            });
        });
    }

    // Sticky Sidebar on Scroll
    const sidebar = document.querySelector('.course-sidebar-card');
    const sidebarParent = document.querySelector('.course-sidebar');
    const mainContent = document.querySelector('.course-content-section');
    
    if (sidebar && sidebarParent && mainContent && window.innerWidth > 1024) {
        const headerHeight = document.querySelector('header').offsetHeight;
        let sidebarTop = 0;
        let mainContentBottom = 0;
        
        // Function to calculate positions (called on load and resize)
        function calculatePositions() {
            sidebarTop = sidebar.getBoundingClientRect().top + window.pageYOffset;
            mainContentBottom = mainContent.getBoundingClientRect().bottom + window.pageYOffset;
            
            // Initial sidebar width calculation
            sidebar.style.width = `${sidebarParent.offsetWidth}px`;
        }
        
        // Calculate initially
        calculatePositions();
        
        // Recalculate on window resize
        window.addEventListener('resize', calculatePositions);
        
        // Sticky behavior on scroll
        window.addEventListener('scroll', function() {
            // Skip sticky behavior on mobile
            if (window.innerWidth <= 1024) {
                sidebar.style.position = 'static';
                return;
            }
            
            const windowTop = window.pageYOffset;
            const sidebarHeight = sidebar.offsetHeight;
            
            // When to make sidebar sticky (when scrolled past its original position)
            if (windowTop > sidebarTop - headerHeight - 20) {
                // Check if sidebar bottom would go beyond the main content
                if (windowTop + sidebarHeight + headerHeight + 20 < mainContentBottom) {
                    // Normal sticky behavior
                    sidebar.style.position = 'fixed';
                    sidebar.style.top = `${headerHeight + 20}px`;
                } else {
                    // Absolute positioning at the bottom
                    sidebar.style.position = 'absolute';
                    sidebar.style.top = `${mainContentBottom - sidebarHeight - sidebarParent.offsetTop}px`;
                }
            } else {
                // Reset to static when scrolled back up
                sidebar.style.position = 'static';
            }
        });
    }
    
    // Show More Reviews Button
    const showMoreReviewsBtn = document.querySelector('.show-more-reviews button');
    if (showMoreReviewsBtn) {
        showMoreReviewsBtn.addEventListener('click', function() {
            // This would fetch more reviews in a real implementation
            this.textContent = 'Loading...';
            
            // Simulate loading delay
            setTimeout(() => {
                this.textContent = 'No More Reviews';
                this.disabled = true;
            }, 1000);
        });
    }
    
    // Initialize course data attribute for wishlist if not present
    const courseHero = document.querySelector('.course-hero');
    if (courseHero && !courseHero.hasAttribute('data-course-id')) {
        courseHero.setAttribute('data-course-id', 'web-dev-course');
    }
    
    // Add smooth animations to the course cards in related courses
    const relatedCourseCards = document.querySelectorAll('.related-courses .course-card');
    relatedCourseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
        });
    });
}); 