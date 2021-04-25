import { Form, Col, Button } from 'react-bootstrap';
import React, {useState, useEffect} from 'react'
import Web3 from 'web3';
import './css/Vote.css'
import compiled_contract from './abi.json'


export default function Vote({ip}) {      
   
    const [candidateName, setCandidateName] = useState('');
    const [account, setAccount] = useState('');
    const [abi, setAbi] = useState('');
    const [web3Instance, setWeb3Instance] = useState();
    const [actualVoters, setActualVoters] = useState();
  
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

    
      const vote =  () => {   
        setCandidateName('')

        let ipString = new String(ip)       
       let contract_instance =  new web3Instance.eth.Contract(abi,district4_SC)
       contract_instance.methods.vote(ipString, candidateName).send({from: account})
       .then(res => {
          let response = contract_instance.methods.getActualVoters().call()
        .then(data => {
            console.log( setActualVoters(data) )   
    
        })       
       }      
    
       )    
        
      }
    
        const handleCandidateName = (e) => {
            setCandidateName(e.target.value)
            
        }
        



    return (
        <div className="vote">

{actualVoters && <h1>Actual Voters: <span style={{color:"green"}}> {actualVoters} </span> </h1> } 

            <Form.Group className="">
  <Form.Row>

    <Col>
      <Form.Control
       onChange={handleCandidateName}
      value={candidateName}
       size="lg" type="text" placeholder="Candidate Name" />
    </Col>
  </Form.Row>
  <br />

    
  <br />
  <div className="register_button">
        <Button onClick={() => vote()} >Vote</Button>
  </div>
 
</Form.Group>
        </div>
    )
}


//https://docs.alchemyapi.io/alchemy/tutorials/how-to-create-an-nft