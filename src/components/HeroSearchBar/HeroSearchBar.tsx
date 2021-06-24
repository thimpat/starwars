import styled from 'styled-components';
import {ChangeEvent, useContext, useRef} from "react";
import HeroCardContext from "../../contexts/HeroCardContext";

const Container = styled.div`
  border: solid 1px darkred;
`;

function HeroSearchBar() {
    const {setSelectedActor} = useContext(HeroCardContext);
    const inputRef = useRef<HTMLInputElement>(null)

    /**
     * Update character name to request to the server
     */
    const updateActorName = () => {
        const inputContent = inputRef?.current?.value || ""
        setSelectedActor(inputContent)
    }

    return (
        <Container>
            <span><input type="text" ref={inputRef} placeholder="Enter Hero here"/> </span>
            <button
                   data-testid="search-button"
                   onClick={updateActorName}
            >
                Search
            </button>
        </Container>
    );
}

export default HeroSearchBar;
