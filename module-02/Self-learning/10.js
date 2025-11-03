//* Binning (Resampling) Time Series Data
// Goal: Group (or "bin") all events into 30-minute time windows based on their timestamps.

//? Input
const events = [
  { timestamp: "2025-10-22T10:01:00Z", type: "click" },
  { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
  { timestamp: "2025-10-22T10:14:00Z", type: "click" },
  { timestamp: "2025-10-22T10:31:00Z", type: "click" },
  { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
  { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];

//* Step 1: Use reduce() to group events by 30-minute intervals
const binnedEvents = events.reduce((bins, event) => {
  // Convert event timestamp to Date
  const date = new Date(event.timestamp);

  // Extract hour and minute
  const hour = date.getUTCHours();
  const minute = date.getUTCMinutes();

  //  Determine which 30-min bin this falls into
  // If minute < 30 → 0, else → 30
  const binStartMinute = minute < 30 ? 0 : 30;

  //  Create a normalized bin time like "2025-10-22T10:00:00.000Z"
  const binStartTime = new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), hour, binStartMinute, 0, 0)
  ).toISOString();

  //  Initialize the bin if it doesn't exist yet
  if (!bins[binStartTime]) {
    bins[binStartTime] = { total: 0 };
  }

  //  Add one event to that bin’s count
  bins[binStartTime].total += 1;

  // Return updated bins object
  return bins;
}, {});

//  Step 2: Print the final grouped (binned) data
console.log(binnedEvents);
