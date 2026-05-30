const Contact = () => {
  return (
    <section className="section" id="contact">

      <h2 className="section-title">Contact Me</h2>

      <form className="contact-form">

        <input placeholder="Name" />
        <input placeholder="Email" />
        <textarea placeholder="Message"></textarea>

        <button className="btn primary">Send</button>

      </form>

    </section>
  )
}

export default Contact