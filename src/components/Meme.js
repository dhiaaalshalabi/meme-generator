import React from 'react'
import memesData from '../memesData'

function Meme() {

    const [memeImage, setMemeImage] = React.useState('')

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomeNum = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomeNum].url)
        // const {url} = memesArray[randomeNum]
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                />
                <button
                    className="form-button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage} alt="meme" className="meme-image"/>
        </main>
    )
}

export default Meme