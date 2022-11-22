import React from "react";
// import * as fs from 'fs';
// import { readFile, set_fs } from "xlsx/xlsx";
// import XLSX from "xlsx";
// set_fs(fs)
// sfc

// La página notifica posibles errores que si se dan
const ParseExcel = () => {
    const handleFile = async (e) => {
        e.preventDefault()
        // const file = e.target.files[0]
        // const data = await file.arrayBuffer()
        // const workbook = XLSX.readFile(data)
        // var wk = XLSX.readFile(data, 'ascii');
        // var wk = readFile(data);
        // console.log(wk)
    }
    return <div>
        <h1>ParseExcel</h1>
        <input type="file" onChange={(e) => handleFile(e)} />
    </div>
}

export default ParseExcel;
