export interface opts {
  mimeTypes: string[],
  extensions?: string[],
  multiple: boolean,
  description: string
}

export interface data {
  iframe: HTMLIFrameElement | null,
  textarea: HTMLTextAreaElement | null,
  altTextElement: HTMLElement | null,
  editor: any,
  dbVersion: number,
  dbName: string,
  storeName: string,
}
