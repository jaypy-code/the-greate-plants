import { useEffect } from 'react';
import { gsap } from 'gsap';

import { Background } from './components/background/background';
import { Button } from './components/button/button';
import { Description } from './components/description/description';
import { Title } from './components/title/title';
import './main.scss';

export function ContentMain() {
    useEffect(() => {
        const tl = gsap.timeline({
        });
        tl.from('section#main h1', { y: 200, opacity: 0 });
        tl.from('section#main p', { y: 100, opacity: 0 }, '-=0.2');
        tl.from('section#main a', { y: 50, opacity: 0 }, '-=0.2')
    });

    return (
        <section id="main">
            <Background />
            <div className="content">
                <Title />
                <Description />
                <Button />
            </div>
        </section>
    );
}