const STORAGE_PREFIX = 'ielts-test-progress';
export const TEST_PROGRESS_UPDATED_EVENT = 'test-progress-updated';
export const TEST_PROGRESS_STORAGE_PREFIX = STORAGE_PREFIX;

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

const parseStoredKey = (key) => {
    if (!key.startsWith(`${STORAGE_PREFIX}:`)) {
        return null;
    }

    const [, scope, ...rest] = key.split(':');
    const testId = rest.join(':');

    if (!scope || !testId) {
        return null;
    }

    return { scope, testId };
};

const normalizeTimestamp = (value) => {
    const parsed = value ? new Date(value).getTime() : 0;
    return Number.isFinite(parsed) ? parsed : 0;
};

export const listStoredTestProgress = () => {
    if (!isBrowser()) {
        return [];
    }

    const entries = [];

    try {
        for (let index = 0; index < window.localStorage.length; index += 1) {
            const key = window.localStorage.key(index);
            if (!key) {
                continue;
            }

            const parsedKey = parseStoredKey(key);
            if (!parsedKey) {
                continue;
            }

            const rawValue = window.localStorage.getItem(key);
            if (!rawValue) {
                continue;
            }

            const value = JSON.parse(rawValue);
            entries.push({
                scope: parsedKey.scope,
                testId: parsedKey.testId,
                progress: value
            });
        }
    } catch (error) {
        console.error('Failed to list test progress', error);
        return [];
    }

    return entries;
};

export const replaceStoredTestProgress = (entries = []) => {
    if (!isBrowser()) {
        return;
    }

    try {
        const keysToRemove = [];

        for (let index = 0; index < window.localStorage.length; index += 1) {
            const key = window.localStorage.key(index);
            if (key && key.startsWith(`${STORAGE_PREFIX}:`)) {
                keysToRemove.push(key);
            }
        }

        keysToRemove.forEach((key) => window.localStorage.removeItem(key));

        entries.forEach((entry) => {
            if (!entry?.scope || !entry?.testId) {
                return;
            }

            window.localStorage.setItem(
                buildStorageKey(entry.scope, entry.testId),
                JSON.stringify(entry.progress || {})
            );
        });

        emitProgressUpdate();
    } catch (error) {
        console.error('Failed to replace test progress', error);
    }
};

export const mergeTestProgressEntries = (localEntries = [], remoteEntries = []) => {
    const merged = new Map();

    [...remoteEntries, ...localEntries].forEach((entry) => {
        if (!entry?.scope || !entry?.testId) {
            return;
        }

        const key = `${entry.scope}:${entry.testId}`;
        const existing = merged.get(key);

        if (!existing) {
            merged.set(key, entry);
            return;
        }

        const existingTime = Math.max(
            normalizeTimestamp(existing.progress?.updatedAt),
            normalizeTimestamp(existing.progress?.completedAt)
        );
        const nextTime = Math.max(
            normalizeTimestamp(entry.progress?.updatedAt),
            normalizeTimestamp(entry.progress?.completedAt)
        );

        if (nextTime > existingTime) {
            merged.set(key, entry);
            return;
        }

        if (nextTime === existingTime) {
            const existingAnswered = existing.progress?.answeredCount || 0;
            const nextAnswered = entry.progress?.answeredCount || 0;

            if (nextAnswered >= existingAnswered) {
                merged.set(key, entry);
            }
        }
    });

    return Array.from(merged.values());
};
