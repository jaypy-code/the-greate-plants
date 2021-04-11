import './background.scss';

export function Background() {
    return (
        <div className="background-image" style={{ 'backgroundImage': `url(${process.env.PUBLIC_URL}/assets/desk.jpg)` }}></div>
    );
}