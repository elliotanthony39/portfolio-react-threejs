import React from 'react';
import { BsFillEggFill } from 'react-icons/bs';
import "../../stylesheets/Loading.css";

function Loading({ handleLoad }) {
  return (
    <div className="loader">
      <div className="content-load">
        <div className="words">
          <h1>Welcome to my Portfolio</h1>
        </div>
        <div>
          <h3>We don't have cookies yet,<br/> but I appreciate your visit.</h3>
        </div>
        <div className="points">
          <BsFillEggFill className="point po1" />
          <BsFillEggFill className="point po2" />
          <BsFillEggFill className="point po3" />
        </div>
        <button className="continue" onClick={handleLoad} >Click Me To Continue</button>
      </div>
    </div>
  )
}

export default Loading;