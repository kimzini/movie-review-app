import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const MovieInsert: React.FC = () => {
    const [genre, setGenre] = useState<string>("스릴러");
    const [releasedAt, setReleasedAt] = useState<Date>(new Date());
    const [endAt, setEndAt] = useState<Date>(new Date());
    const [title, setTitle] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const navigate = useNavigate();
    const goMainPage = () => {
        navigate('/');
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/movies', {
                genre,
                releasedAt,
                endAt,
                title,
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Movie Insert</h1>
            <input
                onChange={handleChange}
                value={title}
                type="text"
                placeholder="movie name"
            />
            <select name="genre" id="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
                <option value='스릴러'>스릴러</option>
                <option value='로맨스'>로맨스</option>
                <option value='코믹'>코믹</option>
                <option value='액션'>액션</option>
            </select>
            <DatePicker selected={releasedAt} onChange={(date: Date) => setReleasedAt(date)} />
            <DatePicker selected={endAt} onChange={(date: Date) => setEndAt(date)} />
            <button onClick={handleSubmit}>Add Movie!</button>

            <button onClick={goMainPage}>Go Main Page!</button>
        </div >
    );
}

export default MovieInsert;
