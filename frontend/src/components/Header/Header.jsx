import React from "react";
import Button from "../Button";
function Header() {
  return (
    <div class="relative w-full bg-white shadow-md py-2">
      <div class="mx-10 flex  items-center justify-between px-2 py-2 ">
        <div class="inline-flex items-center space-x-2">
          <span class="font-bold text-2xl">.DOT</span>
        </div>
        <div class="hidden grow items-start lg:flex">
          <ul class="ml-12 inline-flex space-x-8">
            <li>
              <a
                href="#"
                class="text-lg font-semibold text-gray-800 hover:text-gray-900"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-lg font-semibold text-gray-800 hover:text-gray-900"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                class="font-semibold text-gray-800 hover:text-gray-900 text-lg"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div class="hidden lg:block mx-4">
        
        <Button title="Join Us" className="bg-green-500 text-white" />
        <Button title="Sign In" className="text-black border-2" />
        </div>
        
      </div>
    </div>
  );
}

export default Header;
