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
                <div className="mx-5">
                    <input type="text" placeholder="Name" class="input input-bordered w-full m-5 mx-auto" />
                </div>
                <div className="mx-5">
                    <input type="text" placeholder="Email" class="input input-bordered w-full m-5 mx-auto" />
                </div>

            </div>
        </form>
  
      </div>
    );
  }
  