import type { ParentComponent } from "solid-js";

export default ((props) => {
  return <>{props.children}</>;
}) satisfies ParentComponent;
