import React from 'react'
import { useRef, useState } from 'react'
import './form.css'



const Form = () => {

  const [imgurl, setimgurl] = useState("/");
  const [loading,setloading] =useState(false);
  let inputRef = useRef(null);

  const getimage = async () => {
    const prompt = inputRef.current.value.trim();
    if (prompt.length < 5) {
      alert("Please enter a prompt of at least 5 characters");
      return;
    }

    console.log(inputRef.current.value);
    setloading(true);

    try {
      const response = await fetch("https://ai-image-generator-backend-1.onrender.com/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (data.imageBase64) {
        setimgurl(`data:image/png;base64,${data.imageBase64}`);
        alert("Image generated successfully");
      } else {
        alert("No image was returned from the server");
      }
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Something went wrong while generating the image");
    }

     setloading(false);

  };

  return (
    <>
      <div id="imageForm">
        <label for="prompt">Enter your prompt:</label><br />
        <input type="text" ref={inputRef} id="prompt" name="prompt" placeholder="e.g. A cat surfing on a pizza" required />
        <br />
        <button onClick={() => { getimage() }}>Generate Image</button>
      </div>
      <div className="image-container" id="image-container">
        {imgurl === "/" ? <span style={{ color: '#bbb' }}>Your generated image will appear here.</span> :
          <div className="image">
            <img src={imgurl} alt="Generated Image"></img>
          </div>}

          

      </div>
      <div className="loading">
              <div className={loading?"loading-bar-full":"loading-bar"}></div>
              <div className={loading?"loading-text":"display-none"}>
                  Generating...
              </div>
        </div>
    </>
  )
}

export default Form
