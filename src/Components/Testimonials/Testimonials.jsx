import React, { useRef } from 'react';
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx>-50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if(tx<0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className={'testimonials'}>
            <img className={'next-btn'} src={next_icon} alt="" onClick={slideForward}/>
            <img className={'back-btn'} src={back_icon} alt="" onClick={slideBackward}/>
            <div className={'slider'}>
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt=""/>
                                <div>
                                    <h3>Sarah Thompson</h3>
                                    <span>Edusity, Canada</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of
                                the best decisions I've ever made. The supportive
                                community, state-of-the-art facillities, and commitent
                                to academic excellence have truly exceeded my
                                expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt=""/>
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Studying at Edusity has been a life-changing experience. The knowledgeable faculty,
                                comprehensive curriculum, and vibrant campus life have all contributed to my personal
                                and academic growth.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                            <img src={user_3} alt=""/>
                                <div>
                                    <h3>Olivia Martinez</h3>
                                    <span>Edusity, Australia</span>
                                </div>
                            </div>
                            <p>Attending Edusity has been a remarkable journey. The inclusive community, top-notch
                                facilities, and innovative academic programs have provided me with invaluable
                                experiences and prepared me well for my future career.</p>

                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt=""/>
                                <div>
                                    <h3>James Anderson</h3>
                                    <span>Edusity, UK</span>
                                </div>
                            </div>
                            <p>Edusity has provided me with unparalleled opportunities for learning and development. The
                                international community and state-of-the-art resources have enriched my educational
                                journey in ways I couldn't have imagined.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;