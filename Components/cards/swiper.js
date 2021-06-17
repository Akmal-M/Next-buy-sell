import React, { Component } from 'react'
import Swiper from 'react-id-swiper'
import request from 'superagent'
import './index.css'

const swiperParams = {
    slidesPerView: 5,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
}

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photos: []
        }
    }

    componentWillMount() {
        this.fetchPhotos();
    }

    fetchPhotos() {
        request
            .get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + process.env.INSTAGRAM_ACCESS_TOKEN)
            .then((res) => {
                this.setState({
                    photos: res.body.data
                })
            })
    }

    render() {
        return (
            <Swiper {...swiperParams}>
                {this.state.photos.map((photo, key) => {
                    return (
                        <div key={photo.id}>
                            <img src={photo.images.standard_resolution.url} alt={photo.caption} />
                        </div>
                    )
                })}
            </Swiper>
        )
    }
}

export default Carousel