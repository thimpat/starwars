import styled from 'styled-components';
import {ChangeEvent, useContext, useRef} from "react";
import HeroCardContext from "../../contexts/HeroCardContext";

const Container = styled.div`
  background: rgb(235, 235, 235);
  border: solid 2px rgb(119, 119, 119);
  height: 64px;
  margin: 18px auto;
  padding: 8px;
  width: 406px;

  li {
    span {
      display: inline-block;
      padding: 4px 10px 0 4px;
    }

    text-align: left;
  }

  input {
    border-radius: 0;
    padding: 4px 8px;
    width: 264px;
  }

  button {
    background: rgb(65, 140, 220);
    border-radius: 0;
    padding: 4px 20px;
    text-transform: uppercase;
  }

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

    const onKeyDown = (event: { keyCode: any; preventDefault: () => void; }) => {
        const keyCode = event.keyCode;
        if (keyCode === 13) {
            event.preventDefault();
            updateActorName();
        }
    };

    return (
        <Container>
            <ul>
                <li>
                    <span>Character Name</span>
                </li>
                <li>
                    <span><input type="text" ref={inputRef} onKeyDown={onKeyDown} placeholder="Enter Hero here"/> </span>

                    <button
                        data-testid="search-button"
                        onClick={updateActorName}
                    >
                        Search
                    </button>
                </li>
            </ul>
        </Container>
    );
}

export default HeroSearchBar;
