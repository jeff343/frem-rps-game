import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: auto;
    margin: auto;
`;

const Button = styled.button`
    margin: 20px auto 20px;
    border: 3px solid hsl(217, 16%, 45%);
    border-radius: 10px;
    height: 50px;
    width: 150px;
    color: white;
    background: none;
    @media (min-width: 1000px) {
        margin-right: 30px;
    }
`;

const RulesButton = ({ setModalOpen }) => {

    return (
        <Container>
            <Button onClick={() => setModalOpen(true)}>RULES</Button>
        </Container>
    )
}

export default RulesButton