import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
    const [value, setValue] = useState<number>(0);

    return (
        <div>
            <Button onClick={() => { setValue(value + 1); }}>Add One</Button>
            <span style={{ marginLeft: "8px" }}>to {value}.</span>
        </div>
    );
}
