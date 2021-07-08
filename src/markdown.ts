import { IMarkdownDocument, MarkdownDocument } from "./markdownDocument";
import { ChainOfResponsibilityFactory } from "./tagChainFactory";
import { Header1ChainHandler } from "./tagHandler";
import { ParseElement } from "./utils";

class HtmlHandler {
  private markdownChange : Markdown = new Markdown
  public TextChangeHandler(id : string, output : string) : void {
      let markdown = <HTMLTextAreaElement>document.getElementById(id)
      let markdownOutput = <HTMLLabelElement>document.getElementById(output)
  
      if (markdown !== null) {
          markdown.onkeyup = (e) => {
              this.RenderHtmlContent(markdown, markdownOutput)
          }
          window.onload = () => {
              this.RenderHtmlContent(markdown, markdownOutput)
          }
      }
  }

  private RenderHtmlContent(markdown: HTMLTextAreaElement, markdownOutput: HTMLLabelElement) {
      if (markdown.value) {
          markdownOutput.innerHTML = this.markdownChange.ToHtml(markdown.value)
      }
      else
          markdownOutput.innerHTML = "<p></p>"
  }
}

class Markdown {
  public ToHtml(text: string): string {
    let document: IMarkdownDocument = new MarkdownDocument();
    let header1: Header1ChainHandler = new ChainOfResponsibilityFactory().Build(document);
    let lines: string[] = text.split(`\n`);
    
    for (let index = 0; index < lines.length; index++) {
      let parseElement: ParseElement = new ParseElement();
      parseElement.CurrentLine = lines[index];
      header1.HandleRequest(parseElement);
    }
    return document.Get();
  }
}

export {
  HtmlHandler,
  Markdown
}