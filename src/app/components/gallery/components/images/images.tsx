import { Image } from '../image/image';
import './images.scss';
import '../image/image.scss';
import { images } from '../../../../database/gallery';

export function Images() {
    function next(index: number): string {
        if (index + 1 === images.length) return '';
        else return images[index + 1]?.name;
    }

    function previous(index: number): string {
        if (index - 1 === -1) return '';
        else return images[index - 1]?.name;
    }

    return (
        <div className="images">
            {
                images.map((image, index) => <Image key={index + 1} index={index} name={image.name} src={image.src} alt={image.alt} title={image.title} content={image.content} next={next(index)} previous={previous(index)} />)
            }
        </div>
    );
}