import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ ADD YOUR IMAGES HERE
  const vehicleImages = [
    { src: "/truck1.jpg", label: "Long-Distance Freight" },
    { src: "/truck2.jpg", label: "Business Delivery" },
    { src: "/truck3.jpg", label: "Cargo Handling" },
    { src: "/courier.jpg", label: "Express Courier" },
    { src: "/bulk.jpg", label: "Bulk Transport" },
  ];

  const services = [
    {
      title: "Freight Transport",
      description:
        "Reliable road freight transportation across Zambia for safe, efficient, and timely movement of goods.",
    },
    {
      title: "Cargo Handling",
      description:
        "Loading, offloading, and handling of goods including fragile cargo, with careful procedures.",
    },
    {
      title: "Courier & Delivery",
      description:
        "Fast and secure parcel, package, and document delivery services with scheduled or express options.",
    },
  ];

  const highlights = [
    "Reliable and timely delivery",
    "Professional, customer-focused service",
    "Compliance with Zambian regulations",
    "Safe and efficient logistics operations",
  ];

  const idealClients = [
    "Manufacturing companies",
    "Wholesale and distribution companies",
    "Retail and commercial businesses",
    "Construction and industrial companies",
    "Government institutions and NGOs",
  ];

  const clients = [
    "Watchtower Society Zambia",
    "Chilanga Cement",
    "Trade Empire",
    "Decor Logistics",
    "Rockview University",
  ];

  const compliance = [
    "PACRA registered private company",
    "NAPSA compliant",
    "Workers' Compensation compliant",
    "ZRA tax registered and cleared",
    "Hauliers liability cover in place",
  ];

  return (
    <div className="site-shell">
      {/* ✅ HEADER */}
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">
            <logo.jpg
            <div className="brand-text">
              <div className="brand-title">Sakomas Logistics Limited</div>
              <div className="brand-subtitle">
                Reliable Transport & Logistics Solutions
              </div>
            </div>
          </div>

          <button
            className="menu-btn"
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <a hrefsetMenuOpen(false)}>About</a>
            #services setMenuOpen(false)}>Services</a>
            #clients setMenuOpen(false)}>Clients</a>
            #compliance setMenuOpen(false)}>Compliance</a>
            #contact setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </header>

      {/* ✅ HERO SECTION */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div>
            <div className="badge">Zambia • SADC-focused logistics partner</div>
            <h1>Efficient, safe, and dependable logistics for growing businesses.</h1>
            <p className="hero-text">
              Sakomas Logistics delivers professional freight transport, cargo handling,
              and courier services across Zambia with a growing regional outlook.
            </p>

            <div className="hero-actions">
              <a classRequest Transport Support</a>
              #servicesView Services</a>
            </div>

            {/* ✅ IMAGE SCROLLING SHOWCASE */}
            <div className="transport-showcase">
              <div className="transport-track">
                {vehicleImages.concat(vehicleImages).map((item, idx) => (
                  <div className="vehicle-card" key={idx}>
                    <img src={item.src} alt={item.label} className="vehicle-img" />
                    <div className="vehicle-label">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ✅ Stats */}
          <div className="stats-grid">
            <div className="card dark-card">
              <div className="label">Established</div>
              <div className="big">2026</div>
            </div>
            <div className="card dark-card">
              <div className="label">Location</div>
              <div className="big">Lusaka</div>
            </div>
            <div className="card dark-card">
              <div className="label">Core Focus</div>
              <div className="mid">Transport & Logistics</div>
            </div>
            <div className="card dark-card">
              <div className="label">Coverage Vision</div>
              <div className="mid">Zambia & SADC</div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ ABOUT SECTION */}
      <section id="about" className="section section-light">
        <div className="container about-grid">
          <div>
            <div className="section-tag">About Us</div>
            <h2>A professional logistics partner built on reliability, safety, and service.</h2>
            <p>
              Sakomas Logistics provides reliable freight transport solutions across Zambia,
              specializing in road transport and related logistics support services.
            </p>
            <p>
              Our mission is to ensure timely delivery of goods while maintaining the highest 
              standards of professionalism, safety, and efficiency.
            </p>
          </div>

          <div className="card">
            <h3>Vision</h3>
            <p>
              To become a trusted and reliable logistics service provider in Zambia by delivering
              safe and cost‑effective transport solutions.
            </p>

            <div className="divider" />

            <h3>Why Partner With Us</h3>
            <div className="mini-grid">
              {highlights.map((item) => (
                <div key={item} className="pill-box">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ✅ SERVICES */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-tag">Services</div>
          <h2>Practical transport and logistics services for daily business operations.</h2>
          <p className="section-text">
            We support the movement and handling of goods with a focus on timeliness, safety,
            and dependable execution.
          </p>

          <div className="three-grid">
            {services.map((service) => (
              <div key={service.title} className="card service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ IDEAL CLIENTS */}
      <section className="section section-dark">
        <div className="container two-grid">
          <div>
            <div className="section-tag dark-tag">Ideal Clients</div>
            <h2>Supporting multiple sectors across Zambia and beyond.</h2>
            <p className="dark-text">
              Our logistics services support operations within Zambia and across the SADC region.
            </p>
          </div>

          <div className="list-grid">
            {idealClients.map((item) => (
              <div key={item} className="list-card">{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ CLIENTS */}
      <section id="clients" className="section">
        <div className="container">
          <div className="section-tag">Past & Current Clients</div>
          <h2>Organizations we have supported.</h2>
          <p className="section-text">
            We have delivered logistics services to organizations across different sectors.
          </p>

          <div className="client-grid">
            {clients.map((client) => (
              <div key={client} className="client-card">{client}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ COMPLIANCE */}
      <section id="compliance" className="section section-light">
        <div className="container">
          <div className="section-tag">Corporate Identity & Compliance</div>
          <h2>Structured for lawful and responsible operations.</h2>

          <div className="compliance-grid">
            <div className="card">
              <p>
                Sakomas Logistics operates in compliance with Zambian business regulations,
                ensuring responsible operations and employee welfare.
              </p>
            </div>

            <div className="list-grid">
              {compliance.map((item) => (
                <div key={item} className="plain-list-card">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ✅ CONTACT */}
      <section id="contact" className="section">
        <div className="container">
          <div className="contact-box">
            <div>
              <div className="section-tag">Contact</div>
              <h2>Let’s support your transportation needs.</h2>
              <p className="section-text">
                If you need reliable logistics services, Sakomas Logistics is ready to provide
                efficient, safe, and timely solutions.
              </p>
            </div>

            <div className="contact-grid">
              <div className="contact-card">
                <div className="label">Phone</div>
                <div className="contact-value">+260 978757953 / 0955 966559</div>
              </div>
              <div className="contact-card">
                <div className="label">Email</div>
                <div className="contact-value">sakomaslogistics@co.zm</div>
              </div>
              <div className="contact-card">
                <div className="label">Location</div>
                <div className="contact-value">
                  Plot No. 1557 along Lumumba Road, Lusaka
                </div>
              </div>
              <a className="btn btn-dark-full" href="httpshat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2026 Sakomas Logistics Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
