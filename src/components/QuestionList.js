import React,{useEffect} from "react";
import QuestionItem from "./QuestionItem";


function QuestionList({myData,setMyData}) {
  
  const API_URL = 'http://localhost:4000/questions'
  useEffect(()=>{


      let fetchData = async() => {
        const respond = await fetch(API_URL)
        const data = await respond.json() 
        setMyData(data)
      }

      fetchData()
      
      return(
        clearInterval(fetchData)
      )

  },[API_URL, setMyData])

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      { 
       myData ? myData.map((question)=><QuestionItem key={question.id} question={question} myData={myData} setMyData={setMyData} />) : null 
      }
      </ul>
    </section>
  );
}

export default QuestionList;
