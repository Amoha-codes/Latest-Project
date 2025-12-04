
import React, { useState } from "react";
import Layout from "./Layout";
import HtmlHome from "./Topics/html-home";
import HtmlIntroduction from "./Topics/html-introduction";
import HtmlElements from "./Topics/html-elements";
import HtmlAttributes from "./Topics/html-attributes";
import HtmlHeadings from "./Topics/html-headings";
import HtmlParagraphs from "./Topics/html-paragraphs";
import HtmlStyles from "./Topics/html-styles";
import HtmlComments from "./Topics/html-comments";
import HtmlColors from "./Topics/html-colors";
import HtmlTextFormatting from "./Topics/html-formatting";
import HtmlQuotationCitation from "./Topics/html-quotations";
import HtmlRgbRgbaColors from "./Topics/html-colors-rgb";
import HtmlEditors from "./Topics/html-editors";
import HtmlBasicExamples from "./Topics/html-basic";
import HtmlCssStyles from "./Topics/html-css";
import HtmlLinks from "./Topics/html-links";
import HtmlImages from "./Topics/html-images";
import HtmlFavicon from "./Topics/html-favicon";
import HtmlPageTitle from "./Topics/html-page-title";
import HtmlTables from "./Topics/html-tables";
import HtmlTableBorders from "./Topics/html-table-borders";
import HtmlTableSizes from "./Topics/html-table-sizes";
import HtmlTableHeaders from "./Topics/html-table-headers";
import HtmlTablePaddingSpacing from "./Topics/html-table-padding-spacing";
import HtmlTableColspanRowspan from "./Topics/html-table-colspan-rowspan";
import HtmlTableStyling from "./Topics/html-table-styling";
import HtmlLists from "./Topics/html-lists";
import HtmlUnorderedLists from "./Topics/html-unordered-lists";
import HtmlTableColgroup from "./Topics/html-table-colgroup";
import HtmlOrderedLists from "./Topics/html-ordered-lists";
import HtmlDescriptionLists from "./Topics/html-other-lists";
import HtmlBlockInlineElements from "./Topics/html-block-inline";
import HtmlDivElement from "./Topics/html-div";
import HtmlClassAttribute from "./Topics/html-classes";
import HtmlIdAttribute from "./Topics/html-id";
import HtmlButtons from "./Topics/html-buttons";
import HtmlIframes from "./Topics/html-iframes";
import HtmlJavaScript from "./Topics/html-javascript";
import HtmlFilePaths from "./Topics/html-file-paths";
import HtmlHead from "./Topics/html-head";
import HtmlLayout from "./Topics/html-layout";
import HtmlResponsive from "./Topics/html-responsive";
import HtmlCodeElements from "./Topics/html-computercode";
import HtmlSemanticElements from "./Topics/html-semantics";
import HtmlFormAttributes from "./Topics/html-form-attributes";
import HtmlInputTypes from "./Topics/html-input-types";
import HtmlFormElements from "./Topics/html-form-elements";
import HtmlInputAttributes from "./Topics/html-input-attributes";
import HtmlInputFormAttributes from "./Topics/html-input-form-attributes";
import HtmlForms from "./Topics/html-forms";
import HtmlStyleGuide from "./Topics/html-style-guide";
import HtmlSymbols from "./Topics/html-symbols";
import HtmlEntities from "./Topics/html-entities";
import HtmlEmojis from "./Topics/html-emojis";
import HtmlEncoding from "./Topics/html-charsets";
import HtmlUrls from "./Topics/html-url-encode";
import HtmlVsXhtml from "./Topics/html-vs-xhtml";
const topicComponents: { [key: string]: React.FC } = {

  home: HtmlHome,
  introduction: HtmlIntroduction,
  elements: HtmlElements,
  attributes: HtmlAttributes,
  headings: HtmlHeadings,
  paragraphs: HtmlParagraphs,
  styles: HtmlStyles,
  formatting: HtmlTextFormatting,
  quotations: HtmlQuotationCitation,
  comments: HtmlComments,
  colors: HtmlColors,
    rgb: HtmlRgbRgbaColors,
    editors:HtmlEditors,
  basic: HtmlBasicExamples,

  // Additional HTML Topics
  css: HtmlCssStyles,
  links: HtmlLinks,
  images: HtmlImages,
  favicon: HtmlFavicon,
  "page-title": HtmlPageTitle,
  tables: HtmlTables,
  "table-borders": HtmlTableBorders,
  "table-sizes": HtmlTableSizes,
  "table-headers": HtmlTableHeaders,
  "table-padding-spacing": HtmlTablePaddingSpacing,
  "table-colspan-rowspan": HtmlTableColspanRowspan,
  "table-styling": HtmlTableStyling,
  "table-colgroup": HtmlTableColgroup,
  lists: HtmlLists,
  "unordered-lists": HtmlUnorderedLists,
  "ordered-lists": HtmlOrderedLists,
  "other-lists": HtmlDescriptionLists,
  "block-inline": HtmlBlockInlineElements,
  div: HtmlDivElement,
  classes: HtmlClassAttribute,
  id: HtmlIdAttribute,
  buttons: HtmlButtons,
  iframes: HtmlIframes,
  javascript: HtmlJavaScript,
  "file-paths": HtmlFilePaths,
  head: HtmlHead,
  layout: HtmlLayout,
  responsive: HtmlResponsive,
  computercode: HtmlCodeElements,
  semantics:  HtmlSemanticElements,

  // Forms
  "forms-main": HtmlForms,
  "form-attributes": HtmlFormAttributes,
  "form-elements": HtmlFormElements,
  "input-types": HtmlInputTypes,
  "input-attributes": HtmlInputAttributes,
  "input-form-attributes": HtmlInputFormAttributes,

  // Miscellaneous
  "style-guide": HtmlStyleGuide,
  entities: HtmlEntities,
  symbols: HtmlSymbols,
  emojis: HtmlEmojis,
  charsets: HtmlEncoding,
  "url-encode": HtmlUrls,
  "vs-xhtml": HtmlVsXhtml,
};

const HTML: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedTopic, setSelectedTopic] = useState("home");

  const handleSelectTopic = (key: string) => {
    setSelectedTopic(key.toLowerCase());
  };

  const CurrentComponent = topicComponents[selectedTopic] || HtmlHome;

  return (
    <Layout selected={selectedTopic} onSelect={handleSelectTopic} darkMode={darkMode}>
      <CurrentComponent />
    </Layout>
  );
};

export default HTML;
