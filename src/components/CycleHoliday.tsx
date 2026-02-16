import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🎄" | "🪔" | "🎏" | "🕯️";

const ALPHABET_ORDER: Holiday[] = ["🎏", "🎃", "🕯️", "🪔", "🎄"];
const YEAR_ORDER: Holiday[] = ["🎏", "🪔", "🎃", "🕯️", "🎄"];

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>(ALPHABET_ORDER[0]);

    function nextAlphabet(): void {
        const idx = ALPHABET_ORDER.indexOf(holiday);
        setHoliday(ALPHABET_ORDER[(idx + 1) % ALPHABET_ORDER.length]);
    }

    function nextYear(): void {
        const idx = YEAR_ORDER.indexOf(holiday);
        setHoliday(YEAR_ORDER[(idx + 1) % YEAR_ORDER.length]);
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={nextAlphabet}>Advance by Alphabet</Button>
            <Button onClick={nextYear}>Advance by Year</Button>
        </div>
    );
}
