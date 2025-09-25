/**
 * A union type for the two kinds of questions in this project
 */
export type QuestionType = "multiple_choice_question" | "short_answer_question";

/**
 * A representation of a Question in a quizzing application
 */
export interface Question {
    id: number;              // Unique identifier
    name: string;            // Name/title of the question
    type: QuestionType;      // The type of the question
    body: string;            // The actual question content
    expected: string;        // The correct answer
    options: string[];       // Only used if multiple_choice_question
    points: number;          // Points assigned to the question
    published: boolean;      // Whether the question is visible/published
}
