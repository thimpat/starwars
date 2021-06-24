import styled from "styled-components";
import HeroCardContext from "../../contexts/HeroCardContext";
import {useState} from "react";
import HeroSearchBar from "../HeroSearchBar/HeroSearchBar";
import HeroInfo from "../HeroInfo/HeroInfo";

const Container = styled.div`
  background: #F8F8F8;
  border: solid #BDBDBD 1px;
  box-shadow: 4px 9px 20px rgba(0, 0, 0, 0.5);
  height: 650px;
  margin: 20px auto;
  width: 460px;

  h1 {
    display: inline-block;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    vertical-align: middle;
  }

  ul {
    display: inline-block;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;

    li {
      &.header {
        background: rgb(74, 134, 231);
        height: 48px;
      }
      
      display: inline-block;
      width: 100%;
    }

  }
`;

function HeroCard() {
    const [selectedActor, setSelectedActor] = useState("")

    return (
        <HeroCardContext.Provider value={{selectedActor, setSelectedActor}}>
            <Container>
                <ul>
                    <li className="header">
                        <h1>Star Wars Heroes</h1>
                    </li>
                    <li>
                        <HeroSearchBar/>
                    </li>
                    <li>
                        <HeroInfo/>
                    </li>
                </ul>
            </Container>
        </HeroCardContext.Provider>
    );
}

export default HeroCard;
