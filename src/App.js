import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import ParseExcel from './components/parseExcel';
import ExcelImport from './components/excelImport';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/parse-excel" element={<ParseExcel />} />
      <Route path="/excel-import" element={<ExcelImport />} />
    </Routes>
  );
}

export default App;
