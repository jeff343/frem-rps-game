import styled from "styled-components";
import { useState, useEffect } from "react";
import { rpsArray } from "../assets/shared/data";

const Container = styled.div`
    display: grid;
    row-gap: 10%;
    grid-template-columns: 1fr 1fr;
    margin: auto;
    padding: 40px 0;
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
`;

const RPSButton = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 100%;
    width: 120px;
    height: 120px;
    box-shadow: 0px 5px 5px grey inset;
`;


const DisplayText = styled.h1`
    text-align: center;
    color: white;
    font-size: 16px;
    letter-spacing: 2px;
`;


const GameStepTwo = ({ pick }) => {

    const [housePick, setHousePick] = useState()


    useEffect(() => {
        setTimeout(() => {
            setHousePick(rpsArray[Math.floor(Math.random() * 3)])
        }, 2000)
    }, [])



    return (
        <Container>
            <ButtonWrapper color={pick.color} shadow={pick.shadow} >
                <RPSButton>
                    <img src={pick.image} alt="your pick" /> 
                </RPSButton>
            </ButtonWrapper>
            {!housePick 
                ? <EmptyButton />
                : <ButtonWrapper color={housePick.color} shadow={housePick.shadow} >
                    <RPSButton>
                        <img src={housePick.image} alt="house pick" /> 
                    </RPSButton>
                  </ButtonWrapper>
            }
            <DisplayText>YOU PICKED</DisplayText>
            <DisplayText>THE HOUSE PICKED</DisplayText>
        </Container>
    )
}

export default GameStepTwo