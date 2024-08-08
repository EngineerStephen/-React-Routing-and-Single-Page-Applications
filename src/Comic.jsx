import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";

export function Comic(props) {
    const { ComicID, onComicSelect } = props;

    const [comics, setComics] = useState([]);

    useEffect(() => {
        if (ComicID) {
            const fetchedComics = [
                { id: 101, date: '2024-01-31' },
                { id: 102, date: '2024-03-03' },
                { id: 103, date: '2024-01-31' },
                { id: 104, date: '2024-03-03' },
                { id: 105, date: '2024-07-31' },
                { id: 106, date: '2024-01-31' },
                { id: 107, date: '2024-03-03' },
                { id: 108, date: '2024-07-31' }
            ];
            setComics(fetchedComics);
        }

        console.log("Use effect ran");
    }, [ComicID]); // Added ComicID as dependency for useEffect

    const handleComicClick = (id) => {
        onComicSelect(id);
    };

    return (
        <div className="comic-list">
            <NavigationBar />
            <h2>Comics for ComicID: {ComicID}</h2>

            <ul>
                {comics.map(comic => (
                    <li key={comic.id} onClick={() => handleComicClick(comic.id)}>
                        Comic ID: {comic.id} Date: {comic.date}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Comic;
