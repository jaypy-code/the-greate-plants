import './button.scss';

export function Button() {
    function scrollTo(event: any) {
        event.preventDefault();
        document.querySelector('#info div.end-scroll')?.scrollIntoView({ 'behavior': 'smooth' });
    }

    return (
        <a href="#info" onClick={(event) => scrollTo(event)}>See More</a>
    )
}