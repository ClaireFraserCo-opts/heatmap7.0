# Step 1 Tasks

The main tasks for Step 1 are:

1. **Load JSON files containing utterance data:**  
   The current implementation fetches the file list and the content of selected files using Axios, which satisfies the requirement to load JSON files.

2. **Parse and structure the data for easy access:**  
   The JSON data is fetched and stored in the state, and the Heatmap component receives this data as a prop for further processing.

3. **Ensure start and end times are rounded to the nearest second:**  
   This specific step is not explicitly addressed in the current logic. If the data contains start and end times for utterances, they need to be processed to round these times to the nearest second.

4. **Word frequencies and the number of frequent words:**  
   This part is mentioned as being obtained from Dimitrius's container. If this processing is done elsewhere, ensure that this step is integrated correctly into the data preparation process.

## Expected Outcomes

This setup ensures that:

1. JSON files are loaded and their contents are fetched.
2. Utterance data is processed to round start and end times to the nearest second.
3. The processed data is passed to the Heatmap component for visualization.
