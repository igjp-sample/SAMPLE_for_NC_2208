function onColumnDataBound(column, args) {
    if (args.rowObject.CategoryName == "調味料") {
        args.cellInfo.border = "red";
        args.cellInfo.borderBottomWidth = 2;
        args.cellInfo.borderTopWidth = 2;
        args.cellInfo.borderRightWidth = 2;
        args.cellInfo.borderLeftWidth = 2;
    }
}
igRegisterScript("onColumnDataBound", onColumnDataBound, false);