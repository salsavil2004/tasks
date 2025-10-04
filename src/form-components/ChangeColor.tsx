import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "yellow",
        "pink",
        "cyan"
    ];

    const [color, setColor] = useState<string>("red");

    return (
        <div>
            <h3>Change Color</h3>

            {/* Radio buttons for colors */}
            {colors.map((c: string) => (
                <div key={c}>
                    <input
                        type="radio"
                        name="color"
                        value={c}
                        checked={color === c}
                        onChange={(event) => setColor(event.target.value)}
                    />
                    <label style={{ marginLeft: "5px" }}>{c}</label>
                </div>
            ))}

            {/* Colored box display */}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    width: "100px",
                    height: "50px",
                    marginTop: "10px"
                }}
            >
                You picked {color}.
            </div>
        </div>
    );
}
