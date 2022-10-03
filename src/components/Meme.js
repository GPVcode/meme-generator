import React, { useState, useEffect } from "react"

const Meme = () => {
    const [ meme, setMeme ] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    
    const [ allMemes, setAllMemes ] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
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
                <button className="form--button" onClick={getMemeImage}>Get a new Meme</button>
                </div>
                <div className="meme">
                    <img src={meme.randomImage} className="meme--image" alt="" />
                    <h3 className="meme--text top">{meme.topText}</h3>
                    <h3 className="meme--text bottom">{meme.bottomText}</h3>
                </div>
           
        </main>
    )
}
export default Meme