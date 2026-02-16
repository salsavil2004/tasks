import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    const toggleType = (): void => {
        setType((prevType) =>
            prevType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    };

    return (
        <div>
            <Button onClick={toggleType}>Change Type</Button>
            <span style={{ marginLeft: "10px" }}>
                {type === "short_answer_question"
                    ? "Short Answer"
                    : "Multiple Choice"}
            </span>
        </div>
    );
}
