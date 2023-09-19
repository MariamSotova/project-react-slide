import img4 from "./img/teach.svg";
import icon1 from "./img/icon1.svg";
import icon2 from "./img/icon2.svg";

export const Advant = () => {
  return (
    <div className="advant-container">
      <div className="advant">
        <img className="img-advant" src={img4} alt="img" />
      </div>
      <div className="advant advant-info">
        <div>
          <h2 className="advant-title">
            Premium
            <span style={{ color: "#FF7426" }}>&nbsp;Learning&nbsp;</span>
            <br />
            Experience
          </h2>
        </div>
        <div className="advant-wrapper">
          <div>
            <img src={icon1} alt="icon1"></img>
          </div>
          <div className="advant-wrapper-info">
            <h3 className="advant-header">Easily Accessible</h3>
            <p className="advant-text">
              Learning Will fell Very Comfortable With Courslab.
            </p>
          </div>
        </div>
        <div className="advant-wrapper">
          <div>
            <img src={icon2} alt="icon2"></img>
          </div>
          <div className="advant-wrapper-info">
            <h3 className="advant-header">Fun learning experience</h3>
            <p className="advant-text">
              Learning Will fell Very Comfortable With Courslab.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
