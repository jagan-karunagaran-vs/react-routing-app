function About() {
  const concepts = [
    { icon: "🌐", label: "BrowserRouter" },
    { icon: "🗺️", label: "Routes & Route" },
    { icon: "🔗", label: "NavLink + Active Styling" },
    { icon: "⚡", label: "Dynamic URL Parameters" },
    { icon: "🪝", label: "useParams" },
    { icon: "🧭", label: "useNavigate" },
    { icon: "🚧", label: "404 Not Found Page" },
  ];

  const cards = [
    {
      icon: "⚡",
      title: "Vite Powered",
      desc: "Experience lightning-fast development with Vite’s blazing speed, instant refresh, and optimized build system for a smoother and faster React workflow.",
    },
    {
      icon: "⚛️",
      title: "React 18",
      desc: "Built using modern React concepts including reusable components, hooks, clean architecture, and scalable frontend development practices.",
    },
    {
      icon: "🗺️",
      title: "React Router v6",
      desc: "Explore seamless client-side routing with dynamic pages, smart navigation, URL parameters, and modern React Router functionality.",
    },
    {
      icon: "🎨",
      title: "Premium UI",
      desc: "Crafted with modern UI principles, responsive layouts, elegant styling, smooth interactions, and a clean premium visual experience.",
    },
  ];

  return (
    <div>
      {/* ── Header ── */}
      <div className="about-header">
        <span className="hero-badge"> A Modern React Experience</span>
        <h1>Built to learn.<br />Designed to impress.</h1>
        <p>
         A thoughtfully crafted React Router experience built with modern design principles, clean architecture, and premium user interface patterns. Explore seamless navigation, dynamic routing, responsive layouts, reusable components, and real-world React concepts — all designed to help transform curiosity into confidence through a visually engaging and developer-friendly experience.
        </p>
      </div>

      {/* ── Feature Cards ── */}
      <div className="about-grid">
        {cards.map((card) => (
          <div className="about-card" key={card.title}>
            <span className="about-icon">{card.icon}</span>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>

      {/* ── Concepts Checklist ── */}
      <div className="concepts-list">
        <h2>React Router concepts covered</h2>
        {concepts.map((c) => (
          <div className="concept-item" key={c.label}>
            <span className="concept-check">✓</span>
            <span>{c.icon}&nbsp;&nbsp;{c.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;