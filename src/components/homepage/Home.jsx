import React from 'react'
import './Home.css'
import homeimage from '../../assets/home.png';


export default function Home() {
    return (
        <section className='home'>
            <div className='home-content'>
                <h3>Hello, It's me</h3>
                <h1>Nishant Rana</h1>
                <h3>And I'm a <span>Python Developer</span></h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat deserunt reiciendis ab, quidem omnis vel error dicta odio id, voluptates animi autem, exercitationem maiores. Corrupti inventore officia soluta vel aspernatur?
                </p>
                <div className="social-media">
                    <a href="#"><i class='bx bxl-facebook-square' ></i></a>
                    <a href="#"><i class='bx bxl-twitter' ></i></a>
                    <a href="#"><i class='bx bxl-instagram-alt' ></i></a>
                    <a href="#"><i class='bx bxl-linkedin-square' ></i></a>
                </div>
                <a href="#" className='btn'>Download CV</a>
            </div>
        <div className='home-img'>
            <img src={homeimage} alt="" />
        </div>

        </section>
    )
}
