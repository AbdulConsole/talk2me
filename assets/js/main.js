// Form submission for eBook download
        document.getElementById('ebook-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you! Your guide has been sent to ${email}. Check your inbox.`);
            this.reset();
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Testimonial carousel
        const testimonials = [
            {
                quote: "After my divorce, I didn't recognize myself anymore. My coach helped me rebuild my confidence and discover new passions I never would have considered before.",
                author: "Seun, 42"
            },
            {
                quote: "At 58, I was terrified to change careers. My coach helped me see my transferable skills and I'm now working in nonprofit—my dream job!",
                author: "Godpower, 32"
            },
            {
                quote: "Fresh out of college, I was paralyzed by options. The decision-making framework I learned gave me confidence to pursue design.",
                author: "Chidinma, 24"
            }
        ];
        
        let currentTestimonial = 0;
        const testimonialElement = document.querySelector('.testimonial-content');
        const authorElement = document.querySelector('.testimonial-author');
        
        function rotateTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            const { quote, author } = testimonials[currentTestimonial];
            testimonialElement.textContent = quote;
            authorElement.textContent = `— ${author}`;
        }
        
        setInterval(rotateTestimonial, 5000);
        
        // Mobile menu toggle would go here in production
        
        