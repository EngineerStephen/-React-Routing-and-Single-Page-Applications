import React, {Component} from "react";
import { Link } from "react-router-dom";
// import NavigationBar from "./NavigationBar";

    class Characters extends Component {
    constructor(props){
        super(props); 
        this.state = {
        characters: [],
        selectedCharacterID: null,
        }; 
    }


    componentDidMount(){
        const fetchedCharacters = [
        {
            id: 1,
            name: "Alice"
        },
        {
            id: 2,
            name: "Bob"
        }, 
        {
            id: 3,
            name: "Allan (guest of honor)"
        }
        ]; 
        this.setState({characters: fetchedCharacters})
    }

    // Step 1: Mounting
    selectCharacter = (id) => {
        this.setState({ selectedCharacterID: id}); 
        this.props.handleCharacterSelect(id); 
        console.log(`The default Character id is ${this.props.defaultCharacterID}`)
    }

    // Step 2: Updating 
    componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedCharacterID !== this.state.selectedCharacterID){
        console.log(`New Character selected: ID ${this.state.selectedCharacterID}`); 
        }
    }

    // Step 3: Unmounting 
    componentWillUnmount(){
        console.log("Character component is being unmounted"); 
    }


    deleteCharacter = (CharacterIDToDelete) => {
        const newCharacter = this.state.characters.filter(character => character.id !== characterIDToDelete); 
        this.setState({characters: newCharacters}); 
    }

    render() {
        const {characters, selectedcharacterID, pets} = this.state; 

        return (
        <div className="Characters">
            <NavigationBar />
            <h3>Characters</h3>
            <ul>
            { characters.map(characters => (
                <li key={character.id} onClick={() => this.selectCharacter(character.id)}>
                <Link to={`/edit-character/${character.id}`}>{character.name}</Link>

                <button onClick={() => this.deleteCharacter(character.id)}>Delete</button>
                                </li>
            )) }
            </ul>

        </div>
        )
    }
}

export default Characters; 