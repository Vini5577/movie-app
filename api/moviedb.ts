import axios from "axios";
import { apiKey } from '../constants'
import React from "react";

// endpoints
const apiBaseUrl = 'https://api.themoviedb.org/3'
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`

export const image500 = (path: string) => path ? `https://image.tmdb.org/t/p/w500${path}` : null;
export const image342 = (path: string) => path ? `https://image.tmdb.org/t/p/w342${path}` : null;
export const image185 = (path: string) => path ? `https://image.tmdb.org/t/p/w185${path}` : null;

export const fallbackMoviePoster = 'https://www.movienewz.com/img/films/poster-holder.jpg';
export const fallbackPersonPoster = 'https://www.movienewz.com/img/films/poster-holder.jpg';

const apiCall = async (endpoint?: any, params?: any) => {
    const options = {
        method: 'GET',
        url: endpoint,
        params: params ? params : {}
    }

    try {
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.log('error: ', error)
        return {}
    }
}

export const fecthTrendingMovies = () => {
    return apiCall(trendingMoviesEndpoint);
}

export const fetchUpcomingMovies = () => {
    return apiCall(upcomingMoviesEndpoint);
}

export const fetchTopRatedMovies = () => {
    return apiCall(topRatedMoviesEndpoint);
}

