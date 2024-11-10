import ReactMarkdown from "react-markdown";
import MarkdownEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import Spinner from "./Spinner";
import { Children } from "react";

export default function Blog() {
  return (
    <>
      <form className="addWebsiteform">
        {/* blog title */}
        <div className="w-100 flex flex-col flex-left mb-2">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" placeholder="Enter small title" />
        </div>
        {/* blog slug url */}
        <div className="w-100 flex flex-col flex-left mb-2">
          <label htmlFor="slug">Slug (seo friendly url)</label>
          <input type="text" id="slug" placeholder="Enter Slug url" />
        </div>
        {/* blog category */}
        <div className="w-100 flex flex-col flex-left mb-2">
          <label htmlFor="category">
            Select Category (for multi select press ctr + left click)
          </label>
          <select name="Category" id="Category" multiple>
            <option value="Node js">Node js</option>
            <option value="React js">React js</option>
            <option value="Next js">Next js</option>
            <option value="CSS">CSS</option>
          </select>
        </div>
        {/* blog images */}
        <div className="w-100 flex flex-col flex-left mb-2">
          <div className="w-100">
            <label htmlFor="images">
              Images (first image will be show as thumbnail, you can drag)
            </label>
            <input
              type="file"
              id="fileInput"
              className="mt-1"
              accept="image/*"
              multiple
            />
          </div>
          <div className="w-100 flex flex-left mt-1">
            <Spinner />
          </div>
        </div>
        {/* image preview and image sortable */}
        {/* pending */}
        {/* markdown description */}
        <div className="description w-100 flex flex-col flex-left mb-2">
          <label htmlFor="description">
            Blog Content (for image: first upload and copy link and paste in
            ![alt text][link])
          </label>
          <MarkdownEditor
            style={{ width: "100%", height: "400px" }}
            renderHTML={(text) => (
              <ReactMarkdown
                components={{
                  code: ({ node, inline, className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(className || "");
                    if (inline) {
                      return <code>{children}</code>;
                    } else if (match) {
                      return (
                        <div style={{ position: "relative" }}>
                          <pre
                            style={{
                              padding: "0",
                              borderRadius: " 5px",
                              overflow: "auto",
                              whiteSpace: "pre-wrap",
                            }}
                            {...props}
                          >
                            <code>{children}</code>
                          </pre>
                          <button
                            style={{
                              position: "absolute",
                              top: "0",
                              right: "0",
                              zIndex: "1",
                            }}
                            onClick={() =>
                              navigator.clipboard.writeText(children)
                            }
                          >
                            copy code
                          </button>
                        </div>
                      );
                    } else {
                      return <code {...props}>{children}</code>;
                    }
                  },
                }}
              >
                {text}
              </ReactMarkdown>
            )}
          />
        </div>
        {/* tags */}
        <div className="description w-100 flex flex-col flex-left mb-2">
          <label htmlFor="tags">Tags</label>
          <select name="tags" id="tags" multiple>
            <option value="html">html</option>
            <option value="css">css</option>
            <option value="javascript">javascript</option>
            <option value="react">react</option>
            <option value="angular">angular</option>
          </select>
        </div>
        {/* blog status */}
        <div className="description w-100 flex flex-col flex-left mb-2">
          <label htmlFor="status">Status</label>
          <select name="status" id="status">
            <option value="">No select</option>
            <option value="draft">Draft</option>
            <option value="publish">Publish</option>
          </select>
        </div>
        <div className="w-100 mb-1">
          <button type="submit" className="w-100 addwebbtn flex-center">
            SAVE BLOG
          </button>
        </div>
      </form>
    </>
  );
}
