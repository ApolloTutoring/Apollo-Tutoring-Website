import React, {useEffect, useState} from 'react'


export default function Contact() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", api_key_contact);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div className= "bg-white pt-5 rounded-2xl">
        <form onSubmit={onSubmit}>
          <label className="flex items-center gap-2 m-5 ">
            <input type="text" name="name" className="grow entry" placeholder="Name" required />
          </label>
          <label className="flex items-center gap-2 m-5">
            <input type="text" className="grow entry" placeholder="Email" name="email" required />
          </label>
          <div className="mx-5">
              <textarea className=" w-full entry" placeholder="Message" name="message" required></textarea>
              <button className="btn font-paraFont font-bold text-standard_navy my-5 w-full" type="submit">Submit Form</button>
              <span className="text-white mx-auto font-paraFont font-bold">{result}</span>
          </div>  
        </form>
  
      </div>
    );
  }
  