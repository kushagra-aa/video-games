export interface Game {
    id: string;
    background_image: string;
    name: string;
    released: string;
    website: string;
    description: string;
    metacritic: number;
    genres: Array<Genre>;
    parent_platforms: Array<ParentPlatforms>;
    publishers: Array<Publishers>;
    ratings: Array<Rating>;
    screenshots: Array<Screenshots>;
    trailers: Array<Trailer>;
}
export interface APIResponse<T> {
    results: Array<T>;
}

interface Genre {
    name: string;
}
interface ParentPlatforms {
    platform: {
        name: string;
    };
}
interface Publishers {
    name: string;
}
interface Rating {
    id: number;
    count: number;
    title: string;
}
interface Screenshots {
    image: string;
}
interface Trailer {
    data: {
        max: string;
    };
}