function assertEqual(result: any, expected: any) {
  testCount++;
  if (JSON.stringify(result) === JSON.stringify(expected)) {
    testPassCount++;
    console.log("PASS");
  } else {
    testFailCount++;
    console.error("FAIL");

    for (let key in result) {
      if (JSON.stringify(result[key]) != JSON.stringify(expected[key])) {
        for (let i = 0; i < result[key].length; i++) {
          if (
            JSON.stringify(result[key][i]) != JSON.stringify(expected[key][i])
          ) {
            console.error("result: ", result[key][i]);
            console.error("expected: ", expected[key][i]);
          }
        }
      }
    }
  }
}
