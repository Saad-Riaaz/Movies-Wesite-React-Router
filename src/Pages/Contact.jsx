
import { Form } from "react-router-dom";
import "./Contact.css"
export const ContactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);

    console.log(data);

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const Contact = () => {
  return (
    <div className="contactPage">

      <h1 className="contactTitle">
        Contact Us
      </h1>

      <h2 className="contactSubtitle">
        Have a question, suggestion, or feedback?
        <br />
        We'd love to hear from you.
      </h2>

      <Form method="POST" className="contactForm">

        <label htmlFor="name" className="formLabel">
          <input
            type="text"
            name="name"
            id="name"
            className="formInput"
            placeholder="Enter Your Name"
          />
        </label>

        <label htmlFor="email" className="formLabel">
          <input
            type="email"
            name="email"
            id="email"
            className="formInput"
            placeholder="Enter Your Email Address"
          />
        </label>

        <label htmlFor="subject" className="formLabel">
          <input
            type="text"
            name="subject"
            id="subject"
            className="formInput"
            placeholder="Subject"
          />
        </label>

        <label htmlFor="message" className="formLabel">
          <textarea
            name="message"
            id="message"
            className="formTextarea"
            placeholder="Write your message..."
            cols={30}
            rows={10}
          ></textarea>
        </label>

        <button
          type="submit"
          className="submitButton"
        >
          Submit
        </button>

      </Form>

    </div>
  );
};