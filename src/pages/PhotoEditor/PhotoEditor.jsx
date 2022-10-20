import React , { useRef } from 'react'
import ImageEditor from "@toast-ui/react-image-editor";
import StickerRow from "./StickerRow";
import LoadFromUrl from "./LoadFromUrl";
import "tui-image-editor/dist/tui-image-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";

import "./photoeditor.css";
import "tui-image-editor/dist/tui-image-editor.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default function PhotoEditor() {
    const editorRef = useRef();

  const myTheme = {
    "common.bi.image": null,
    "common.bisize.width": 0,
    "common.bisize.height": 0
  };

  const addSticker = path => {
    const editorInstance = editorRef.current.getInstance();

    editorInstance.addImageObject(path);
  };

  const loadFromUrl = url => {
    const editorInstance = editorRef.current.getInstance();

    editorInstance.loadImageFromURL(url, "image");
  };
  return (
    <div>
    <Header />
        <div className="mt-5">
          {/** <LoadFromUrl onUrlLoadClick={url => loadFromUrl(url)} /> */ }
            <ImageEditor
            
            ref={editorRef}
            includeUI={{
                loadImage: {
                path: "assets/facebook.png",
                name: "SampleImage"
                },
                theme: myTheme,
                menu: ["text", "filter", "crop", "shape", "icon", "draw", "flip", "rotate", "mask"],
                initMenu: "filter",
                uiSize: {
                width: "1000px",
                height: "700px"
                },
                menuBarPosition: "bottom"
            }}
            cssMaxHeight={500}
            cssMaxWidth={700}
            selectionStyle={{
                cornerSize: 20,
                rotatingPointOffset: 70
            }}
            usageStatistics={false}
            />

            <StickerRow onStickerSelected={path => addSticker(path)} />
        <div className="Photo-editor">
        <a href="/PhotoEditor">Photo Editor</a>
        </div>
        </div>
        <Footer />
    </div>
  )
}
