import React from 'react'
import { boolean } from 'yargs'
import Modal from './Modal'
import testImage from '../../assets/AZ-400_BlogImage.png'
import {
    Body,
    Button,
    ButtonContainer,
    CloseSign,
    DesktopCloseButton,
    DesktopModalContainer,
    Header,
    ImageContainer,
    Message,
    PriceContainer,
    RatingContainer,
    SummaryContainer,
    TitleContainer,
} from './ModalPopup.styles'

interface BaseModalWrapperProps {
    isModalVisible: boolean
    onBackdropClick: () => void
    header: string
    message?: string
    title: string
    price: number
    summary: string
    rating: number
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({
    onBackdropClick,
    isModalVisible,
    header,
    message,
    title,
    price,
    summary,
    rating,
}) => {
    if (!isModalVisible) {
        return null
    }

    return (
        <Modal onBackdropClick={onBackdropClick}>
            <DesktopModalContainer>
                <DesktopCloseButton onClick={onBackdropClick}>
                    <CloseSign />
                </DesktopCloseButton>
                <Header>{header}</Header>
                <Body>
                    <TitleContainer>{title}</TitleContainer>
                    <PriceContainer>S${price}</PriceContainer>
                    <ImageContainer src={testImage}></ImageContainer>
                    <SummaryContainer>{summary}</SummaryContainer>
                    <RatingContainer>Rating: {rating} stars</RatingContainer>
                    <ButtonContainer>
                        <Button>Add to cart</Button>
                    </ButtonContainer>
                </Body>
            </DesktopModalContainer>
        </Modal>
    )
}

export default BaseModalWrapper
