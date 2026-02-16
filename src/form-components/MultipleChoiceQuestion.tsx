import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    const isCorrect = choice === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multipleChoiceOptions">
                <Form.Label>What is the correct answer?</Form.Label>
                <Form.Select
                    value={choice}
                    onChange={(event) => {
                        setChoice(event.target.value);
                    }}
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>
                {isCorrect ? (
                    <span style={{ color: "green" }}>✔️ Correct</span>
                ) : (
                    <span style={{ color: "red" }}>❌ Incorrect</span>
                )}
            </div>
        </div>
    );
}
