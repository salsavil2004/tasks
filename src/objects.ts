import { Question, QuestionType } from "./interfaces/question";

/**
 * Create a new blank question with the given `id`, `name`, and `type`.
 * `body` and `expected` should be empty, `options` empty array, `points` = 1,
 * `published` = false.
 */
export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType
): Question {
    return {
        id,
        name,
        type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false
    };
}

/**
 * Checks if the provided answer is correct for the given question.
 * Ignores capitalization and trims whitespace.
 */
export function isCorrect(question: Question, answer: string): boolean {
    return question.expected.trim().toLowerCase() === answer.trim().toLowerCase();
}

/**
 * Checks if an answer is valid for a question.
 * - For `short_answer_question` any answer is valid.
 * - For `multiple_choice_question` the answer must be one of the options.
 */
export function isValid(question: Question, answer: string): boolean {
    if (question.type === "short_answer_question") return true;
    return question.options.includes(answer);
}

/**
 * Returns a short string representation combining id and first 10 chars of name.
 */
export function toShortForm(question: Question): string {
    return `${question.id}: ${question.name.slice(0, 10)}`;
}

/**
 * Returns a Markdown representation of a question:
 * - # Name
 * - Body
 * - List of options (if multiple_choice_question)
 */
export function toMarkdown(question: Question): string {
    let markdown = `# ${question.name}\n${question.body}`;
    if (question.type === "multiple_choice_question") {
        markdown += "\n" + question.options.map(o => `- ${o}`).join("\n");
    }
    return markdown;
}

/**
 * Return a new question with the `name` updated.
 */
export function renameQuestion(question: Question, newName: string): Question {
    return { ...question, name: newName };
}

/**
 * Toggle the `published` status of a question.
 */
export function publishQuestion(question: Question): Question {
    return { ...question, published: !question.published };
}

/**
 * Duplicate a question. Updates id and prepends "Copy of " to name.
 * Published is reset to false.
 */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    return {
        ...oldQuestion,
        id,
        name: `Copy of ${oldQuestion.name}`,
        published: false
    };
}

/**
 * Add a new option to a question. Creates a new array for `options`.
 */
export function addOption(question: Question, newOption: string): Question {
    return { ...question, options: [...question.options, newOption] };
}

/**
 * Merge content from one question and points from another. Sets published to false.
 */
export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number }
): Question {
    return {
        ...contentQuestion,
        id,
        name,
        points,
        published: false
    };
}
