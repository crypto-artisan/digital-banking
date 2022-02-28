import React from "react";

import serviceImg1 from "assets/image/phone-4x.png";
import serviceImg2 from "assets/image/customerservice-4x.png";
import serviceImg3 from "assets/image/security-4x.png";
import serviceImg4 from "assets/image/credit-4x.png";
import Container from "components/Container";

const ServiceCard = (props: any) => {
  return (
    <div className="rounded-3xl w-full max-w-[395px] md:mb-5 py-8">
      <div className="">
        <div className="w-full flex items-center relative bg-blue-50 rounded-3xl h-44 mb-5">
          <img
            src={props.img}
            alt="Service"
            className="m-auto px-7 lg:w-full"
          />
        </div>
        <h1 className="mb-2 text-lg font-bold leading-2 -tracking-[1px] text-gray-800">
          {props.title}
        </h1>
        <div className="leading-7 text-base text-gray-600">
          {props.children}
        </div>
      </div>
    </div>
  );
};

const ServicePart = () => {
  return (
    <Container>
      <div id="services" className="md:py-16 py-3 w-full m-auto md:px-[15px]">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 mt-[42px] sm:gap-6 justify-center">
          <ServiceCard img={serviceImg1} title="Mobile Banking">
            <ul className="service-card-list list-disc pl-5">
              <li>Always know your account balance</li>
              <li>Mobile Tap to Pay</li>
              <li>
                Real Time Alerts including SMS, Email, and Push{" "}
                <span className="text-[0.7em]">Carrier rates may apply</span>
              </li>
              <li>Bank-to-Card and Card-to-Card</li>
              <li>Virtual Card available</li>
            </ul>
          </ServiceCard>
          <ServiceCard
            img={serviceImg2}
            title="Award Winning US Based Customer Service"
          >
            <ul className="service-card-list list-disc pl-5">
              <li>Most calls answered with hold times less than 30 seconds</li>
              <li>
                Fanatical U.S based Customer Service team who cares about you
              </li>
              <li>
                World-class award-winning bilingual representatives available 7
                days a week to answer all of your questions
              </li>
            </ul>
          </ServiceCard>
          <ServiceCard img={serviceImg3} title="Security and Alerts">
            <ul className="service-card-list list-disc pl-5">
              <li>Visa Zero Liability Protection</li>
              <li>FDIC Insured</li>
              <li>
                Peace of mind with Account Shield<sup>3</sup>
              </li>
              <li>Security Biometrics</li>
              <li>Latest EMV chip technology</li>
            </ul>
          </ServiceCard>
          <ServiceCard img={serviceImg4} title="Account Features">
            <ul className="service-card-list list-disc pl-5">
              <li>
                No direct deposit fee<sup>2</sup>
              </li>
              <li>Reloadable at over a million retailers worldwide</li>
              <li>
                Share money with friends and family with up to 4 companion
                accounts at no charge<sup>4</sup>
              </li>
              <li>Use anywhere Visa debit is accepted worldwide</li>
            </ul>
          </ServiceCard>
        </div>
      </div>
    </Container>
  );
};

export default ServicePart;
