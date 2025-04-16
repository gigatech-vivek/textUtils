import React from 'react'

export default function home(props) {
    return (
        <>
            <div className="container my-3">
                <h1 class="text-center" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Case Converter</h1>
                <p class="text-center my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Your Tool for Lower, Upper, Title, and Sentence Case Conversion</p>
                <div className="container my-3">
                    <h2 class="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>How to Use the Case Converter</h2>
                    <p class="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Enter your text in the input field above and click the desired case conversion button. The tool will instantly convert your text to the selected case, whether it's lowercase, uppercase, title case, sentence case, or others. Once the conversion is complete, you can copy and paste the converted result wherever it's needed.</p>
                </div>
                <br></br>
                <div className="container my-3">
                    <h2 class="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Convert Text Between:</h2>
                </div>
                <br></br>
                <div className="container my-3">
                    <h3 class="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Sentence Case</h3>
                    <p class="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Transforms your text so that the first letter of each sentence is capitalized, along with the pronoun "I", making it perfect for polished, professional documents.</p>
                </div>
                <br></br>
                <div className="container my-3">
                    <h3 class="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Title Case</h3>
                    <p class="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Capitalizes the first letter of each word, excluding common stop words such as 'and', 'at', etc., ideal for headers and titles.</p>
                </div>
                <br></br>
                <div className="container my-3">
                    <h3 class="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Lower Case</h3>
                    <p class="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Converts all characters in your text to lower case, useful for uniform text appearance.</p>
                </div>
                <br></br>
                <div className="container my-3">
                    <h3 class="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Upper Case</h3>
                    <p class="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Transforms all characters in your text to upper case, great for attention-grabbing statements or acronyms.</p>
                </div>
                <br></br>
                <div className="container my-3">
                    <h2 class="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Features at a Glance</h2>
                </div>
                <br></br>
                <div className="container my-3">
                    <h3 class="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Word Count & Character Count</h3>
                    <p class="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Instantly view the total words and characters in your text, aiding in content management and editing.</p>
                </div>
                <br></br>
                <div className="container my-3">
                    <h3 class="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Free & Online</h3>
                    <p class="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Access Case Converter from anywhere, at any time, without the need for downloads or subscriptions.</p>
                </div>
                <br></br>
                <div className="container my-3">
                    <h3 class="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>User-Friendly Interface</h3>
                    <p class="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Our simple, intuitive design makes text conversion straightforward and hassle-free.</p>
                </div>
            </div>
        </>
    )
}
