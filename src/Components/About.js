import React, { useState } from "react";
export default function About(props) {
const [myStyle, setmyStyle] = useState({
  color: "black",
  backgroundColor: "white",
});
const [btnText, setbtntext] = useState("Enable Dark Mode")

const DarkMode = () => {
  if (myStyle.color == "white") {
    setmyStyle({
      color: "black",
      backgroundColor: "white",
    });
    setbtntext("Enable Dark Mode")
  }
  else{
    setmyStyle({
      color: "white",
      backgroundColor: "black",
      border:'1px solid white',
    });
    setbtntext("Enable Light Mode")
  }
};


  return (
    <div>
      <div
        className="accordion py-2 px-2"
        id="accordionExample"
        // style={myStyle}
        style={{color:props.mode==='dark'?'white':'black'}}
      >
        <div className="my-3 mx-3" >
          <h2 style={props.color}>About us</h2>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne" style={myStyle}>
            <button
              className="accordion-button"
              style={{backgroundColor:props.mode==='dark'?'#181b1f':'white',color:props.mode==='dark'?'white':'black',border: 1}}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:props.mode==='dark'?'#181b1f':'white',color:props.mode==='dark'?'white':'black'}}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo" style={myStyle}>
            <button
              className="accordion-button collapsed "
              style={{backgroundColor:props.mode==='dark'?'#181b1f':'white',color:props.mode==='dark'?'white':'black'}}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:props.mode==='dark'?'#181b1f':'white',color:props.mode==='dark'?'white':'black'}}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{backgroundColor:props.mode==='dark'?'#181b1f':'white',color:props.mode==='dark'?'white':'black'}}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            
          >
            <div className="accordion-body" style={{backgroundColor:props.mode==='dark'?'#181b1f':'white',color:props.mode==='dark'?'white':'black'}}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick={DarkMode} class="btn btn-primary">
          {btnText}
        </button>
      </div> */}
    </div>
  );
}
