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
    @media (min-width: 1000px) {
        height: 140px;
        width: 160px;
    }
`;

const Title = styled.h1`
    color: hsl(229, 64%, 46%);
    font-size: 12px;
    letter-spacing: 2px;
    margin-top: 10px;
    @media (min-width: 1000px) {
        margin-top: 20px;
        font-size: 20px;
    }
`;

const ScoreNumber = styled.h1`
    color: hsl(229, 25%, 31%);
    font-size: 48px;
    @media (min-width: 1000px) {
        font-size: 80px;
    }
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