import styled from "styled-components";
import Score from "./Score"; 
import logo from "../assets/images/logo.svg"

const HeaderContainer = styled.div`
    margin: 40px auto;
    height: 120px;
    width: 80%;
    border: 5px solid hsl(217, 16%, 45%);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
`;

const HeaderLogo = styled.img`
    margin: auto auto auto 20px;
    height: 60%;
`;

const Header = () => {


    return (
        <HeaderContainer>
            <HeaderLogo img src={logo}  alt="rock paper scissors" />
            <Score />
        </HeaderContainer>
    )
}

export default Header