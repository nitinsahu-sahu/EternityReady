const Testimonials = () => {
    return (
        <section class="testimonials">
            <div class="container">
                <div class="section-header fade-up">
                    <h2 class="section-title">Trusted by <span class="gradient-text">10,000+</span> Members</h2>
                    <p class="section-subtitle">Real stories from our premium community</p>
                </div>
                <div class="testimonial-carousel fade-up">
                    <div class="testimonial-track" id="testimonialTrack">
                        <div class="testimonial-card">
                            <div class="testimonial-quote">"</div>
                            <p class="testimonial-text">This platform transformed my daily practice. The premium insights are like having a personal spiritual guide.</p>
                            <div class="testimonial-author">
                                <strong>Sarah Johnson</strong>
                                <span>Member since 2024</span>
                            </div>
                            <div class="testimonial-stars">★★★★★</div>
                        </div>
                        <div class="testimonial-card">
                            <div class="testimonial-quote">"</div>
                            <p class="testimonial-text">Worth every penny! The exclusive content alone makes premium worth it. Life-changing decision.</p>
                            <div class="testimonial-author">
                                <strong>Michael Chen</strong>
                                <span>Premium Member</span>
                            </div>
                            <div class="testimonial-stars">★★★★★</div>
                        </div>
                        <div class="testimonial-card">
                            <div class="testimonial-quote">"</div>
                            <p class="testimonial-text">I've tried many platforms, but nothing compares to the depth and quality here. Highly recommend!</p>
                            <div class="testimonial-author">
                                <strong>David Williams</strong>
                                <span>Spiritual Coach</span>
                            </div>
                            <div class="testimonial-stars">★★★★★</div>
                        </div>
                        <div class="testimonial-card">
                            <div class="testimonial-quote">"</div>
                            <p class="testimonial-text">The daily insights keep me grounded and focused. Best investment in myself this year.</p>
                            <div class="testimonial-author">
                                <strong>Emily Rodriguez</strong>
                                <span>Yoga Instructor</span>
                            </div>
                            <div class="testimonial-stars">★★★★★</div>
                        </div>
                    </div>
                    <div class="carousel-controls">
                        <button class="carousel-btn prev" id="prevBtn">←</button>
                        <div class="carousel-dots" id="carouselDots"></div>
                        <button class="carousel-btn next" id="nextBtn">→</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials 