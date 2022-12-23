import React from "react";
import { toast } from "react-toastify";

const Mail = () => {
  const sendMail = (event) => {
    event.preventDefault();
    toast("Sent. Thank you.");
    const form = event.target;
    form.reset();
  };
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="lg:flex gap-[30px] ">
          <div className=" lg:text-left">
            <h1 className="text-5xl font-bold">Contact Me </h1>
            <p className="py-6">
              You contact with me . You can send review of my website .
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={sendMail} action="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Type Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Message</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Message"
                    className="border-dotted border-4 border-primary "
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value={"Send"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
