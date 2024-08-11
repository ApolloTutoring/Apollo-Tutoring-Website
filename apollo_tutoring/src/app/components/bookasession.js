import React, {useEffect, useState} from 'react'

export default function BookaSession() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e6b70426-c5b4-4333-b608-e6edee8e81fd");
  
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
                    <input type="text" placeholder="First Name" className="input input-bordered my-2 sm:my-5 mx-1" name="first_name"/>
                    <input type="text" placeholder="Last Name" className="input input-bordered my-2 sm:my-5 mx-1" name="last_name"/>
                </div>
                <div className="mx-1">
                    <input type="text" placeholder="Email" name="email" className="input input-bordered w-full m-2 sm:m-5 mx-1 sm:mx-auto" />
                </div>
                <div className="mx-1 grid grid-cols-2">
                    <select class="select select-bordered mb-4 mx-1" name="grade">
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
                    <select class="select select-bordered mb-4 mx-1" name="subject">
                      <option disabled selected>Select a Subject</option>
                      <option>Math</option>
                      <option>Chemistry</option>
                      <option>Physics</option>
                    </select>
                </div>
                <div className="mx-1">
                    <input type="text" placeholder="Availability (Ideal time and day of the week)" name="availability" className="input input-bordered w-full mx-1 text-sm sm:mx-auto" />
                </div>
                <div className="sm:col-span-2 mx-1 my-1">
                  <textarea class="textarea textarea-bordered w-full h-20 mx-1" placeholder="Notes (Program, Learning Disability, etc.):" name="notes"></textarea>
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
  