export interface IMarkdownDocument {
  Add(...content: string[]): void;
  Get(): string
}

class MarkdownDocument implements IMarkdownDocument {
  private content: string = "";
  Add(...content: string[]): void {
    content.forEach(ele => {
      this.content += ele;
    });
  }
  Get(): string {
    return this.content;
  }
}

export {
  MarkdownDocument
}