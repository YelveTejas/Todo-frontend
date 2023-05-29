import { AllTabs, All_Todos, toggle_tab } from "./actiontypes";

export const tabreducer = (state = All_Todos, action) => {
  const { payload, type } = action;
  switch (type) {
    case toggle_tab:
      return payload;
    default:
      return state;
  }
};
