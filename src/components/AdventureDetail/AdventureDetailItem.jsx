import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { PiCurrencyDollarLight } from 'react-icons/pi';
import { CiLocationOn } from 'react-icons/ci';
import { BsCalendarDay } from 'react-icons/bs';
import { FaPeopleGroup } from 'react-icons/fa6';

const AdventureDetailItem = () => {
    const [showCard, setShowCard] = useState()
    const { id } = useParams();
    useEffect(() => {
        fetch('../../../public/camping.json')
            .then(res => res.json())
            .then(data => {
                const cardData = data.find(item => item.ID === id);
                setShowCard(cardData)
                console.log(cardData);
            })
    }, [id])
    if (!showCard) {
        return <span className="loading loading-dots loading-lg"></span>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdventureDetailItem;