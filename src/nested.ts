import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion, duplicateQuestion } from "./objects";

/**
 * Return only published questions
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter(q => q.published);
}

/**
 * Return only non-empty questions
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(q =>
        q.body !== "" || q.expected !== "" || q.options.length > 0
    );
}

/**
 * Find a question by id or return null
 */
export function findQuestion(questions: Question[], id: number): Question | null {
    return questions.find(q => q.id === id) ?? null;
}

/**
 * Remove a question by id
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter(q => q.id !== id);
}

/**
 * Return array of question names
 */
export function getNames(questions: Question[]): string[] {
    return questions.map(q => q.name);
}

/**
 * Sum of points for all questions
 */
export function sumPoints(questions: Question[]): number {
    return questions.reduce((sum, q) => sum + q.points, 0);
}

/**
 * Sum of points for only published questions
 */
export function sumPublishedPoints(questions: Question[]): number {
    return questions.filter(q => q.published).reduce((sum, q) => sum + q.points, 0);
}

/**
 * Convert questions to CSV string
 */
export function toCSV(questions: Question[]): string {
    const header = "id,name,options,points,published";
    const lines = questions.map(q =>
        `${q.id},${q.name},${q.options.length},${q.points},${q.published}`
    );
    return [header, ...lines].join("\n");
}

/**
 * Convert questions to Answers
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map(q => ({
        questionId: q.id,
        text: "",
        submitted: false,
        correct: false
    }));
}

/**
 * Publish all questions
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map(q => ({ ...q, published: true }));
}

/**
 * Check if all questions have the same type
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) return true;
    const type = questions[0].type;
    return questions.every(q => q.type === type);
}

/**
 * Add a blank question to the end
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    return [...questions, makeBlankQuestion(id, name, type)];
}

/**
 * Rename a question by id
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    return questions.map(q => q.id === targetId ? { ...q, name: newName } : q);
}

/**
 * Change type of question by id
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    return questions.map(q =>
        q.id === targetId
            ? { ...q, type: newQuestionType, options: newQuestionType === "multiple_choice_question" ? q.options : [] }
            : q
    );
}

/**
 * Edit options of a question by id
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    return questions.map(q => {
        if (q.id !== targetId) return q;
        const newOptions = [...q.options];
        if (targetOptionIndex === -1) newOptions.push(newOption);
        else newOptions[targetOptionIndex] = newOption;
        return { ...q, options: newOptions };
    });
}

/**
 * Duplicate a question in an array
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const result: Question[] = [];
    for (const q of questions) {
        result.push(q);
        if (q.id === targetId) result.push(duplicateQuestion(newId, q));
    }
    return result;
}
