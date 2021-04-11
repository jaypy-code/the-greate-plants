import { useEffect } from 'react';
import { gsap } from 'gsap';

import './gallery.scss';
import { Images } from './components/images/images';
import { Title } from './components/title/title';

export function ContentGallery() {
    useEffect(() => {
        if (window.innerWidth <= 992) return;
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'section#gallery',
                scrub: 1
            }
        });

        tl.fromTo('section#gallery h1', {
            x: 200
        }, {
            x: -200
        })
    });

    return (
        <section id="gallery">
            <div className="background-image" style={{ 'backgroundImage': `url(${process.env.PUBLIC_URL}/assets/leaves-plant-3.png)` }}></div>
            <div className="content">
                <Title />
            </div>
            <Images />
        </section>
    );
}