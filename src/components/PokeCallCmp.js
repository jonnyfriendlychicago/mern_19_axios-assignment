import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 
import {Form} from 'react-bootstrap'; 


function PokeCallCmp() {
    const [pokeChar, pokeCharSetter] = useState([]);
 
    
    // useEffect as done below will render everything on screen *** upon page load ***. 

    // useEffect(() => {
    // axios
    //   .get("https://pokeapi.co/api/v2/pokemon?limit=10000000000000")
    //   .then((response) => {
    //     pokeCharSetter(response.data.results); 
    //   })
    //   .catch((err) => console.log(err));
    //   }, []); // This empty array forces useEffect to render ONLY when the component first renders

    // below handleSubmit function set up to basically "delay" to call to the API until button clicked.  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=10000000000000")
        .then((response) => {
          pokeCharSetter(response.data.results); 
        })
        .catch((err) => console.log(err));
      }; 

  return (
          <>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlid="FollowerFormItem02">
                <Form.Control
                type="submit"
                value="SHOW ME THE POKE!"
                style={{ width: "200px" }}
                className="btn btn-primary"
                />
            </Form.Group>
          </Form>

          <div className="App">
            { pokeChar ? 
                        pokeChar.map (
                                      (item, index) => {
                                                            return (<div key={index}> {item.name} </div> )
                                                            }
                                      ) 
                                      : 
                                      (null) 
            }
          </div>

          </>
          ); 

}; 

export default PokeCallCmp;
