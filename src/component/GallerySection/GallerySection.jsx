import './GallerySection.css'
import MainTitleHeader from '../MainTitleHeader/MainTitleHeader'
import { Carousel, Col, Row } from 'react-bootstrap'
import gallery1 from './../../assets/img/gallery/gallery-1.jpg'
import gallery2 from './../../assets/img/gallery/gallery-2.jpg'
import gallery3 from './../../assets/img/gallery/gallery-3.jpg'
import gallery4 from './../../assets/img/gallery/gallery-4.jpg'
import gallery5 from './../../assets/img/gallery/gallery-5.jpg'
import gallery6 from './../../assets/img/gallery/gallery-6.jpg'
import gallery7 from './../../assets/img/gallery/gallery-7.jpg'
import gallery8 from './../../assets/img/gallery/gallery-8.jpg'

export default function GallerySection() {
  return (
    <section className='Sec-Gallery main-padding'>
        <MainTitleHeader h2='Gallery' text='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit' />
        <Carousel>
      <Carousel.Item className='py-3'>
        <Row>
      <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery1} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery2} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery3} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery4} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery5} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery6} alt=''></img>
        </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
      <Row className='gap-5'>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
          <img src = {gallery1} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
          <img src = {gallery2} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
          <img src = {gallery3} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
          <img src = {gallery4} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
          <img src = {gallery5} alt=''></img>
        </Col>
      </Row>
        

      </Carousel.Item>
      <Carousel.Item>
      <Row className='gap-5'>
      <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery7} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery8} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery3} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery4} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery5} alt=''></img>
        </Col>
        </Row>
        

      </Carousel.Item>
      <Carousel.Item>
      <Row className='gap-5'>
      <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery1} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery2} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery3} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery4} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery7} alt=''></img>
        </Col>
        </Row>
        

      </Carousel.Item>
      <Carousel.Item>
      <Row className='gap-5'>
      <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery1} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery7} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery3} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery4} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery5} alt=''></img>
        </Col>

        </Row>
        

      </Carousel.Item>
      <Carousel.Item>
      <Row className='gap-5'>
      <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery1} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery2} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery7} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery4} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery5} alt=''></img>
        </Col>

        </Row>
        

       </Carousel.Item>
      <Carousel.Item>
      <Row className='gap-5'>
      <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery1} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery2} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery7} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery4} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery5} alt=''></img>
        </Col>

        </Row>
        

      </Carousel.Item>
      <Carousel.Item>
      <Row className='gap-5'>
      <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery1} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery2} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery3} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery4} alt=''></img>
        </Col>
        <Col  className='col-sm-6 col-md-6 col-lg-2 col-12'>
        <img src = {gallery5} alt=''></img>
        </Col>

        </Row>
        

      </Carousel.Item>
    </Carousel>
    </section> 
  )
}
