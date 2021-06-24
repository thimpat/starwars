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
            const info = await requestCharacterInfo(name)
            setInfo(info)
        },
        [],
    );


    useEffect(() => {
        fetchInfo(selectedActor).then(() => true).catch(e => console.error(e))
    }, [fetchInfo, selectedActor])

    return (
        <Container>
            <table>
                <thead>
                <tr>
                    <td>{info.name}</td>
                </tr>
                </thead>
                <tbody>
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
                    <td>Hair Color</td>
                    <td>{info.hair_color}</td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <td>{info?.error?.message}</td>
                </tr>
                </tfoot>
            </table>
        </Container>
    );
}

export default HeroInfo;
