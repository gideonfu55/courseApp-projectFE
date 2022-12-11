import styled from 'styled-components'

const ModalContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

export const DesktopModalContainer = styled(ModalContainer)`
    border-radius: 7px;
    box-shadow: 0 0 32px rgba(0, 0, 0, 0.5);
    padding: 40px;
    width: 40vw;
    font-size: 26px;
    top: 12vh;
    margin: 100px 0;
`

export const Header = styled.h3`
    color: white;
    font-size: 32px;
    line-height: 1em;
    font-weight: 300;
    margin: 5px 0 10px;
    text-align: center;
    color: black;
`
export const Body = styled.div`
    width: 100%;
    display: grid;
    grid-template-areas:
        'title title price'
        'image image image'
        'summary summary summary'
        'rating rating rating'
        'button button button';
`

export const TitleContainer = styled.div`
    grid-area: title;
    padding: 1rem 0;
    font-size: 20px;
`

export const PriceContainer = styled.div`
    grid-area: price;
    padding: 1rem 0;
    font-size: 20px;
    text-align: center;
`

export const ImageContainer = styled.img`
    grid-area: image;
    width: 100%;
    object-fit: fit;
`

export const SummaryContainer = styled.p`
    grid-area: summary;
    font-size: 16px;
`

export const RatingContainer = styled.div`
    grid-area: rating;
    font-size: 16px;
`

export const ButtonContainer = styled.div`
    grid-area: button;
`

export const Button = styled.button`
    width: 100%;
    cursor: pointer;
    padding: 0.6rem 0;
    margin-top: 0.5rem;
    font-size: 20px;

    &:hover {
        background-color: black;
        color: white;
    }
`

export const Message = styled.p`
    color: #aaa;
    font-size: 15px;
    font-weight: 500;
    margin: 0 0 36px;
    text-align: center;
`

const CLOSE_BUTTON_SIZE = 40

export const CloseButtonComponent = styled.div`
    position: absolute;
    width: ${CLOSE_BUTTON_SIZE}px;
    height: ${CLOSE_BUTTON_SIZE}px;
    background-color: #c8c8c8;
    border-radius: 50%;
    cursor: pointer;

    & > * {
        opacity: 1;
    }

    &:hover > * {
        opacity: 0.4;
    }
`

export const DesktopCloseButton = styled(CloseButtonComponent)`
    top: -${CLOSE_BUTTON_SIZE / 2}px;
    left: calc(100% - ${CLOSE_BUTTON_SIZE / 2}px);
`

export const CloseSign = styled.div`
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: #323232;

    &:before,
    &:after {
        position: absolute;
        left: 19px;
        top: 10px;
        content: ' ';
        height: 20px;
        width: 2px;
        background-color: #333;
    }

    &:before {
        transform: rotate(45deg);
    }

    &:after {
        transform: rotate(-45deg);
    }
`
