import './vases.scss';

export function Vases() {
    return (
        <div className="vase" style={{ 'backgroundImage': `url(${process.env.PUBLIC_URL}/assets/vase-plant-5.png)` }}></div>
    );
}