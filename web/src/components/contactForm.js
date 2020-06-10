import React from "react"

const ContactForm = () => {
  return (
    <form
      className="form"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="form__honeypot">
        <label>
          Don’t fill this out if you're human: <input name="bot-field" />
        </label>
      </div>
      <div className="form__item">
        <label htmlFor="form__name" className="form__label">
          Name:<sup className="form__required">*</sup>
        </label>
        <input
          id="form__name"
          name="name"
          type="text"
          placeholder="Enter Your Name"
          className="form__input"
          required
        />
      </div>
      <div className="form__item">
        <label htmlFor="form__tel" className="form__label">
          Phone Number:<sup className="form__required">*</sup>
        </label>
        <input
          className="form__input"
          name="phone"
          id="form__tel"
          type="tel"
          placeholder="555-555-5555"
          // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
        />
      </div>
      <div className="form__item">
        <label htmlFor="form__email" className="form__label">
          Email:
        </label>
        <input
          className="form__input"
          name="email"
          id="form__email"
          type="email"
          placeholder="your@email.ca"
        />
      </div>
      <div className="form__item">
        <label htmlFor="form__details" className="form__label">
          Details:<sup className="form__required">*</sup>
        </label>
        <textarea
          className="form__input"
          id="form__details"
          name="details"
          placeholder="Additional information for us to assist you better."
          required
        />
      </div>
      <div style={{ marginTop: 5, justifySelf: "end" }}>
        <sup className="form__required">*</sup>Required
      </div>

      <button
        type="submit"
        className="settings__mainButton form__button"
        style={{ marginTop: 0 }}
      >
        Submit
      </button>
    </form>
  )
}
export default ContactForm
