export default function AboutMe() {
  const backgroundImage = 'url("./img/About BG.jpg")';
  return (
    <section id="AboutMe" className="about--section" style={{ backgroundImage, backgroundSize: 'cover' }}>
      <div className="about--section--img">
        <img src="./img/Profile Pic.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About Me</p>
          <h1 className="skills-section--heading">Who is this Otaku?</h1>
          <div style={{ textAlign: 'justify' }}> <p className="hero--section-description">
          My name is Bhriann Philip U. Calangi, but you may call me Bhriann. I'm a Filipino artist 
          born in 2003 who has been creating art for almost ten years now (geez, I am old). I also dabble 
          in other artistic endeavors such as cosplay and photography. Aside from being a massive otaku, 
          I'm also a koreaboo, meaning I'm really interested in K-pop and Korean culture. My long-term 
          goals are to improve as an artist, potentially work in the anime/manga industry, collaborate 
          with numerous anime voice actors on artworks to be sold at conventions, and make as many anime 
          artworks as possible before Truck-Kun hits me and transports me to another world.
          </p> </div> 
        </div>
      </div>
    </section>
    
  );
}
