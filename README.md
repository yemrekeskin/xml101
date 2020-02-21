<img src="https://raw.githubusercontent.com/yemrekeskin/xml101/master/icon.png" width="50" height="50">

# XML 101

## Abbreviations

- XML - e**X**tensible **M**arkup **L**anguage .xml
- XSLT - e**X**tensible **S**tylesheet **L**anguage **T**ransformations .xsl
- DTD - **D**ocument **T**ype **D**efinition
- DOM - **D**ocument **O**bject **M**odel
- AJAX - **A**synchronous **J**avaScript **A**nd **X**ML
- XMLNS - Xml NameSpace
- XHR - XmlHttpRequest

## XML

- XML Does Not DO Anything
- XML was designed to store and transport data.
- XML was designed to be both human- and machine-readable.
- XML was designed to carry data - with focus on what data is

```xml
  <!-- Comment -->
  <element></element>
  <element />
  <gangster name='George "Shotgun" Ziegler'>
  <gangster name="George &quot;Shotgun&quot; Ziegler">
```

- File Extention = .xml
- Internet media-type = application/xml text/xml

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

### Sample XML Document **.xml**

```xml
<!-- XML Elements vs. Attributes -->

<!-- WAY 1 -->
<note date="2008-01-10">
    <to>Tove</to>
    <from>Jani</from>
</note>

<!-- WAY 2 -->
<note>
    <date>2008-01-10</date>
    <to>Tove</to>
    <from>Jani</from>
</note>

<!-- WAY 3 -->
<note>
    <date>
        <year>2008</year>
        <month>01</month>
        <day>10</day>
    </date>
    <to>Tove</to>
    <from>Jani</from>
</note>
```

## XML AJAX

- AJAX is not a programming language.
- AJAX is a technique for accessing web servers from a web page.
- The keystone of AJAX is the XMLHttpRequest object.
- The XMLHttpRequest object is used to exchange data with a server.
- AJAX can be used for interactive communication with an XML file.
- AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.

```javascript
function loadDoc() {
  var xhttp;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    // Old Versions of Internet Explorer
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhttp.onreadystatechange = function() {
    // readyState	Holds the status of the XMLHttpRequest.
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

    // status
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Page not found"

    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };

  // HEADER
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  // setRequestHeader(header, value)	Adds HTTP headers to the request
  // header: specifies the header name
  // value: specifies the header value

  xhttp.open("GET", "data.txt", true);
  // open(method, url, async)
  //  method: the type of request: GET or POST
  //  url: the server (file) location
  //  async: true (asynchronous) or false (synchronous)

  xhttp.send();
  // send()	Sends the request to the server (used for GET)
  // send(string)	Sends the request to the server (used for POST)
}
```

## Tools

- Notepad++ plugin : https://community.notepad-plus-plus.org/topic/16983/xml-tools/4

## Links

- https://www.w3schools.com/xml/default.asp
- https://en.wikipedia.org/wiki/XML
- https://en.wikipedia.org/wiki/List_of_XML_markup_languages
- https://www.tutorialspoint.com/xml/index.htm
- https://www.tutorialspoint.com/wsdl/wsdl_types.htm
- https://www.tutorialspoint.com/xsd/index.htm
- https://www.tutorialspoint.com/xslt/index.htm
- https://www.tutorialspoint.com/xpath/index.htm
- https://www.tutorialspoint.com/xquery/index.htm
