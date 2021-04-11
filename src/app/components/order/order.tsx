import { useEffect } from 'react';
import { gsap } from 'gsap';

import { Background } from './components/background/background';
import { Description } from './components/description/description';
import { Footer } from './components/footer/footer';
import { Title } from './components/title/title';
import './order.scss';

export function ContentOrder() {
    useEffect(() => {
        if (window.innerWidth <= 992) return;
        gsap.timeline({
            scrollTrigger: {
                trigger: 'section#order',
                scrub: 3,
                start: '-=1000'
            }
        }).fromTo('section#order h1', {
            x: -500
        }, {
            x: 500
        })
    });

    return (
        <section id="order">
            <Background />

            <div className="content">
                <Title />
                <Description />
                <Footer />
            </div>
        </section>
    );
}