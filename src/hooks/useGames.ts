import { GameQuery } from '../App';
import { useData } from './useData';

export interface Platform {
    id: number;
    slug: string;
    name: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}


export const useGames = (gameQuery: GameQuery) => 
    useData<Game>('/games', 
    { params: {
         genres: gameQuery.genre?.id, 
         platforms: gameQuery.platform?.id,
        }}, 
        [gameQuery]);