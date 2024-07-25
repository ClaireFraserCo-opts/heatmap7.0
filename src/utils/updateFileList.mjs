import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import _ from 'lodash';  // For convenience with data manipulation

// Define the file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, '..', '..', 'public', 'data');
const filePath = path.join(dataDir, 'heatmapDataList.json'); // Update to heatmapDataList.json


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

// Function to normalize words for consistent comparison
const normalizeWord = (word) =>
  word.toLowerCase()
      .replace(/^[.,/#!$%^*;:{}=\-_~()]+|[.,/#!$%^*;:{}=\-_~()]+$/g, '')
      .replace(/'s$/g, '');

// Determine the type of file based on its name
const determineFileType = (fileName) => fileName.endsWith('_tx.json') ? 'tx' : 'pretty';

// Calculate silence and session durations from utterances
const calculateDurations = (utterances) => {
  // Implement duration calculation logic here
  return {};
};

// Calculate the difference in seconds between two times
const timeDifferenceInSeconds = (startTime, endTime) => {
  const start = new Date(`1970-01-01T${startTime}Z`);
  const end = new Date(`1970-01-01T${endTime}Z`);
  return (end - start) / 1000;
};

// Extract top words by speaker from the content
const extractTopWordsBySpeaker = (content) => {
  const words = content.words || [];
  const speakerWords = _.groupBy(words, 'speaker');

  const speakerTopWords = {};
  const speakerMostUsedWord = {};

  for (const [speaker, wordList] of Object.entries(speakerWords)) {
    const filteredWords = wordList
      .map(word => normalizeWord(word.text))
      .filter(word => !stopWords.has(word) && word.length > 0);

    const wordCounts = _.countBy(filteredWords);
    const filteredWordCounts = _.pickBy(wordCounts, count => count > 2);
    const sortedWords = _.sortBy(Object.keys(filteredWordCounts), word => -filteredWordCounts[word]);
    const topWords = sortedWords.slice(0, 25);

    const mostUsedWord = sortedWords.length > 0 ? sortedWords[0] : null;

    speakerTopWords[speaker] = topWords;
    speakerMostUsedWord[speaker] = mostUsedWord;
  }

  return { speakerTopWords, speakerMostUsedWord };
};

// Generate heatmap data based on utterances and top words
const generateHeatmapData = (utterances, speakerTopWords, speakerMostUsedWord) => {
  const heatmapData = [];
  const wordFrequencies = {};

  utterances.forEach(utterance => {
    const words = utterance.text.split(/\s+/).map(word => normalizeWord(word)).filter(word => !stopWords.has(word) && word.length > 0);
    const counts = _.countBy(words);

    Object.entries(counts).forEach(([word, count]) => {
      wordFrequencies[word] = (wordFrequencies[word] || 0) + count;
    });
  });

  utterances.forEach(utterance => {
    const startTime = utterance.start_time;
    const endTime = utterance.end_time;
    const speaker = utterance.speaker;
    const text = utterance.text;
    const duration = timeDifferenceInSeconds(startTime, endTime);

    const words = text.split(/\s+/).map(word => normalizeWord(word)).filter(word => !stopWords.has(word) && word.length > 0);
    const wordCounts = _.countBy(words);

    const colorIntensity = word => speakerTopWords[speaker]?.find(w => w === word) ? 1 : 0;

    const cells = words.map(word => ({
      word,
      count: wordCounts[word],
      color: `rgba(0, 0, 255, ${colorIntensity(word)})`,
      isTopWord: speakerTopWords[speaker]?.includes(word),
      markX: word === speakerMostUsedWord[speaker] ? 'X' : ' '
    }));

    heatmapData.push({
      startTime,
      endTime,
      speaker,
      duration,
      cells
    });
  });

  return heatmapData;
};

// Function to create the file index
const createFileIndex = () => {
  const index = [];

  const files = fs.readdirSync(dataDir);
  files.forEach(file => {
      if (file.endsWith('.json') && file !== 'fileIndex.json') {
          const filePath = path.join(dataDir, file);
          const stats = fs.statSync(filePath);

          index.push({
              fileName: file,
              filePath: filePath,
              lastModified: stats.mtime.toISOString(),
              size: stats.size
          });
      }
  });

  const indexPath = path.join(dataDir, 'fileIndex.json');
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));
  console.log('File index created successfully.');
};

// Function to handle reading JSON files safely
const readJSONFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    } else if (error.name === 'SyntaxError') {
      console.error(`File ${filePath} is corrupted or empty. Initializing with an empty array.`);
      return [];
    } else {
      console.error(`Error reading file ${filePath}:`, error);
      return [];
    }
  }
};

// Function to handle writing JSON files safely
const writeJSONFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error(`Error writing file ${filePath}:`, error);
  }
};

