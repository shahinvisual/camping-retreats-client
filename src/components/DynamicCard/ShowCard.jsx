import { Link } from 'react-router-dom';

const ShowCard = ({ item }) => {
    const { ID, Title, Image, EcoFriendlyFeatures } = item;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={Image}
                        alt="image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {Title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    {
                        EcoFriendlyFeatures.map((feature, index) => <div key={index} className="card-actions justify-start">
                            <div className="badge badge-outline">{feature}</div>
                        </div>)
                    }
                    <Link to={`/cardDetails/${ID}`}>
                        <button className='btn btn-neutral btn-ghost btn-outline mt-3'>Explore Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShowCard;