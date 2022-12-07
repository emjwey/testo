import Review1 from "../../assets/Testi-1.png"
import Review2 from "../../assets/Testi-2.png"
import Review3 from "../../assets/Testi-3.png"

import './style.css'

export const Reviews = () =>{
    const reviewList = [
        {
            image:Review1 ,
            name: "Lorem ipsum",
            review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, nesciunt Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, nesciunt Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, nesciunt."
        },
        {
            image: Review2,
            name: "Lorem ipsum",
            review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, nesciunt Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, nesciunt Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, nesciunt."
        },
        {
            image: Review3 ,
            name: "Lorem ipsum",
            review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, nesciunt Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, nesciunt Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, nesciunt."
        }
    ]

    const reviews = reviewList.map( ({image,name,review}, key) => {
        return (
            <article key={key}>
                <img src={image} alt={name} />
                <h5>{name}</h5>
                <p>{review}</p>
            </article>
        )
    })

    return (
        <section id="reviews" className="full">
            <h2 className="text-white">Testimonials</h2>
            <div>
                {reviews}
            </div>
        </section>
    )
}