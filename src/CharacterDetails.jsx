import React, { useState, useEffect } from "react";
// import NavigationBar from "./NavigationBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CharacterDetails = () => {
    const [characters, setCharacters] = useState([]); 
    const navigate = useNavigate(); 

    // Fetch character details function
    const fetchCharacterDetails = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/character-details'); 
            setCharacters(response.data);
        } catch (error) {
            console.log("Error fetching Character Details:", error);
            const fetchedCharacters = [
                { 
                    character_id: 1,
                    name: "TeaLatteLove",
                    price: "0.03"
                }, 
                {
                    character_id: 2,
                    name: "ILoveFrontend",
                    price: "1.34"
                }
            ];
            setCharacters(fetchedCharacters);
        }
    };

    const deleteCharacterDetails = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:5000/character-details/${id}`);
            fetchCharacterDetails(); 
        } catch (error) {
            console.log(`Error deleting Character ${id}:`, error);
        }
    };

    useEffect(() => {
        fetchCharacterDetails();
    }, []);

    return (
        <div className="Character-Details">
            <NavigationBar />
            <h3>Character Details</h3>
            <ul>
                {characters.map(character => (
                    <li key={character.character_id}>
                        <p>{character.name}: ${character.price}</p>
                        <button onClick={() => navigate(`/edit-product/${character.character_id}`)}>Edit</button>
                        <button onClick={() => deleteCharacterDetails(character.character_id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterDetails;
