import { useEffect } from 'react';
import { gsap } from 'gsap';

import { Description } from './components/description/description';
import { Title } from './components/title/title';
import { Vases } from './components/vases/vases';
import './info.scss';

export function ContentInfo() {
    useEffect(() => {
        if (window.innerWidth <= 992) return;
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'section#info',
                scrub: 3,
                pin: true,
                end: `+=${window.innerHeight * 2}`,
            }
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: 'section#info',
                scrub: 3,
                start: "-=500"
            }
        }).fromTo('section#info div.vase', {
            y: 500
        }, {
            y: -200
        });

        tl.fromTo('section#info h1', {
            y: 200,
            opacity: 0
        }, {
            y: -50,
            opacity: 1
        });

        tl.fromTo('section#info p', {
            x: -100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1
        }, '-=0.2')
    });

    return (
        <section id="info">
            <Vases />
            <div className="content">
                <Title />
                <Description />
            </div>
            <div className="end-scroll"></div>
        </section>
    );
}