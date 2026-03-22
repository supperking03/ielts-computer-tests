const STORAGE_PREFIX = 'ielts-test-progress';
export const TEST_PROGRESS_UPDATED_EVENT = 'test-progress-updated';

const isBrowser = () => typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

const buildStorageKey = (scope, testId) => `${STORAGE_PREFIX}:${scope}:${testId}`;

const emitProgressUpdate = () => {
    if (!isBrowser()) {
        return;
    }

    window.dispatchEvent(new CustomEvent(TEST_PROGRESS_UPDATED_EVENT));
};

export const loadTestProgress = (scope, testId) => {
    if (!isBrowser()) {
        return null;
    }

    try {
        const rawValue = window.localStorage.getItem(buildStorageKey(scope, testId));
        return rawValue ? JSON.parse(rawValue) : null;
    } catch (error) {
        console.error('Failed to load test progress', error);
        return null;
    }
};

export const saveTestProgress = (scope, testId, progress) => {
    if (!isBrowser()) {
        return;
    }

    try {
        window.localStorage.setItem(buildStorageKey(scope, testId), JSON.stringify(progress));
        emitProgressUpdate();
    } catch (error) {
        console.error('Failed to save test progress', error);
    }
};

export const clearTestProgress = (scope, testId) => {
    if (!isBrowser()) {
        return;
    }

    try {
        window.localStorage.removeItem(buildStorageKey(scope, testId));
        emitProgressUpdate();
    } catch (error) {
        console.error('Failed to clear test progress', error);
    }
};

export const countAnsweredQuestions = (answers = []) =>
    answers.filter((answer) => typeof answer === 'string' && answer.trim() !== '').length;
