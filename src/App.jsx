export default function App() {
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

          {/* ONLY CHANGE: added logo */}
          <header className="topbar">
  <div className="container topbar-inner">
    <div className="brand">
      <img src="/logo.jpg" alt="Sakomas Logistics" className="logo" />
      <div>
        <div className="brand-title">Sakomas Logistics Limited</div>
        <div className="brand-subtitle">Reliable Transport &amp; Logistics Solutions</div>
      </div>
    </div>

    <nav className="nav">
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#clients">Clients</a>
      <a href="#compliance">Compliance</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
</header>

          {/* EVERYTHING BELOW UNCHANGED */}
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            <a href="#compliance">Compliance</a>
            <a href="#contact">Contact</a>
          </nav>

        </div>
      </header>

      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div>
            <div className="badge">Zambia • SADC-focused logistics partner</div>
            <h1>Efficient, safe, and dependable logistics for growing businesses.</h1>
            <p className="hero-text">
              Sakomas Logistics Limited delivers professional freight transport,
              cargo handling, and courier services across Zambia, with a long-term
              regional outlook supporting trade and supply chain movement within SADC.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Request Transport Support
              </a>
              <a className="btn btn-secondary" href="#services">
                View Services
              </a>
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
            <h2>A professional logistics partner built on reliability, safety, and service.</h2>
            <p>
              Sakomas Logistics Limited is a Zambian registered logistics and
              transportation company committed to providing reliable, efficient,
              and professional freight transport solutions. The company specializes
              in the movement of goods by road and related logistics support services.
            </p>
            <p>
              Our mission is to provide professional logistics and transportation
              services that ensure timely delivery of goods while maintaining the
              highest standards of safety, efficiency, and customer satisfaction.
            </p>
          </div>

          <div className="card">
            <h3>Vision</h3>
            <p>
              To become a trusted and reliable logistics service provider in Zambia
              by delivering efficient, safe, and cost-effective transport solutions.
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

      {/* REST OF YOUR CODE UNCHANGED */}

    </div>
  );
}
