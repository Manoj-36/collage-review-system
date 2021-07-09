import React from "react";
import { db } from "./firebase";
import{Link} from 'react-router-dom'
import clg from "./images/clg.png";
import Search from "./search";
import Footer from "./footer";

export default function MainPage() {
  return (
    <div className="container">
      <img className="icon" src={clg} />
      <h2 className="hello">RateMyCollege</h2>
      <h1 className="main-head">A better way to choose a college</h1>
      <Search />
      <div className="btm">
        <span>
          <Link to='/Colleges'><span className="wr">Write rview</span></Link>
          <Link to='/Request'><span className="ac">Add college</span></Link>
        </span>
      </div>
      <Footer />
      <Search />
    </div>
  );
}
