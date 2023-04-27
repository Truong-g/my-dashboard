import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import "@/styles/AdminLogin.css";

function LoginPage() {
  const [value, setValue] = useState<string>("");
  return (
    <div className="login__page">
      <div className="border-1 surface-border surface-card border-round py-7 px-4 md:px-7 z-1">
        <div className="mb-4">
          <div className="text-900 text-xl font-bold mb-2">Log in</div>
          <span className="text-600 font-medium">
            Please enter your details
          </span>
        </div>
        <div className="flex flex-column">
          <span className="p-input-icon-left mb-4">
            <i className="pi pi-envelope" />
            <InputText placeholder="Email" className="w-full" type="email" />
          </span>
          <Password placeholder="Password" className="flex-1" toggleMask showIcon/>
          <div className="mb-4 flex flex-wrap gap-3">
            <div className="flex align-items-center">
              <div className="p-checkbox p-component mr-2">
                <div className="p-hidden-accessible">
                  <input type="checkbox" name="checkbox" />
                </div>
                <div className="p-checkbox-box">
                  <span className="p-checkbox-icon p-c" />
                </div>
              </div>
              <label htmlFor="checkbox" className="text-900 font-medium mr-8">
                Remember Me
              </label>
            </div>
            <a className="text-600 cursor-pointer hover:text-primary cursor-pointer ml-auto transition-colors transition-duration-300">
              Reset password
            </a>
          </div>
          <button aria-label="Log In" className="p-button p-component w-full">
            <span className="p-button-label p-c">Log In</span>
            <span
              role="presentation"
              className="p-ink"
              style={{ height: 350, width: 350 }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
