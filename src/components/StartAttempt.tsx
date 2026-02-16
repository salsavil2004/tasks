import React, { useState } from "react";

/**
 * StartAttempt component
 * - Displays the number of attempts
 * - Provides buttons: Start Quiz, Stop Quiz, Mulligan
 * - Buttons update the attempts count and enable/disable states
 */
export function StartAttempt(): React.JSX.Element {
    const initialAttempts = 5;
    const [attempts, setAttempts] = useState<number>(initialAttempts);
    const [quizActive, setQuizActive] = useState<boolean>(false);

    function handleStartQuiz(): void {
        if (attempts > 0) {
            setAttempts(attempts - 1);
            setQuizActive(true);
        }
    }

    function handleStopQuiz(): void {
        setQuizActive(false);
    }

    function handleMulligan(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <div>Start Attempt</div>
            <p>Attempts: <span>{attempts}</span></p>

            <button onClick={handleStartQuiz} disabled={quizActive || attempts === 0}>
                Start Quiz
            </button>
            <button onClick={handleStopQuiz} disabled={!quizActive}>
                Stop Quiz
            </button>
            <button onClick={handleMulligan} disabled={quizActive}>
                Mulligan
            </button>
        </div>
    );
}
