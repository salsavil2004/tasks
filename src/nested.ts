import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion, duplicateQuestion } from "./objects";
/**
 * Return only published questions
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((q: Question): boolean => q.published);
}
/**
 * Return only non-empty questions
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (q: Question): boolean =>
            q.body !== "" || q.expected !== "" || q.options.length > 0
    );
}
/**
 * Find a question by id or return null
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const result = questions.find((q: Question): boolean => q.id === id);
    return result ? result : null;
}
/**
 * Remove a question by id
 */
export function removeQuestion(
    questions: Question[],
    id: number
): Question[] {
    return questions.filter((q: Question): boolean => q.id !== id);
}
/**
 * Return array of question names
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((q: Question): string => q.name);
}
/**
 * Sum of points for all questions
 */
export function sumPoints(questions: Question[]): number {
    return questions.reduce(
        (sum: number, q: Question): number => sum + q.points,
        0
    );
}
/**
 * Sum of points for only published questions
 */
export function sumPublishedPoints(questions: Question[]): number {
    return questions
        .filter((q: Question): boolean => q.published)
        .reduce((sum: number, q: Question): number => sum + q.points, 0);
}
/**
 * Convert questions to CSV string
 */
export function toCSV(questions: Question[]): string {
    const header = "id,name,options,points,published";
    const lines = questions
        .map(
            (q: Question): string =>
                `${q.id},${q.name},${q.options.length},${q.points},${q.published}`
        )
        .join("\n");

    return [header, lines].join("\n");
}
/**
 * Convert questions to Answers
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map(
        (q: Question): Answer => ({
            questionId: q.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
}
/**
 * Publish all questions
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map(
        (q: Question): Question => ({ ...q, published: true })
    );
}
/**
 * Check if all questions have the same type
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) return true;

    const firstType = questions[0].type;

    return questions.every(
        (q: Question): boolean => q.type === firstType
    );
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
    return questions.map(
        (q: Question): Question =>
            q.id === targetId ? { ...q, name: newName } : q
    );
}

/**
 * Change type of question by id
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    return questions.map(
        (q: Question): Question =>
            q.id === targetId
                ? {
                      ...q,
                      type: newQuestionType,
                      options:
                          newQuestionType === "multiple_choice_question"
                              ? q.options
                              : []
                  }
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
    return questions.map((q: Question): Question => {
        if (q.id !== targetId) return q;

        const newOptions =
            targetOptionIndex === -1
                ? [...q.options, newOption]
                : q.options.map((opt: string, i: number): string =>
                      i === targetOptionIndex ? newOption : opt
                  );

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
    return questions.reduce(
        (result: Question[], q: Question): Question[] =>
            q.id === targetId
                ? [...result, q, duplicateQuestion(newId, q)]
                : [...result, q],
        []
    );
}
