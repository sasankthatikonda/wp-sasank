import React, { useState } from "react";
import "./Footer.css";

// Reusable Footer for popup forms and success
const PopupFooter = ({ onBack }) => (
  <div className="popup-footer">
    <p>Need Something Different?</p>
    <div>
      <a className="contact-data" href="mailto:info@eclerx.com">
        <img
          src="/assets/images/contact-imgs/msg-outline.svg"
          alt="Email"
          width="20"
          height="16"
        />
        <span>info@eclerx.com</span>
      </a>
      {onBack && (
        <button type="button" className="back-btn learnMoreBtn" onClick={onBack}>
          Back
        </button>
      )}
      <a href="/contact-us/" className="learnMoreBtn">
        Contact Us Page
      </a>
    </div>
  </div>
);

const Footer = ({ menus, tabs }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setActiveTab(null);
    setShowPopup(false);
    setShowSuccess(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <>
      {/* Footer */}
      <footer id="footer">
        <div className="innerContainer flexWrap">
          <div className="footerLogo">
            <a href="/">
              <img src="/assets/images/footerLogo.svg" alt="eClerx Logo" />
            </a>
          </div>

          <div className="footerNav">
            {menus?.map((menu, idx) => (
              <ul key={idx} className="footer-menu">
                {menu.items.map((item) => (
                  <li key={item.id}>
                    <a href={item.url}>{item.label}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="socialFooter">
            <a href="https://www.linkedin.com/company/eclerx/">
              <img src="/assets/images/footerLinkedIN.svg" alt="LinkedIn" />
            </a>
          </div>

          <small className="footerCopyRight">
            © 2025 eClerx, All rights reserved.
          </small>
        </div>
      </footer>

      {/* Contact Pin Box */}
      <div
        className="contactPinBox animateme fadeInRight"
        onClick={() => setShowPopup(true)}
      >
        <div className="flexWrap contactPinPop">
          <img src="/assets/images/contactPin.svg" alt="Contact Us" />
          <span>Contact Us</span>
        </div>
      </div>

      {/* Popup Overlay */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="popup-close" onClick={handleClosePopup}>
              &times;
            </button>

            {/* Tabs */}
            {!activeTab && (
              <div className="popup-tabs">
                <h3>
                  We’re here to help! <span>Tell us what you need</span>
                </h3>
                <div className="tab-buttons">
                  {tabs.map(
                    (tab, idx) =>
                      tab.title && (
                        <div
                          key={idx}
                          className="tab-btn"
                          onClick={() => handleTabClick(tab.key)}
                        >
                          {tab.title}
                        </div>
                      )
                  )}
                </div>

                {/* Common Footer */}
                <PopupFooter />
              </div>
            )}

            {/* Forms */}
            {activeTab && !showSuccess && (
              <div className="popup-forms">
                {tabs
                  .filter((tab) => tab.key === activeTab)
                  .map((tab, idx) => (
                    <div key={idx} className="form-content">
                      <div className="form-wrapper">
                        <h3>{tab.title}</h3>
                        <form
                          className="each-form"
                          onSubmit={handleFormSubmit}
                          dangerouslySetInnerHTML={{ __html: tab.formScript }}
                        />
                      </div>

                      {/* Reusable Footer with Back button */}
                      <PopupFooter onBack={() => setActiveTab(null)} />
                    </div>
                  ))}
              </div>
            )}

            {/* Success */}
            {showSuccess && (
              <div className="popup-success">
                <div className="success-box">
                  <span className="success-icon">
                    <img
                      src="/assets/images/contact-imgs/success-icon.svg"
                      alt="Success"
                    />
                  </span>
                  <h3>Submission Successful!</h3>
                  <p>
                    Thank you for your submission! <br />
                    We will connect you with the appropriate representative
                    shortly.
                  </p>
                </div>

                {/* Footer without Back button */}
                <PopupFooter />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
