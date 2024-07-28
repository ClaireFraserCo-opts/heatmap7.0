// src/utils/validationUtils.js

export function validateUtterances(utterances) {
    if (!Array.isArray(utterances)) {
        throw new Error('Invalid input: utterances should be an array');
    }

    utterances.forEach(utterance => {
        if (!utterance.text || typeof utterance.text !== 'string') {
            throw new Error('Invalid utterance: text is missing or not a string');
        }
        if (typeof utterance.start !== 'number' || typeof utterance.end !== 'number') {
            throw new Error('Invalid utterance: start or end is not a number');
        }
    });
}

export function validateWords(words) {
    if (!Array.isArray(words)) {
        throw new Error('Invalid input: words should be an array');
    }

    words.forEach(word => {
        if (typeof word !== 'string') {
            throw new Error('Invalid word: not a string');
        }
    });
}
