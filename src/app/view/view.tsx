
import { Header } from '../components/haeder/header';
import { ContentOrder } from '../components/order/order';
import { ContentGallery } from '../components/gallery/gallery';
import { ContentInfo } from '../components/info/info';
import { ContentMain } from '../components/main/main';

export function View() {
    return (
        <main>
            <Header />
            <ContentMain />
            <ContentInfo />
            <ContentGallery />
            <ContentOrder />
        </main>
    );
}