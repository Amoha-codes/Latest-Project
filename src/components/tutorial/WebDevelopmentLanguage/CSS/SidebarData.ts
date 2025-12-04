export interface SubTopic {
  title: string;
  component: string;
}

export interface SidebarItem {
  [x: string]: any;
  title: string;
  component: string;
  hasArrow?: boolean; // To show dropdown arrow
  subtopics?: SubTopic[]; // Nested topics
}

export const sidebarItems: SidebarItem[] = [
  //  CSS Tutorial Core 

  { title: "CSS HOME", component: "home" },
  { title: "CSS Introduction", component: "intro" },
  { title: "CSS Syntax", component: "syntax" },
  { title: "CSS Selectors", component: "selectors" },
  { title: "CSS How To", component: "howto" },
  { title: "CSS Comments", component: "comments" },
  { title: "CSS Errors", component: "errors" },
  
  //  CSS Colors (and subtopics) 
  {
    title: "CSS Colors",
    component: "colors",
    hasArrow: true,
    subtopics: [
      { title: "Colors", component: "colors" },
      { title: "RGB", component: "rgb" },
      { title: "HEX", component: "hex" },
      { title: "HSL", component: "hsl" },
    ],
  },
  
  //  CSS Backgrounds (and subtopics) 
  {
    title: "CSS Backgrounds",
    component: "backgrounds",
    hasArrow: true,
    subtopics: [
      { title: "Background Color", component: "backgroundcolor" },
      { title: "Background Image", component: "backgroundimage" },
      { title: "Background Repeat", component: "backgroundrepeat" },
      { title: "Background Attachment", component: "backgroundattachment" },
      { title: "Background Shorthand", component: "backgroundshorthand" },
    ],
  },
  
  //  CSS Borders (and subtopics) 
  {
    title: "CSS Borders",
    component: "borders",
    hasArrow: true,
    subtopics: [
      { title: "Borders", component: "borders" },
      { title: "Border Width", component: "width" },
      { title: "Border Color", component: "color" },
      { title: "Border Sides", component: "sides" },
      { title: "Border Shorthand", component: "shorthand" },
      { title: "Rounded Borders", component: "roundeds" },
    ],
  },
  
  //  CSS Margins (and subtopics) 
  {
    title: "CSS Margins",
    component: "margins",
    hasArrow: true,
    subtopics: [
      { title: "Margins", component: "margins" },
      { title: "Margin Collapse", component: "collapse" },
    ],
  },
  
  //  Layout/Box Model 
  { title: "CSS Padding", component: "padding" },
  { title: "CSS Height/Width", component: "heightwidth" },
  { title: "CSS Box Model", component: "boxmodel" },
    {
    title: "CSS Outline",
    component: "outline",
    hasArrow: true,
    subtopics: [
      { title: "Outline", component: "outline" },
      { title: "Outline Width", component: "outlinewidth" },
      { title: "Outline Color", component: "outlinecolor" },
      { title: "Outline Shorthand", component: "outlineshorthand" },
      { title: "Outline Offset", component: "outlineoffset" },
    ],
  },
  
  //  CSS Text (and subtopics) 
  {
    title: "CSS Text",
    component: "text",
    hasArrow: true,
    subtopics: [
      { title: "Text Color", component: "textcolor" },
      { title: "Text Alignment", component: "textalignment" },
      { title: "Text Decoration", component: "textdecoration" },
      { title: "Text Transformation", component: "texttransformation" },
      { title: "Text Spacing", component: "textspacing" },
      { title: "Text Shadow", component: "textshadow" },
    ],
  },

  //  CSS Fonts (and subtopics) 
  {
    title: "CSS Fonts",
    component: "fonts",
    hasArrow: true,
    subtopics: [
      { title: "Font Family", component: "fontfamily" },
      { title: "Font Web Safe", component: "fontwebsafe" },
      { title: "Font Fallbacks", component: "fontfallbacks" },
      { title: "Font Style", component: "fontstyle" },
      { title: "Font Size", component: "fontsize" },
      { title: "Font Google", component: "fontgoogle" },
      { title: "Font Pairings", component: "fontpairings" },
      { title: "Font Shorthand", component: "fontshorthand" },
    ],
  },
  
  //  CSS Links, Lists, Icons 
  { title: "CSS Icons", component: "icons" },
  { title: "CSS Links", component: "links" },
  { title: "CSS Lists", component: "lists" },
  
  //  CSS Tables (and subtopics) 
  {
    title: "CSS Tables",
    component: "tables",
    hasArrow: true,
    subtopics: [
      { title: "Table Borders", component: "tables" },
      { title: "Table Size", component: "tablesize" },
      { title: "Table Alignment", component: "tablealignment" },
      { title: "Table Styling", component: "tablestyling" },
      { title: "Table Responsive", component: "tableresponsive" },
    ],
  },
  
  //  CSS Display/Positioning 
  { title: "CSS Display", component: "display" },
  { title: "CSS Maxwidth", component: "maxwidth" },
  { title: "CSS Position", component: "position" },
  { title: "CSS Zindex", component: "zindex" },
  { title: "CSS Overflow", component: "overflow" },
  
  //  CSS Float (and subtopics) 
  {
    title: "CSS Float",
    component: "float",
    hasArrow: true,
    subtopics: [
      { title: "Float", component: "float" },
      { title: "Clear", component: "clear" },
      { title: "Float Examples", component: "floatexamples" },
    ],
  },
  
  //  Other Layout/Styling 
  { title: "CSS Inlineblock", component: "inlineblock" },
  { title: "CSS Align", component: "align" },

  //  CSS Navigation Bars (and subtopics) 
  {
    title: "CSS Navigation Bars",
    component: "navigationbars",
    hasArrow: true,
    subtopics: [
      { title: "Navbar Intro", component: "navbarintro" },
      { title: "Vertical Navbar", component: "verticalnavbar" },
      { title: "Horizontal Navbar", component: "horizontalnavbar" },
    ],
  },

  //  Advanced Selectors/Pseudoclasses 
  { title: "CSS Combinators", component: "combinators" },
  { title: "CSS Pseudoclasses", component: "pseudoclasses" },
  { title: "CSS Pseudoelements", component: "pseudoelements" },
  { title: "CSS Opacity", component: "opacity" },

  //  Miscellaneous Styling/Elements 
  { title: "CSS Dropdowns", component: "dropdowns" },
  { title: "CSS Image Gallery", component: "imagegallery" },
  { title: "CSS Image Sprites", component: "imagesprites" },
  { title: "CSS Attr Selectors", component: "attrselectors" },
  { title: "CSS Forms", component: "forms" },
  { title: "CSS Counters", component: "counters" },

  //  CSS Units/Concepts 
  { title: "CSS Units", component: "units" },
  { title: "CSS Inheritance", component: "inheritance" },
  { title: "CSS Specificity", component: "specificity" },
  { title: "CSS !important", component: "important" },
  { title: "CSS Math Functions", component: "mathfunctions" },
  { title: "CSS Optimization", component: "optimization" },
  { title: "CSS Accessibility", component: "accessibility" },
  { title: "CSS Website Layout", component: "websitelayout" },
  
  //  CSS Outline (and subtopics) 

];