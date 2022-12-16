import styled from "styled-components";
import rulesImg from "../assets/images/image-rules.svg";
import closeImg from "../assets/images/icon-close.svg";

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const ModalDisplay = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    background: white;
    z-index: 2;
    top: 0;
    display: flex;
    flex-direction: column;
    @media (min-width: 1000px) {
        height: 400px;
        width: 400px;
        top: 200px;
        left: 50%;
        margin-left: -200px;
        border-radius: 10px;
    }
`;

const RulesTitle = styled.h1`
    margin: 100px auto 10px;
    width: auto;
`;

const Rules = styled.img`
    margin: 20px auto;
    width: auto;
`;

const CloseModalButton = styled.img`
    margin: 20px auto;
    width: auto;

    &:hover {
        cursor: pointer;
    }
`;

const BackgroundOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.3);
    z-index: 1;
`;

const RulesModal = ({ setModalOpen }) => {

    return (
        <Container>
            <BackgroundOverlay onClick={() => setModalOpen(false)}  />
            <ModalDisplay>
                <RulesTitle>RULES</RulesTitle>
                <Rules img src={rulesImg} alt="rules" />
                <CloseModalButton img src={closeImg} alt="close rules" onClick={() => setModalOpen(false)} />      
            </ModalDisplay>
        </Container>
    )
}

export default RulesModal