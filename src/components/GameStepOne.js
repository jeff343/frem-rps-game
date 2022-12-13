import styled from "styled-components";
import trianglePic from "../assets/images/bg-triangle.svg"
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
    &:last-child {
        grid-column: 1/3;
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
    box-shadow: 0px 5px 5px grey inset;
`;

const GameStepOne = () => {
    return (
        <Container>
            {rpsArray.map((item) => {
                return (
                    <ButtonWrapper color={item.color} shadow={item.shadow} key={item.id} >
                        <RPSButton>
                            <img src={item.image} alt="rps symbol" />
                        </RPSButton>
                    </ButtonWrapper>
                )
            })}
        </Container>
    )
}

export default GameStepOne