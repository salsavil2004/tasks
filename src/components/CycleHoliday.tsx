import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🎄" | "🪔" | "🎏" | "🕯️";
const ALPHABET_ORDER: Holiday[] = ["🎏", "🎃", "🕯️", "🪔", "🎄"];
const YEAR_ORDER: Holiday[] = ["🎏", "🪔", "🎃", "🕯️", "🎄"];

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(ALPHABET_ORDER[0]);

    function advanceByAlphabet(): void {
        const currentIndex = ALPHABET_ORDER.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % ALPHABET_ORDER.length;
        setCurrentHoliday(ALPHABET_ORDER[nextIndex]);
    }
    function advanceByYear(): void {
        const currentIndex = YEAR_ORDER.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % YEAR_ORDER.length;
        setCurrentHoliday(YEAR_ORDER[nextIndex]);
    }

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
