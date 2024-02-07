import React, {useRef} from 'react'
import {Editor} from '@tinymce/tinymce-react'
function AddDescriptionEditor() {
    const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };
    return (
      <>
      <div className='w-[50vw]'>
        
        <Editor
        apiKey="rg6sr11t19prcuqb20pduc10mzc3gc4a7wlg7szcxnbahp10"
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue="<p>Add description of your project.</p>"
          init={{
            height: 300,
            menubar: true,
            plugins: [
              "image",
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "wordcount",
              "anchor",
          ],
            toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
        {/* <button onClick={log}>Log editor content</button> */}
        
      </div>
      </>
    );
  }
export default AddDescriptionEditor
