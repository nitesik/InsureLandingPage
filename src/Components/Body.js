import snappy from "./Images/icon-snappy-process.svg";
import affordable from "./Images/icon-affordable-prices.svg";
import people from "./Images/icon-people-first.svg";
import how_we_work from "./Images/bg-pattern-how-we-work-desktop.svg";

function Body() {

  return (
    <div className="body-content">
      <hr />
      <div className="title">We're different</div>
      <div className="features">
        <div className="box">
          <img src={snappy} alt="box-logo" />
          <div className="box-title">Snappy Process</div>
          <div className="description">Our application process can be compared in minutes, not hours. Don't get stuck filling in tedious forms.</div>
        </div>
        <div className="box">
          <img src={affordable} alt="box-logo" />
          <div className="box-title">Affordable Prices</div>
          <div className="description">We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</div>
        </div>
        <div className="box">
          <img src={people} alt="box-logo" />
          <div className="box-title">People First</div>
          <div className="description">Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.</div>
        </div>
      </div>
      <div className="find-more">
        <div className="title">Find Out more about how we work</div>
        <div className="view">HOW WE WORK</div>
        <img src={how_we_work} alt="design" className="how-we-work" />
      </div>
    </div>
  )
}

export default Body;