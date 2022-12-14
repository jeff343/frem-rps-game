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
`;


const GameDisplay = () => {

    const [userPick, setUserPick] = useState()
    const handleUserPick = (item) => () => {
        setUserPick(item)
    }


    return (
        <SelectionWrapper>
            {!userPick
                ? <GameStepOne handleUserPick={handleUserPick} />
                : <GameStepTwo pick={userPick} />
            }
        </SelectionWrapper>
    )
}

export default GameDisplay