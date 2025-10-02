import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): React.JSX.Element {
    const [value, setValue] = useState<number>(10);

    function doubleValue() {
        setValue(value * 2);
    }

    function halveValue() {
        setValue(value * 0.5);
    }

    return (
        <div>
            <h3>Double Half</h3>
            <div>The current value is: <span>{value}</span></div>
            <Button onClick={() => { doubleValue(); }}>Double</Button>
            <Button onClick={() => { halveValue(); }}>Halve</Button>
        </div>
    );
}
