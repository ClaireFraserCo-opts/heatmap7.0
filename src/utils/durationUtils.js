// src/utils/durationUtils.js

/**
 * Converts a time string in HH:MM:SS format to total seconds.
 * @param {string} timeStr - Time in HH:MM:SS format.
 * @returns {number} - Total time in seconds.
 */
export const timeToSeconds = (timeStr) => {
    const [hours, minutes, seconds] = timeStr.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
};

/**
 * Converts a time duration in seconds to HH:MM:SS format.
 * @param {number} seconds - Time duration in seconds.
 * @returns {string} - Time in HH:MM:SS format.
 */
export const secondsToTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

/**
 * Calculates total silence duration and total session duration from utterances.
 * @param {Array} utterances - List of utterance objects, each with `start` and `end` properties.
 * @returns {Object} - An object containing `totalSilenceDuration` and `totalSessionDuration` in HH:MM:SS format.
 */
export const calculateDurations = (utterances) => {
    if (utterances.length === 0) return { totalSilenceDuration: '00:00:00', totalSessionDuration: '00:00:00' };

    // Ensure utterances are sorted by start time
    utterances.sort((a, b) => a.start - b.start);

    // Calculate total silence duration
    let totalSilenceDuration = 0;
    for (let i = 1; i < utterances.length; i++) {
        const silence = utterances[i].start - utterances[i - 1].end;
        if (silence > 0) {
            totalSilenceDuration += silence;
        }
    }

    // Calculate total session duration
    const sessionStart = utterances[0].start;
    const sessionEnd = utterances[utterances.length - 1].end;
    const totalSessionDuration = sessionEnd - sessionStart;

    return {
        totalSilenceDuration: secondsToTime(totalSilenceDuration),
        totalSessionDuration: secondsToTime(totalSessionDuration),
    };
};
