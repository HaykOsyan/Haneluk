import MyGameCard from "../../components/my_components/MyGameCard"
import { shuffle } from "../random"

export const makeElement = (questionArray, answereArray,myFunc) => {
    if (questionArray.length) {
        let rightAnswere = answereArray[0]
        console.log(questionArray)
        return shuffle(answereArray).map((ars) =>
                <MyGameCard answereArray={answereArray} ars={ars} rightAnswere={rightAnswere} myFunc={myFunc}></MyGameCard>
            )
        }else{
            alert('harcery verjacan')
        }
  }
  