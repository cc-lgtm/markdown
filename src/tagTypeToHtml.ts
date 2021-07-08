enum TagType {
  Paragraph,
  Header1,
  Header2,
  Header3,
  HorizontalRule,
  Italics,
  Bold,
  Quote
}

class TagTypeToHtml {
  private readonly tagType: Map<TagType, string> = new Map<TagType, string>();

  constructor() {
    this.tagType.set(TagType.Header1, "h1"),
    this.tagType.set(TagType.Header2, "h2"),
    this.tagType.set(TagType.Header3, "h3"),
    this.tagType.set(TagType.Paragraph, "p"),
    this.tagType.set(TagType.HorizontalRule, "hr"),
    this.tagType.set(TagType.Italics, "i"),
    this.tagType.set(TagType.Bold, "b"),
    this.tagType.set(TagType.Quote, "q")
  }

  public OpeningTag(tagType: TagType): string {
    return this.GetTag(tagType, '<');
  }

  public ClosingTag(tagType: TagType): string {
    return this.GetTag(tagType, '</');
  }

  private GetTag(tagType: TagType, openingTagPattern: string): string {
    let tag = this.tagType.get(tagType);
    if (tag !== null) {
      return `${openingTagPattern}${tag}>`;
    }
    return `${openingTagPattern}p>`;
  }
}

export {
  TagType,
  TagTypeToHtml
}