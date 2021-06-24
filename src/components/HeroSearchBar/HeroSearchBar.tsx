import styled from 'styled-components';
import {ChangeEvent, useContext} from "react";
import HeroCardContext from "../../contexts/HeroCardContext";

const Container = styled.div`
  border: solid 1px darkred;
`;

let timerID: number = 0

function HeroSearchBar() {
    const { setSelectedActor } = useContext(HeroCardContext);

    /**
     * Update character name to request to the server
     * @param text
     */
    const updateActorName = (text = "") =>
    {
        clearTimeout(timerID)
        timerID = window.setTimeout(()=>
        {
            setSelectedActor(text)
        }, 500)
    }

  return (
    <Container>
      <span><input type="text" placeholder="Enter Hero here" onChange={(e: ChangeEvent<HTMLInputElement>)=>updateActorName(e.currentTarget?.value)} /> </span>
    </Container>
  );
}

export default HeroSearchBar;
