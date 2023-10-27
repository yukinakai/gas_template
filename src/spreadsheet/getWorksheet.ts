function getWorksheet(
  workbook: GoogleAppsScript.Spreadsheet.Spreadsheet,
  sheetName: string
) {
  const worksheet = workbook.getSheetByName(sheetName);
  if (!worksheet) {
    throw new Error(`シートが見つかりません。\nシート名: ${sheetName}`);
  }
  // フィルターが存在する場合、フィルターを削除します。
  const filter = worksheet!.getFilter();
  if (filter) {
    filter.remove();
  }

  return worksheet;
}
