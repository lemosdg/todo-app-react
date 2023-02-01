import { useSelector, useDispatch } from "react-redux";

import { setScheme } from "../context/reducers/scheme/schemeSlice";

const DARK_SCHEME = "dark-scheme";
const INITIAL_SCHEME = "";

export const useScheme = () => {
  const scheme = useSelector((state) => state.scheme.value);

  const dispatch = useDispatch();

  function changeScheme() {
    if (scheme === INITIAL_SCHEME) {
      return dispatch(setScheme(DARK_SCHEME));
    }

    if (scheme === DARK_SCHEME) {
      return dispatch(setScheme(INITIAL_SCHEME));
    }
  }

  return { scheme, changeScheme };
};
