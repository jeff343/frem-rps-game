import styled from "styled-components";
import Score from "./Score";

const HeaderContainer = styled.div`
    margin: 80px auto;
    height: 180px;
    width: 80%;
    border: 5px solid hsl(217, 16%, 45%);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
`;

const HeaderTitle = styled.div`
    text-align: left;
    color: white;
    line-height: 0.8;
    margin: auto auto auto 20px;
`;

const Header = () => {


    return (
        <HeaderContainer>
            <HeaderTitle>
                <h1>ROCK</h1>
                <h1>PAPER</h1>
                <h1>SCISSORS</h1>
            </HeaderTitle>
            <Score />
        </HeaderContainer>
    )
}

export default Header