// Function to generate heatmap data
const generateHeatmapData = (utterances) => {
    const heatmapData = utterances.map((utterance, index) => {
      return {
        x: index * 10,  // Example x coordinate
        y: utterance.density * 10,  // Example y coordinate based on density
        value: utterance.score // Heatmap intensity based on score
      };
    });
  
    return {
      max: Math.max(...utterances.map(u => u.score)),
      data: heatmapData
    };
  };
  
  // Example utterances data (You will fetch this data dynamically)
  const exampleUtterances = [
    { density: 6.3, score: 247 },
    { density: 8, score: 64 },
    { density: 10, score: 50 }
  ];
  
  // Generate heatmap data
  const heatmapData = generateHeatmapData(exampleUtterances);
  
  // Initialize heatmap instance
  const heatmapInstance = h337.create({
    container: document.getElementById('heatmapContainer'),
    radius: 20
  });
  
  // Set heatmap data
  heatmapInstance.setData(heatmapData);
  