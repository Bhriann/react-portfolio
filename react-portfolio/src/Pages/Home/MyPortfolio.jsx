import data from "../../data/index.json";

export default function MyPortfolio() {
  const backgroundImage = 'url("./img/Portfolio BG.jpg")';
  return (
    <section className="portfolio--section" id="MyPortfolio" style={{ backgroundImage, backgroundSize: 'cover' }}>
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="section--heading"><h2>𝗠𝗬 𝗔𝗡𝗜𝗠𝗘 𝗔𝗥𝗧𝗪𝗢𝗥𝗞𝗦 𝗣𝗢𝗥𝗧𝗙𝗢𝗟𝗜𝗢</h2></h2>
        </div>
        
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              
              <p className="text-sm portfolio--link">
                {item.link}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
