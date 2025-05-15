import React from 'react'
import roomCSS from './Room.module.css'
const Room = () => {
  return (
    <div id='rooms' className={`${roomCSS.room_container} section`}>
      <h2 className='section_Title'>Our Best <span>Rooms</span></h2>
      <div className={roomCSS.cards}>
        <div className={roomCSS.card_container}>
            <div className={roomCSS.card}>
                <div className={`${roomCSS.card_front} ${roomCSS.card_front1}`}>
                    <button>Junior Suite</button>
                </div>
                <div className={roomCSS.card_back}>
                    <div className={roomCSS.price}>
                        <p>$120</p>
                    </div>
                    <div className={roomCSS.card_content}>
                        <h3>Junior Suite</h3>
                        <p>- Daily Cleaning</p>
                        <p>- Free Wi-Fi</p>
                        <p>- Breakfast Included</p>
                        <p>- 24/7 Room Service</p>
                    </div>
                    <div className={roomCSS.booknow}>
                        <button>Book Now</button>
                        <i className='ri-arrow-right-line'></i>
                    </div>
                </div>
            </div>
        </div>
        <div className={roomCSS.card_container}>
            <div className={roomCSS.card}>
                <div className={`${roomCSS.card_front} ${roomCSS.card_front2}`}>
                    <button>Twin Room</button>
                </div>
                <div className={`${roomCSS.card_back} ${roomCSS.card_back2}`}>
                    <div className={roomCSS.price}>
                        <p>$130</p>
                    </div>
                    <div className={roomCSS.card_content}>
                        <h3>Twin Room</h3>
                        <p>- Daily Cleaning</p>
                        <p>- Free Wi-Fi</p>
                        <p>- Breakfast Included</p>
                        <p>- 24/7 Room Service</p>
                    </div>
                    <div className={roomCSS.booknow}>
                        <button>Book Now</button>
                        <i className='ri-arrow-right-line'></i>
                    </div>
                </div>
            </div>
        </div>
        <div className={roomCSS.card_container}>
            <div className={roomCSS.card}>
                <div className={`${roomCSS.card_front} ${roomCSS.card_front3}`}>
                    <button>Quad Room</button>
                </div>
                <div className={`${roomCSS.card_back} ${roomCSS.card_back3}`}>
                    <div className={roomCSS.price}>
                        <p>$160</p>
                    </div>
                    <div className={roomCSS.card_content}>
                        <h3>Quad Room</h3>
                        <p>- Daily Cleaning</p>
                        <p>- Free Wi-Fi</p>
                        <p>- Breakfast Included</p>
                        <p>- 24/7 Room Service</p>
                    </div>
                    <div className={roomCSS.booknow}>
                        <button>Book Now</button>
                        <i className='ri-arrow-right-line'></i>
                    </div>
                </div>
            </div>
        </div>
        <div className={roomCSS.card_container}>
            <div className={roomCSS.card}>
                <div className={`${roomCSS.card_front} ${roomCSS.card_front4}`}>
                    <button>Deluxe Room</button>
                </div>
                <div className={`${roomCSS.card_back} ${roomCSS.card_back4}`}>
                    <div className={roomCSS.price}>
                        <p>$150</p>
                    </div>
                    <div className={roomCSS.card_content}>
                        <h3>Deluxe Room</h3>
                        <p>- Daily Cleaning</p>
                        <p>- Free Wi-Fi</p>
                        <p>- Breakfast Included</p>
                        <p>- 24/7 Room Service</p>
                    </div>
                    <div className={roomCSS.booknow}>
                        <button>Book Now</button>
                        <i className='ri-arrow-right-line'></i>
                    </div>
                </div>
            </div>
        </div>
        <div className={roomCSS.card_container}>
            <div className={roomCSS.card}>
                <div className={`${roomCSS.card_front} ${roomCSS.card_front5}`}>
                    <button>Exclusive Room</button>
                </div>
                <div className={`${roomCSS.card_back} ${roomCSS.card_back5}`}>
                    <div className={roomCSS.price}>
                        <p>$190</p>
                    </div>
                    <div className={roomCSS.card_content}>
                        <h3>Exclusive Room</h3>
                        <p>- Daily Cleaning</p>
                        <p>- Free Wi-Fi</p>
                        <p>- Breakfast Included</p>
                        <p>- 24/7 Room Service</p>
                    </div>
                    <div className={roomCSS.booknow}>
                        <button>Book Now</button>
                        <i className='ri-arrow-right-line'></i>
                    </div>
                </div>
            </div>
        </div>
        <div className={roomCSS.card_container}>
            <div className={roomCSS.card}>
                <div className={`${roomCSS.card_front} ${roomCSS.card_front6}`}>
                    <button>Personal Room</button>
                </div>
                <div className={`${roomCSS.card_back} ${roomCSS.card_back6}`}>
                    <div className={roomCSS.price}>
                        <p>$170</p>
                    </div>
                    <div className={roomCSS.card_content}>
                        <h3>Personal Room</h3>
                        <p>- Daily Cleaning</p>
                        <p>- Free Wi-Fi</p>
                        <p>- Breakfast Included</p>
                        <p>- 24/7 Room Service</p>
                    </div>
                    <div className={roomCSS.booknow}>
                        <button>Book Now</button>
                        <i className='ri-arrow-right-line'></i>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </div>

)
}
export default Room