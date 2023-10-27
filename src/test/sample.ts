function testSample() {
  console.log("run test sample");
  test1();
  console.log("end test sample");

  function test1() {
    console.log("テスト概要");
    const data = "テストデータ"
    const result = sample(data)
    const expect = "テストデータ+expect"

    assertEqual(result, expect)
  }
}

function sample(txt: string) {
  return txt + "+result"
}