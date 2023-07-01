function Hero() {
  return (
    <div>
      <section className="section hero" id="home" aria-label="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="h1 hero-title">
              The best <span className="has-before">Auto parts</span> supplier
              and retailers.
            </h1>

            <p className="hero-text">
              At garage Mobility, we specialize in auto parts distribution, full
              suite inventory management and provide a market place to sell and
              buy.
            </p>

            <div className="wrapper">
              <button className="btn btn-primary">
                <span className="span"> Auto Parts Solution</span>
              </button>
            </div>
          </div>

          <figure className="hero-banner">
            <img
              src="/assets/images/pexels-mat-berrio-16664833-removebg-preview.png"
              width="794"
              height="637"
              alt="hero banner"
              className="w-100"
            />
          </figure>
        </div>
      </section>
    </div>
  );
}

export default Hero;
