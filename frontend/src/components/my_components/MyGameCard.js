import React from 'react';
import { Card } from 'react-bootstrap';
import { compareRightAnswere } from '../../utils/gameLogics/compareRightAnswere';

const MyGameCard = (answereArray,a,b,myFunc) => {
    return (
        <Card key={answereArray.answereArray.indexOf(answereArray.ars)} style={{ width: '18rem' }} className='game-card m-2'>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
            <Card.Title>Պատասխան {answereArray.answereArray.indexOf(answereArray.ars)+1}</Card.Title>
            {/* ID arhestakan avelacrel em label porcarkelu hamar */}
            <Card.Text onClick={e=>compareRightAnswere(answereArray.rightAnswere,e.target.innerHTML,myFunc)} id={'l'+answereArray.answereArray.indexOf(answereArray.ars)}> 
                {answereArray.ars}
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
    </Card>
    );
};

export default MyGameCard;