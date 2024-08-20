import React, {useEffect, useState} from 'react'
import {api_key_contact } from "../../../config"


export function BookaSession() {
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
      <div className="">
        <form onSubmit={onSubmit}>
            <div className="px-10 grid sm:grid-cols-2 grid-cols-1">
                <div className="mx-1 grid grid-cols-2">
                    <input type="text" placeholder="First Name" className="entry input input-bordered my-2 sm:my-5 mx-1" name="first_name"/>
                    <input type="text" placeholder="Last Name" className="entry input input-bordered my-2 sm:my-5 mx-1" name="last_name"/>
                </div>
                <div className="mx-1">
                    <input type="text" placeholder="Email" name="email" className="entry input input-bordered w-full m-2 sm:m-5 mx-1 sm:mx-auto" />
                </div>
                <div className="mx-1 grid grid-cols-2">
                    <select class="entry select select-bordered mb-4 mx-1" name="grade">
                      <option disabled selected default>Select your Grade</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                    </select>
                    <select class="entry select select-bordered mb-4 mx-1" name="subject">
                      <option disabled selected>Select a Subject</option>
                      <option>Math</option>
                      <option>Chemistry</option>
                      <option>Physics</option>
                    </select>
                </div>
                <div className="mx-1">
                    <input type="text" placeholder="Availability (Ideal time and day of the week)" name="availability" className="entry input input-bordered w-full mx-1 text-sm sm:mx-auto" />
                </div>
                <div className="sm:col-span-2 mx-1 my-1">
                  <textarea class="entry textarea textarea-bordered w-full h-20 mx-1" placeholder="Notes (Program, Learning Disability, etc.):" name="notes"></textarea>
                </div>
                <div className="sm:col-span-2 mx-1 mb-5">
                  <button className="btn bg-primary text-white w-full mx-1" type="submit">Book a Session</button>
                  <span className="text-standard_navy w-full mx-auto text-center font-paraFont font-bold">{result}</span>
                </div>
            </div>
        </form>
  
      </div>
    );
  }

  export function Contact() {
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
      <div className="pt-5 rounded-2xl">
        <form onSubmit={onSubmit}>
          <label className="flex items-center gap-2 m-5 ">
            <input type="text" name="name" className="grow input input-bordered entry bg-white" placeholder="Name" required />
          </label>
          <label className="flex items-center gap-2 m-5">
            <input type="text" className="grow input input-bordered entry bg-white" placeholder="Email" name="email" required />
          </label>
          <div className="mx-5">
              <textarea className=" w-full input input-bordered entry bg-white" placeholder="Message" name="message" required></textarea>
              <button className="btn font-paraFont font-bold text-standard_navy my-5 w-full" type="submit">Submit Form</button>
              <span className="text-white mx-auto font-paraFont font-bold">{result}</span>
          </div>  
        </form>
  
      </div>
    );
  }

  export function ContactUs() {
    const [isContact, setContact] = useState(0)
    const selectContact = (e) => {
      console.log(isContact)
      setContact(e.target.value)
      
    }
    return(
      <div className= {"h-auto py-10 transition-colors duration-150 ease-in-out " + ((isContact == 0) ? "bg-standard_teal": "bg-standard_navy") }  >
        <h2 className="font-headFont text-4xl text-center my-5 text-white">Contact Us</h2>
        <select className="entry select w-3/4 sm:w-3/12 rounded-2xl text-center mx-auto block"  value={isContact} onChange={e => setContact(e.target.value)}>
          <option value={0} >Book a Session</option>
          <option value={1} >General Inquiry</option> 
        </select>
        <div className="mx-auto h-fit sm:w-3/4 w-full rounded-2xl bg-white">
          <h3 className="font-headFont font-bold text-2xl text-standard_navy text-center pt-5 mt-5">{ (isContact == 0) ? "Book a Session NOW!" : "General Inquiry" }</h3>
          {
            (isContact == 0) ? 
            <BookaSession /> :
            <Contact />

          }
        </div>
      </div>
    )
  }
  