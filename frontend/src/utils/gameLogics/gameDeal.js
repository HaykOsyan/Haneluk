export const gameDeal = () => {
    if(questionArray){

        let fetchedQuestion = (questionArray[getRandomInt(questionArray.length)])

        let arr = [fetchedQuestion.title,fetchedQuestion.answere,fetchedQuestion.wrongAnswere1,fetchedQuestion.wrongAnswere2,fetchedQuestion.wrongAnswere3]  //stacvox array from baze   
        let answereArray = arr.slice(1)
    
            const element = shuffle(answereArray).map((ars) =>
    
            // component must be out of Game.js ?????????!!!!!!!!!!
            
            <Card key={answereArray.indexOf(ars)} style={{ width: '18rem' }} className='game-card m-2'>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>Պատասխան {answereArray.indexOf(ars)+1}</Card.Title>
                    {/* ID arhestakan avelacrel em label porcarkelu hamar */}
                    <Card.Text onClick={e=>compareRightAnswere(arr[1],e.target.innerHTML)} id={'l'+answereArray.indexOf(ars)}> 
                        {ars}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
            )
    
    
        return (
            
            <Container>
                <h1>{arr[0]}</h1>
                {element}
            </Container>
        );
    }
}