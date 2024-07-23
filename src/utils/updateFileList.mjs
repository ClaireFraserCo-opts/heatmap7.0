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
  'that.', 'you.', 'it.', 'um,', 'Um,', 'I', "I'm", 'not', 'something', 'much', 'sit', 'go', 'want', 'see', 'being'
]);




// Function to determine the file type based on the filename
const determineFileType = (fileName) => {
  if (fileName.endsWith('_tx.json')) {
    return 'tx'; // File Type 1
  } else {
    return 'pretty'; // File Type 2 (or other types as necessary)
  }
};

// Function to extract top 25 most frequent words
const extractTopWords = (content) => {
  const words = content.words || [];
  console.log('Words:', words); // Debugging: Print all words to ensure they are loaded

  // Filter out stop words
  const filteredWords = words.filter(word => !stopWords.has(word.text.toLowerCase()));
  const wordCounts = _.countBy(filteredWords, 'text');
  const sortedWords = _.sortBy(Object.keys(wordCounts), word => -wordCounts[word]);
  const topWords = sortedWords.slice(0, 25);

  console.log('Top Words:', topWords); // Debugging: Print top words to verify extraction

  return topWords.map(word => {
    const occurrences = filteredWords.filter(w => w.text === word);
    return {
      word,
      count: wordCounts[word],
      occurrences: occurrences.map(o => ({ start: o.start, end: o.end }))
    };
  });
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
      
      // Extract top 25 words if applicable
      const topWords = fileType === 'pretty' ? extractTopWords(content) : [];

      return {
        name: file,
        filePath: filePath,
        fileType: fileType,
        size: stats.size,
        lastModified: stats.mtime.toISOString(),
        duration: content.audio_duration || 0,
        totalUtterances: (content.utterances || []).length,
        totalWords: (content.words || []).length,
        speakers: new Set((content.words || []).map(word => word.speaker)).size,
        topWords: topWords
      };
    });

    // Write the updated file list to fileList.json
    fs.writeFileSync(filePath, JSON.stringify(fileList, null, 2));
    console.log('fileList.json has been updated successfully.');
  } catch (error) {
    console.error('Error updating fileList.json:', error);
  }
};

// Execute the function
updateFileList();
