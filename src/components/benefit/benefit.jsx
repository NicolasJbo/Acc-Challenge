import BenefitCard from '../benefitCard/benefitCard';
import './benefit.css';


const Benefit = () => {

    const benefits = [
        {"title":"FLEX","description":"Flexibilidad Horaria"},
        {"title":"HOME","description":"Home Office"},
        {"title":"WORKSHOP","description":"Capacitaciones y workshops"},
        {"title":"SNACK","description":"Snacks, frutas y bebidas gratis"},
        {"title":"WEEK","description":"Semana Remota"},
        {"title":"BRAIN","description":"Trabajamos en ultimas tecnologías"},];

return (
    <div className="container-benefit">
        <p className='title-header'>Entre los beneficios que ofrecemos se encuentras <span style={{ color: '#00a9e5' }}>;)</span></p>
        <div className='benefits-list'>
            {
                benefits.map((benefit, index) => {
                    return <BenefitCard key={index} title={benefit.title} description={benefit.description} />
                })
            
            }
        </div>
    </div>
);
};

export default Benefit;
