import React, { useState } from "react";
import { ExcelRenderer, OutTable } from 'react-excel-renderer';

const ParseExcel = () => {
    const [cols, setCols] = useState([]);
    const [rows, setRows] = useState([]);
    const fileHandler = (event) => {
        let fileObj = event.target.files[0];

        //just pass the fileObj as parameter
        ExcelRenderer(fileObj, (err, resp) => {
            if (err) {
                console.log(err);
            }
            else {
                setCols(resp.cols)
                setRows(resp.rows)
                // this.setState({
                //     cols: resp.cols,
                //     rows: resp.rows
                // });
            }
        });

    }

    return <div>
        <h1>ParseExcel</h1>
        <input type="file" onChange={(e) => fileHandler(e)} />

        <OutTable data={rows} columns={cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />

    </div>
}

export default ParseExcel;
