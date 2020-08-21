import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const nayoks = ['Anwar', 'Jafor', 'Salman', 'Alamgir', 'Bappi', 'Sharukh Khan'];

  const products = [ 
                      {name:'Photoshop', price:'$90.99'},
                      {name:'Illustrator', price:'$100'},
                      {name:'PDF Reader', price:'$6.99'},
                      {name:'Photoshoop XD', price:'$39.3'},
                      {name:'Googel Drive', price: '$2'}
                   ];

  const allFriend = [
                      {name : 'Mohin', age : '23', job : 'Nothig' },
                      {name :'Mehedi', age : '23', job : 'PGCB' },
                      {name :'Ripon', age : '24', job : 'Foreigner' },
                      {name :'Afran', age : '25', job : 'Business Man' },
                      {name :'Bappi', age : '26', job : 'Doctor' },
                      {name :'Mithu', age : '27', job : 'Business Man' },
                   ];


      function Counter () {

          const counterStyle = {
            margin : '10px',
            padding : '10px',
            border : ' 1px solid red'
          }

          const [count, setCount] = useState(3);

          const handleIncrease = () => {
            const newCount = count + 1;
            setCount(newCount);
          }

          const handleDecrease = () => {
            const newCount = count - 1;
            setCount(newCount)
          }

          return (
          <div >
            <h1> Count : {count} </h1>
            <button style = {counterStyle} onClick = {handleIncrease}>Increase</button>
            <button style = {counterStyle} onClick = {handleDecrease}>Decrease</button>
          </div> 

          );
      }  

  
      function Product (props) {
          const productStyle = {
                border : '1px solid gray',
                borderRadius: '5px',
                backgroundColor : 'lightgray',
                height : '260px',
                width : '200px',
                margin: '10px',
                padding: '20px 0'
            };

         const {name, price} = props.product;

              return (
                <div style= { productStyle }>
                  <div>
                    <h3>{name}</h3>
                    <h5>{price}</h5>
                    <button>Buy Now</button>
                  </div>
                </div>
                );
      }  
            
      function Users () {
              const style = {
                      color: 'white'
              }

              const [users, setUsers] = useState([]);

              useEffect( () => {

                fetch('https://jsonplaceholder.typicode.com/users')
                .then( res => res.json())
                .then(data => setUsers(data))
              }, [])

                  return (
                    <div style = {style}>
                      <h3> Dynamic Users: {users.length} </h3>
                      <ol> {
                            users.map( user => 
                              <li> Name:{user.name} <br></br> Phone:{user.phone} </li>
                            )
                        }                   
                      </ol>
                    </div>
                  )
        }

        function Friends ( props ) {

              const friendStyle = {
                                    border : '1px solid gray',
                                    borderRadius: '5px',
                                    backgroundColor : 'lightgray',
                                    height : '260px',
                                    width : '200px',
                                    margin: '10px',
                                    padding: '20px 0'
                                  };    

              const { name, age, job }  = props.friend;  
                              
                                return (
                                    <div style = {friendStyle} >
                                      <h5> {name} </h5>
                                      <p>Age : {age} </p>
                                      <p>Job : {job} </p> 
                                <button>Get more about {name}</button>                          
                                    </div>
                                );
        }

return (
    <div className="App">
      <header className="App-header">
     {/* Added Counter */}

          {
             <Counter></Counter> 
          }

    {/* Dynamic Users */} 

          {
            <Users></Users>
          }
        
    {/* Product added */}

         {
           products.map( pd =>               
              <Product product = { pd }> </Product>            
            )
         }


    {/* Added friends */}

         {
            allFriend.map (list => 
              <Friends friend = {list} ></Friends>
              )
         }



      </header>
    </div>
  );
}




export default App;
