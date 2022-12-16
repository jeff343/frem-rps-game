import styled from "styled-components";
import trianglePic from "../assets/images/bg-triangle.svg";
import { rpsArray } from "../assets/shared/data";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 10%;
    background: url(${trianglePic});
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: top 100px center;
    margin: auto;
    padding: 40px 0;
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

    &:hover {
        cursor: pointer;
    }

    &:last-child {
        grid-column: 1/3;
    }    

    @media (min-width: 1000px) {
        height: 200px;
        width: 200px;
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

const RPSImg = styled.img`
    @media (min-width: 1000px) {
        height: 100px;
    }
`;

const GameStepOne = ({ handleUserPick }) => {

    return (
        <Container>
            {rpsArray.map((item) => {
                return (
                    <ButtonWrapper onClick={handleUserPick(item)} color={item.color} shadow={item.shadow} key={item.id} >
                        <RPSButton>
                            <RPSImg src={item.image} alt="rps symbol" />
                        </RPSButton>
                    </ButtonWrapper>
                )
            })}
        </Container>
    )
}

export default GameStepOne