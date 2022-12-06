import about from '../../assets/Section-1.png'
import './style.css' 

export const About = ({reverse}) =>{
    return (
        <section id="about" className={`about ${reverse ? 'reverse': ''}`}>
            <div>
                <div className="content">
                    <h2>Lorem Epsum</h2>
                    <p>Lorem ipsum dolor, sit amet cons Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum neque vero ullam repellat alias voluptatem autem delectus dolore. Ut, veniam? ectetur adipisicing elit. Ipsam atque mollitia laborum unde sit veniam, tenetur id? Rem esse est odio possimus minus omnis porro. Tempora optio fuga impedit ad.</p>
                    <a href="#" className='button'>Learn More</a>
                </div>
                <div>
                    <img src={about} alt="about" />
                </div>
            </div>
        </section>
    )
}