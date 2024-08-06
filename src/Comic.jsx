import React, {useEffect, useState} from "react";

export function Comic(props) {

    const { ComicID } = props; 

    const [comics, setComics] = useState([])


    useEffect(() => {
        if (ComicID){

        const fetchedComics = [
            { id: 101, date: '2024-01-31'},
            { id: 102, date: '2024-03-03'},
            { id: 103, date: '2024-01-31'},
            { id: 104, date: '2024-03-03'},
            { id: 105, date: '2024-07-31'},
            { id: 106, date: '2024-01-31'},
            { id: 107, date: '2024-03-03'},
            { id: 108, date: '2024-07-31'}
        ]
        setComics(fetchedComics)
        }

        console.log("Use effect ran")
    }, []); 
    
    const handleComicClick = (id) => {
        props.onComicSelect(id); 
    }

    return (
        <div className="order-list">
        <h2>Orders for customer: {comicID}</h2>
        <ul>

            { comic.map(comic => (
            <li key={comic.id} onClick={handlecomicClick(comic.id)}>
                Order ID: {comic.id} Date: {comic.date}
            </li>
            )) }
        </ul>
        </div>
    )
    }
    export default Comic;

