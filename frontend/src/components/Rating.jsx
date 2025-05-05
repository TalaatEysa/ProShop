import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const STAR_COLOR = '#f8e825';
const renderStars = (value, color = STAR_COLOR) => {
    return Array.from({ length: 5 }, (_, i) => {
        const starValue = i + 1;
        return (
            <span
                key={i}
                style={{ color }}
            >
                {value >= starValue ? (
                    <FaStar />
                ) : value >= starValue - 0.5 ? (
                    <FaStarHalfAlt />
                ) : (
                    <FaRegStar />
                )}
            </span>
        );
    });
};

export default function Rating({ value, text, color }) {
    return (
        <div className='rating'>
            {renderStars(value, color)}
            {text && <span className='rating-text'>{text}</span>}
        </div>
    );
}

Rating.defaultProps = {
    color: STAR_COLOR,
};
