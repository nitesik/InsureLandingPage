import intro_desktop from "./Images/image-intro-desktop.jpg";
import intro_mobile from "./Images/image-intro-mobile.jpg";
import intro_right_desktop from "./Images/bg-pattern-intro-right-desktop.svg";
import intro_left_desktop from "./Images/bg-pattern-intro-left-desktop.svg";
import intro_right_mobile from "./Images/bg-pattern-intro-right-mobile.svg";
import intro_left_mobile from "./Images/bg-pattern-intro-left-mobile.svg";

function Intro() {
  
  return (
    <div className="intro-container">
      <div>
        <div className="inner-intro">
          <div className="intro-text">
            <hr />
            <div className="title">
              Humanizing your insurance.
            </div>
            <div className="description">
              Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.
            </div>
            <div className="view">VIEW PLANS</div>
          </div>
          <div className="picture-content">
           <picture className="intro_picture">
             <source media="(max-width: 737px)" srcSet={intro_mobile} />
             <img src={intro_desktop} />
    
           </picture>
          </div>
        </div>
      </div>
      <img src={intro_right_desktop} alt="Design" className="intro-right-desktop" />
      <img src={intro_left_desktop} alt="left Design" className="intro-left-desktop" />

      <img src={intro_right_mobile} alt="Design" className="intro-right-mobile" />
      <img src={intro_left_mobile} alt="left Design" className="intro-left-mobile" />

    </div>
  )
}

export default Intro;