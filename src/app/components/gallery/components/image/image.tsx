export function Image(props: { index: number, src: string, name: string, alt: string, title: string, content: string, next: string, previous: string }) {

    function openIt(it = props.name) {
        if (document.querySelector(`section#gallery div.image.${it}`)?.classList.contains('open') === false) {
            document.querySelector(`section#gallery div.image.${it}`)?.classList.add('open');
            document.querySelector('section#gallery div.images')?.setAttribute('style', 'z-index: 2');

            document.querySelector('section#gallery')?.scrollIntoView({ 'behavior': 'smooth' });
            document.body.style.overflowY = 'hidden';
        }
    }

    function closeIt(scrollable = true, it = props.name) {
        setTimeout(() => {
            document.querySelector(`section#gallery div.image.${it}`)?.classList.remove('open');
            if (scrollable) {
                document.querySelector('section#gallery div.images')?.removeAttribute('style');
                document.body.style.overflowY = 'scroll';
            }
        }, 4);
    }

    function next() {
        closeIt(false);

        setTimeout(() => {
            openIt(props.next);
        }, 1000);
    }

    function previous() {
        closeIt(false);

        setTimeout(() => {
            openIt(props.previous);
        }, 1000);
    }

    return (
        <div className={`image ${props.name}`} style={{ ['--index' as any]: props.index }} onClick={() => openIt()}>
            <button className="close" onClick={() => closeIt()}>
                <svg viewBox="0 0 612 612">
                    <polygon points="612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397 
				306,341.411 576.521,611.397 612,575.997 341.459,306.011"/>
                </svg>
            </button>
            <article>
                <img src={process.env.PUBLIC_URL + props.src} alt={props.alt} />
                <div className="article-content">
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
                    <div className="buttons">
                        {
                            (props.next?.length !== 0) ?
                                <button className="next" onClick={() => next()}>
                                    <svg viewBox="0 0 476.213 476.213">
                                        <polygon points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5 
	405.606,308.713 476.213,238.106 "/>
                                    </svg>
                                </button>
                                : <div></div>
                        }

                        <div className="space"></div>

                        {
                            (props.previous?.length !== 0) ?
                                <button className="previous" onClick={() => previous()}>
                                    <svg viewBox="0 0 476.213 476.213">
                                        <polygon points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5 
	405.606,308.713 476.213,238.106 "/>
                                    </svg>
                                </button>
                                : <div></div>
                        }
                    </div>
                </div>
            </article>
        </div>
    );
}