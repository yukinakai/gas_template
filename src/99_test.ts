let testCount = 0;
let testPassCount = 0;
let testFailCount = 0;
function test() {
  console.log("run test");

  testSample();

  console.log(`run ${testCount} tests`);
  console.log(`pass ${testPassCount} tests`);
  if (testFailCount > 0) {
    console.error(`fail ${testFailCount} tests`);
  } else {
    console.log(`fail ${testFailCount} tests`);
  }
  console.log("end test");
}
