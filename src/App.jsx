import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      title: "Freight Transport",
      description:
        "Reliable road freight transportation across Zambia for safe and timely movement of goods.",
    },
    {
      title: "Cargo Handling",
      description:
        "Professional loading and handling of goods including fragile cargo.",
    },
    {
      title: "Courier & Delivery",
      description:
        "Fast and secure parcel delivery for businesses and individuals.",
    },
  ];

  return (
    <div className="site-shell">
      {/* HEADER */}
      <header className="topbar">
        <div className="container topbar-inner">
          
          {/* LOGO */}
          <div className="brand">
            <img src="/logo.png" alt="Sakomas Logistics" className="logo" />
            <div>
              <div className="brand-title">Sakomas Logistics</div>
              <div className="brand-subtitle">Transport & Logistics</div>
            </div>
          </div>

          {/* MENU BUTTON */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* NAV */}
          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h1>Reliable Logistics Solutions</h1>
          <p>We deliver safe and efficient transport services across Zambia.</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <h2>About Us</h2>
          <p>
            Sakomas Logistics Limited provides reliable and professional logistics services
            across Zambia.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container">
          <h2>Services</h2>

          <div className="grid">
            {services.map((service) => (
              <div key={service.title} className="card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container">
          <h2>Contact</h2>
          <p>Phone: +260 978757953</p>
          <p>Email: sakomaslogistics@co.zm</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Sakomas Logistics</p>
      </footer>
    </div>
  );
}
