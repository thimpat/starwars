import {useCallback, useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import HeroCardContext from "../../contexts/HeroCardContext";
import {HeroType, Gender} from "../../types/HeroType";
import {requestCharacterInfo} from "../../helpers/swapi/swapi";

const Container = styled.div`
`;

function HeroInfo() {
    const {selectedActor} = useContext(HeroCardContext);
    const [info, setInfo] = useState<HeroType>({
        name: "", gender: Gender.unknown
    })

    /**
     * Request info character
     */
    const fetchInfo = useCallback(
        async (name: string) => {
            try {
                const info = await requestCharacterInfo(name)
                if (info.error)
                {
                    return
                }
                setInfo(info)
            } catch (e) {
                console.error(e)
            }
        },
        [],
    );


    useEffect(() => {
        fetchInfo(selectedActor).then(() => true).catch(e => console.error(e))
    }, [fetchInfo, selectedActor])

    return (
        <Container>
            <span>{info?.error?.message}</span>
            <table>
                <thead>{info.name}</thead>
                <tr>
                    <td>Gender</td>
                    <td>{info.gender}</td>
                </tr>
                <tr>
                    <td>Birth Year</td>
                    <td>{info.birth_year}</td>
                </tr>
                <tr>
                    <td>Height</td>
                    <td>{info.height}</td>
                </tr>
                <tr>
                    <td>Mass</td>
                    <td>{info.mass}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>{info.gender}</td>
                </tr>
            </table>
        </Container>
    );
}

export default HeroInfo;
