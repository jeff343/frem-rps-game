import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: auto;
    margin: auto;
    position: absolute;
    bottom: 40px;
    left: 50%;
`;

const Button = styled.button`
    border: 3px solid hsl(217, 16%, 45%);
    border-radius: 10px;
    height: 50px;
    width: 150px;
    color: white;
    margin-left: -75px;
    background: none;
`;

const RulesButton = ({ setModalOpen }) => {

    return (
        <Container>
            <Button onClick={() => setModalOpen(true)}>RULES</Button>
        </Container>
    )
}

export default RulesButton