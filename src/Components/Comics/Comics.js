import React, { Component } from 'react';
import { Link } from "react-router-dom";
import FF from "../../Img/FF.png";
import F1 from "../../Img/FF-1.jpg";
import F2 from "../../Img/FF-2.jpg";
import F3 from "../../Img/FF-3.jpg";
import F4 from "../../Img/FF-4.jpg";
import F5 from "../../Img/FF-5.jpg";
import F6 from "../../Img/FF-6.jpg";
import F7 from "../../Img/FF-7.jpg";
import F8 from "../../Img/FF-8.jpg";
import F9 from "../../Img/FF-9.jpg";
import F10 from "../../Img/FF-10.jpg";
import "./Comics.css"

class Comics extends Component {
    render() {
        return (
            <div className='comics'>
                <div className='cHead'>
                    <img className="cImg" src={FF} alt="Fireflies Comic Header"/>
                </div>
                <div className='cIn'>
                    <p> Fireflies Comics focuses on the lives and adventures of a family and their friends. The main characters—siblings Ollie, Nova, and Elijah—share many experiences with their parents and friends, forming the heart of the story. The Fireflies family lives in Eastern North America, around the Carolinas, a setting that offers opportunities for diverse storylines involving mountains, beaches, history, and plenty of shenanigans. Many of the ideas for the comics come from my own family’s everyday life, bringing authenticity and warmth to each story. <br/><b>For more comics visit me on Instagram!</b></p>
                    <a 
                        class="cIc fa-brands fa-instagram"
                        href="https://www.instagram.com/firefliesthecomic/reels/" 
                        target='_blank'
                        aria-hidden="true"
                        rel="noopener noreferrer"
                        ></a>
                </div>
                <div className='cList'>
                    <div className='cC'>
                        <h1>#1 Lakes and Leeches</h1>
                        <img src={F1} alt="Comic about Leeches" />
                    </div>
                    <div className='cC'>
                        <h1>#2 Chicken Icecream</h1>
                        <img src={F2} alt="Comic about Icecream" />
                    </div>
                    <div className='cC'>
                        <h1>#3 Dandelion Wishes</h1>
                        <img src={F3} alt="Comic about Dandelion Wishes" />
                    </div>
                    <div className='cC'>
                        <h1>#4 Hero's Audit</h1>
                        <img src={F4} alt="Comic about Hero's Audit" />
                    </div>
                    <div className='cC'>
                        <h1>#5 Suckers</h1>
                        <img src={F5} alt="Comic about Suckers" />
                    </div>
                    <div className='cC'>
                        <h1>#6 Bald and Bearded</h1>
                        <img src={F6} alt="Comic about Bald and Bearded" />
                    </div>
                    <div className='cC'>
                        <h1>#7 A Hero's Tale</h1>
                        <img src={F7} alt="Comic about A Hero's Tale" />
                    </div>
                    <div className='cC'>
                        <h1>#8 Therapy</h1>
                        <img src={F8} alt="Comic about Therapy" />
                    </div>
                    <div className='cC'>
                        <h1>#9 Drink Fun</h1>
                        <img src={F9} alt="Comic about Drink Fun" />
                    </div>
                    <div className='cC'>
                        <h1>#10 On the Mind</h1>
                        <img src={F10} alt="Comic about On the Mind" />
                    </div>
                </div>
                <div className='cAbout'>
                    <p></p>
                </div>
            </div>
        );
    }
}

export default Comics;