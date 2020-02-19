# XML 101

## Description

- XML - eXtensible Markup Language .xml
- XSLT - eXtensible Stylesheet Language Transformations .xsl
- XMLNS - Xml NameSpace
- XHR - XmlHttpRequest
- DTD - Document Type Definition
- DOM - Document Object Model

## XML

- XML was designed to store and transport data.
- XML was designed to be both human- and machine-readable.
- XML was designed to carry data - with focus on what data is
- XML Does Not DO Anything

### XML Syntax Rules

- XML documents must have a root element
- XML elements must have a closing tag
- XML tags are case sensitive
- XML elements must be properly nested
- XML attribute values must be quoted

### XML Tree Structure

```xml
<root>
  <child>
    <subchild>.....</subchild>
  </child>
</root>
```

- element, attribute, node
- The terms parent, child, and sibling are used to describe the relationships between elements.
- Parents have children. Children have parents. Siblings are children on the same level (brothers and sisters).
- All elements can have text content (Harry Potter) and attributes (category="cooking").
- XML Documents Must Have a Root Element

- XML Elements vs. Attributes
- <element></element> or <element />
- <gangster name='George "Shotgun" Ziegler'> or <gangster name="George &quot;Shotgun&quot; Ziegler">

- XML Namespaces - The xmlns Attribute - xmlns:prefix="URI".

## Tools

- Notepad++ plugin : https://community.notepad-plus-plus.org/topic/16983/xml-tools/4

## Links

- https://www.w3schools.com/xml/default.asp
- https://en.wikipedia.org/wiki/XML
- Numerous Languages based XML : https://en.wikipedia.org/wiki/List_of_XML_markup_languages
