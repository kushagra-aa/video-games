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
    playtime: number;
    stores: Array<Store>;
    tags: Array<Tag>;
    esrb_rating: ESRB;
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

interface Store {
    store: {
        domain: string;
        name: string;
    }
}
interface Tag {
    name: string;
}

interface ESRB {
    name: string;
}