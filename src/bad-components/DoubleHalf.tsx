import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({
    dhValue,
    setDhValue,
}: {
    dhValue: number;
    setDhValue: (value: number) => void;
}): React.JSX.Element {
    const handleClick = () => {
        setDhValue(dhValue * 2);
    };

    return <Button onClick={handleClick}>Double</Button>;
}

function Halver({
    dhValue,
    setDhValue,
}: {
    dhValue: number;
    setDhValue: (value: number) => void;
}): React.JSX.Element {
    const handleClick = () => {
        setDhValue(dhValue * 0.5);
    };

    return <Button onClick={handleClick}>Halve</Button>;
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>The current value is: <span>{dhValue}</span></div>
            <Doubler dhValue={dhValue} setDhValue={setDhValue} />
            <Halver dhValue={dhValue} setDhValue={setDhValue} />
        </div>
    );
}
