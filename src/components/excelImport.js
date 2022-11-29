import React, { useState } from "react";
import { ExcelRenderer, OutTable } from 'react-excel-renderer';

const getJsDateFromExcel = excelDate => {
    return new Date((excelDate - (25567 + 1)) * 86400 * 1000);
};

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
                let parseDate = getJsDateFromExcel(resp.rows[1][8])
                console.log(parseDate)
                console.log(resp.rows)
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
