export default function HeroSection() {
  const backgroundImage = 'url("./img/Home BG.jpg")';
  return (
    <section id="heroSection" className="hero--section" style={{ backgroundImage, backgroundSize: 'cover' }}>
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hello Everynyan, I'm Bhriann Philip!</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Professional</span>{" "}
            <br />
            Anime Artist
          </h1>
          <div style={{ textAlign: 'justify' }}><p className="hero--section-description"><b/>
            Welcome to my portfolio website called the "OtakuCanvas".
            A place where I showcase all of my artworks related to anime.
            <br /> <br /> Asking for anime art commissions? Don't you worry!
          </p></div>
        </div>
        <button className="btn btn-primary">DM for Commissions</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/Avatar.png" alt="Hero Section" />
      </div>
    </section>
  );
}