// Main function to update heatmapDataList.json with metadata and derived data
const updateFileList = () => {
  try {
    if (!fs.existsSync(dataDir)) {
      throw new Error(`Directory not found: ${dataDir}`);
    }

    const files = fs.readdirSync(dataDir);
    const jsonFiles = files.filter(file => file.endsWith('.json') && file !== 'heatmapDataList.json');

    const fileList = jsonFiles.map(file => {
      const filePath = path.join(dataDir, file);
      const stats = fs.statSync(filePath);
      const content = readJSONFile(filePath);  // Use safe read function
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
      let speakerMostUsedWord = {};
      let heatmapData = [];

      if (fileType === 'tx') {
        const utterances = content.utterances || [];
        contentMetadata = calculateDurations(utterances);
        const topWordsData = extractTopWordsBySpeaker(content);
        speakerTopWords = topWordsData.speakerTopWords;
        speakerMostUsedWord = topWordsData.speakerMostUsedWord;
        heatmapData = generateHeatmapData(utterances, speakerTopWords, speakerMostUsedWord);
      } else if (fileType === 'pretty') {
        contentMetadata = {
          duration: content.audio_duration || 0,
          speakerInfo: Array.from(new Set((content.words || []).map(word => word.speaker))),
          summary: content.summary || '',
          wordCount: (content.words || []).length,
          sentimentAnalysisResults: content.sentiment || {},
          entities: content.entities || [],
          autoHighlights: content.highLights || []
        };
        const topWordsData = extractTopWordsBySpeaker(content);
        speakerTopWords = topWordsData.speakerTopWords;
        speakerMostUsedWord = topWordsData.speakerMostUsedWord;
        heatmapData = generateHeatmapData(content.utterances || [], speakerTopWords, speakerMostUsedWord);
      }

      return {
        ...fileMetadata,
        ...contentMetadata,
        topWords: speakerTopWords,
        heatmapData: heatmapData
      };
    });

    writeJSONFile(filePath, fileList); // Use safe write function
    console.log('heatmapDataList.json has been updated successfully.');
  } catch (error) {
    console.error('Error updating heatmapDataList.json', error);
  }
};

// Execute the update function
updateFileList();
createFileIndex();

// The actual files
// File Type 1 (tx):
// •	"01 Shlien Mr. Rob_pretty_tx.json"
// •	"Access Your Anger - Hayley Ep 5_pretty_tx.json"
// •	"Carl Rogers and Gloria - Counselling 1965 Full Session_pretty_tx.json"
// •	"Carl Rogers Counsels An Individual On Anger_pretty_tx.json"
// •	"Carl Rogers on Marriage- An Interview with John and Nancy_pretty.json"
// •	"Celebrate Your Goodness - Hayley Ep 4_pretty.json"
// •	"Daniel (code name) with Rogers 1983 - public_pretty.json"
// •	"Discover Your Hidden Strength - Hayley Ep 7_pretty.json"
// •	"Kathy Interview by Carl Rogers_pretty.json"
// •	"Listen To Your Inner Child - Hayley Ep 6_pretty.json"
// •	"LIVE Narcissism Therapy Session - Evaluation_pretty.json"
// •	"Margaret and Rogers before a group_pretty.json"
// •	"Mr. Lin 1st session circa 1955_pretty.json"
// •	"Mr. Lin 2nd session circa 1955 with Rogers' Comments_pretty.json"
// •	"Mr. VAC 2 SESSIONS w-o silences 1959-1960_pretty.json"
// •	"Mrs. P.S. 1st session 1960_pretty.json"
// •	"Mrs. ROC side 1_pretty.json"
// •	"Mrs. ROC side 2_pretty.json"
// •	"Philippe with Rogers_pretty.json"
// •	"Rogers with Loretta_pretty.json"
// •	"Rogers, Carl (1980) - Sylvia- The Struggle for Self-Acceptance_pretty.json"
// •	"Rogers, Carl R. (1960) - The Client_pretty.json"
// •	"Session 2 with Abe from Cognitive Behavioral Therapy： Basics and Beyond, 3rd Ed_pretty.json"
// •	"STEVE WITH ROGERS_pretty.json"
// •	"The Inner World of Counseling with Carl Rogers (1980) Part 1_pretty.json"
// •	"The Inner World of Counseling with Carl Rogers (1980) Part 2_pretty.json"
// •	"Vivian and Rogers 1984 with comments shared_pretty.json"
// File Type 2 (No tx):
// •	"01 Shlien Mr. Rob.json"
// •	"Access Your Anger - Hayley Ep 5.json"
// •	"Carl Rogers and Gloria - Counselling 1965 Full Session.json"
// •	"Carl Rogers Counsels An Individual On Anger.json"
// •	"Carl Rogers on Marriage- An Interview with John and Nancy.json"
// •	"Celebrate Your Goodness - Hayley Ep 4.json"
// •	"Daniel (code name) with Rogers 1983 - public.json"
// •	"Discover Your Hidden Strength - Hayley Ep 7.json"
// •	"Kathy Interview by Carl Rogers.json"
// •	"Listen To Your Inner Child - Hayley Ep 6.json"
// •	"LIVE Narcissism Therapy Session - Evaluation.json"
// •	"Margaret and Rogers before a group.json"
// •	"Mr. Lin 1st session circa 1955.json"
// •	"Mr. Lin 2nd session circa 1955 with Rogers' Comments.json"
// •	"Mr. VAC 2 SESSIONS w-o silences 1959-1960.json"
// •	"Mrs. P.S. 1st session 1960.json"
// •	"Mrs. ROC side 1.json"
// •	"Mrs. ROC side 2.json"
// •	"Philippe with Rogers.json"
// •	"Rogers with Loretta.json"
// •	"Rogers, Carl (1980) - Sylvia- The Struggle for Self-Acceptance.json"
// •	"Rogers, Carl R. (1960) - The Client.json"
// •	"Session 2 with Abe from Cognitive Behavioral Therapy： Basics and Beyond, 3rd Ed.json"
// •	"STEVE WITH ROGERS.json"
// •	"The Inner World of Counseling with Carl Rogers (1980) Part 1.json"
// •	"The Inner World of Counseling with Carl Rogers (1980) Part 2.json"
// •	"Vivian and Rogers 1984 with comments shared.json"
