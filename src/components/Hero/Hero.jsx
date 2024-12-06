import React from 'react'
import Image1 from '../../assets/hero/women.png';
import Image2 from '../../assets/hero/shopping.png';
import Image3 from '../../assets/hero/sale.png';
import Slider from 'react-slick';


const ImageList = [
    {
        id: 1,
        img: Image3,
        title: "Greatest Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem saepe non maiores suscipit, incidunt reprehenderit, rerum ea possimus ratione obcaecati aut sequi fugiat, dignissimos voluptate placeat alias quo laboriosam totam.",
    },
    {
        id: 2,
        img: Image2,
        title: "Trending Product",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem saepe non maiores suscipit, incidunt reprehenderit, rerum ea possimus ratione obcaecati aut sequi fugiat, dignissimos voluptate placeat alias quo laboriosam totam.",
    },
    {
        id: 3,
        img: Image1,
        title: "Trending Product",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem saepe non maiores suscipit, incidunt reprehenderit, rerum ea possimus ratione obcaecati aut sequi fugiat, dignissimos voluptate placeat alias quo laboriosam totam.",

    },
]

const Hero = ({ popupHandler }) => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplayspeed: 4000,
        cssEase: 'ease-in-out',
        pauseOnHover: true,
        pauseOnFocus: true,
    };

    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px]  bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
            {/* Background Pattern */}
            <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]'>
            </div>
            {/* Hero Section */}
            <div className=' container pb-8 sm:pb-0' >
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 '>
                                {/* text content Section */}
                                <div className='flex flex-col justify-center gap-4 sm:pt-0 
                                text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                    <h1
                                        data-aos="zoom-out"
                                        data-aos-duration="500"
                                        data-aos-once="true"
                                        className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                                    <p
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="100"
                                        className='text-sm' >
                                        {data.description}
                                    </p>
                                    <div
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="300"
                                    >
                                        <button
                                            onClick={() => popupHandler()}
                                            className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'
                                        >Order Now</button>
                                    </div>
                                </div>
                                {/* image Section */}
                                <div className='order-2 sm:order-1'>
                                    <div
                                        data-aos="zoom-in"
                                        data-aos-once="true"
                                        className='relative z-10'
                                    >
                                        <img src={data.img} alt=""
                                            className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </Slider>

            </div>
        </div>
    )
}

export default Hero
