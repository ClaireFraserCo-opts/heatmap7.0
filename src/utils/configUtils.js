// src/utils/configUtils.js

const config = {
    SUMMARY_LENGTH: 100,
    FREQUENT_WORDS: 10,
    PERSONA: 'default',
};

/**
 * Retrieves a configuration value by key.
 * @param {string} key - The key of the configuration setting.
 * @returns {*} - The value of the configuration setting.
 */
export function getConfig(key) {
    return config[key];
}
