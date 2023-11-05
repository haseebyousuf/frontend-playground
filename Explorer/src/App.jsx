import Folder from "./components/Folder";
import explorer from "./data/explorerData";
function App() {
  return (
    <div>
      <Folder data={explorer} />
    </div>
  );
}

export default App;
