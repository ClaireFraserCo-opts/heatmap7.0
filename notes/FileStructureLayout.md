heatmap7.0/
│
├── build/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── HeatmapComponent.jsx       # Main heatmap component, using D3.js for rendering
│   │   ├── Grid.jsx                    # Grid component, styled with Styled Components or Emotion
│   │   ├── Tooltip.jsx                 # Tooltip component, consider using react-tooltip
│   │   ├── SettingsComponent.jsx       # Settings component for user preferences
│   │   ├── ColorUtils.js               # Utility functions for color calculations and scales
│   │
│   ├── utils/
│   │   ├── fetchData.js                # Fetch data utility
│   │   ├── processData.js              # Data processing utility, using Lodash
│   │   ├── fetchData.test.js           # Tests for fetchData.js
│   │   ├── processData.test.js         # Tests for processData.js
│   │
│   ├── App.css                         # General application styles
│   ├── index.css                       # Index-specific styles
│   ├── App.js                          # Main application entry
│   ├── index.js                        # Entry point for React
│   ├── reportWebVitals.js              # Web Vitals reporting
│   └── setupTests.js                   # Test setup file
│
├── package.json
├── README.md
├── processFiles.js                    # Script for processing files
└── eslint.config.mjs                  # ESLint configuration
