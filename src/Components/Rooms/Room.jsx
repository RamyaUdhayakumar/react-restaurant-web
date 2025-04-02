import React from "react";
import roomsCSS from './../Rooms/Room.module.css'

function Rooms(){
    return(
        <div className={'${roomsCSS.Rooms_container} section'}>
            <small className="section__Heading">Luxury Suites</small>
            <h2 className="section__Title">Our Best <span>Rooms</span></h2>
         
      <div className={roomsCSS.cards}>
        <div className={roomsCSS.card_Container}>
            <div className={roomsCSS.card}>
                <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front1}`}>
                    <button>Junior Suite</button>

                </div>
                <div className={roomsCSS.Card_Back}>
                    <div className={roomsCSS.price}>
                        <p>$120/N</p>
                    </div>

                    <div className={roomsCSS.Card_content}>
                        <h3>Junior Suite</h3>
                        <p>- Daily Cleaning</p>
                        <p>- Home Service</p>
                        <p>- HouseKeeping</p>
                        <p>- wifi & Parking</p>
                    </div>
                    <div className={roomsCSS.BookNow}>
                        <button>Book Now</button>
                        <i className="ri-arrow-right-line"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className={roomsCSS.card_Container}>
            <div className={roomsCSS.card}>
                <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front2}`}>
                    <button>Twin Room</button>

                </div>
                <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back2}`}>
                    <div className={roomsCSS.price}>
                        <p>$130/N</p>
                    </div>

                    <div className={roomsCSS.Card_content}>
                        <h3>Twin Room</h3>
                        <p>- Daily Cleaning</p>
                        <p>- Home Service</p>
                        <p>- HouseKeeping</p>
                        <p>- wifi & Parking</p>
                    </div>
                    <div className={roomsCSS.BookNow}>
                        <button>Book Now</button>
                        <i className="ri-arrow-right-line"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className={roomsCSS.card_Container}>
            <div className={roomsCSS.card}>
                <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front3}`}>
                    <button>Quad Room</button>

                </div>
                <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back3}`}>
                    <div className={roomsCSS.price}>
                        <p>$150/N</p>
                    </div>

                    <div className={roomsCSS.Card_content}>
                        <h3>Quad Room</h3>
                        <p>- Daily Cleaning</p>
                        <p>- Home Service</p>
                        <p>- HouseKeeping</p>
                        <p>- wifi & Parking</p>
                    </div>
                    <div className={roomsCSS.BookNow}>
                        <button>Book Now</button>
                        <i className="ri-arrow-right-line"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className={roomsCSS.card_Container}>
            <div className={roomsCSS.card}>
                <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front4}`}>
                    <button>Delux Room</button>

                </div>
                <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back4}`}>
                    <div className={roomsCSS.price}>
                        <p>$200/N</p>
                    </div>

                    <div className={roomsCSS.Card_content}>
                        <h3>Delux Room</h3>
                        <p>- Daily Cleaning</p>
                        <p>- Home Service</p>
                        <p>- HouseKeeping</p>
                        <p>- wifi & Parking</p>
                    </div>
                    <div className={roomsCSS.BookNow}>
                        <button>Book Now</button>
                        <i className="ri-arrow-right-line"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className={roomsCSS.card_Container}>
            <div className={roomsCSS.card}>
                <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front5}`}>
                    <button>Exclusive Room</button>

                </div>
                <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back5}`}>
                    <div className={roomsCSS.price}>
                        <p>$220/N</p>
                    </div>

                    <div className={roomsCSS.Card_content}>
                        <h3>Exclusive Room</h3>
                        <p>- Daily Cleaning</p>
                        <p>- Home Service</p>
                        <p>- HouseKeeping</p>
                        <p>- wifi & Parking</p>
                    </div>
                    <div className={roomsCSS.BookNow}>
                        <button>Book Now</button>
                        <i className="ri-arrow-right-line"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className={roomsCSS.card_Container}>
            <div className={roomsCSS.card}>
                <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front6}`}>
                    <button>Personal Room</button>

                </div>
                <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back6}`}>
                    <div className={roomsCSS.price}>
                        <p>$170/N</p>
                    </div>

                    <div className={roomsCSS.Card_content}>
                        <h3>Personal Room</h3>
                        <p>- Daily Cleaning</p>
                        <p>- Home Service</p>
                        <p>- HouseKeeping</p>
                        <p>- wifi & Parking</p>
                    </div>
                    <div className={roomsCSS.BookNow}>
                        <button>Book Now</button>
                        <i className="ri-arrow-right-line"></i>
                    </div>
                </div>
            </div>
        </div>
      </div>

        </div>
    )
}

export default Rooms