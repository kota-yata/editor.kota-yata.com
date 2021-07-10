export interface opts {
  mimeTypes: string[],
  extensions?: string[],
  multiple: boolean,
  description: string
}

export interface indexData {
  iframe: HTMLIFrameElement | null,
  altTextElement: HTMLElement | null,
  dbVersion: number,
  dbName: string,
  storeName: string,
}
