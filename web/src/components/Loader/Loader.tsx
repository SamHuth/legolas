import { majorScale, minorScale, Pane, Spinner } from "evergreen-ui";

const Loader = () => {
  return (
    <Pane display="flex" alignItems="center" justifyContent="center" height="100%">
      <Spinner size={majorScale(6)}/>
    </Pane>
  );
};

export default Loader;
