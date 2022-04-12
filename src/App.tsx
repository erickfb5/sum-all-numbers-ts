import './App.css'
import { useState } from 'react'

export function App() {
    const [inputA, setInputA] = useState<string>();
    const [inputB, setInputB] = useState<string>();
    const max:number = Math.max(inputA, inputB);
    const min:number = Math.min(inputA, inputB);

    const showNumbers = ():string => {
        const numArray = [];
        for (let i = min; i <= max; i++) { numArray.push(i); }
        return numArray.toString().split(',').join(' + ')
    }

    const sumAll = ():number => {
        let result = 0;
        for (let i = min; i <= max; i++) { result += i; }
        return result;
    }

    return (
        <div className='App'>
            <h1>THE SUM OF ALL NUMBERS</h1>
            <div className="container">
                <h5>between</h5>
                <input 
                    onInput={e => setInputA(e.target as HTMLInputElement).value}
                    className='input-a' type="number" min={1} max={100}
                    onKeyDown={e => e.preventDefault()} />
                <h5>and</h5>
                <input
                    onInput={e => setInputB(e.target as HTMLInputElement).value}
                    className='input-a' type="number" min={1} max={100}
                    onKeyDown={e => e.preventDefault()} />
                <div className='show-numbers'>{showNumbers()}</div>
                <h3> {sumAll() ? '= ' + sumAll() : ''}</h3>
            </div>
        </div>
    )
}

export default App