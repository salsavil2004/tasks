import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                Hi, my name is Salsavil Chowdhury!
            </header>

            <hr />
            {/* Form components */}
            <CheckAnswer expectedAnswer="42" />
            <hr />
            <GiveAttempts />
            <hr />
            <EditMode />
            <hr />
            <ChangeColor />
            <hr />
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            />
            <hr />

            {/* Bad components */}
            <DoubleHalf />
            <hr />
            <ChooseTeam />
            <hr />
            <ColoredBox />
            <hr />
            <ShoveBox />
            <hr />

            {/* Other components */}
            <Counter />
            <hr />
            <RevealAnswer />
            <hr />
            <StartAttempt />
            <hr />
            <TwoDice />
            <hr />
            <ChangeType />
            <hr />
            <CycleHoliday />
        </div>
    );
}

export default App;
