#!/usr/bin/env node

const child_process = require("child_process");

console.log("Running the benchmark");
const tsCompilers = ["ts", "babel", "swc", "esbuild"];

const testRuns = 5;

const results = tsCompilers.map((tsCompiler) => {
  console.log(`Starting ${testRuns} runs for ${tsCompiler}`);
  const compilationTimes = Array.from({ length: testRuns }).map(() =>
    measureCompilationTime(tsCompiler),
  );
  const averageCompilationTime =
    compilationTimes.reduce((sum, time) => sum + time, 0) / testRuns;
  console.log(
    `Benchmark for ${tsCompiler} done (avg time ${averageCompilationTime} ms)`,
  );

  return {
    tsCompiler,
    compilationTimes,
    averageCompilationTime,
  };
});

console.log("Results", results);

/**
 * Returns the duration of the compilation in miliseconds
 *
 * @param {string} tsCompiler
 */
function measureCompilationTime(tsCompiler) {
  console.log("Clearing the dist directory");
  child_process.execSync("rm dist -rf");
  console.log("Done, beginning compilation");

  const startTime = process.hrtime();
  child_process.execSync(`TS_COMPILER=${tsCompiler} npm run build`);
  const duration = process.hrtime(startTime);
  console.log("Compilation done");

  return duration[0] * 1000 + duration[1] / 1e6;
}
