export const showNextQuestion = (questionArray,answereArray, fetchedQuestionIndex, setElement, makeElement) => {
    if(questionArray.length>0){
        console.log(questionArray.length)
        questionArray.splice(fetchedQuestionIndex,1)
        console.log(questionArray.length)
        setElement(makeElement(questionArray, answereArray))
    }
    else{console.log('game over')}
}
