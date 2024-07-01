const get_Data = async()=>{

const res = await fetch("https://simple-random-math-question.onrender.com/");
  const {question,answer,status} = await res.json();
  if(status == "true"){
    q.innerText = question;
    a.innerText = answer;
  }else{
    console.log("Error Occured !");
  }
      
console.log(data);
  
}

get_Data();