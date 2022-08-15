import './App.css';
import data from './boxes';
import {useState} from 'react';
import Box from "./components/Box";

function App(props) {
    const [squares, setSquares] = useState(data);

    const squareElements = squares.map(item => (
        <Box
            key={item.id}
            id={item.id}
            on={item.on}
            toggle={toggle}
        />
    ))

    function toggle(id){
        setSquares((prevState) => {
            return prevState.map(item => {
                return item.id === id ? {...item, on: !item.on} : item
            })
        })
    }

    return (
        <div className="App">
            {squareElements}
        </div>
    );
}

export default App;
