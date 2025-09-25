/**
 * A representation of an Answer corresponding to a Question
 */
export interface Answer {
    questionId: number;      // The id of the Question this answer belongs to
    text: string;            // The submitted answer
    submitted: boolean;      // Whether the student submitted the answer
    correct: boolean;        // Whether the submitted answer is correct
}
