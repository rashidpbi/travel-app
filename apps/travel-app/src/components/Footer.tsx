import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-shade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1">
            <div className="font-bold text-3xl text-center lg:text-left mb-8 lg:mb-0">
              Trxvl.
            </div>
          </div>

          <div className="col-span-1">
            <ul className="space-y-4 text-center sm:text-left">
              <li>Seslendirme ve Alt Jazz</li>
              <li>Media Market</li>
              <li>Gillie</li>
              <li>Size Last</li>
              <li className="flex justify-center sm:justify-start">
                <button className="border border-shade px-4 py-2 w-32 text-center hover:bg-gray-800">
                  Helmet KOD
                </button>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <ul className="space-y-4 text-center sm:text-left">
              <li>Self Betimes</li>
              <li>Yatırımcı İlişkileri </li>
              <li>Basal Himmler</li>
            </ul>
          </div>

          <div className="col-span-1">
            <ul className="space-y-4 text-center sm:text-left">
              <li>Yard Market</li>
              <li>Is Imkanlari</li>
              <li>Car Tercihleri</li>
            </ul>
          </div>

          <div className="col-span-1">
            <ul className="space-y-4 text-center sm:text-left">
              <li>Hedge Karla</li>
              <li>Mullein Koşulları</li>
              <li>Autumnal Bulgier</li>
              <li>
                <div className="flex justify-center sm:justify-start space-x-4 mt-8">
                  <FaFacebookSquare className="w-6 h-6 hover:text-white cursor-pointer" />
                  <ImInstagram className="w-6 h-6 hover:text-white cursor-pointer" />
                  <FaTwitter className="w-6 h-6 hover:text-white cursor-pointer" />
                  <FaYoutube className="w-6 h-6 hover:text-white cursor-pointer" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-sm text-center sm:text-left">
          © 1997-2021 Netflix,Inc. {"{i-063d545a099242}"}
        </div>
      </div>
    </div>
  );
};

export default Footer;
