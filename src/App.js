import { CssModules } from "./componets/CssModules";
import { InlineStyle } from "./componets/inlineStyle";
import { StyledJsx } from "./componets/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
    </div>
  );
}
