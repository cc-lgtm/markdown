import { IMarkdownDocument } from "./markdownDocument";
import { TagType, TagTypeToHtml } from "./tagTypeToHtml";
import { ParseElement } from "./utils";

export interface IVisitor {
  Visit(token: ParseElement, markdownDocument: IMarkdownDocument): void;
}

export interface IVisitable {
  Accept(visitor: IVisitor, token: ParseElement, markdownDocument: IMarkdownDocument): void
}

export abstract class VisitorBase implements IVisitor {
  constructor(private readonly tagType: TagType, private readonly TagTypeToHtml: TagTypeToHtml) {};
  Visit(token: ParseElement, markdownDocument: IMarkdownDocument): void {
    markdownDocument.Add(this.TagTypeToHtml.OpeningTag(this.tagType),
    token.CurrentLine,
    this.TagTypeToHtml.ClosingTag(this.tagType))
  }
}

class Header1Visitor extends VisitorBase {
  constructor() {
    super(TagType.Header1, new TagTypeToHtml())
  }
}

class Header2Visitor extends VisitorBase {
  constructor() {
    super(TagType.Header2, new TagTypeToHtml())
  }
}

class Header3Visitor extends VisitorBase {
  constructor() {
    super(TagType.Header3, new TagTypeToHtml())
  }
}

class ParagraphVisitor extends VisitorBase {
  constructor() {
    super(TagType.Paragraph, new TagTypeToHtml())
  }
}

class HorizontalRulrVisitor extends VisitorBase {
  constructor() {
    super(TagType.HorizontalRule, new TagTypeToHtml())
  }
}

class ItalicsVisitor extends VisitorBase {
  constructor() {
    super(TagType.Italics, new TagTypeToHtml())
  }
}

class BoldVisitor extends VisitorBase {
  constructor() {
    super(TagType.Bold, new TagTypeToHtml())
  }
}

class QuoteVisitor extends VisitorBase {
  constructor() {
    super(TagType.Quote, new TagTypeToHtml())
  }
}

class Visitable implements IVisitable {
  Accept(visitor: IVisitor, token: ParseElement, markdownDocument: IMarkdownDocument): void {
    visitor.Visit(token, markdownDocument);
  }
}

export {
  Header1Visitor,
  Header2Visitor,
  Header3Visitor,
  HorizontalRulrVisitor,
  ParagraphVisitor,
  QuoteVisitor,
  BoldVisitor,
  ItalicsVisitor,
  Visitable
}