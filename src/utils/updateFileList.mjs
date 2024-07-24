import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import _ from 'lodash';  // For convenience with data manipulation

// Define the file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Adjust the path to point to the correct directory
const dataDir = path.join(__dirname, '..', '..', 'public', 'data'); // Pointing to the 'data' directory under 'public'
const filePath = path.join(dataDir, 'fileList.json');

// Define a refined list of stop words for therapy session analysis
const stopWords = new Set([
  // General stop words
  'a', 'an', 'the', 'and', 'but', 'or', 'nor', 'for', 'yet', 'so',
  'at', 'by', 'with', 'on', 'in', 'of', 'to', 'from', 'as', 'up', 'down',
  'out', 'over', 'under', 'between', 'through', 'about', 'against', 'during',
  'before', 'after', 'above', 'below', 'around', 'among', 'across', 'behind',
  'am', 'are', 'is', 'was', 'were', 'been', 'be', 'has', 'have', 'had', 'having',
  'will', 'shall', 'should', 'would', 'can', 'could', 'may', 'might', 'must',
  'its', 'it', 'him', 'her', 'his', 'hers', 'its', 'their', 'them', 'they', 'those',
  'these', 'this', 'that', 'there', 'where', 'here', 'when', 'why', 'how', 'what',
  'which', 'who', 'whom', 'whose', 'my', 'your', 'his', 'her', 'its', 'our', 'their',
  'yours', 'hers', 'ours', 'theirs', 'me', 'you', 'he', 'she', 'it', 'we', 'they',
  'myself', 'yourself', 'himself', 'herself', 'itself', 'ourselves', 'themselves',
  'each', 'every', 'some', 'any', 'one', 'none', 'all', 'both', 'either', 'neither',
  'few', 'many', 'several', 'such', 'more', 'most', 'less', 'least', 'own', 'other',
  'another', 'than', 'then', 'that', 'these', 'those', 'what', 'where', 'which',
  'who', 'whom', 'why', 'how', 'if', 'whether', 'because', 'although', 'unless',
  'until', 'while', 'since', 'even', 'though', 'so', 'such',

  // Contractions and informal terms
  'um', 'uh', 'don\'t', 'doesn\'t', 'didn\'t', 'wasn\'t', 'weren\'t',
  'hasn\'t', 'haven\'t', 'hadn\'t', 'won\'t', 'wouldn\'t', 'shouldn\'t', 'mightn\'t',
  'mustn\'t', 'that\'s', 'it\'s', 'there\'s', 'here\'s', 'what\'s', 'who\'s', 'where\'s',
  'how\'s', 'let\'s', 'that\'d', 'could\'ve', 'should\'ve', 'would\'ve', 'might\'ve',
  'must\'ve', 'aren\'t', 'isn\'t', 'wasn\'t', 'weren\'t', 'hasn\'t', 'haven\'t', 'hadn\'t',

  // Common terms to filter out
  'just', 'really', 'very', 'quite', 'some', 'any', 'now', 'then', 'there', 'here',
  'so', 'that', 'which', 'who', 'what', 'how', 'where', 'when', 'why', 'if',
  'as', 'than', 'because', 'since', 'until', 'while', 'during', 'after', 'before',
  'over', 'under', 'around', 'among', 'within', 'without', 'up', 'down', 'left', 'right',
  'back', 'forward', 'again', 'once', 'twice', 'always', 'never', 'ever', 'often',
  'rarely', 'usually', 'sometimes', 'maybe', 'perhaps', 'possibly', 'likely', 'unlikely',
  'sure', 'certain', 'certainly', 'definitely', 'probably', 'possibly', 'seems', 'appears',

  // Filter out words that are too generic or less meaningful in the context of therapy
  'like', 'thing', 'things', 'people', 'person', 'time', 'way', 'fact', 'case', 
  'point', 'moment', 'situation', 'idea', 'part', 'question', 'answer', 'problem', 'solution',
  'topic', 'issue', 'discussion', 'conversation', 'speech', 'talk', 'statement', 'utterance',
  'you.', 'it.', 'um,', 'Um,', 'I', "I'm", 'not', 'something', 'much', 'sit', 'go', 'want', 'see', 'being',

  // Additional specific words from results
  'uh,', 'that.', 'me,', 'me.', "you're", "I've", "I'm",

   // Include more variations and contractions if needed
   'i', 'i\'m', 'i\'ve', 'you', 'you\'re', 'it\'s', 'don\'t', 'doesn\'t', 'didn\'t', 'wasn\'t', 'weren\'t', 'hasn\'t', 'haven\'t', 'hadn\'t', 'won\'t', 'wouldn\'t', 'shouldn\'t', 'mightn\'t', 'mustn\'t', 'that\'s', 'it\'s', 'there\'s', 'here\'s', 'what\'s', 'who\'s', 'where\'s', 'how\'s', 'let\'s', 'that\'d', 'could\'ve', 'should\'ve', 'would\'ve', 'might\'ve', 'must\'ve', 'aren\'t', 'isn\'t', 'wasn\'t', 'weren\'t', 'hasn\'t', 'haven\'t', 'hadn\'t',
   // General and common terms
   'the', 'and', 'but', 'or', 'for', 'with', 'on', 'in', 'at', 'by', 'to', 'from', 'as', 'up', 'down', 'out', 'over', 'under', 'between', 'through', 'about', 'against', 'during', 'before', 'after', 'above', 'below', 'around', 'among', 'across', 'behind', 'am', 'are', 'is', 'was', 'were', 'been', 'be', 'has', 'have', 'had', 'having', 'will', 'shall', 'should', 'would', 'can', 'could', 'may', 'might', 'must', 'its', 'it', 'him', 'her', 'his', 'hers', 'its', 'their', 'them', 'they', 'those', 'these', 'this', 'that', 'there', 'where', 'here', 'when', 'why', 'how', 'what', 'which', 'who', 'whom', 'whose', 'my', 'your', 'his', 'her', 'its', 'our', 'their', 'yours', 'hers', 'ours', 'theirs', 'me', 'you', 'he', 'she', 'it', 'we', 'they', 'myself', 'yourself', 'himself', 'herself', 'itself', 'ourselves', 'themselves', 'each', 'every', 'some', 'any', 'one', 'none', 'all', 'both', 'either', 'neither', 'few', 'many', 'several', 'such', 'more', 'most', 'less', 'least', 'own', 'other', 'another', 'than', 'then', 'that', 'these', 'those', 'what', 'where', 'which', 'who', 'whom', 'why', 'how', 'if', 'whether', 'because', 'although', 'unless', 'until', 'while', 'since', 'even', 'though', 'so', 'such',
   // Filter out words that are too generic or less meaningful
   'like', 'thing', 'things', 'people', 'person', 'time', 'way', 'fact', 'case', 'point', 'moment', 'situation', 'idea', 'part', 'question', 'answer', 'problem', 'solution', 'topic', 'issue', 'discussion', 'conversation', 'speech', 'talk', 'statement', 'utterance', 'um', 'uh', 'something', 'much', 'sit', 'go', 'want', 'see', 'being'
]);

