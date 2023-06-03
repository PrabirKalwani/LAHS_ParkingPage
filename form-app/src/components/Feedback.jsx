import { useRef, useState } from 'react';
import '../styles/Feedback.css';
import emailjs from '@emailjs/browser';

const Feedback = () => {
  const form = useRef();
  const [promptText, setPromptText] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_bo8k7uk',
        'template_cjf17mm',
        form.current,
        'hhwBQFT0Ty6w2cFQn'
      )
      .then(
        (result) => {
          console.log(result.text);
          setPromptText('Message Was Sent !'); // Set success message
        },
        (error) => {
          console.log(error.text);
          setPromptText('Message Was Not sent !'); // Set error message
        }
      );
    e.target.reset();
  };

  return (
    <>
		<div class="nav">
			<a href="/home">Home</a>
			<a href="/support">Support</a>
			<a href="https://www.lahsindia.com">Website</a>
		</div>
      <section>
        <div className="container">
          <h2 className="Heading">Reach out</h2>

          <form ref={form} onSubmit={sendEmail} className="main_form">
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name"
                  name="user_Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Phone Number"
                name="user_phone"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Complaint"
                name="user_complaint"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Message"
                name="user_message"
                required
              />
            </div>
            <button type="submit" className="button-50">
              Submit
            </button>
            <p className="prompt">{promptText}</p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Feedback;
