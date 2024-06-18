import React, { useState } from 'react';

export default function Text(props) {
    const handleUppercaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLowercaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleCopy = () => {
                navigator.clipboard.writeText(text)
               props.showAlert("text copied", "success");


        // let textArea = document.getElementById("myBox");
        // textArea.select();
        // navigator.clipboard.writeText(textArea.value)
            // .then(() => {
            //     // console.log("Text copied to clipboard successfully!");
            // })
            // .catch((err) => {
            //     // console.error("Failed to copy text: ", err);
            // });
    };

    const [text, setText] = useState('');

    return (
        <>
            <div   class="container"  style={{color: props.mode === 'light'? 'black' : 'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea id="myBox" className="form-control"  value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'? 'white' : 'grey', color: props.mode === 'light'? 'black' : 'white'}} rows="6"
                    ></textarea>
                </div>
                <button className="btn btn-primary m-3" onClick={handleUppercaseClick}>Convert to Uppercase</button>
                <button className="btn btn-primary m-3" onClick={handleLowercaseClick}>Convert to Lowercase</button>
                <button className="btn btn-primary m-3" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary m-3" onClick={handleCopy}  >Copy Text</button>
          

            <div className="my-3">
                <h1>Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0 }).length} words and  {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
            </div>
        </>
    );
}


// import React, {useState} from 'react'

// export default function Text(props)
// {
//     const handleonClick=()=>{
//         // console.log("uppercase click");   //  there we can change the state ot text
//         let newText=text.toUpperCase();
//         setText(newText);

//     }

//     const handleloClick=()=>{
//         // console.log("uppercase click");   //  there we can change the state ot text
//         let newText=text.toLowerCase();
//         setText(newText);

//     }

//     const handleClearClick=()=>{
//         // console.log("uppercase click");   //  there we can change the state ot text
//         let newText='';
//         setText(newText);

//     }

//     const handleonChange=(event)=>{
//         // console.log("onchange");
//         setText(event.target.value);        // with the help of this we can change the stateor text
//     }

//     const handleCopy=()=>{
//         let text=document.getElementById("myBox");
//         text.select();
//         navigator.clipboard.writeText(text.value);
//     }


//     const [text, setText]=useState("Enter any text here");   //   it is hook- which is used for change the state . there is text variable which contain 
//     return(                                            // some text  like useState("xyz"); if we want to change the text or state then we use -> setText("");
//         <>
//         <div>
//               <h1>{props.heading}</h1>
//             <div className="mb-3">
//                 <label className="form-label" id="myBox" >Message</label>
//                 <textarea  className="form-control" value={text}  onChange={handleonChange}  rows="6"></textarea>
//             </div> 
//             <button className="btn btn-primary m-3"  onClick={handleonClick}>convert Uppercase </button>
//             <button className="btn btn-primary m-3"  onClick={handleloClick}>convert Lowercase </button>
//             <button className="btn btn-primary m-3"  onClick={handleClearClick}>Clear Text </button>
//             <button className="btn btn-primary m-3"  onClick={handleCopy}>Copy Text </button>


 
//         </div>

//         <div className="my-3">
//             <h1> There is text summary</h1>
//             { <p> {text.split (" ").length} words : {text.length} character </p>     /*  there is function whch count word and character  */}

//             <h2> preview</h2>
//             <p>{text}</p>
//         </div>
//         </>
//     );
// }