import { Question, QuestionType } from "./interfaces/question";

/**
 * Create a new blank question with the given `id`, `name`, and `type. The `body` and
 * `expected` should be empty strings, the `options` should be an empty list, the `points`
 * should default to 1, and `published` should default to false.
 */
export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType,
): Question {
    return {
        id,
        name,
        type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false,
    };
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is correct. You should check that the `answer` is equal to
 * the `expected`, ignoring capitalization and trimming any whitespace.
 */
export function isCorrect(question: Question, answer: string): boolean {
    return (
        answer.trim().toLowerCase() === question.expected.trim().toLowerCase()
    );
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is valid (but not necessarily correct). For a `short_answer_question`,
 * any answer is valid. But for a `multiple_choice_question`, the `answer` must
 * be exactly one of the options.
 */
export function isValid(question: Question, answer: string): boolean {
    if (question.type === "short_answer_question") {
        return true;
    }
    return question.options.includes(answer);
}

/**
 * Consumes a question and produces a string representation combining the
 * `id` and first 10 characters of the `name`.
 */
export function toShortForm(question: Question): string {
    return `${question.id}: ${question.name.substring(0, 10)}`;
}

/**
 * Consumes a question and returns a formatted string representation.
 */
export function toMarkdown(question: Question): string {
    let result = `# ${question.name}\n${question.body}`;
    if (question.type === "multiple_choice_question") {
        result +=
            "\n" + question.options.map((opt) => `- ${opt}`).join("\n");
    }
    return result;
}

/**
 * Return a new version of the given question, except the name should now be `newName`.
 */
export function renameQuestion(question: Question, newName: string): Question {
    return { ...question, name: newName };
}

/**
 * Return a new version of the given question, except the `published` field should be inverted.
 */
export function publishQuestion(question: Question): Question {
    return { ...question, published: !question.published };
}

/**
 * Duplicate a question, with a new id, name = "Copy of ...", and published = false.
 */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    return {
        ...oldQuestion,
        id,
        name: `Copy of ${oldQuestion.name}`,
        published: false,
    };
}

/**
 * Add a new option to the list of options (with a copy of the array).
 */
export function addOption(question: Question, newOption: string): Question {
    return { ...question, options: [...question.options, newOption] };
}

/**
 * Merge two questions: keep content from contentQuestion, but points from other.
 */
export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number },
): Question {
    return {
        id,
        name,
        body: contentQuestion.body,
        type: contentQuestion.type,
        options: [...contentQuestion.options],
        expected: contentQuestion.expected,
        points,
        published: false,
    };
}
