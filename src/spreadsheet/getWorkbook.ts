function getWorkbook(spreadSheetKey: string) {
  let retries = 0;
  while (retries < 3) {
    try {
      return SpreadsheetApp.openById(spreadSheetKey!);
    } catch (e) {
      if (
        (e as Error).message ===
          "リクエストされたドキュメントにアクセスする権限がありません。" ||
        (e as Error).message ===
          "You do not have permission to access the requested document."
      ) {
        throw new Error(
          `${
            (e as Error).message
          }\n      権限がないスプレッドシート: https://docs.google.com/spreadsheets/d/${spreadSheetKey}`
        );
      } else {
        console.warn(`失敗しました。リトライします。: ${retries + 1}回目`, e);
        Utilities.sleep(5000);
        retries++;
      }
    }
  }

  throw new Error(
    `${retries}回リトライしましたが、スプレッドシートを開けませんでした。\n      対象スプレッドシート: https://docs.google.com/spreadsheets/d/${spreadSheetKey} `
  );
}
