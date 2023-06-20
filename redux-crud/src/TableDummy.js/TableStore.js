import { configureStore } from "@reduxjs/toolkit";
import TableReducer from './TableComponents/TableReducer'

const TableStore = configureStore({
  reducer: {
    tablelist: TableReducer,
  },
});

export default TableStore;