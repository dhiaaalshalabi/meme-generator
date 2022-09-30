import React from 'react'
import memesData from '../memesData'

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImg: 'http://i.imgflip.com/1bij.jpg',
    })

    const [allMemeImgs, setAllMemeImgs] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImgs.data.memes
        const randomeNum = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomeNum].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: url
        }))
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
            <img src={meme.randomImg} alt="meme" className="meme-image" />
        </main>
    )
}

export default Meme
