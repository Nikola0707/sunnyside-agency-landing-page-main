import "./MainContent.style.css";
const MainContent = () => {
  return (
    <div className="main-content-container" id="about">
      <div id="services">
        <div className="text-wrapper">
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="/" className="learn-more-yellow">
            <span>LEARN MORE</span>
          </a>
        </div>
      </div>
      <div className="egg-image"></div>
      <div className="glass-image"></div>
      <div>
        <div className="text-wrapper">
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand inn digital places.
          </p>
          <a href="/" className="learn-more-red">
            <span>LEARN MORE</span>
          </a>
        </div>
      </div>
      <div className="chery-image">
        <div className="text-wrapper">
          <h2>Graphic Design</h2>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential client's
            attention.
          </p>
        </div>
      </div>
      <div className="orange-image">
        <div className="text-wrapper">
          <h2>Photography</h2>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
