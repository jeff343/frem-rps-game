import styled from "styled-components";

const ScoreContainer = styled.div`
    border-radius: 5px;
    background: white;
    height: 120px;
    width: 120px;
    margin: auto 20px auto;
    line-height: 1;
`;

const Title = styled.h1`
    color: hsl(229, 64%, 46%);
    font-size: 16px;
    letter-spacing: 3px;
    margin: 20px auto 0;
`;

const ScoreNumber = styled.h1`
    color: hsl(229, 25%, 31%);
    font-size: 60px;
`;

// will take total score as a prop from state
const Score = () => {
    return (
        <ScoreContainer>
            <Title>SCORE</Title>
            <ScoreNumber>12</ScoreNumber>
        </ScoreContainer>
    )
}

export default Score