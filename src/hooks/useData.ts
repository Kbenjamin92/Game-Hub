import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

export const useData = <T>(
    endpoint: string, 
    requestConfig?: AxiosRequestConfig, 
    deps?: unknown[]) => {
        
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controllers = new AbortController()

        setIsLoading(true);
        apiClient.get<FetchResponse<T>>(endpoint, { signal: controllers.signal, ...requestConfig })
        .then(res => {
            setData(res.data.results)
            setIsLoading(false);
    })
        .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setIsLoading(false);
    });

      return () => controllers.abort();
    }, deps ? [...deps] : []);

    return {data, error, isLoading};
}
