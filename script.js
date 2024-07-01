const get_Data = async()=>{

const res = await fetch("https://bec1815d-6c4d-4a07-8f1c-0fe9e4d0318e-00-38exr9hob6a7a.sisko.replit.dev/");
  const data = await res.text();

      
console.log(data);
  
}

get_Data();