import { IMarkdownDocument } from "./markdownDocument";
import { ParseChainHandler } from "./responsibility";
import { BoldVisitor, Header1Visitor, Header2Visitor, Header3Visitor, HorizontalRulrVisitor, ItalicsVisitor, QuoteVisitor } from "./visitor";


class Header1ChainHandler extends ParseChainHandler {
  constructor(document: IMarkdownDocument) {
    super(document, "#", new Header1Visitor());
  }
}

class Header2ChainHandler extends ParseChainHandler {
  constructor(document: IMarkdownDocument) {
    super(document, "##", new Header2Visitor());
  }
}

class Header3ChainHandler extends ParseChainHandler {
  constructor(document: IMarkdownDocument) {
    super(document, "###", new Header3Visitor());
  }
}

class HorizontalRuleHandler extends ParseChainHandler {
  constructor(document: IMarkdownDocument) {
    super(document, "---", new HorizontalRulrVisitor());
  }
}

class ItalicsHandler extends ParseChainHandler {
  constructor(document: IMarkdownDocument) {
    super(document, "**", new ItalicsVisitor());
  }
}

class BoldHandler extends ParseChainHandler {
  constructor(document: IMarkdownDocument) {
    super(document, "*", new BoldVisitor());
  }
}

class QuoteHandler extends ParseChainHandler {
  constructor(document: IMarkdownDocument) {
    super(document, ">", new QuoteVisitor());
  }
}

export {
  Header1ChainHandler,
  Header2ChainHandler,
  Header3ChainHandler,
  HorizontalRuleHandler,
  ItalicsHandler,
  BoldHandler,
  QuoteHandler
}