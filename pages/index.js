import { Login } from "@/components";
import { useStateContext } from "@/context/StateContext";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function Home() {
  return (
      <div className="home">
      <div className="heading">
        <div className="heading-block">
          <div className="header">
            <h1>Acces Smart Contracts</h1>
            <h1>Without Cryptocurrency</h1>
          </div>
          <div className="heading-about">
            <p>An API that allows your users to pay in fiat
              currency to interact with your smart contracts</p>
          </div>
          <div className="early-access">
            <h4>Request Early Access</h4>
            <input type="text" placeholder="Enter your email address" />
            <button className="submitBtn">Submit</button>
          </div>
        </div>
        <div className="heading-block">
          <Image 
          src="/boxchain15.png"
          alt="boxchain15"
           width={500} 
           height={400} 
           className="image"
           />
        </div>
      </div>
       <div className="paymentMethod">
        <h2>Make every internet user your potential user</h2>
        <h5>Accept any commonly used payment method</h5>
        <div className="methods">
          <Image 
          src="/visa.png"
          alt="visa" 
          width={180} 
          height={110} 
          />
          <Image 
          src="/mastercard.png"
          alt="mastercard"
           width={180} 
           height={110} 
           />
        </div>
      </div>
    <div className="integration">
        <div className="integration-block">
          <h2>Easy integration</h2>
          <h5>Start accepting payments in just 3 easy steps</h5>
          <Link href={'/'} className="learn-more">
            <span>Learn More</span>
            <BsArrowRight size={"1rem"} />
          </Link>
        </div>
        <div className="integration-block">
          <Image 
          src="/integration.png" 
          alt="integration"
          width={336} 
          height={310} />
        </div>
      </div>
      <div className="currencies">
        <h2>Supported Currencies</h2>
        <h5>Let your users pay in their native currency</h5>
        <div className="currency">
          <Image 
          src="/usdollar.png" 
          alt="usdollar"
          width={153} 
          height={102} />
          <h5>US Dollar</h5>
        </div>
        <h5>More comming soon</h5>
      </div>
      <div className="blockchains">
      <h2>Supported Blockchains</h2>
        <h5>Unrestricted by any blockchain</h5>
        <div className="blockchain-images">
          <Image 
          src='/Ellipse2.png'
          alt="Ellipse2"
           width={103} 
           height={94} 
           />
          <Image 
          src='/Ellipse3.png'
          alt="Ellipse3"
           width={103} 
           height={94} 
           />
        </div>
        <h5>More comming soon</h5>
      </div>
  </div>
)}