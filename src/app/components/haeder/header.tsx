import './header.scss';

import { Logo } from "./logo";

export function Header() {
    function scrollTo(id: string, event: any) {
        event.preventDefault();
        document.querySelector(id)?.scrollIntoView({ 'behavior': 'smooth' });
    }

    return (
        <header className="light">
            <a className="title" href="#main" onClick={(event) => scrollTo('#main', event)}>
                <Logo />
                <span>Great Plants</span>
            </a>

            <div className="space"></div>
            <a className="link" href="#info" onClick={(event) => scrollTo('#info div.end-scroll', event)}>Info</a>
            <a className="link" href="#gallery" onClick={(event) => scrollTo('#gallery', event)}>Gallery</a>
            <a className="button" href="#order" onClick={(event) => scrollTo('#order', event)}>ORDER NOW</a>
        </header>
    );
}