import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Cards = ({ list }) => {

    const card = list.map(t => {
        return(
            <Card style={{ width: '14rem' }} key={t.id} className="col-lg-4 col-xs-6 col-md-6 mb-4 column">
                <Card.Img variant="top" src={t.image} />
                <Card.Body>                    
                    <Card.Title> {t.name} </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">id: {t.id} ~ created {new Date(t.created).toDateString()}</Card.Subtitle>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Status: {t.status}</ListGroupItem>
                        <ListGroupItem>Species: {t.species}</ListGroupItem>
                        <ListGroupItem>Gender: {t.gender}</ListGroupItem>
                        <ListGroupItem>Origin: {t.origin.name}</ListGroupItem>
                        <ListGroupItem>Location: {t.location.name}</ListGroupItem>
                    </ListGroup>
                </Card.Body>  
            </Card>
        )
    });

    return (
        <div className = "row">
            {card}
        </div>      
    ); 

}

export default Cards;