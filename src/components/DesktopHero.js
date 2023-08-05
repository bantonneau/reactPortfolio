import React from 'react'
import benos from '../assets/laptop.jpg'


function DesktopHero() {
    return (
        <section className='wrapper heroWrapper'>
            <section className='heroContent'>
                <div className='image-cropper'>
                    <img src={benos} alt='benos avatar' className="rounded" />
                </div>
                <div className='herotext'>
                    <h1>Hi there! I'm Ben</h1>
                    <p>I'm a Full Stack Developer with a strong understanding of both front-end and back-end technologies. My previous experience in graphic and apparel design gives me a unique set of skills with the Adobe Creative Suite. When I'm not building websites you will find me lifting weights, designing clothes, or working on unity games with my friends.</p>
                </div>
            </section>
            <section className='buttons'>
                <button>Contact Me</button>
                <button>Resume</button>
            </section>
        </section>
    )
}

export default DesktopHero