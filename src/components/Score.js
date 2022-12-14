import styled from "styled-components";
import { useContext } from "react";
import { ScoreContext } from "./ScoreContext";

const ScoreContainer = styled.div`
    border-radius: 5px;
    background: white;
    height: 80px;
    width: 80px;
    margin: auto 20px auto;
    line-height: 1;
    text-align: center;
`;

const Title = styled.h1`
    color: hsl(229, 64%, 46%);
    font-size: 12px;
    letter-spacing: 2px;
    margin-top: 10px;
`;

const ScoreNumber = styled.h1`
    color: hsl(229, 25%, 31%);
    font-size: 48px;
`;

const Score = () => {

    const score = useContext(ScoreContext)

    return (
        <ScoreContainer>
            <Title>SCORE</Title>
            <ScoreNumber>{score}</ScoreNumber>
        </ScoreContainer>
    )
}

export default Score