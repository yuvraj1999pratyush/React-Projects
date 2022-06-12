import React from "react";

export default function Meme() {

    const [meme, setMeme] = React.useState({

        img: "https://i.imgflip.com/3si4.jpg",
        topText: "",
        bottomText: ""
    });

    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(()=>{

        fetch("https://api.imgflip.com/get_memes")
        .then(resp => resp.json())
        .then(data => setAllMemes(data.data.memes));


    },[]);

    function getMemeImage() {
        const memeArray = allMemes;
        const random = Math.floor(Math.random() * memeArray.length);
        const url = memeArray[random].url;
        setMeme((img) => {

            return {
                ...meme,
                img: `${url}`
            }
        });

    }

    function handleChange(event){
            const {name, value} = event.target;

            setMeme((img) => {

                return {
                    ...meme,
                    [name] : value,
                }
            });

    }



    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    className="form-input"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className="form-input"
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button onClick={getMemeImage} className="form-button">Get a New Meme Image</button>
            </div>
            <div className="image-container">
                <h3 className="top">{meme.topText}</h3>
                <img src={meme.img} className="meme-image" />
                <h3 className="bottom">{meme.bottomText}</h3>
            </div>


        </main>
    );
}