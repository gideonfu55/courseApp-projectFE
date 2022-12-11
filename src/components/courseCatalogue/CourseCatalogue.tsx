import React, { useState } from 'react'
import './courseCatalogue.css'
import Card from '../card/Card'
import testImage from '../../assets/AZ-400_BlogImage.png'
import BaseModalWrapper from '../modal/BaseModalWrapper'

const tempText =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur libero dignissimos eius aperiam voluptates dolorem suscipit culpa possimus, ratione ipsa nesciunt recusandae ad eligendi alias et ipsam ullam inventore nulla. Porro repellendus quis, debitis harum voluptas praesentium soluta iste ut assumenda. Velit tenetur voluptatem odio. Provident sunt atque soluta doloribus.'

const CourseCatalogue = () => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible)
    }

    return (
        <div id="modal-root">
            <section>
                <h1 className="page__title">Course Catalogue</h1>
            </section>
            <section className="container">
                <Card
                    title="test1"
                    img={testImage}
                    key={1}
                    onClick={toggleModal}
                ></Card>
                <Card
                    title="test2"
                    img={testImage}
                    key={2}
                    onClick={toggleModal}
                ></Card>
                <Card
                    title="test3"
                    img={testImage}
                    key={3}
                    onClick={toggleModal}
                ></Card>
                <Card
                    title="test4"
                    img={testImage}
                    key={4}
                    onClick={toggleModal}
                ></Card>
                <Card
                    title="test5"
                    img={testImage}
                    key={5}
                    onClick={toggleModal}
                ></Card>
                <Card
                    title="test6"
                    img={testImage}
                    key={6}
                    onClick={toggleModal}
                ></Card>
                <Card
                    title="test7"
                    img={testImage}
                    key={7}
                    onClick={toggleModal}
                ></Card>
            </section>
            {/* The section below needs to be edited with data from the database */}
            <BaseModalWrapper
                isModalVisible={isModalVisible}
                onBackdropClick={toggleModal}
                header="Purchase Course"
                message="This is the content"
                title="Azure DevOps For Beginners"
                author="Mark Tan"
                price={100}
                summary={tempText}
                rating={5}
            />
        </div>
    )
}

export default CourseCatalogue
