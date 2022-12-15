import styled from "styled-components";
import rulesImg from "../assets/images/image-rules.svg";
import closeImg from "../assets/images/icon-close.svg";

const ModalDisplay = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    background: white;
    z-index: 1;
    top: 0;
    display: flex;
    flex-direction: column;
`;

const RulesTitle = styled.h1`
    margin: auto;
    width: auto;
`;

const Rules = styled.img`
    margin: auto;
    width: auto;
`;

const CloseModalButton = styled.img`
    margin: auto;
    width: auto;
`;

const RulesModal = ({ setModalOpen }) => {

    return (
        <ModalDisplay>
            <RulesTitle>RULES</RulesTitle>
            <Rules img src={rulesImg} alt="rules" />
            <CloseModalButton img src={closeImg} alt="close rules" onClick={() => setModalOpen(false)} />
        </ModalDisplay>
    )
}

export default RulesModal