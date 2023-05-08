import React from 'react';
import { useState } from "react";
// import { Web3Storage } from 'web3.storage'
// import Upload from "./artifacts/contracts/Upload.sol/Upload.json"
// import {ethers} from "ethers"
// import Tesseract from 'tesseract.js';
// https://bafybeihbdv4jz3i76gq6whqx6mi2plxpsrpocd3ivwfpxasmzsygh5u7tu.ipfs.w3s.link/forocr.jpg
const Display = ({contract, account}) =>{
    const [data, setData] = useState(null);

    const [imagePath, setImagePath] = useState("https://gateway.pinata.cloud/ipfs//QmUwgmo5Qfqg7R5qAvCLfmumKyrosxqLDKvxadLvGo7vU9");
    const [text, setText] = useState("");
    const handleClick = (evt) => {

        let ele = evt.target;
        let prev=ele.previousElementSibling;
        //setImagePath(prev.href);
        // getScan(prev.href);
        // Tesseract.recognize(
        // imagePath,'eng',
        // { 
        // logger: (m) => {console.log(m);} 
        // }
        // ).then(({data: {text} }) => {
        // setText(text);
        // console.log(text);
        // });
    }
//imagePath
    const work = (text) => {
        console.log(text);
        setText(text);
    }
    // const getScan = (path) => {
    //     Tesseract.recognize(
    //     path,'eng',
    //     { 
    //        logger: (m) => {console.log(m);} 
    //     }
    //     ).then(({data: {text} }) => {
    //     work(text);
    //     });
    // } 

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
                   <li> <a href={item} key={i}>Document No- {i}</a> <button onClick={handleClick} style={{height:50}}> Get Summary</button> </li>
                )
            });
            console.log(listItems);
            setData(listItems);
        }
        else{
            alert("No img to display");
        }
    }
    // const plot = () =>
    // {
    //     let eles = document.querySelectorAll("a");
    //     let links = [];
    //     for(let i = 0; i<eles.length; i++)
    //     {
    //         links.push(eles[i].href);
    //     }
        
    //     let yvalues = [];
    //     for(let i = 0; i<links.length; i++)
    //     {
    //         let loc = -1;
    //         let val = "";
    //         Tesseract.recognize(
    //             links[i],'eng',
    //             { 
    //                logger: (m) => {console.log(m);} 
    //             }
    //             ).then(({data: {text} }) => {
    //             loc = text.search("WBC:");
    //             val = text.substring(loc+4, loc+7);
    //             });
    //         yvalues.push(val);
    //     }
    //     console.log(yvalues);
    // }
    return (
        <div className="container mt-5 p-5 bg-dark border rounded">
            
            <input type="text" placeholder="Enter Address" className="address form-control"></input>
            {/* onClick={getData} */}
            <button className="mt-3 btn btn-warning">Get Data</button>
            <div className="mt-3 text-light">Item List:-</div>
            <div className="container">
                <ul>{data}</ul>
            </div>
            <p>{text}</p>
            {/*  onClick={plot} */}
            {/* <button className="btn btn-primary">Plot</button> */}
        </div> 
    );
};

export default Display;