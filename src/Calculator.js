import React, {useState} from 'react'

const Calculator = () => {
    /* eslint no-eval: 0 */
    //Destrusturing props of useState
    const [results,setResult] = useState("");
    const clickHandler = (e) => {
        setResult(results.concat(e.target.name));
    };
    const clr = () =>{
        setResult("")
    };
    const back = () => {
        setResult(results.slice(0,-1))
    }
    const calculate = () => {
        setResult(eval(results).toString());
    }


    return (
        <div>
             <h2> {results} </h2>
            <main className='container'>
                <form>
                    <input type="text" value={results}/>
                </form>
                
                <section className='input_pad'>
                    <button onClick={clr} id ='clr'> Clear </button>
                    <button onClick={back} id ='backspace'> C </button>
                    <button name='0' onClick={clickHandler}> 0 </button>
                    <button  name='/' id ='divide' onClick={clickHandler}> &divide; </button>
                    <button name='7' onClick={clickHandler}> 7 </button>
                    <button  name='8' onClick={clickHandler}> 8 </button>
                    <button  name='9' onClick={clickHandler}> 9 </button>
                    <button  name='*' id ='times' onClick={clickHandler}> &times; </button>
                    <button  name='4' onClick={clickHandler}> 4 </button>
                    <button  name='5' onClick={clickHandler}> 5 </button>
                    <button  name='6' onClick={clickHandler}> 6 </button>
                    <button  name='-' id ='minus' onClick={clickHandler}> &ndash; </button>
                    <button  name='1' onClick={clickHandler}> 1 </button>
                    <button  name='2' onClick={clickHandler}> 2 </button>
                    <button  name='3' onClick={clickHandler}> 3 </button>
                    <button  name='+' id ='plus' onClick={clickHandler}> + </button>
                    <button  name='.' onClick={clickHandler}> . </button>
                    <button  onClick={calculate} id='result'> = </button>
                </section>
            </main>
        </div>
    )
}
export default Calculator
