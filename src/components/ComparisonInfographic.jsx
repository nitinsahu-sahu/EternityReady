const ComparisonInfographic = () => {
    return (
        <section class="comparison">
            <div class="container">
                <div class="section-header fade-up">
                    <h2 class="section-title">Free vs <span class="gradient-text">Premium</span></h2>
                    <p class="section-subtitle">See what you're missing</p>
                </div>
                <div class="comparison-wrapper fade-up">
                    <div class="comparison-card free">
                        <div class="comparison-header">
                            <span class="comparison-icon">🆓</span>
                            <h3>Free Member</h3>
                        </div>
                        <ul class="comparison-list">
                            <li>✓ Basic content library</li>
                            <li>✓ Limited daily access</li>
                            <li>✓ Standard support (48h)</li>
                            <li class="unlimited">✗ No personalized insights</li>
                            <li class="unlimited">✗ Ads displayed</li>
                            <li class="unlimited">✗ No offline downloads</li>
                        </ul>
                    </div>
                    <div class="comparison-card premium">
                        <div class="popular-badge">🔥 MOST POPULAR</div>
                        <div class="comparison-header">
                            <span class="comparison-icon">⭐</span>
                            <h3>Premium Member</h3>
                        </div>
                        <ul class="comparison-list">
                            <li>✓ Full premium library + exclusive</li>
                            <li>✓ Unlimited 24/7 access</li>
                            <li>✓ Priority support (under 2h)</li>
                            <li>✓ Daily AI-powered insights</li>
                            <li>✓ Completely ad-free</li>
                            <li>✓ Download for offline use</li>
                            <li>✓ Early access to new features</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ComparisonInfographic