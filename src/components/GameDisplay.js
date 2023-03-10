import styled from "styled-components";
import { useState } from "react";
import GameStepOne from "./GameStepOne";
import GameStepTwo from "./GameStepTwo"

const SelectionWrapper = styled.div`
    position: relative;
    margin: 20px auto;
    max-height: 500px;
    max-width: 500px;
    width: 90%;

    @media (min-width: 1000px) {
        max-height: 800px;
        max-width: 800px;
    }
`;


const GameDisplay = () => {

    const [userPick, setUserPick] = useState("")
    const handleUserPick = (item) => () => {
        setUserPick(item)
    }


    return (
        <SelectionWrapper>
            {!userPick
                ? <GameStepOne handleUserPick={handleUserPick} />
                : <GameStepTwo setUserPick={setUserPick} pick={userPick} />
            }
        </SelectionWrapper>
    )
}

export default GameDisplay