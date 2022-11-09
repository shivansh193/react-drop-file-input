import './App.css';

import DropFileInput from './components/drop-file-input/DropFileInput';

import InputFields from "./components/InputFields"

function App() {

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <div className="box">
            <h2 className="header">
                React drop files input
            </h2>
            <DropFileInput
                onFileChange={(files) => onFileChange(files)}
            />
            <InputFields />
        </div>
    );
}

export default App;
