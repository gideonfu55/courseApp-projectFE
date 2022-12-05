import React from 'react'
import './courseCatalogue.css'
import Card from './Card'
import testImage from '../assets/AZ-400_BlogImage.png'

const CourseCatalogue = () => {
    return (
        <div>
            <section>
                <h1 className="page__title">Course Catalogue</h1>
            </section>
            <section className="container">
                <Card title="test1" img={testImage} key={1}></Card>
                <Card title="test2" img={testImage} key={2}></Card>
                <Card title="test3" img={testImage} key={3}></Card>
                <Card title="test4" img={testImage} key={4}></Card>
                <Card title="test5" img={testImage} key={5}></Card>
                <Card title="test6" img={testImage} key={6}></Card>
                <Card title="test6" img={testImage} key={7}></Card>
            </section>
        </div>
    )
}

export default CourseCatalogue
