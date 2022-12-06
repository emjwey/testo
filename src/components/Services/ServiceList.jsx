import Img1 from '../../assets/Img-1.png'

const services = [
    { 
        title: 'Lorem Ipsum',
        image: Img1,
    },
    { 
        title: 'Lorem Ipsum',
        image: Img1,
    },
    { 
        title: 'Lorem Ipsum',
        image: Img1,
    },
    { 
        title: 'Lorem Ipsum',
        image: Img1,
    },
    { 
        title: 'Lorem Ipsum',
        image: Img1,
    },
    { 
        title: 'Lorem Ipsum',
        image: Img1,
    },
]

const ServiceList = () =>{
 
    const list = services.map((service,i) => {
        return (
            <div key= {i}>
                <img src={service.image} alt={service.title}/>
                <h3>{service.title}</h3>
            </div>
        );
    });

    return(
        <div className="service-list">
            {list}
        </div>
    )
}

export {
    ServiceList
}