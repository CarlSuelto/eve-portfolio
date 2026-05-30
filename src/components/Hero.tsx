import evePic from "../assets/eve-pic.png";

const Hero = () => {
  return (
    <section className="hero container" id="home">

      <div className="hero-text">

        <p className="tag">Hello 👋 I’m</p>
        <h1 className="title">Evelyn</h1>

        <h2 className="subtitle">
          Web Developer | IT Support | Creative Professional
        </h2>

        <p className="desc">
          I create clean, user-friendly websites and systems.
          I’m passionate about building projects that solve real problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>

      </div>

      {/* FIXED IMAGE */}
      <img src={evePic} className="profile-photo-img" alt="Evelyn profile" />

    </section>
  );
};

export default Hero;