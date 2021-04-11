import './background.scss';

export function Background() {
    return (
        <div className="background-image">
            <div className="leaves right" style={{ 'backgroundImage': `url(${process.env.PUBLIC_URL}/assets/leaves-plant-1.png)` }}></div>
            <div className="leaves left" style={{ 'backgroundImage': `url(${process.env.PUBLIC_URL}/assets/leaves-plant-2.png)` }}></div>
        </div>
    );
}