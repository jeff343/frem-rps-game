import styled from "styled-components";
import GameStepOne from "./GameStepOne";

const SelectionWrapper = styled.div`
    position: relative;
    margin: 20px auto;
    max-height: 500px;
    max-width: 500px;
    width: 90%;
`;


const GameDisplay = () => {
    return (
        <SelectionWrapper>
            <GameStepOne />
        </SelectionWrapper>
    )
}

export default GameDisplay