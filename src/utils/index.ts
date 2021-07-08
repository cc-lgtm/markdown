import { IMarkdownDocument } from "../markdownDocument";
import { Handler } from "../responsibility";
import { IVisitable, IVisitor, ParagraphVisitor, Visitable } from "../visitor";

class ParseElement {
  CurrentLine: string = "";
}

class LineParser {
  public Parse(value: string, tag: string): [boolean, string] {
    let output: [boolean, string] = [false, ""];
    output[1] = value;
    if (value === "") {
      return output
    }
    let split = value.startsWith(`${tag}`);
    if (split) {
      output[0] = true,
      output[1] = value.substr(tag.length);
    }
    return output;
  }
}

class ParagraphHandler extends Handler<ParseElement> {
  private readonly visitable : IVisitable = new Visitable();
  private readonly visitor : IVisitor = new ParagraphVisitor();
  protected CanHandle(request: ParseElement): boolean {
      this.visitable.Accept(this.visitor, request, this.document);
      return true;
  }
  constructor(private readonly document : IMarkdownDocument) {
      super();
  }
}

export {
  ParseElement,
  LineParser,
  ParagraphHandler
}