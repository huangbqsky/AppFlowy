import {
  Editor,
  Transforms,
  Text,
  Node
} from 'slate';

export function toggleFormat(editor: Editor, format: string) {
  const isActive = isFormatActive(editor, format)
  Transforms.setNodes(
    editor,
    { [format]: isActive ? null : true },
    { match: Text.isText, split: true }
  )
}

export const isFormatActive = (editor: Editor, format: string) => {
  const [match] = Editor.nodes(editor, {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    match: (n: Node) => n[format] === true,
    mode: 'all',
  })
  return !!match
}