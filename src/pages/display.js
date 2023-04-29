import React from 'react';
import { useState } from "react";
import { Web3Storage } from 'web3.storage'
import Upload from "./artifacts/contracts/Upload.sol/Upload.json"
import {ethers} from "ethers"

const Display = ({contract, account}) =>{
    const [data, setData] = useState(null);
    const seeContract = ()=>{
        console.log(contract);
    }
    const getData = async() =>{
        let dataArray;
        const otherAddress = document.querySelector(".address").value;
        if(otherAddress){
            dataArray = await contract.display(otherAddress);
        }
        else{
            dataArray = await contract.display(account);
        }
        const isEmpty = Object.keys(dataArray).length===0;
        if(!isEmpty){
            const str = dataArray.toString();
            const str_array = str.split(",");
            //console.log(str);
            console.log(str_array);
            const listItems = str_array.map((item, i)=>{
                return (
                   <li> <a href={item} key={i}>Document No- {i}</a> </li>
                )
            });
            console.log(listItems);
            setData(listItems);
        }
        else{
            alert("No img to display");
        }
    }
    return (
        <div>
            
            <input type="text" placeholder="Enter Address" className="address"></input>
            <button onClick={getData}>Get Data</button>
            <div>Item List:-</div>
            <div>
                <ul>{data}</ul>
            </div>
        </div> 
    );
};

export default Display;