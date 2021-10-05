import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { Container, Row } from 'react-bootstrap';

const Services = (props) => {
    const showService = props.showAll;
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    let newServices = [...services];

    if (!showService) {
        newServices = services.slice(0, 4);
    }
    

    return (
        <div>
            <Container>
                <Row xs={2} md={4}>
                    {
                        newServices.map(service => <Service
                            key={service.key}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;