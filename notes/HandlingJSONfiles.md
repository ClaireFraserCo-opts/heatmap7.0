# Handling JSON Files

## Files Breakdown

1. ### JSON Data Files:

    - These contain the main data needed for the heatmap. Examples include:
        - `01 Shlien Mr. Rob.json`
        - `Access Your Anger - Hayley Ep 5.json`
        - `Carl Rogers and Gloria - Counselling 1965 Full Session.json`
    - These files contain utterances, speaker data, and possibly word frequencies.

2. ### fileList.json:

    - This file lists the names of the available data files. It's used for populating the dropdown menu or file selection interface, but it should not be part of the heatmap data.
    - Incorporate logic to filter out fileList.json, load the selected data files, and process them accordingly.