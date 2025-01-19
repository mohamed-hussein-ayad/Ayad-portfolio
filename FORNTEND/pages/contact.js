import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import { FaGithub, FaPhoneVolume } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { MdAttachEmail } from "react-icons/md";

export default function contact() {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [project, setProject] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [messageOk, setMessageOk] = useState("");

  async function createProduct(ev) {
    ev.preventDefault();

    setMessageOk("Sending...");

    const data =
      (name,
      lname,
      email,
      company,
      phone,
      country,
      project,
      price,
      description);

    try {
      await axios.post("/api/contacts", data);
      setMessageOk("✅message sent successfully");

      // reset all form fields
      setName("");
      setLname("");
      setEmail("");
      setCompany("");
      setPhone("");
      setCountry("");
      setProject("");
      setPrice("");
      setDescription("");
    } catch (error) {
      if (error.response) {
        console.error("server error", error.response.data);
      } else if (error.request) {
        console.error("network error", error.request);
      } else {
        console.error("error", error.message);
      }
      setMessageOk("❌failed to send message");
    }
  }

  const handleProjectChange = (projectName) => {
    if (project.includes(projectName)) {
      setProject(project.filter((project) => project !== projectName));
    } else {
      setProject([...project, projectName]);
    }
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Contact us</title>
      </Head>

      <div className="contactpage">
        <div className="container">
          <div className="contactformp">
            <div className="leftcontp">
              <h2>Get in touch</h2>
              <h2>Let's talk about your project</h2>
              <p>lorelorelorelorelorelorelorelorelorelorem</p>
              <p>lorelorelorelorelorelorelorelorelorelorem</p>
              <p>lorelorelorelorelorelorelorelorelorelorem</p>
              <div className="leftsociinfo">
                <ul>
                  <li>
                    <FaPhoneVolume />
                    <span>
                      Phone:
                      <a href="tel: +201091263068" target="_blank">
                        +20-1091263068
                      </a>
                    </span>
                  </li>
                  <li>
                    <MdAttachEmail />
                    <span>
                      Phone:
                      <a href="email: mo.ayad.9@outlook.com" target="_blank">
                        mo.ayad.9@outlook.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <GrLinkedin />
                    <span>
                      Phone:
                      <a href="tel: +201091263068" target="_blank">
                        +20-1091263068
                      </a>
                    </span>
                  </li>
                  <li>
                    <FaGithub />
                    <span>
                      Phone:
                      <a href="tel: +201091263068" target="_blank">
                        +20-1091263068
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rightcontp">
              <form onSubmit={createProduct}>
                <div className="rightconttitle">
                  <h2>Your Contact information</h2>
                </div>
                <div className="rightcontinputs">
                  <input
                    type="text"
                    value={name}
                    onChange={(ev) => setName(ev.target.value)}
                    placeholder="First Name"
                    required
                  />
                  <input
                    type="text"
                    value={lname}
                    onChange={(ev) => setLname(ev.target.value)}
                    placeholder="Last Name"
                  />
                  <input
                    type="text"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                    placeholder="Email"
                    required
                  />
                  <input
                    type="text"
                    value={company}
                    onChange={(ev) => setCompany(ev.target.value)}
                    placeholder="Company Name"
                    required
                  />
                  <input
                    type="text"
                    value={phone}
                    onChange={(ev) => setPhone(ev.target.value)}
                    placeholder="Phone Number"
                    required
                  />
                  <select
                    name="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    id="country"
                  >
                    <option value="">Select Country</option>
                    <option value="Ber">Berlin</option>
                    <option value="Ber">Berlin</option>
                    <option value="Ber">Berlin</option>
                    <option value="Ber">Berlin</option>
                    <option value="Ber">Berlin</option>
                    <option value="Ber">Berlin</option>
                    <option value="Ber">Berlin</option>
                    <option value="Ber">Berlin</option>
                  </select>
                </div>
                <div className="rightconttitle">
                  <h2>What services do you need for your project?</h2>
                </div>
                <div className="rightcontcheckbox">
                  {[
                    "website development",
                    "app development",
                    "app development",
                    "app development",
                    "app development",
                    "app development",
                  ].map((projectOption) => (
                    <label
                      key={projectOption}
                      className="cyberpunk-checkbox-label"
                    >
                      <input
                        type="checkbox"
                        className="cyberpunk-checkbox"
                        value={projectOption}
                        checked={project.includes(projectOption)}
                        onchange={() => handleProjectChange(projectOption)}
                      />
                      {projectOption}
                    </label>
                  ))}
                </div>
                <div className="rightconttitle">
                  <h2>
                    How much is the anticipated budget for your next project?
                  </h2>
                </div>
                <div className="rightcontredio">
                  {[
                    "Less than $400",
                    "$400 - $600",
                    "$600 - $800",
                    "more then $1500",
                  ].map((priceRange) => (
                    <div key={priceRange} className="radio-button">
                      <input
                        type="radio"
                        id={priceRange}
                        name="example-radio"
                        value={priceRange}
                        checked={price === priceRange}
                        onchange={handlePriceChange}
                      />
                      <span className="radio"></span>
                      <label htmlFor={priceRange}>{priceRange}</label>
                    </div>
                  ))}
                </div>
                <div className="rightconttitle">
                  <h2>Tell me about your project</h2>
                </div>
                <div className="rightcontpera">
                  <textarea
                    value={description}
                    name="description"
                    onchange={(ev) => setDescription(ev.target.value)}
                    rows={4}
                    id=""
                    placeholder="Project Description"
                  ></textarea>
                </div>
                <hr />
                <div className="rightcontsbtn flex gap-3">
                  <button type="submit">Submit</button>
                  <p>{messageOk}</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
