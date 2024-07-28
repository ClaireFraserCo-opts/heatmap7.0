1. Type 1: tx Files
Structure:

json
Copy code

```json
        {
        "utterances": [
            {
            "speaker": "A",
            "text": "You. The module on the inner critic, it's cracked everything open.",
            "start": 330,
            "end": 5790,
            "confidence": 0.8125563636363634,
            "word_count": 11,
            "frequent_wc_base": 8,
            "score": 36,
            "density": 3.272727272727273,
            "percentile": 0
            }
            // more utterances
        ],
        "words": [
            {
            "speaker": "A",
            "text": "You.",
            "start": 330,
            "end": 880,
            "confidence": 0.62,
            "score": 0
            }
            // more words
        ]
        }
```

Key Points:

utterances: Provides details about each utterance, including start and end times, confidence, and other metrics.
words: Contains details about individual words, including start and end times, confidence, and scores.
Usage:

Detailed Analysis: Useful for detailed analysis where you need to examine individual utterances and words, their timings, confidence scores, and other metrics.
Text Processing: You can use this data to derive various statistics or features related to text and speech.
Examples:

Calculating total word count or density.
Analyzing confidence trends across utterances.
2. Type 2: pretty Files
Structure:

json
Copy code

```json
        {
        "language_code": "en_us",
        "audio_url": "https://cdn.assemblyai.com/upload/3f6feace-fc24-456a-9daa-bee370c9f3dd",
        "text": "You. The module on the inner critic, …",
        "words": [
            {
            "text": "You.",
            "start": 330,
            "end": 880,
            "confidence": 0.62,
            "speaker": "A"
            }
            // more words
        ],
        "utterances": [
            {
            "text": "You. The module on the inner critic, …",
            "start": 330,
            "end": 5790,
            "confidence": 0.8125563636363634,
            "speaker": "A",
            "words": [
                {
                "text": "You.",
                "start": 330,
                "end": 880,
                "confidence": 0.62,
                "speaker": "A"
                }
                // more words
            ]
            }
            // more utterances
        ],
        "summary": {
            "FamilyAndRelationships>Bereavement": 1.0,
            // other categories
        },
        "sentiment_analysis_results": [
            {
            "text": "You.",
            "start": 330,
            "end": 880,
            "confidence": 0.546256959438324,
            "speaker": "A",
            "sentiment": "NEUTRAL"
            }
            // more sentiment analysis results
        ]
        }
```

Key Points:

language_code: Language of the text.
audio_url: URL to the audio file.
text: Transcription of the entire text.
words: Individual words with additional metadata.
utterances: Detailed utterances with embedded words.
summary: Summarized data, possibly categorized.
sentiment_analysis_results: Sentiment analysis results for individual words or phrases.
Usage:

Comprehensive View: Provides a holistic view including metadata, full text, and detailed analysis.
Summary and Sentiment: Useful for generating summaries, sentiment analysis, and other high-level insights.
Examples:

Creating a detailed report with audio URL and full text.
Analyzing sentiment trends and summarizing key topics.
3. Type 3: fileList
Structure:

json
Copy code

```json
[
  "01 Shlien Mr. Rob.json",
  "01 Shlien Mr. Rob_pretty.json",
  "01 Shlien Mr. Rob_pretty_tx.json",
  "Access Your Anger - Hayley Ep 5.json",
  "Access Your Anger - Hayley Ep 5_pretty.json",
  "Access Your Anger - Hayley Ep 5_pretty_tx.json"
]
```

Key Points:

Array of File Names: Lists the names of other JSON files in the data folder.
Usage:

Indexing: Acts as an index to locate and access the relevant data files.
Data Management: Useful for iterating over available files to load and process data.
Examples:

Iterating through file names to load data.
Automating the processing of multiple datasets.
Integration and Processing Steps
Load File List:

Use the fileList to get the names of all data files.
Process Files:

Based on the file type (Type 1 or Type 2), extract and process data accordingly.
For detailed analysis, use Type 1 files.
For comprehensive metadata and additional information, use Type 2 files.
Analyze Data:

Perform the necessary analysis (e.g., calculating durations, color coding) using the extracted data from Type 1 or Type 2 files.
Visualization:

Generate visualizations (e.g., heatmaps) using the processed data, ensuring colors and durations are accurately represented.
By understanding and properly utilizing these file types, you can effectively manage and analyze your data.