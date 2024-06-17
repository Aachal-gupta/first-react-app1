import React, {useState} from 'react'

export default function About(props)
{

//     const [myStyle, setMyStyle]= useState({
//         color:'black',
//         backgroundColor:'white'
//  })
 let myStyle={

    color : props.mode === 'dark'? 'white':'#042743',
    backgroundColor : props.mode === 'dark'? 'rgb(36 74 104)': 'white',
    // border : '1px solid ',
    // borderColor : props.mode === 'dark'? 'white':'#042743'
    
 }
    
 
    return(
     <>

     <div className="container  my-3 mb-3 py-3" style={{ color : props.mode === 'dark'? 'white':'#042743'}}>
     <h2>About Us</h2>

     <div className="accordion"  style={myStyle} id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           <strong>Section 1</strong> 
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Section 2</strong> 
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Section 3</strong> 
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            It is hidden by default, until the collapse plugin adds the appropriate , as well as the showing and hiding via CSS transitions. though the transition does limit overflow.
        </div>
        </div>
    </div>
    </div>

    

    </div>
   
 </>
    );
}