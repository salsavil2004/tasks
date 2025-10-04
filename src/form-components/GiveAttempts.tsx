import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<number>(0);

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Remaining: {attempts}</div>

            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts <= 0}
            >
                Use
            </Button>

            <Form.Group controlId="formRequestedAttempts" className="mt-2">
                <Form.Label>Attempts to add:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={(event) => {
                        setRequested(parseInt(event.target.value) || 0);
                    }}
                />
            </Form.Group>

            <Button
                className="mt-2"
                onClick={() => {
                    setAttempts(attempts + requested);
                }}
            >
                Gain
            </Button>
        </div>
    );
}
