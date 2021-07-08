import { IMarkdownDocument } from "./markdownDocument";
import { ParseChainHandler } from "./responsibility";
import { BoldHandler, Header1ChainHandler, Header2ChainHandler, Header3ChainHandler, HorizontalRuleHandler, ItalicsHandler, QuoteHandler } from "./tagHandler";
import { ParagraphHandler } from "./utils";

class ChainOfResponsibilityFactory {
  Build(document: IMarkdownDocument): ParseChainHandler {
    let header1: Header1ChainHandler = new Header1ChainHandler(document);
    let header2: Header2ChainHandler = new Header2ChainHandler(document);
    let header3: Header3ChainHandler = new Header3ChainHandler(document);
    let horizontalRule: HorizontalRuleHandler = new HorizontalRuleHandler(document);
    let paragraph: ParagraphHandler = new ParagraphHandler(document);
    let italics: ItalicsHandler = new ItalicsHandler(document);
    let bold: BoldHandler = new BoldHandler(document);
    let quote: QuoteHandler = new QuoteHandler(document);

    header1.SetNext(header2);
    header2.SetNext(header3);
    header3.SetNext(horizontalRule);
    horizontalRule.SetNext(paragraph);
    paragraph.SetNext(italics);
    italics.SetNext(bold);
    bold.SetNext(quote);

    return header1;
  }
}

export {
  ChainOfResponsibilityFactory
}