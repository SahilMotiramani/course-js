import NavBar from "./NavBar";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Enquiry() {
  const rName = useRef();
  const rPhone = useRef();
  const rDoubt = useRef();
  const [msg, setMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = rName.current.value;
    const phone = rPhone.current.value;
    const doubt = rDoubt.current.value;

    if (name === "") {
      alert("Please enter your name.");
      rName.current.focus();
      return;
    }
    if (phone === "") {
      alert("Please enter your phone number.");
      rPhone.current.focus();
      return;
    }
    if (doubt === "") {
      alert("Please enter your enquiry.");
      rDoubt.current.focus();
      return;
    }

    const data = { name, phone, doubt };

    emailjs
      .send("service_123", "template_123", data, "FQ9fsRuyjpnf92d6b")
      .then(() => {
        setMsg("We will get back to you soon.");
        rName.current.value = "";
        rPhone.current.value = "";
        rDoubt.current.value = "";
        rName.current.focus();
      })
      .catch((err) => {
        setMsg("There was an issue: " + err.text);
      });
  };

  return (
    <>
      <center>
        <NavBar />
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Name" ref={rName} />
          <br />
          <br />
          <input type="number" placeholder="Enter Number" ref={rPhone} />
          <br />
          <br />
          <textarea placeholder="Enter Enquiry" ref={rDoubt}></textarea>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>{msg}</p>
      </center>
    </>
  );
}

export default Enquiry;
