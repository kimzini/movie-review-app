import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Movie {
    id: number;
    title: string;
    genre: string;
    releasedAt: string;
    endAt: string;
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
}

function Main() {
    const [movies, setMovies] = useState<Movie[]>([]);

    const navigate = useNavigate();
    const handleChange = () => {
        navigate('insert');
    };

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get<Movie[]>('http://localhost:8080/api/v1/movies'); // Typescript에서 axios.get 요청의 반환 타입을 명시적으로 지정하기 위해 <Movie[]>를 붙여줌
                // -> axios.get이 반환하는 데이터 'Movie' 배열임을 typescript 컴파일러에게 알려줌
                setMovies(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div>
            <h1>Movie List</h1>
            <button onClick={handleChange}>Add</button>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p>Genre: {movie.genre}</p>
                        <p>Release Date: {formatDate(movie.releasedAt)}</p>
                        <p>End Date: {formatDate(movie.endAt)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Main;
