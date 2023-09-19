import { useState } from "react";

export const Faqlist = () => {
  const [opened, setOpened] = useState(false);
  const toggles = document.querySelectorAll(".faq-toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      toggle.parentNode.classList.toggle("active");
    });
  });

  return (
    <div className="main">
      <div className="faq-wrp">
        <div className="faqs-container">
          <div className="faq active">
            <h3 className="faq-title">title</h3>
            {opened ? (
              <p>
                Aliquam varius tortor nec quam feugiat mollis. Phasellus
                accumsan venenatis lectus, eu vestibulum nibh. Suspendisse
                tempus ultricies felis et ullamcorper.
              </p>
            ) : null}

            <button
              className="faq-toggle"
              onClick={() => setOpened(!opened)}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};
