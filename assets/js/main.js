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
                author: "Seun, 26"
            },
            {
                quote: "At 25, I was terrified to change careers. My coach helped me see my transferable skills and I'm now working in nonprofit—my dream job!",
                author: "Godpower, 27"
            },
            {
                quote: "Fresh out of University, I was paralyzed by options. The decision-making framework I learned gave me confidence to pursue design.",
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

// Offset resource web location by 50px
document.getElementById('scrollToResources').addEventListener('click', function(e) {
    e.preventDefault(); // prevent default jump
    const target = document.getElementById('resources');
    const offset = 50; // pixels to scroll lower

    const topPos = target.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: topPos,
      behavior: 'smooth'
    });
  });