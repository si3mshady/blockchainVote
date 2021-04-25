import { Form, Col, Button } from 'react-bootstrap';
import React, {useState, useEffect} from 'react'
import Web3 from 'web3';
import './css/Register.css'
import compiled_contract from './abi.json'


export default function Register({ip}) {
    const [driversLicence, setDriversLicence] = useState('');
    const [fullName, setFullName] = useState('');
    const [account, setAccount] = useState('');
    const [abi, setAbi] = useState('');
    const [web3Instance, setWeb3Instance] = useState();
    const [actualVoters, setActualVoters] = useState();
    const [registeredVoters, setRegisteredVoters] = useState();
    const district4_SC =  "0x1a3e43492533a45c7785ce0b9f45297ca8e08718";
  
  
  
    useEffect(() => {
        const initializeWeb3 = async () => {
          try {
            // Will open the MetaMask UI       
           const accounts =  await window.ethereum.request({ method: 'eth_requestAccounts' });       
           let web3 = new  Web3(window.ethereum);  
           window.ethereum.enable()  
           setAccount(accounts[0])  
           setWeb3Instance(web3)  
           console.log(web3Instance)  
    
          } catch (error) {
            console.error(error);
          }
        };
        initializeWeb3()
        setAbi(compiled_contract.abi)
      
        return true;
      },[])  

    
  const registerVoter =  () => {  
    
    setFullName('')
    setDriversLicence('')

    let ipString = new String(ip)
    let driversLicenceInt = parseInt(driversLicence); 
   
   let contract_instance =  new web3Instance.eth.Contract(abi,district4_SC)
   contract_instance.methods.register(driversLicenceInt, fullName, ipString).send({from: account})
   .then(res => {
   
    let response = contract_instance.methods.getRegisteredVoters().call()
    .then(data => {
        console.log(
        
            setRegisteredVoters(data)
            
            )


    })
   
   }
    

   )
  
    
  }

    const handleName = (e) => {
        setFullName(e.target.value)
        
    }
    const handleDriversLicence = (e) => {
        setDriversLicence(e.target.value)
    }
  


return (
        <div className="register">

<p>Your IP address is <span style={{color:"green"}}>{ip}</span></p> 


{registeredVoters && <h1>Registered Voters: <span style={{color:"green"}}> {registeredVoters} </span> </h1> } 

<Form.Group className="">
  <Form.Row>
 
    <Col>
      <Form.Control size="lg" type="text"
      onChange={handleDriversLicence}
      value={driversLicence}
       placeholder="Drivers Licence" />
    </Col>
  </Form.Row>
  <br />
  <Form.Row>

    <Col>
      <Form.Control size="lg" type="text"
      onChange={handleName}
      value={fullName}
       placeholder="Full Name" />
    </Col>
  </Form.Row>
  <br />
  <div className="register_button">
        <Button onClick={() => registerVoter()} >Register</Button>
  </div>
 
</Form.Group>
 
        


            
        </div>
    )
}
