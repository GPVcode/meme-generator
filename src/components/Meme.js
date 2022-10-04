import React, { useState, useEffect} from "react"

const Meme = () => {
    const [ meme, setMeme ] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [ allMemes, setAllMemes ] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then( res => res.json())
        .then(data => setAllMemes(data.data.memes))
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    className="form--input"
                    name="topText"
                    placeholder="Top Text"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input 
                    className="form--input"
                    name="bottomText"
                    placeholder="Bottom Text"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button
                    onClick={getMemeImage}
                    className="form--button"
                >Click here for new meme image</button>
            </div>
            <div className="meme">
                <img
                    src={meme.randomImage}
                    className="meme--image"
                    alt="" 
                />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme