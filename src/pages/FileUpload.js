import React from 'react';
import { useState } from "react";
import { Web3Storage } from 'web3.storage'
import Upload from "./artifacts/contracts/Upload.sol/Upload.json"
import {ethers} from "ethers"
import Display from "./display";
import Modal from "./modal.js"

function getAccessToken() {
    // If you're just testing, you can paste in a token
    // and uncomment the following line:
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEM5OTNGNjU5RWJDRUI2YTg4NzBmRWM2NWJmQkM5OGMxYkExMmU1MTkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzc0MDk5ODI2NjUsIm5hbWUiOiJIZWFsdGhJbnRlcmZhY2UifQ.ckaS_bxvqslKPkL8wPEcohqHKEtXMnLY59Wk7gdE-Fs'

    // In a real app, it's better to read an access token from an
    // environement variable or other configuration that's kept outside of
    // your code base. For this to work, you need to set the
    // WEB3STORAGE_TOKEN environment variable before you run your code.
    //return process.env.WEB3STORAGE_TOKEN
}

function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() })
}

const FileUpload = ({ contract, account, provider }) => {

    const [modalOpen, setModalOpen] = useState(false);

    async function storeFiles (files) {
        const client = makeStorageClient()
        const cid = await client.put(files)
        //console.log('stored files with cid:', cid)
        const link2 = "http://" + cid + ".ipfs.w3s.link/" + files[0].name;
        //const signer = contract.connect(provider.getSigner());
        contract.add(account, link2);
        alert("Image Uploaded Successfully.");
        console.log(link2);
        return cid
    }
      // my photo link - bafybeieetgknijfybh6mgdn2tigr3aqsmf3n5dvosprat4ckzvxfpzkjwm.ipfs.w3s.link/myphoto.PNG
    function handleSubmit(event){
        const fileInput = document.querySelector('input[type="file"]')
        let fhash = storeFiles(fileInput.files);
        let fname = fileInput.files[0].name;
        //console.log(fname);
        
        //console.log(fhash);
        //console.log(link);
        event.preventDefault();
    }

    return (
        <div>
            <h2>Your Account:</h2>
            <h3>{account? account : "Not connected"}</h3>
            <form onSubmit={handleSubmit}>
                <label></label>
                <input type="file" />
                <br />
                <input type="submit" />
            </form>
            {!modalOpen && (
                <button className="share" onClick={()=>{setModalOpen(true)}}>
                    Share
                </button>
            )}
            {modalOpen && (
                <Modal setModalOpen={setModalOpen} contract = {contract} />
            )}
            <Display account = {account} contract = {contract}/>
        </div>
    );
}

export default FileUpload;