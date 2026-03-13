export const metadata = {
    title: 'About Us'
};

export default function AboutPage() {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">About Us</h1>
                <p className="page-subtitle">A legacy of culinary excellence since 1987</p>
            </div>

            <div className="content-grid">
                <section className="content-card">
                    <h2>Our Story</h2>
                    <p>
                        La Maison was founded by Chef Antoine Beaumont with a simple vision: to create a dining
                        experience that celebrates the art of French cuisine while embracing the finest local
                        ingredients. What began as a modest bistro has grown into one of the city&apos;s most
                        beloved dining destinations.
                    </p>
                    <p>
                        For over three decades, we have welcomed guests into our warm and elegant space,
                        serving dishes that honor tradition while pushing the boundaries of flavor and
                        presentation.
                    </p>
                </section>

                <section className="content-card">
                    <h2>Our Philosophy</h2>
                    <p>
                        We believe that extraordinary dining starts with extraordinary ingredients. Every dish
                        on our menu is crafted from the freshest seasonal produce, sustainably sourced meats,
                        and artisanal products from local farms and purveyors.
                    </p>
                    <p>
                        Our kitchen team, led by Executive Chef Marie Dupont, blends classical French
                        techniques with contemporary creativity to deliver an unforgettable culinary journey.
                    </p>
                </section>

                <section className="content-card">
                    <h2>The Team</h2>
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="team-avatar">AD</div>
                            <h3>Antoine Beaumont</h3>
                            <p className="team-role">Founder</p>
                        </div>
                        <div className="team-member">
                            <div className="team-avatar">MD</div>
                            <h3>Marie Dupont</h3>
                            <p className="team-role">Executive Chef</p>
                        </div>
                        <div className="team-member">
                            <div className="team-avatar">JL</div>
                            <h3>Jean Leclerc</h3>
                            <p className="team-role">Head Sommelier</p>
                        </div>
                        <div className="team-member">
                            <div className="team-avatar">SB</div>
                            <h3>Sophie Bernard</h3>
                            <p className="team-role">Pastry Chef</p>
                        </div>
                    </div>
                </section>

                <section className="content-card">
                    <h2>Awards &amp; Recognition</h2>
                    <ul className="awards-list">
                        <li>
                            <span className="award-year">2024</span>
                            <span>Best Fine Dining Experience - City Dining Awards</span>
                        </li>
                        <li>
                            <span className="award-year">2023</span>
                            <span>Wine Spectator Award of Excellence</span>
                        </li>
                        <li>
                            <span className="award-year">2022</span>
                            <span>Top 50 Restaurants - National Food Magazine</span>
                        </li>
                        <li>
                            <span className="award-year">2021</span>
                            <span>Chef of the Year - Marie Dupont</span>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
