import './benefitCard.css';
import WORKSHOP from '../../assets/benefits/Ic_Workshops.svg';
import FLEX from '../../assets/benefits/Ic_Hour.svg';
import HOME from '../../assets/benefits/Ic_HomeOffice.svg';
import SNACK from '../../assets/benefits/Ic_DrinkSnacks.svg';
import WEEK from '../../assets/benefits/Ic_laptop.svg';
import BRAIN from '../../assets/benefits/Ic_brain.svg';

const BenefitCard = (props) => {
    const { title, description } = props;
    const BenefitImages = {
        WORKSHOP: WORKSHOP,
        FLEX: FLEX,
        HOME: HOME,
        SNACK: SNACK,
        WEEK: WEEK,
        BRAIN: BRAIN
    };

    const image = BenefitImages[title];

    return (
        <div className="benefit-card">
            <img src={image} className="benefit-card-img" />
            <p>{description}</p>
        </div>
    );
};

export default BenefitCard;
