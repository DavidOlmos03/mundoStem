export interface BookBase {
    title: string
    authors: string
    language: string
    subject: number
    topic: number
    pages: number
    extension: string
    size: number
    summary: string
  }

  export interface BookCreate extends BookBase {
    //falta
  }