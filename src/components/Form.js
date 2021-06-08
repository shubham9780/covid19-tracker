import React,{useState} from "react";
import axios from 'axios';

function Form(props) {

  const [Question, setQuestion] = useState(''); 
  const [Answer, setAnswer] = useState('');


  const handleChange = (e) => {
    if (e.target.name === 'Question') {
      setQuestion(e.target.value);
    }
    if (e.target.name === 'Answer') {
      setAnswer(e.target.value);
    }
  };


  const submit = () => {
    if (Question === '' || Answer === '') {
      alert('Please fill in all the fields', 'danger');
    } else {
      const data = {
        Question: Question,
        Answer: Answer
      };
      console.log(data);
      axios
        .post('https://covid19-tracker123.herokuapp.com/form/',data)
        .then(() => {
          alert('Added');
        });
        props.history.push('/faq');
    }
  };


    return (
            <div>
             <div className="container-fluid" style={{marginTop:"20px",marginBottom:"20px"}}>
              <form>
               <div class="form-group">
                 <label for="exampleInputQuestion"><b>Question</b></label>
                 <input
                  type="text"
                  class="form-control" 
                  id="exampleInputQuestion"  
                  placeholder="Enter Question" 
                  name="Question"
                  value={Question} 
                  onChange={handleChange}
                  />
               </div>
               <div class="form-group">
                 <label for="exampleInputAnswer"><b>Answer</b></label>
                 <textarea
                  type="text" 
                  class="form-control" 
                  id="exampleInputAnswer" 
                  placeholder="Enter Answer"
                  name="Answer"
                  value={Answer}
                  onChange={handleChange}
                  />
               </div>
               <button type="submit" class="btn btn-primary" onClick={submit}>Submit</button>
              </form>
             </div>
            </div>
          );
         }

export default Form;