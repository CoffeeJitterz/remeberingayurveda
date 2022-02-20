import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";

export default function Control() {
    const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )
  useEffect(() => {
    console.log(editorState);
  }, [editorState])

  return (
    <div>
        <div>
      <h1>React Editors</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div style={{ border: "1px solid black", padding: '2px', minHeight: '400px' }}>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
      </div>
    </div>
    </div>
  )
}
