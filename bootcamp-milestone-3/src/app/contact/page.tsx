export default function Contact() {
  return (
    <main>
      <h1 className="page-title">Contact</h1>

      <div className="form-container">
        <form id="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </main>
  );
}