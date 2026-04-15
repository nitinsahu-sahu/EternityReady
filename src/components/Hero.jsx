const Hero=()=>{
    return(
        <section class="hero">
            <div class="container">
                <div class="hero-grid">
                    <div class="hero-content fade-up">
                        <div class="hero-badge">
                            <span class="badge">✨ Limited Time Offer</span>
                        </div>
                        <h1 class="hero-title">
                            Unlock Your <span class="gradient-text">Premium</span> Journey
                        </h1>
                        <p class="hero-subtitle">
                            Transform your spiritual practice with exclusive tools, personalized insights, 
                            and premium content designed for those ready to elevate their life.
                        </p>
                        <div class="hero-buttons">
                            <a href="#registration-url" class="btn btn-primary btn-large">
                                🎁 Start Free Trial
                                <span class="btn-subtext">14 days free · No credit card</span>
                            </a>
                        </div>
                        <div class="hero-trust">
                            <span>✓ Cancel anytime</span>
                            <span>✓ Secure payment</span>
                            <span>✓ 24/7 support</span>
                        </div>
                    </div>
                    <div class="hero-visual fade-up-delay">
                        <div class="floating-card card-1">
                            <span>📖 Daily Wisdom</span>
                        </div>
                        <div class="floating-card card-2">
                            <span>🎯 Personalized Path</span>
                        </div>
                        <div class="floating-card card-3">
                            <span>👑 Exclusive Access</span>
                        </div>
                        <div class="hero-circle"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero