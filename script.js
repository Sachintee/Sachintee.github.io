<script>
        // Simple interactivity
        document.querySelectorAll('.chip').forEach(chip => {
            chip.addEventListener('click', function() {
                document.querySelector('.search-bar input').value = this.textContent;
            });
        });
        
        // Animation for cards
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.internship-card, .step').forEach(el => {
            el.style.opacity = 0;
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    </script>
