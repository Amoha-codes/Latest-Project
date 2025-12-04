
import React, { useState } from "react";
import Layout from "./Layout";
import CssHome from "./Topic/css-home";
import CssIntroduction from "./Topic/css-intro";
import CssSyntax from "./Topic/css-syntax";
import CssSelectors from "./Topic/css-selectors";
import CssErrors from "./Topic/css-errors";
import CssHowToAdd from "./Topic/css-how-to";
import CssComments from "./Topic/css-comments";
import CssHexColors from "./Topic/hex";
import CssHslColors from "./Topic/hsl";
import CssRgbColors from "./Topic/rgb";
import CssColors from "./Topic/colors";
import CssBackgrounds from "./Topic/background-color";
import CssBackgroundImage from "./Topic/background-image";
import CssBackgroundRepeat from "./Topic/background-repeat";
import CssBackgroundAttachment from "./Topic/background-attachment";
import CssBackgroundShorthand from "./Topic/background-shorthand";
import CssBorderColor from "./Topic/border-color";
import CssBorderSides from "./Topic/border-sides";
import CssBorderShorthand from "./Topic/border-shorthand";
import CssRoundedBorders from "./Topic/rounded-borders";
import CssBorderWidth from "./Topic/border-width";
import CssBorders from "./Topic/borders";
import CssMargins from "./Topic/css-margins";
import CssMarginCollapse from "./Topic/margin-collapse";
import CssPadding from "./Topic/css-padding";
import CssHeightWidth from "./Topic/css-height-width";
import CssBoxModel from "./Topic/css-box-model";
import CssTextColor from "./Topic/text-color";
import CssTextAlignment from "./Topic/text-alignment";
import CssTextDecoration from "./Topic/text-decoration";
import CssTextSpacing from "./Topic/text-spacing";
import CssTextShadow from "./Topic/text-shadow";
import CssFonts from "./Topic/font-family";
import CssWebSafeFonts from "./Topic/font-web-safe";
import CssFontFallbacks from "./Topic/font-fallbacks";
import CssFontStyles from "./Topic/font-style";
import CssFontSize from "./Topic/font-size";
import CssGoogleFonts from "./Topic/font-google";
import CssFontPairings from "./Topic/font-pairings";
import CssFontShorthand from "./Topic/font-shorthand";
import CssIcons from "./Topic/css-icons";
import CssLists from "./Topic/css-lists";
import CssTables from "./Topic/table-borders";
import CssTableSize from "./Topic/table-size";
import CssTableAlignment from "./Topic/table-alignment";
import CssTableStyling from "./Topic/table-styling";
import CssResponsiveTable from "./Topic/table-responsive";
import CssDisplayProperty from "./Topic/css-display";
import CssMaxWidth from "./Topic/css-max-width";
import CssPositioning from "./Topic/css-position";
import CssOverflow from "./Topic/css-overflow";
import CssFloat from "./Topic/css-float";
import CssInlineBlock from "./Topic/css-inline-block";
import CssAlign from "./Topic/css-align";
import CssLinks from "./Topic/css-links";
import CssClearFix from "./Topic/clear";
import CssCombinators from "./Topic/css-combinators";
import CssPseudoClasses from "./Topic/css-pseudo-classes";
import CssPseudoElements from "./Topic/css-pseudo-elements";
import CssOpacity from "./Topic/css-opacity";
import CssDropdowns from "./Topic/css-dropdowns";
import CSSImageGallery from "./Topic/css-image-gallery";
import CSSImageSprites from "./Topic/css-image-sprites";
import CSSAttributeSelectors from "./Topic/css-attr-selectors";
import CssForms from "./Topic/css-forms";
import CssCounters from "./Topic/css-counters";
import CssUnits from "./Topic/css-units";
import CssInheritance from "./Topic/css-inheritance";
import CssSpecificity from "./Topic/css-specificity";
import CssImportantRule from "./Topic/css-important";
import CssMathFunctions from "./Topic/css-math-functions";
import CssAccessibilityStyling from "./Topic/css-accessibility";
import CssPerformanceOptimization from "./Topic/css-optimization";
import CssWebsiteLayout from "./Topic/css-website-layout";
import CssOutline from "./Topic/css-outline";
import CssOutlineWidth from "./Topic/outline-width";
import CssOutlineColor from "./Topic/outline-color";
import CssOutlineShorthand from "./Topic/outline-shorthand";
import CssOutlineOffset from "./Topic/outline-offset";
import CssNavigationBars from "./Topic/css-navigation-bars";
import CssVerticalNavbar from "./Topic/css-vertical-navbar";
import CssHorizontalNavbar from "./Topic/css-horizontal-navbar";


