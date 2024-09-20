export default function ContactMe() {
  const backgroundImage = 'url("./img/Contact BG.jpg")';
  return (
    <section id="Contact" className="contact--section" style={{ backgroundImage, backgroundSize: 'cover' }}>
      <div>
        <p className="sub--title">For Commissions/Business Opportunities</p>
        <h1>Contact Me</h1>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span>First Name</span>
            <input
              type="text"
              className="contact--input"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span>Last Name</span>
            <input
              type="text"
              className="contact--input"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span>Email</span>
            <input
              type="email"
              className="contact--input"
              name="email"
              id="email"
              required
              placeholder="example@email.com"
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span>Message</span>
          <textarea
            className="contact--input"
            id="message"
            required
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">SUBMIT</button>
        </div>
      </form>
    </section>
  );
}
