import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({
    value,
    onChange,
}: {
    value: number;
    onChange: (newValue: number) => void;
}): React.JSX.Element {
    return (
        <Button onClick={() => onChange(value * 2)}>
            Double
        </Button>
    );
}

function Halver({
    value,
    onChange,
}: {
    value: number;
    onChange: (newValue: number) => void;
}): React.JSX.Element {
    return (
        <Button onClick={() => onChange(value / 2)}>
            Halve
        </Button>
    );
}
export function DoubleHalf(): React.JSX.Element {
    const [currentValue, setCurrentValue] = useState<number>(10);
    const updateValue = (newValue: number) => setCurrentValue(() => newValue);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{currentValue}</span>
            </div>
            <div style={{ marginTop: "8px", display: "flex", gap: "8px" }}>
                <Doubler value={currentValue} onChange={updateValue} />
                <Halver value={currentValue} onChange={updateValue} />
            </div>
        </div>
    );
}
