import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { ScoreDispatchContext } from "./ScoreContext";
import { rpsArray } from "../assets/shared/data";

const Container = styled.div`
    display: grid;
    row-gap: 20px;
    grid-template-columns: 1fr 1fr;
    margin: auto;
    padding: 40px 0;

    @media (min-width: 1000px) {
        grid-template-columns: ${props => props.gridType 
            ? "1fr 2fr 1fr"
            : "1fr 1fr"}
`;

const EmptyButton = styled.div`
    background: hsl(237, 49%, 15%);
    opacity: 0.5;
    border-radius: 100%;
    height: 100px;
    width: 100px;
    margin: auto;
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.color};
    border-radius: 100%;
    height: 150px;
    width: 150px;
    margin: auto;
    box-shadow: 0px 7px 0px -1px ${props => props.shadow};

    &.winner {
        z-index: -1;
        box-shadow: 0px 0px 0px 30px hsl(214, 47%, 23%, .8),
                    0px 0px 0px 70px hsl(214, 47%, 23%, .5),
                    0px 0px 0px 100px hsl(214, 47%, 23%, .4);
    }

    @media (min-width: 1000px) {
        height: 200px;
        width: 200px;

        &.winner {
            box-shadow: 0px 0px 0px 60px hsl(214, 47%, 23%, .8),
                        0px 0px 0px 120px hsl(214, 47%, 23%, .5),
                        0px 0px 0px 200px hsl(214, 47%, 23%, .4);
        }
    }
`;

const RPSButton = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 100%;
    width: 120px;
    height: 120px;
    box-shadow: 0px 6px 0px rgba(128,128,128,0.4) inset;

    @media (min-width: 1000px) {
        height: 160px;
        width: 160px;
    }
`;


const DisplayText = styled.h1`
    text-align: center;
    color: white;
    font-size: 16px;
    margin-top: 20px;

    @media (min-width: 1000px) {
        grid-row: 1;
    }
`;

const ResultRow = styled.div`
    grid-column: 1/3;
    text-align: center;
    font-size: 36px;
    color: white;
    margin-bottom: auto;

    @media (min-width: 1000px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        height: 100%;
        grid-row: 1/3;
        grid-column: 2;
    }
`;

const PlayAgainButton = styled.button`
    width: 200px;
    height: 50px;
    margin: auto;
    background: white;
    color: hsl(229, 25%, 31%);
    border-radius: 5px;
    border: none;
    font-size: 16px;
    letter-spacing: 2px;

    &:hover {
        cursor: pointer;
    }

    @media (min-width: 1000px) {
        margin: 10px auto 0;
    }
`;

const RPSImg = styled.img`
    @media (min-width: 1000px) {
        height: 100px;
    }
`;

const GameStepTwo = ({ pick, setUserPick }) => {

    const [housePick, setHousePick] = useState("")
    const [result, setResult] = useState("")
    const dispatch = useContext(ScoreDispatchContext)


    useEffect(() => {
        setTimeout(() => {
            setHousePick(rpsArray[Math.floor(Math.random() * 3)])
        }, 2000)
    }, [])

    const handleResult = (x,y) => {
        if (x.id === 'paper') {
            return (          
            y.id === 'rock'
                ? "WIN"
                : y.id==='scissor'
                    ? "LOSE"
                    : "TIE"
        )}
        if (x.id === 'rock') {  
            return (          
            y.id === 'scissor'
                ? "WIN"
                : y.id==='paper'
                    ? "LOSE"
                    : "TIE"
        )}
        if (x.id === 'scissor') {    
            return (        
            y.id === 'paper'
                ? "WIN"
                : y.id==='rock'
                    ? "LOSE"
                    : "TIE"
        )}
    }

    useEffect(() => {
        if (housePick){
        setTimeout(() => {
            setResult(handleResult(pick, housePick))
        }, 2000)}
    }, [pick, housePick])


    useEffect(() => {
        if (result) {
            dispatch({
                type: result,
            })
            console.log(result)
        }
    },[dispatch, result])

    const playAgain = () => {
        setHousePick("")
        setUserPick("")
        setResult("")
    }

    return (
        <Container gridType={result}>
            <ButtonWrapper 
                className={result==='WIN' ? 'winner' : ''} 
                color={pick.color} 
                shadow={pick.shadow} 
            >
                <RPSButton>
                    <RPSImg src={pick.image} alt="your pick" /> 
                </RPSButton>
            </ButtonWrapper>
                {!housePick 
                    ? <EmptyButton />
                    : <ButtonWrapper 
                        className={result==='LOSE' ? 'winner' : ''} 
                        color={housePick.color} 
                        shadow={housePick.shadow} >
                        <RPSButton>
                            <RPSImg src={housePick.image} alt="house pick" /> 
                        </RPSButton>
                    </ButtonWrapper>
                }
            <DisplayText>YOU PICKED</DisplayText>
            <DisplayText>THE HOUSE PICKED</DisplayText>
            {result && 
                <ResultRow>
                    <h1>YOU {result}</h1>
                    <PlayAgainButton onClick={playAgain}>PLAY AGAIN</PlayAgainButton>
                </ResultRow> }
        </Container>
    )
}

export default GameStepTwo