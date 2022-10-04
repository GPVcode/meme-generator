import React, { useState, useEffect } from "react"

const Meme = () => {
    const [ meme, setMeme ] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [ allMemes, setAllMemes ] = useState([])

    useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    // setMeme to new image using random and retrieving url from allMemes data
    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url //get the url data from allMemes[randomNumber]
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
    <main>
        <div className="form">
            <input 
                name="topText"
                type="text"
                placeholder="Top Text"
                onChange={handleChange}
                value={meme.topText}
                className="form--input"
            />
            <input
                name="bottomText"
                type="text"
                placeholder="Bottom Text"
                onChange={handleChange}
                value={meme.bottomText}
                className="form--input"
            />
            <button
                onClick={getMemeImage}
                className="form--button"
            >Click for a new image</button>
            
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