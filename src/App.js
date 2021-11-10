import { CssModules } from "./componets/CssModules";
import { InlineStyle } from "./componets/inlineStyle";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
    </div>
  );
}
