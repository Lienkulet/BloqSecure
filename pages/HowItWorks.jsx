import React, { useState } from 'react'

const HowItWorks = () => {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);

  const handleChange = (val1, val2, val3, val4) => {
    setFaq1(val1);
    setFaq2(val2);
    setFaq3(val3);
    setFaq4(val4);
  }

  return (
    <div className="howItWorks">
      <div className="header">
        <h1>How It Works</h1>  
      </div>
      <div className="steps">
        <div className="step">
          <div className="number">
            <h2>1</h2>
          </div>
          <div className='step-name'>
            <h2>Create an Account and Login</h2>
          </div>
        </div>

        <div className="line"></div>
      
        <div className="step">
          <div className="number">
            <h2>2</h2>
          </div>
          <div className='step-name'>
            <h2>Enter the code</h2>
          </div>
        </div>

        <div className="line"></div>
      
        <div className="step">
          <div className="number">
            <h2>3</h2>
          </div>
          <div className='step-name'>
            <h2>Integrate the API Link</h2>
          </div>
        </div>
      </div>
      <div className="faq desktop">
        <div className="header">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className={faq1? "marging-0 questions" : faq2? "marging-0 questions" : 'questions'}>
          <div className={(faq1? "question white faq11Move" 
          :
           (faq3? 'faq31Move question' 
           : 
           (faq4? 'faq41Move question' :
           'question'
           )
           )) }>
            <div className="header" onClick={() => 
            faq1? handleChange(0, 0, 0, 0) : handleChange(1, 0, 0, 0)}>
              <h2>Will BloqSecure sell data?</h2>
            </div>
            <div className={faq1? "description active" : "description close"} >
              <p>
              Absolutely not. At XYZ, we value our users' privacy and security above everything else.
               We will never sell or share your personal data with any third parties.
              </p>
            </div>
          </div>

          <div className={faq2? "question white faq22Move" :
          (faq3? 'faq32Move question' 
          :  
           (faq4? 'faq42Move question' :
           'question'
           )
          )}>


            <div className="header" onClick={() => 
            faq2? handleChange(0, 0, 0, 0) : handleChange(0, 1, 0, 0)}>
              <h2>How do I make an account?</h2>
            </div>
            <div className={faq2? "description active" : "description close"} >
              <p>
              To create an account, please reach out to us at ceo@bloqsecure.com and our team will guide you through the process.
               We are committed to providing a seamless user experience and are always here to help with any questions or concerns.
              </p>
            </div>
          </div>

          <div className={faq3? "question white faq33Move" : 
          
          (faq1? 'faq13Move question' 
          :
          (faq2? 'faq23Move question' 
           : 
          "question")
          )
          }>
            <div className="header"  onClick={() => 
            faq3? handleChange(0, 0, 0, 0) : handleChange(0, 0, 1, 0)}>
              <h2>Will this be decentralized?</h2>
            </div>
            <div className={faq3? "description active" : "description close"}>
              <p>
              Unfortunately, it is not possible to make our website fully decentralized at the moment. However,
               we are using blockchain technology to enhance the security and transparency of our platform.
              </p>
            </div>
          </div>

          <div className={faq4? "question white faq44Move"
           :
            (faq1? 'faq14Move question' : 
            (faq2? 'faq24Move question' 
           : 
            "question")
            )
            }>
            <div className="header" onClick={() => 
            faq4? handleChange(0, 0, 0, 0) : handleChange(0, 0, 0, 1)}>
              <h2>Do you use non-custodial wallets?</h2>
            </div>
            <div className={faq4? " description active" : "description close"} >
              <p>
              No, we don't. Instead, we use advanced security measures and trusted custodians to protect your assets and ensure a smooth user experience.
               This way, we can offer you a secure and easy-to-use platform.
              </p>
            </div>
          </div>

        </div>
      </div>


      <div className="faq mobile">
        <div className="header">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className={faq1? "marging-0 questions" : 'questions'}>
          <div className={faq1? "question white " :'question'}>
            <div className="header" onClick={() => 
            faq1? handleChange(0, 0, 0, 0) : handleChange(1, 0, 0, 0)}>
              <h2>Will BloqSecure sell data?</h2>
            </div>
            <div className={faq1? "description active" : "description close"} >
              <p>
              Absolutely not. At XYZ, we value our users' privacy and security above everything else.
               We will never sell or share your personal data with any third parties.
              </p>
            </div>
          </div>

          <div className={faq2? "question white " : 'question' }>


            <div className="header" onClick={() => 
            faq2? handleChange(0, 0, 0, 0) : handleChange(0, 1, 0, 0)}>
              <h2>How do I make an account?</h2>
            </div>
            <div className={faq2? "description active" : "description close"} >
              <p>
              To create an account, please reach out to us at ceo@bloqsecure.com and our team will guide you through the process.
               We are committed to providing a seamless user experience and are always here to help with any questions or concerns.
              </p>
            </div>
          </div>

          <div className={faq3? "question white" : "question"}>
            <div className="header"  onClick={() => 
            faq3? handleChange(0, 0, 0, 0) : handleChange(0, 0, 1, 0)}>
              <h2>Will this be decentralized?</h2>
            </div>
            <div className={faq3? "description active" : "description close"}>
              <p>
              Unfortunately, it is not possible to make our website fully decentralized at the moment. However,
               we are using blockchain technology to enhance the security and transparency of our platform.
              </p>
            </div>
          </div>

          <div className={faq4? "question white " : "question"}>
            <div className="header" onClick={() => 
            faq4? handleChange(0, 0, 0, 0) : handleChange(0, 0, 0, 1)}>
              <h2>Do you use non-custodial wallets?</h2>
            </div>
            <div className={faq4? " description active" : "description close"} >
              <p>
              No, we don't. Instead, we use advanced security measures and trusted custodians to protect your assets and ensure a smooth user experience.
               This way, we can offer you a secure and easy-to-use platform.
              </p>
            </div>
          </div>

        </div>
      </div>
      </div>
  )
}

export default HowItWorks