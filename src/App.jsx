import {useState} from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import CardOne from "./CardOne.jsx";
import Header from './Header.jsx';
import Introduction from "./Introduction.jsx";
import CardTwo from "./CardTwo.jsx";


function App() {
    const [textInput, setTextInput] = useState("");
    const [personChose, setPersonChose] = useState(false);

    return (
        <>
            <div>
                <Header headingTitle={"Profile App"}/>
                <Introduction introductionTitle={"About"} introductionDescription={"\n" +
                    "\n" +
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non suscipit nulla, " +
                    "at ultrices lectus. Nam at malesuada neque. Nunc lobortis dignissim turpis, sit amet " +
                    "malesuada justo mattis facilisis. Sed in dignissim risus. Aliquam eget ante tincidunt, " +
                    "ullamcorper risus gravida, tempor ante. Nunc sed elit quis mi pretium tempus in tincidunt " +
                    "arcu. Duis eget varius mauris, sed elementum odio. Donec magna nulla, imperdiet sed " +
                    "fringilla nec, elementum tempor metus. Sed cursus rhoncus purus, nec tincidunt nibh. " +
                    "Suspendisse sed turpis nulla. Mauris egestas efficitur enim. Phasellus porta interdum sem, " +
                    "id vestibulum enim luctus dignissim. Sed venenatis nisl sed justo vulputate ultricies. " +
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}/>

                <label>Toggle background color:</label>
                <button onClick={() => setPersonChose(prevPersonChose => !prevPersonChose)}>
                    {personChose ? "Gold" : "Black"}
                </button>
                <label>What is his name?</label>
                <input
                    type="text"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                />
                <div className={personChose ? "cardClassOne" : "cardClassTwo"}>
                    <CardOne personName={textInput}/>
                    <CardTwo personName={textInput}/>
                </div>

{/*                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>*/}
            </div>
{/*            <h1>Vite + React</h1>
            <div className="card">

                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>*/}
        </>
    )
}

export default App
