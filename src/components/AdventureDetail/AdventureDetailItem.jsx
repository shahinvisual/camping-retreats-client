import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { PiCurrencyDollarLight } from 'react-icons/pi';
import { CiLocationOn } from 'react-icons/ci';
import { BsCalendarDay } from 'react-icons/bs';
import { FaPeopleGroup } from 'react-icons/fa6';

const AdventureDetailItem = () => {
    const [showCard, setShowCard] = useState()
    const { id } = useParams();
    useEffect(() => {
        fetch('/camping.json')
            .then(res => res.json())
            .then(data => {
                const cardData = data.find(item => item.ID === id);
                setShowCard(cardData)
            })
    }, [id])
    if (!showCard) {
        return <span className="loading loading-dots loading-lg"></span>
    };
    const now = new Date();
    const currentHours = now.getHours();
    const handleExpertWithTalk = () => {
        if (currentHours >= 10 && currentHours < 20) {
            window.open('https://meet.google.com/landing?hs=197&authuser=0')
        } else {
            document.getElementById('my_modal_1').showModal()
        }
    }
    const {
        Title,
        Image,
        CategoryName,
        Description,
        Cost,
        BookingAvailability,
        Location,
        Duration,
        AdventureLevel,
        IncludedItems,
        EcoFriendlyFeatures,
        MaxGroupSize,
        SpecialInstructions } = showCard;
    return (
        <div className='max-w-screen-xl mx-auto'>
            {/* NavBar------------------------ */}
            <Navbar />
            {/* ShowCard------------------------ */}
            <div className="card bg-base-100 shadow-sm mt-12">
                <figure>
                    <img className='w-11/12 rounded-xl h-[450px] object-cover'
                        src={Image}
                        alt="image" />
                </figure>
                <div className="card-body px-24">
                    <h2 className="card-title">{Title}</h2>
                    <p>{Description}</p>
                    <div className="card-actions flex flex-col justify-start">
                        <div className="badge">#{CategoryName}</div>
                        <div className="badge"><CiLocationOn size={20} />{Location}</div>
                        <div className="badge"><PiCurrencyDollarLight size={20} />{Cost}</div>
                        <div className="badge"><BsCalendarDay size={20} />{Duration}</div>
                        <div className="badge"><FaPeopleGroup size={20} />{MaxGroupSize}</div>
                        <div className="lg:flex gap-8">
                            <div>
                                <h2 className='text-xl font-black'>IncludedItems</h2>
                                {
                                    IncludedItems.map((item, index) => <li key={index}>{item}</li>)
                                }
                            </div>
                            <div className="divider"></div>
                            <div>
                                <h2 className='text-xl font-black'>EcoFriendlyFeatures</h2>
                                {
                                    EcoFriendlyFeatures.map((item, index) => <li key={index}>{item}</li>)
                                }
                            </div>
                            <div className="divider"></div>
                            <div>
                                <h2 className='text-xl font-black'>SpecialInstructions</h2>
                                {
                                    SpecialInstructions.map((item, index) => <li key={index}>{item}</li>)
                                }
                            </div>
                        </div>
                        <button onClick={handleExpertWithTalk} className="btn btn-wide btn-outline">Talk with Expert</button>

                    </div>
                </div>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">🕔 Sorry!</h3>
                    <p className="py-4">Our experts are available from <b>10:00 AM</b> – <b>8:00 PM</b>.</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AdventureDetailItem;