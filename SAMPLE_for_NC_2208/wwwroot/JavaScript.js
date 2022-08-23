function onColumnDataBound(column, args) {
    if (args.rowObject.CategoryName == "調味料") {
        args.cellInfo.border = "red";
        args.cellInfo.borderBottomWidth = 2;
        args.cellInfo.borderTopWidth = 2;
        args.cellInfo.borderRightWidth = 2;
        args.cellInfo.borderLeftWidth = 2;
    } else {
        args.cellInfo.borderBottomWidth = 0;
        args.cellInfo.borderTopWidth = 0;
        args.cellInfo.borderRightWidth = 0;
        args.cellInfo.borderLeftWidth = 0;
    }
}
igRegisterScript("onColumnDataBound", onColumnDataBound, false);