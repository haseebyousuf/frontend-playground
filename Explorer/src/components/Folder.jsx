import { useState } from "react";
const Folder = ({ data }) => {
  const [expand, setExpand] = useState(false);
  if (data.isFolder) {
    return (
      <div>
        {/* Folder Logic */}
        <span className="folder" onClick={() => setExpand(!expand)}>
          📁{data.name}
        </span>
        {data.items.map((item) => {
          return (
            <div
              style={{ paddingLeft: 10, display: expand ? "block" : "none" }}
              key={item.id}
            >
              <Folder data={item} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <span className="file">📄{data.name}</span>
      </div>
    );
  }
};
export default Folder;