// Function to determine the file type based on the filename
const determineFileType = (fileName) => {
  return fileName.endsWith('_tx.json') ? 'tx' : 'pretty';
};

// Normalize words: convert to lowercase and remove leading/trailing punctuation
const normalizeWord = (word) => 
  word.toLowerCase()
      .replace(/^[.,/#!$%^*;:{}=\-_`~()]+|[.,/#!$%^*;:{}=\-_`~()]+$/g, '') // Remove leading/trailing punctuation
      .replace(/'s$/g, ''); // Remove possessive suffixes

// Function to extract top 25 most frequent words
const extractTopWordsBySpeaker = (content) => {
  const words = content.words || [];
  console.log('Words:', words); // Debugging: Print all words to ensure they are loaded

  // Group words by speaker
  const speakerWords = _.groupBy(words, 'speaker');

  const speakerTopWords = {};
  for (const [speaker, wordList] of Object.entries(speakerWords)) {
    // Normalize and filter out stop words
    const filteredWords = wordList
      .map(word => normalizeWord(word.text))
      .filter(word => !stopWords.has(word) && word.length > 0); // Ensure non-empty words

    console.log(`Filtered Words for ${speaker}:`, filteredWords); // Debugging: Print filtered words

    // Count word frequencies
    const wordCounts = _.countBy(filteredWords);

    // Filter out words that occur fewer than 3 times
    const filteredWordCounts = _.pickBy(wordCounts, count => count > 2);

    // Sort words by frequency
    const sortedWords = _.sortBy(Object.keys(filteredWordCounts), word => -filteredWordCounts[word]);
    const topWords = sortedWords.slice(0, 25); // Adjust the number of top words if needed

    console.log(`Top Words for ${speaker}:`, topWords); // Debugging: Print top words to verify extraction

    speakerTopWords[speaker] = topWords;
  }

  return speakerTopWords;
};

// Generate heatmap data (to be defined if needed)
const generateHeatmapData = (utterances, speakerTopWords) => {
  const heatmapData = [];

  // Initialize wordFrequencies and frequencyTable
  const wordFrequencies = {};
  const frequencyTable = {}; // You might need to populate this based on your data or analysis

  // Compute word frequencies from utterances
  utterances.forEach(utterance => {
    const words = utterance.text.split(/\s+/).map(word => normalizeWord(word)).filter(word => !stopWords.has(word) && word.length > 0);
    const counts = _.countBy(words);
    Object.entries(counts).forEach(([word, count]) => {
      if (wordFrequencies[word]) {
        wordFrequencies[word] += count;
      } else {
        wordFrequencies[word] = count;
      }
    });
  });

  // Compute frequencyTable if needed
  // You need to define or calculate this table based on your requirements

  utterances.forEach(utterance => {
    const startTime = utterance.start_time;
    const endTime = utterance.end_time;
    const speaker = utterance.speaker;
    const text = utterance.text;
    const duration = endTime - startTime;

    // Calculate the frequency of words in the current utterance
    const words = text.split(/\s+/).map(word => normalizeWord(word)).filter(word => !stopWords.has(word) && word.length > 0);
    const wordCounts = _.countBy(words);

    // Calculate word density if needed
    const density = calculateDensity(wordFrequencies, frequencyTable);

    // Determine color intensity and highlight the most frequent word
    const speakerWords = speakerTopWords[speaker] || [];
    const colorIntensity = word => speakerWords.find(w => w.word === word)?.count || 0;

    // Generate heatmap cells for the utterance
    const cells = []
    words.forEach(word => {
      if (colorIntensity(word) > 0) {
        cells.push({
          word,
          count: wordCounts[word],
          color: `rgba(0, 0, 255, ${colorIntensity(word) / 10})`, // Example color gradient
          isTopWord: word === speakerWords[0]?.word // Highlight the most frequent word
        });
      }
    });

    heatmapData.push({
      startTime: utterance.start_time,
      endTime: utterance.end_time,
      speaker: utterance.speaker,
      duration,
      density, // Include density if useful
      cells
    });
  });

  return heatmapData;
};


// Example function to calculate word density
const calculateDensity = (wordFrequencies, frequencyTable) => {
  const totalWords = Object.values(wordFrequencies).reduce((sum, count) => sum + count, 0);
  const score = Object.keys(wordFrequencies).reduce((sum, word) => sum + (frequencyTable[word] || 0) * wordFrequencies[word], 0);
  return totalWords > 0 ? score / totalWords : 0;
};

// Function to update the file list
const updateFileList = () => {
  try {
    // Check if the data directory exists
    if (!fs.existsSync(dataDir)) {
      throw new Error(`Directory not found: ${dataDir}`);
    }

    const files = fs.readdirSync(dataDir);
    const jsonFiles = files.filter(file => file.endsWith('.json') && file !== 'fileList.json');

    // Read each JSON file and collect necessary information
    const fileList = jsonFiles.map(file => {
      const filePath = path.join(dataDir, file);
      const stats = fs.statSync(filePath);

      // Parse the JSON content
      const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      // Determine the file type based on filename
      const fileType = determineFileType(file);

      let fileMetadata = {
        name: file,
        filePath: filePath,
        fileType: fileType,
        size: stats.size,
        lastModified: stats.mtime.toISOString(),
      };

      let contentMetadata = {};
      let speakerTopWords = {};
      let heatmapData = [];

      if (fileType === 'tx') {
        // Handle 'tx' files
        const utterances = content.utterances || [];
        const duration = utterances.length ? 
          Math.max(...utterances.map(u => u.end_time)) - Math.min(...utterances.map(u => u.start_time))
          : 0;
        const speakers = new Set(utterances.map(u => u.speaker));
        const totalUtterances = utterances.length;
        const totalWords = utterances.reduce((sum, u) => sum + u.text.split(/\s+/).length, 0);

        contentMetadata = {
          duration,
          speakerInfo: Array.from(speakers),
          totalUtterances,
          totalWords
        };

        // Extract top words and generate heatmap data
        speakerTopWords = extractTopWordsBySpeaker(content);
        heatmapData = generateHeatmapData(utterances, speakerTopWords);

      } else if (fileType === 'pretty') {
        // Handle 'pretty' files
        contentMetadata = {
          duration: content.audio_duration || 0,
          speakerInfo: Array.from(new Set((content.words || []).map(word => word.speaker))),
          summary: content.summary || '',
          wordCount: (content.words || []).length,
          sentimentAnalysisResults: content.sentiment || {},
          entities: content.entities || [],
          autoHighlights: content.highLights || []
        };

        // Extract top words and generate heatmap data
        speakerTopWords = extractTopWordsBySpeaker(content);
        heatmapData = generateHeatmapData(content.utterances || [], speakerTopWords);
      }

      return {
        ...fileMetadata,
        ...contentMetadata,
        topWords: speakerTopWords, // Include topWords in the output
        heatmapData: heatmapData // Include heatmap data if necessary
      }
    });

    // Write the updated file list to fileList.json, overwriting the file each time
    fs.writeFileSync(filePath, JSON.stringify(fileList, null, 2));
    console.log('fileList.json has been updated successfully.');
  } catch (error) {
    console.error('Error updating fileList.json', error);
  }
};

// Execute the function
updateFileList();
