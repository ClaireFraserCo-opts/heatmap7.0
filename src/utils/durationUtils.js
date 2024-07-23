// durationUtils.js
export const timeToSeconds = (timeStr) => {
    const [hours, minutes, seconds] = timeStr.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
};

export const secondsToTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

export const calculateDurations = (utterances) => {
    if (!utterances.length) return { totalSilenceDuration: '00:00:00', totalSessionDuration: '00:00:00' };

    // Sort utterances by start time
    utterances.sort((a, b) => a.start - b.start);

    // Calculate silence durations
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
