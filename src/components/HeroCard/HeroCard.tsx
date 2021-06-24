import styled from "styled-components";
import HeroCardContext from "../../contexts/HeroCardContext";
import {useState} from "react";
import HeroSearchBar from "../HeroSearchBar/HeroSearchBar";

const Container = styled.div`
  border: 1px solid black;

  ul {
    list-style: none;
  }
`;

function HeroCard() {
    const [selectedActor, setSelectedActor] = useState("")

    return (
        <HeroCardContext.Provider value={{selectedActor, setSelectedActor}}>
            <Container>
                <ul>
                    <li>
                        <h1>Star Wars Heroes</h1>
                    </li>
                    <li>
                        <HeroSearchBar/>
                    </li>
                    <li>
                        {/*<HeroInfo/>*/}
                    </li>
                </ul>
            </Container>
        </HeroCardContext.Provider>
    );
}

export default HeroCard;
