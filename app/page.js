
const shops = [
  {
    name: "Cloudville",
    label: "THE CLOUD SHOP",
    symbol: "☁",
    description: "Making cloud computing easier to explore and understand.",
    color: "cloud",
  },
  {
    name: "Einstein Tile",
    label: "THE GEOMETRY HOUSE",
    symbol: "✳",
    description: "Exploring mathematical tiling and image encryption.",
    color: "math",
  },
  {
    name: "ScentNet",
    label: "THE SCENT BOUTIQUE",
    symbol: "♧",
    description: "Predicting scent profiles from molecular structures.",
    color: "scent",
  },
  {
    name: "EDU-BOT",
    label: "THE KNOWLEDGE CORNER",
    symbol: "▤",
    description: "An AI-powered university assistant.",
    color: "books",
  },
];

export default function Home() {
  return (
    <main>
      <header className="town-header">
        <a href="#home" className="brand">✿ Kochuthressia's Town</a>
        <nav className="town-nav">
          <a href="#about">About</a>
          <a href="#projects">The Shops</a>
          <a href="#leadership">Town Hall</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="town-hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">A LITTLE WORLD OF IDEAS & POSSIBILITIES</p>
          <h1>
            Welcome to
            <br />
            <span>my little world.</span>
          </h1>
          <p className="hero-description">
            A curious mind, a love for building things, and a town full of
            ideas waiting to be explored.
          </p>
          <a className="primary-button" href="#projects">
            Wander through town ↗
          </a>
          <p className="hero-signature">Made of curiosity & a little courage.</p>
        </div>

        <div className="hero-town-art" aria-hidden="true">
          <div className="sun" />
          <div className="hill hill-back" />
          <div className="hill hill-front" />
          <div className="hero-house house-left">
            <div className="house-roof" />
            <div className="house-body"><div className="house-window" /><div className="house-door" /></div>
          </div>
          <div className="hero-house house-middle">
            <div className="house-roof" />
            <div className="house-body"><div className="house-window" /><div className="house-door" /></div>
          </div>
          <div className="hero-house house-right">
            <div className="house-roof" />
            <div className="house-body"><div className="house-window" /><div className="house-door" /></div>
          </div>
        </div>
      </section>

      <section className="about-section container" id="about">
        <p className="eyebrow">A NOTE FROM THE TOWN'S CREATOR</p>
        <h2>A little about the person behind the place.</h2>
        <p className="about-description">
          I'm <strong>Kochuthressia</strong>, a Computer Science student
          interested in technology, product thinking, creativity, and people.
          I enjoy exploring how ideas become useful experiences.
        </p>
      </section>

      <section className="projects-section" id="projects">
        <div className="container">
          <div className="section-heading projects-heading">
            <p className="eyebrow">TAKE A LITTLE WALK</p>
            <h2>Meet the neighbourhood.</h2>
            <p>Every shop has a different idea behind its doors.</p>
          </div>

          <div className="shops-grid">
            {shops.map((shop) => (
              <article className={`shop-card ${shop.color}`} key={shop.name}>
                <div className="shop-illustration">
                  <div className="shop-roof" />
                  <div className="shop-awning">
                    {Array.from({ length: 7 }, (_, i) => <span key={i} />)}
                  </div>
                  <div className="shop-building">
                    <div className="shop-sign">{shop.label}</div>
                    <div className="shop-window">
                      <span className="shop-symbol">{shop.symbol}</span>
                    </div>
                    <div className="shop-door" />
                  </div>
                </div>
                <div className="shop-copy">
                  <p className="eyebrow">PROJECT</p>
                  <h3>{shop.name}</h3>
                  <p className="shop-description">{shop.description}</p>
                  <a className="shop-link" href="https://github.com/KochuthressiaPayankan" target="_blank" rel="noreferrer">
                    Explore project ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="leadership-section container" id="leadership">
        <div className="leadership-card">
          <div className="leadership-art">🏛</div>
          <div className="leadership-copy">
            <p className="eyebrow">PEOPLE, IDEAS & INITIATIVE</p>
            <h2>The Town Hall</h2>
            <p>
              From building a cloud community to coordinating student
              initiatives, I enjoy bringing people together and turning
              shared ideas into action.
            </p>
            <p><strong>CloudX:</strong> Founding President</p>
            <p><strong>µLearn:</strong> Campus Lead</p>
            <p><strong>Student Leadership:</strong> Coordination & Events</p>
          </div>
        </div>
      </section>

      <footer className="town-footer" id="contact">
        <p className="eyebrow">EVERY GOOD CONVERSATION STARTS SOMEWHERE</p>
        <h2>Shall we build something wonderful?</h2>
        <p>I'd love to hear about ideas, opportunities, and interesting projects.</p>
        <div className="footer-links">
          <a href="mailto:kochuthressiapayankan@gmail.com">Email me ↗</a>
          <a href="https://github.com/KochuthressiaPayankan" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/kochuthressia-payankan-652844220/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
        <p className="footer-credit">© 2026 Kochuthressia Payankan · A little world, made with care.</p>
      </footer>
    </main>
  );
}
