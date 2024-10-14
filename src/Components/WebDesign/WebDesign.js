import React, { Component } from 'react';
import JL from "../../Img/JobaLogo.png";
import CL from '../../Img/CipsLogo.png';
import SL from '../../Img/SparrowLogo.png';
import TL from '../../Img/1t3Logo.png';
import FL from '../../Img/FFlogo.png';
import "./WebDesign.css"

class WebDesign extends Component {
    render() {
        return (
            <div className='WD'>
                {/* <section className='WDHead'>
                    <h1>Web Design</h1>
                </section> */}
                <section className='WDLogo WDPage'>
                    <h2>Logos</h2>
                    <div className='WDLimg'>
                    <img className="WDLI" src={JL} alt="Jobal Logo" />
                    <img className="WDLI" src={CL} alt="Cips Logo" />
                    <img className="WDLI" src={SL} alt="Sparrows Coffee Logo" />
                    <img className="WDLI" src={TL} alt="1T3 Life Logo" />
                    {/* <img className="WDLI" src={FL} alt="Fireflies Comics Logo" /> */}
                    </div>
                </section>
                <section className='WDPage Designs'>
                    <h2>Site Designs</h2>
                    <div className='WDPlinks'>
                        <div className='WDPLbd L1'>
                            <a className="a1" href="https://church-site.vercel.app/" target="_blank">Religion</a>
                        </div>
                        <div className='WDPLbd L2'>
                            <a className="a2" href="https://sparrows-coffee.vercel.app/" target="_blank">Coffee</a>
                        </div>
                        <div className='WDPLbd L3'>
                            <a className="a3" href="https://loan-officer-template.vercel.app/" target="_blank">Work</a>
                        </div>
                        <div className='WDPLbd L4'>
                            <a className="a4" href="https://www.1t3life.org/" target="_blank">Training</a>
                        </div>
                    </div>
                </section>
                {/* <section className='WDimages'>
                    <h2>Image Designs</h2>
                </section> */}
            </div>
        );
    }
}

export default WebDesign;