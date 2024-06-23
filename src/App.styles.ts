import styled from "styled-components";

export const Container = styled.div`
    background-color: #2C2F33; /* Cor de fundo mais clara para melhor contraste */
    color: #FFF;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    font-family: 'Arial', sans-serif;
`;

export const Area = styled.div`
    width: 100%;
    max-width: 980px;
    padding: 30px 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #40444B; /* Cor de fundo ajustada */
    margin: 20px 0;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
    font-size: 36px;
    color: #FFD700; /* Cor dourada para destaque */
    text-transform: uppercase;
    letter-spacing: 2px;
`;

export const Screenalert = styled.div`
    text-align: center;
    background-color: #4A4F55; /* Cor de fundo ajustada */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin: 20px 0;
    .emoji {
        font-size: 50px;
        margin-bottom: 20px;
        transition: transform 0.3s;
        color: #FFD700; /* Cor dourada para destaque */
        &:hover {
            transform: scale(1.2);
        }
    }
`;

export const Photolist = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 20px 0;
`;

export const UploadForm = styled.form`
    background-color: #4A4F55; /* Cor de fundo ajustada */
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    input[type="submit"] {
        background-color: #FFD700; /* Cor dourada para destaque */
        border: 0;
        color: #2C2F33; /* Texto escuro para contraste */
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;
        transition: background-color 0.3s, opacity 0.3s;
        &:hover {
            background-color: #FFB700; /* Cor dourada mais escura no hover */
            opacity: 0.9;
        }
    }
`;

