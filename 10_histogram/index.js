// Build a Histogram
// Don't use a Nested Loop

/**
 * @param {number[]} digits
 * @return {number[]}
 */

const histogram = (data, buckets, min, max) => {
  const counts = {};
  const output = Array(buckets).fill(0);
  data.forEach(num => {
    //Count Sort Bit
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  });

  const bucketWidth = (max - min) / buckets;
  for (num in counts) {
    let startFrom = 0;
    for (let i = startFrom; i < buckets; i++) {
      const bucketBottom = i * bucketWidth + min;
      const bucketTop = (i + 1) * bucketWidth + min;
      if (num >= bucketBottom && num < bucketTop) {
        output[i] += counts[num];
        startFrom = i;
        break;
      }
    }
  }
  return output;
};

module.exports = { histogram };
