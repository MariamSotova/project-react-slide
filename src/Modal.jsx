import React, { useState } from "react";

export function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      <button onClick={toggleModal} className="btn-modal">
        Leave a request
      </button>
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <div className="section">
              <div className="window-wrp">
                <div className="window-popup">
                  <button className="close-modal" onClick={toggleModal}>
                    close
                  </button>
                  <form action="#">
                    <h3 className="header-form">Leave a request</h3>
                    <div className="wrp">
                      <input
                        type="name"
                        id="name-text"
                        name="name"
                        required
                        autofocus
                        placeholder="Name"
                        autocomplete="on"
                      ></input>
                      <input
                        className="input-email"
                        type="email"
                        id="email-text"
                        name="email"
                        autocomplete="on"
                        placeholder="Email"
                        required
                      ></input>
                      <input
                        type="file"
                        name="pdf"
                        accept="application/pdf, application/vnd.ms-excel"
                      ></input>
                    </div>
                    <div className="button-wrp">
                      <button
                        className="button-submit"
                        type="submit"
                        tabindex="0"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* background info */}
    </div>
  );
  // счетчик
  // const [count, setCount] = useState(0);

  // return (
  //   <div>
  //     <button onClick={() => setCount(count + 1)}>Count {count}</button>
  //   </div>
  // );
}

/* download file
 div.downloads__link
          a(href='#' download).link__item1 download
          a(href='#' download).link__item2 download
*/

/* add file
div.added__block
div.added__img
  img(src="assets/svg/pdf.svg")
span.added__number.added__number--right 2
form(action="#" method="post").form__pdf
  input(type="file" name="" accept="application/pdf, application/vnd.ms-excel").input__pdf
*/

/* button pay for file
 div
          form(action="#" method="post" target="_blank").form
            input(type="button" value="Paying for an appeal").input
            // or button
*/
