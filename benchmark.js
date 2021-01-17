#!/usr/bin/env node

const child_process = require("child_process");

console.log("Running the benchmark");
const tsCompilers = ["ts", "babel", "swc", "esbuild"];

const testRuns = 1;

const variants = [
  ...tsCompilers.map((tsCompiler) => ({
    command: `TS_COMPILER=${tsCompiler} npm run build`,
    name: tsCompiler,
  })),
  {
    name: "esbuild without webpack",
    command: "npm run esbuild:prod",
  },
];

const results = variants.map(({ name, command }) => {
  console.log(`Starting ${testRuns} run(s) for ${name}`);
  const compilationTimes = Array.from({ length: testRuns }).map(() =>
    measureCompilationTime(command),
  );
  const averageCompilationTime =
    compilationTimes.reduce((sum, time) => sum + time, 0) / testRuns;
  console.log(
    `Benchmark for ${name} done (avg time ${averageCompilationTime} ms)`,
  );

  return {
    tsCompiler: name,
    compilationTimes,
    averageCompilationTime,
  };
});

console.log("Results", results);

/**
 * Returns the duration of the compilation in miliseconds
 *
 * @param {string} command
 */
function measureCompilationTime(command) {
  console.log("Clearing the dist directory");
  child_process.execSync("rm dist -rf");
  console.log("Done, beginning compilation");

  const startTime = process.hrtime();
  child_process.execSync(command);
  const duration = process.hrtime(startTime);
  console.log("Compilation done");

  return duration[0] * 1000 + duration[1] / 1e6;
}