const topicComponents: Record<string, any> = {
  home: CssHome,
  intro: CssIntroduction,
  syntax: CssSyntax,
  selectors: CssSelectors,
  errors: CssErrors,
  howto: CssHowToAdd,
  comments: CssComments,
  colors: CssColors,
  hex: CssHexColors,
  hsl: CssHslColors,
  rgb: CssRgbColors,
  backgroundcolor: CssBackgrounds,
  backgroundimage: CssBackgroundImage,
  backgroundrepeat: CssBackgroundRepeat,
  backgroundattachment: CssBackgroundAttachment,
  backgroundshorthand: CssBackgroundShorthand,
  borders: CssBorders,
  width: CssBorderWidth,
  color: CssBorderColor,
  sides: CssBorderSides,
  shorthand: CssBorderShorthand,
  roundeds: CssRoundedBorders,
  margins: CssMargins,
  collapse: CssMarginCollapse,
  padding: CssPadding,
  heightwidth: CssHeightWidth,
  boxmodel: CssBoxModel,
  textcolor: CssTextColor,
  textalignment: CssTextAlignment,
  textdecoration: CssTextDecoration,
  textspacing: CssTextSpacing,
  textshadow: CssTextShadow,
  fontfamily: CssFonts,
  fontwebsafe: CssWebSafeFonts,
  fontfallbacks: CssFontFallbacks,
  fontstyle: CssFontStyles,
  fontsize: CssFontSize,
  fontgoogle: CssGoogleFonts,
  fontpairings: CssFontPairings,
  fontshorthand: CssFontShorthand,
  icons: CssIcons,
  links: CssLinks,
  lists: CssLists,
  tables: CssTables,
  tablesize: CssTableSize,
  tablealignment: CssTableAlignment,
  tablestyling: CssTableStyling,
  tableresponsive: CssResponsiveTable,
  display: CssDisplayProperty,
  maxwidth: CssMaxWidth,
  position: CssPositioning,
  overflow: CssOverflow,
  float: CssFloat,
  clear: CssClearFix,
  inlineblock: CssInlineBlock,
  align: CssAlign,
  combinators: CssCombinators,
  pseudoclasses: CssPseudoClasses,
  pseudoelements: CssPseudoElements,
  opacity: CssOpacity,
  //  Miscellaneous Styling/Elements 
  dropdowns: CssDropdowns,
  imagegallery: CSSImageGallery,
  imagesprites: CSSImageSprites,
  attrselectors: CSSAttributeSelectors,
  forms: CssForms,
  counters: CssCounters,
  units: CssUnits,
  inheritance: CssInheritance,
  specificity: CssSpecificity,
  important: CssImportantRule,
  mathfunctions: CssMathFunctions,
  optimization: CssPerformanceOptimization,
  accessibility: CssAccessibilityStyling,
  websitelayout: CssWebsiteLayout,
   outline:CssOutline,
  outlinewidth:CssOutlineWidth,
  outlinecolor:CssOutlineColor,
  outlineshorthand:CssOutlineShorthand,
  outlineoffset:CssOutlineOffset,
  navbarintro:CssNavigationBars,
  verticalnavbar:CssVerticalNavbar,
  horizontalnavbar:CssHorizontalNavbar
};

const CSS: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedTopic, setSelectedTopic] = useState("home");

  const handleSelectTopic = (key: string) => {
    setSelectedTopic(key.toLowerCase());
  };

  const CurrentComponent = topicComponents[selectedTopic] || CssHome;

  return (
    <Layout selected={selectedTopic} onSelect={handleSelectTopic} darkMode={darkMode}>
      <CurrentComponent />
    </Layout>
  );
};

export default CSS;
