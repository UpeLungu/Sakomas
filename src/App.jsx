import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      title: "Freight Transport",
      description:
        "Reliable road freight transportation across Zambia for safe, efficient, and timely movement of goods between suppliers, warehouses, distribution centers, and customers.",
    },
    {
      title: "Cargo Handling",
      description:
        "Professional loading, offloading, and handling of goods, including fragile and sensitive cargo, with careful procedures that reduce risk and improve operational flow.",
    },
    {
      title: "Courier & Delivery",
      description:
        "Fast and secure parcel, package, and document delivery services with scheduled and express delivery options for businesses and individuals.",
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
    "PACRA registered private company limited by shares",
    "NAPSA compliant",
    "Workers' Compensation compliant",
    "ZRA tax registered and cleared",
    "Hauliers liability cover in place",
  ];

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">
            <img src="/logo.jpg" alt="Sakomas Logistics" className="logo" />
            <div className="brand-text">
              <div className="brand-title">Sakomas Logistics Limited</div>
              <div className="brand-subtitle">
                Reliable Transport &amp; Logistics Solutions
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
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#clients" onClick={() => setMenuOpen(false)}>
              Clients
            </a>
            <a href="#compliance" onClick={() => setMenuOpen(false)}>
              Compliance
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div>
            <div className="badge">Zambia • SADC-focused logistics partner</div>
            <h1>
              Efficient, safe and dependable logistics for growing businesses.
            </h1>
            <p className="hero-text">
              Sakomas Logistics Limited delivers professional freight transport,
              cargo handling and courier services across Zambia, with a long-term
              regional outlook supporting trade and supply chain movement within
              SADC.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Request Transport Support
              </a>
              <a className="btn btn-secondary" href="#services">
                View Services
              </a>
            </div>

            <div className="transport-showcase">
              <div className="transport-track">
                <div className="vehicle-image-card">
                  <img
                    src="/truck-1.jpg"
                    alt="Long-distance freight truck"
                  />
                  <span>Long-Distance Freight</span>
                </div>

                <div className="vehicle-image-card">
                  <img src="/van-1.jpg" alt="Business delivery van" />
                  <span>Business Delivery</span>
                </div>

                <div className="vehicle-image-card">
                  <img
                    src="/cargo-1.jpg"
                    alt="Cargo handling operations"
                  />
                  <span>Cargo Handling</span>
                </div>

                <div className="vehicle-image-card">
                  <img
                    src="/courier-1.jpg"
                    alt="Express courier delivery"
                  />
                  <span>Express Courier</span>
                </div>

                <div className="vehicle-image-card">
                  <img src="/truck-2.jpg" alt="Bulk transport truck" />
                  <span>Bulk Transport</span>
                </div>

                <div className="vehicle-image-card">
                  <img
                    src="/truck-1.jpg"
                    alt="Long-distance freight truck"
                  />
                  <span>Long-Distance Freight</span>
                </div>

                <div className="vehicle-image-card">
                  <img src="/van-1.jpg" alt="Business delivery van" />
                  <span>Business Delivery</span>
                </div>

                <div className="vehicle-image-card">
                  <img
                    src="/cargo-1.jpg"
                    alt="Cargo handling operations"
                  />
                  <span>Cargo Handling</span>
                </div>

                <div className="vehicle-image-card">
                  <img
                    src="/courier-1.jpg"
                    alt="Express courier delivery"
                  />
                  <span>Express Courier</span>
                </div>

                <div className="vehicle-image-card">
                  <img src="/truck-2.jpg" alt="Bulk transport truck" />
                  <span>Bulk Transport</span>
                </div>
              </div>
            </div>
          </div>

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
              <div className="mid">Transport &amp; Logistics</div>
            </div>

            <div className="card dark-card">
              <div className="label">Coverage Vision</div>
              <div className="mid">Zambia &amp; SADC</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section section-light">
        <div className="container about-grid">
          <div>
            <div className="section-tag">About Us</div>
            <h2>
              A professional logistics partner built on reliability, safety, and
              service.
            </h2>
            <p>
              Sakomas Logistics Limited is a Zambian registered logistics and
              transportation company committed to providing reliable, efficient
              and professional freight transport solutions. The company
              specializes in the movement of goods by road and related logistics
              support services.
            </p>
            <p>
              Our mission is to provide professional logistics and transportation
              services that ensure timely delivery of goods while maintaining the
              highest standards of safety, efficiency and customer satisfaction.
            </p>
          </div>

          <div className="card">
            <h3>Vision</h3>
            <p>
              To become a trusted and reliable logistics service provider in
              Zambia by delivering efficient, safe and cost-effective transport
              solutions.
            </p>

            <div className="divider" />

            <h3>Why Partner With Us</h3>
            <div className="mini-grid">
              {highlights.map((item) => (
                <div key={item} className="pill-box">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="section-tag">Services</div>
          <h2>
            Practical transport and logistics services for daily business
            operations.
          </h2>
          <p className="section-text">
            We support the movement, handling, and delivery of goods with a
            service model built around timeliness, safety, coordination and
            dependable execution.
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

      <section className="section section-dark">
        <div className="container two-grid">
          <div>
            <div className="section-tag dark-tag">Ideal Clients</div>
            <h2>Built to support multiple sectors across Zambia and beyond.</h2>
            <p className="dark-text">
              Our services are designed to support logistics operations within
              Zambia and across the wider SADC region, enabling smoother trade,
              supply chain coordination and regional commerce.
            </p>
          </div>

          <div className="list-grid">
            {idealClients.map((item) => (
              <div key={item} className="list-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="clients" className="section">
        <div className="container">
          <div className="section-tag">Past &amp; Current Clients</div>
          <h2>Organizations we have supported.</h2>
          <p className="section-text">
            We have provided logistics and transportation support services to
            organizations across different sectors, building relationships
            grounded in reliability, professionalism and consistent service
            delivery.
          </p>

          <div className="client-grid">
            {clients.map((client) => (
              <div key={client} className="client-card">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="compliance" className="section section-light">
        <div className="container">
          <div className="section-tag">Corporate Identity &amp; Compliance</div>
          <h2>Structured for lawful, responsible and accountable operations.</h2>

          <div className="compliance-grid">
            <div className="card">
              <p>
                Sakomas Logistics Limited operates in compliance with the legal
                and regulatory requirements governing businesses in Zambia. The
                company maintains the registrations and compliance structures
                needed to support responsible logistics operations and employee
                welfare.
              </p>
            </div>

            <div className="list-grid">
              {compliance.map((item) => (
                <div key={item} className="plain-list-card">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="contact-box">
            <div>
              <div className="section-tag">Contact</div>
              <h2>Let’s support your transportation needs.</h2>
              <p className="section-text">
                If you are looking for reliable and professional logistics
                services, Sakomas Logistics Limited is ready to support your
                operations with efficient, safe, and timely solutions tailored
                to your business requirements.
              </p>
            </div>

            <div className="contact-grid">
              <div className="contact-card">
                <div className="label">Phone</div>
                <div className="contact-value">
                  +260 978757953 / 0955 966559
                </div>
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

              <a
                className="btn btn-dark-full"
                href="https://wa.me/260978757953"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2026 Sakomas Logistics Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
