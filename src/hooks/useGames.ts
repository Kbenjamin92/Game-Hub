import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

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

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

export const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controllers = new AbortController()

        setIsLoading(true);
        apiClient.get<FetchGamesResponse>('/games', { signal: controllers.signal })
        .then(res => {
            setGames(res.data.results)
            setIsLoading(false);
    })
        .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setIsLoading(false);
    });

      return () => controllers.abort();
    }, []);

    return {games, error, isLoading};
}