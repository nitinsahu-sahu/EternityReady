const NavBar = () => {
    return (
        <nav class="navbar">
            <div class="container">
                <div class="nav-wrapper">
                    <div class="logo">
                        <a href="https://www.eternityready.com">
                            <span class="logo-text">Eternity<span class="logo-highlight">Ready</span></span>
                        </a>
                    </div>
                    <div class="nav-links">
                        <a href="https://www.eternityready.com/login" class="nav-link">Login</a>
                        <a href="#pricing" class="btn btn-outline btn-small">Upgrade</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar