export interface IImage {
    name: string
    src: string
    alt: string
    title: string
    content: string
}

export const images: IImage[] = [
    {
        name: 'first',
        src: '/assets/vase-plant-1.jpg',
        alt: 'White vase and green Zamioculcas',
        title: 'Zamioculcas with a white vase',
        content: 'This is a zamioculcas in a white vase. They can live in a room with very little sunlight and water. They are suitable for closed rooms and spaces such as apartments and offices. Everyone who has and bought, is satisfied with it and has not dried it.'
    },
    {
        name: 'second',
        src: '/assets/vase-plant-2.jpg',
        alt: 'Wooden vase and green Zamioculcas',
        title: 'Zamioculcas with a wooden vase',
        content: 'As you can see this is a zamioculcas in a wooden vase. Do you know that they can growing to 45–60 centimetres or they are tropical plants and are found on the African continent, I would say you can find them from southern Kenya to northeastern Africa.'
    },
    {
        name: 'third',
        src: '/assets/vase-plant-3.jpg',
        alt: 'Black vase and a plant',
        title: 'Black vase and a plant',
        content: 'Uhhhh ... I do not know what the name of this plant is! Instead, the flowerpot is beautiful and a plant suitable for laying on the table, and it is beautiful, which is also important.!'
    },
    {
        name: 'fourth',
        src: '/assets/vase-plant-4.jpg',
        alt: 'Tall vase and a plant',
        title: 'Tall vase and a plant',
        content: 'I think I do not know the names of the plants at all because I do not know the name of this plant either. But instead it is tall and its charm is next to the corner of the wall and it can beautifully fill the side of the wall from being empty.'
    }
];