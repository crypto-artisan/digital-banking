import React, { useContext, useState } from "react";

import InputMask from "react-input-mask";
import Container from "components/Container";
import PhoneNumberContext from "context/PhoneNumber";
import PhoneCodeContext from "context/PhoneCode";

// import cardImg from "assets/image/Avid_Card_Slant.png";
import accessImg from "assets/image/early-access-icon.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

// import { FaChevronRight } from "react-icons/fa";

const GetStartedPart = () => {
  const { phoneNumber, setPhoneNumber } = useContext<any>(PhoneNumberContext);
  const { phoneCode, setPhoneCode } = useContext<any>(PhoneCodeContext);
  const [code, setCode] = useState("");
  const [inputFlag, setInputFlag] = useState(true);
  const [error, setError] = useState("");
  const [tab, setTab] = useState(1);

  // const handleGetStartedClick = () => {
  //   if (phoneNumber === "" || phoneNumber.indexOf("_") > -1) {
  //     setPhoneNumber("");
  //   } else {
  //     setPhoneCode(true);
  //     window.location.href = "#phonecode";
  //   }
  // };

  const handleBack = () => {
    setPhoneCode(false);
  };

  const handleContinue = () => {
    if (code.length < 6 && code.length > 0) {
      setInputFlag(true);
      setError("Please enter at least 6 characters");
    } else if (code.length === 0) {
      setInputFlag(true);
      setError("This field is required.");
    } else {
      setInputFlag(true);
      setError("Incorrect code.");
      // setPhoneCode(false);
    }
  };

  const handleChange = (e: any) => {
    if (isNaN(e.target.value) || e.target.value.length > 6) {
      return;
    }
    if (e.target.value.length < 6 && e.target.value.length > 0) {
      setInputFlag(true);
      setError("Please enter at least 6 characters");
    } else if (e.target.value.length === 0) {
      setInputFlag(true);
      setError("This field is required.");
    } else {
      setInputFlag(false);
      setError("");
    }
    setCode(e.target.value);
  };

  const handleFocus = (e: any) => {
    if (e.target.value.length < 6 && e.target.value.length > 0) {
      setInputFlag(true);
      setError("Please enter at least 6 characters");
    } else if (e.target.value.length === 0) {
      setInputFlag(true);
      setError("This field is required.");
    } else {
      setInputFlag(false);
      setError("");
    }
  };

  const handleResend = () => {
    setInputFlag(false);
    setCode("");
  };

  return (
    <div id="funnel" className="relative bg-blue-50">
      <div className="relative bg-white">
        <svg
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          viewBox="0 0 1440 110"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-6" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(239, 246, 255, 1)" offset="0%"></stop>
              <stop stop-color="rgba(239, 246, 255, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: "1" }}
            fill="url(#sw-gradient-6)"
            d="M0,44L40,49.5C80,55,160,66,240,62.3C320,59,400,40,480,44C560,48,640,73,720,84.3C800,95,880,92,960,91.7C1040,92,1120,95,1200,93.5C1280,92,1360,84,1440,82.5C1520,81,1600,84,1680,73.3C1760,62,1840,37,1920,29.3C2000,22,2080,33,2160,33C2240,33,2320,22,2400,16.5C2480,11,2560,11,2640,11C2720,11,2800,11,2880,9.2C2960,7,3040,4,3120,16.5C3200,29,3280,59,3360,75.2C3440,92,3520,95,3600,80.7C3680,66,3760,33,3840,33C3920,33,4000,66,4080,71.5C4160,77,4240,55,4320,42.2C4400,29,4480,26,4560,20.2C4640,15,4720,7,4800,20.2C4880,33,4960,66,5040,69.7C5120,73,5200,48,5280,47.7C5360,48,5440,73,5520,77C5600,81,5680,62,5720,53.2L5760,44L5760,110L5720,110C5680,110,5600,110,5520,110C5440,110,5360,110,5280,110C5200,110,5120,110,5040,110C4960,110,4880,110,4800,110C4720,110,4640,110,4560,110C4480,110,4400,110,4320,110C4240,110,4160,110,4080,110C4000,110,3920,110,3840,110C3760,110,3680,110,3600,110C3520,110,3440,110,3360,110C3280,110,3200,110,3120,110C3040,110,2960,110,2880,110C2800,110,2720,110,2640,110C2560,110,2480,110,2400,110C2320,110,2240,110,2160,110C2080,110,2000,110,1920,110C1840,110,1760,110,1680,110C1600,110,1520,110,1440,110C1360,110,1280,110,1200,110C1120,110,1040,110,960,110C880,110,800,110,720,110C640,110,560,110,480,110C400,110,320,110,240,110C160,110,80,110,40,110L0,110Z"
          ></path>
        </svg>
      </div>
      <Container>
        <div className="mt-20">
          {phoneCode ? (
            <>
              <h1
                id="phonecode"
                className="text-[#0386ff] text-[2.4em] leading-[44px] m-0 mb-8 -tracking-[1px]"
              >
                Enter Your Code
              </h1>
              <p className="text-base font-semibold leading-[35px] m-0 pb-[4%] mb-5">
                {
                  "We sent a code to your mobile device. Please enter it below to start your application process."
                }
              </p>
              <div className="grid lg:grid-cols-2 gap-5 justify-around items-start">
                <div className="p-[5%] bg-white md:rounded-[50px] rounded-[30px]">
                  <img
                    src={accessImg}
                    alt="accessImg"
                    className="w-[213px] m-auto -mt-[50px]"
                  />
                  <p className="text-[1.4em] font-bold leading-[35px] m-0 pb-[4%] mt-6">
                    {"Early Access"}
                    <sup>1</sup>
                  </p>
                  <ul className="pl-[5%] pr-[2%] list-disc mb-[10px] leading-[40px] text-[#1d2127] text-base text-left">
                    <li>
                      <p>Get your federal benefits up to 6 days early</p>
                    </li>
                    <li>
                      <p>
                        Receive your payroll and all other direct deposits up to
                        2 days early
                      </p>
                    </li>
                    <li>
                      <p>
                        Avid Prepaid processes the deposits as soon as the
                        government or employer sends notice that it intends on
                        making a payment
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="text-left sm:w-[70%] w-full mx-auto">
                  <p className="pl-3 pb-2 text-gray-700">Text Code *</p>
                  <input
                    type="text"
                    onFocus={handleFocus}
                    value={code}
                    className={`rounded-full text-[1.3em] text-[#555] w-full border-[#aaa] p-2 outline-none border-[1px] focus:shadow-md ${
                      inputFlag
                        ? "focus:shadow-red-200 focus:border-red-200"
                        : "focus:shadow-blue-200 focus:border-[#aaa]"
                    }`}
                    onChange={handleChange}
                  />
                  {inputFlag && (
                    <p className="text-red-500 font-bold text-center mt-3">
                      {error}
                    </p>
                  )}
                  <div
                    className="text-center mt-1 text-blue-500 hover:underline cursor-pointer"
                    onClick={handleResend}
                  >
                    Resend Code
                  </div>
                  <div className="flex justify-between mt-2">
                    <button
                      className="bg-blue-500 w-[150px] text-white rounded-full py-3 text-[1.2em]"
                      onClick={handleBack}
                    >
                      <FaAngleLeft className="mr-2 inline-block" />
                      Back
                    </button>
                    <button
                      className="bg-blue-500 w-[150px] text-white rounded-full py-3 text-[1.2em]"
                      onClick={handleContinue}
                    >
                      Continue
                      <FaAngleRight className="ml-2 inline-block" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="max-w-[600px] mx-auto sm:pb-20">
              <div>
                <div>
                  <div className="contact-tab-header flex">
                    <div
                      onClick={() => setTab(1)}
                      className={`cursor-pointer font-bold bg-white px-6 py-4 rounded-tl-3xl ${
                        tab === 2 ? "text-gray-600" : "text-blue-500"
                      }`}
                    >
                      <p>Customer Service</p>
                    </div>
                    <div
                      onClick={() => setTab(2)}
                      className={`cursor-pointer font-bold bg-white px-6 py-4 pl-0 ${
                        tab === 1 ? "text-gray-600" : "text-blue-500"
                      }`}
                    >
                      <p>{"Sign in"}</p>
                    </div>
                    <div
                      onClick={() => setTab(3)}
                      className={`cursor-pointer font-bold bg-white px-6 py-4 pl-0 rounded-tr-3xl ${
                        tab === 3 ? "text-gray-600" : "text-blue-500"
                      }`}
                    >
                      <p>{"Register"}</p>
                    </div>
                  </div>
                  <div className="contact-tab-body p-6 bg-white">
                    <div
                      className={`flex md:flex-row flex-col ${
                        tab === 1 ? "opacity-100 block" : "opacity-0 hidden"
                      }`}
                    >
                      <div className="flex flex-col md:w-[50%] w-full md:mr-4 md:mb-0 mr-0">
                        <p className="flex items-center mb-4">
                          <FaPhoneAlt fill="#0386ff" size={20} />
                          <span className="ml-3 text-base">
                            <strong>{"Call us at: "}</strong>{" "}
                            <a
                              href="tel:(801) 893-7716"
                              className="text-[#0386ff] hover:underline"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {"(801) 893-7716"}
                            </a>
                          </span>
                        </p>
                        <p className="flex items-center mb-4">
                          <HiMail fill="#0386ff" size={20} />
                          <span className="ml-3 text-base">
                            <a
                              href="tel:(801) 893-7716"
                              className="text-[#0386ff] hover:underline"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {"Email Us"}
                            </a>
                          </span>
                        </p>
                        <p className="flex items-center mb-4">
                          <FaMapMarkerAlt fill="#0386ff" size={20} />
                          <span className="ml-3 text-base">
                            <strong>{"Address: P.O. Box:"}</strong>
                            {" 307, New Hyde Park, NY 11040"}
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-col md:w-[50%] w-full md:mr-4 md:mb-0 mr-0 mb-4">
                        <p className="mb-4">
                          <strong>{"Business Hours:"}</strong>
                          {
                            " Monday - Friday: 7AM to 12AM (EST) Saturday & Sunday: 9AM to 7PM (EST)"
                          }
                        </p>
                        <p className="flex text-[20px]">
                          <FaFacebookF fill="#0386ff" />
                          <FaInstagram fill="#0386ff" className="ml-4" />
                          <FaYoutube fill="#0386ff" className="ml-4" />
                        </p>
                      </div>
                    </div>
                    <div
                      className={`text-left ${
                        tab === 2 ? "opacity-100 block" : "opacity-0 hidden"
                      }`}
                    >
                      <p className="mb-[20px] text-base">
                        <strong>
                          Are you an existing or returning customer and need
                          access to your account?
                        </strong>{" "}
                        <a
                          href="https://google.com"
                          className="text-[#0386ff] hover:underline"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Sign In
                        </a>
                      </p>
                      <p className="text-base">
                        <strong>Do you want to learn more? </strong>
                        <a
                          href="#fap"
                          className="text-[#0386ff] hover:underline"
                        >
                          Learn More
                        </a>
                      </p>
                    </div>
                    <div
                      className={`${
                        tab === 3 ? "opacity-100 block" : "opacity-0 hidden"
                      }`}
                    >
                      <p className="text-base leading-8 m-0 pb-[4%]">
                        It's easy. Simply enter your phone number in the field
                        below to receive a text code to start the process.
                      </p>
                      <br />
                      <InputMask
                        value={phoneNumber}
                        placeholder="Enter Mobile Number"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        mask="(999) 999-9999"
                        // maskChar=" "
                        className="border-[#0386ff] lg:mr-[15px] lg:mb-0 mr-0 mb-[15px]  border-[1px] h-[50px] outline-none bg-white text-[#777] text-[22px] py-[10px] px-4 rounded-full min-w-[11em] max-w-[13em] placeholder:text-[#0386ff]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
      <div className="relative bg-white">
        <svg
          style={{ transform: "rotate(180deg)", transition: "0.3s" }}
          viewBox="0 0 1440 110"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-7" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(239, 246, 255, 1)" offset="0%"></stop>
              <stop stop-color="rgba(239, 246, 255, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: "1" }}
            fill="url(#sw-gradient-7)"
            d="M0,44L40,49.5C80,55,160,66,240,62.3C320,59,400,40,480,44C560,48,640,73,720,84.3C800,95,880,92,960,91.7C1040,92,1120,95,1200,93.5C1280,92,1360,84,1440,82.5C1520,81,1600,84,1680,73.3C1760,62,1840,37,1920,29.3C2000,22,2080,33,2160,33C2240,33,2320,22,2400,16.5C2480,11,2560,11,2640,11C2720,11,2800,11,2880,9.2C2960,7,3040,4,3120,16.5C3200,29,3280,59,3360,75.2C3440,92,3520,95,3600,80.7C3680,66,3760,33,3840,33C3920,33,4000,66,4080,71.5C4160,77,4240,55,4320,42.2C4400,29,4480,26,4560,20.2C4640,15,4720,7,4800,20.2C4880,33,4960,66,5040,69.7C5120,73,5200,48,5280,47.7C5360,48,5440,73,5520,77C5600,81,5680,62,5720,53.2L5760,44L5760,110L5720,110C5680,110,5600,110,5520,110C5440,110,5360,110,5280,110C5200,110,5120,110,5040,110C4960,110,4880,110,4800,110C4720,110,4640,110,4560,110C4480,110,4400,110,4320,110C4240,110,4160,110,4080,110C4000,110,3920,110,3840,110C3760,110,3680,110,3600,110C3520,110,3440,110,3360,110C3280,110,3200,110,3120,110C3040,110,2960,110,2880,110C2800,110,2720,110,2640,110C2560,110,2480,110,2400,110C2320,110,2240,110,2160,110C2080,110,2000,110,1920,110C1840,110,1760,110,1680,110C1600,110,1520,110,1440,110C1360,110,1280,110,1200,110C1120,110,1040,110,960,110C880,110,800,110,720,110C640,110,560,110,480,110C400,110,320,110,240,110C160,110,80,110,40,110L0,110Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default GetStartedPart;
