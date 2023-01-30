import React, { useState } from "react";

import Footer from "./Footer";

function HireMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      <div className="grid h-screen place-items-center">
        <div className="grid grid-row-4 w-3/4 h-2/3">
          <h1 className="row-span-1 text-5xl font-semibold">
            Hire Me For Your Next Amazing Project
          </h1>
          <div className="row-span-2 grid grid-cols-2 gap-2 space-x-10 place-items-center">
            <div className="flex flex-col space-y-[100px] text-left">
              <h1 className="row-span-1 text-4xl font-normal">
                Let's make something new,
                <br />
                different and more meaningful or
                <br />
                make thing more visual or
                <br />
                conceptual ? Just say Hello !
              </h1>
              <div>
                <h1>-- +33 (0)6 00 00 00 00</h1>
                <h1>-- prénom.nom@epitech.eu</h1>
                <h1>-- Lyon 69001, FRANCE</h1>
              </div>
            </div>
            <div className="p-10 text-left w-4/6 h-5/6 bg-slate-400 space-y-10">
              <input
                className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
              />
              <input
                className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
              />
              <input
                className="placeholder:text-slate-400 block bg-white w-full h-1/4 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Contact me !"
              />
              <button className="w-3/4 sel-center" onClick={submit}>
                Send a message
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HireMe;
