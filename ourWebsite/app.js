const express = require("express");
const app = express();

// const nodemon = require("nodemon");
const engine = require("ejs-mate");
const path = require("path");

app.engine("ejs", engine);

// const expressLayouts = require("express-ejs-layouts");

//To get our images from the public folder
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/templating", (req, res) => {
  res.render("./templating/templating");
});
app.get("/handlingExpressErrors", (req, res) => {
  res.render("./handlingExpressErrors/handlingExpressErrors");
});
app.get("/home", (req, res) => {
  res.render("./home");
});
app.get("/queryStrings", (req, res) => {
  res.render("./queryStrings/queryStrings");
});
app.get("/selectingDOM", (req, res) => {
  res.render("./selectingDOM/selectingDOM");
});
app.get("/spread", (req, res) => {
  res.render("./spread/spread");
});
app.get("/addEventListener", (req, res) => {
  res.render("./addEventListener/addEventListener");
});
app.get("/truthyFalsy", (req, res) => {
  res.render("./truthyFalsy/truthyFalsy");
});
app.get("/booleans", (req, res) => {
  res.render("./booleans/booleans");
});
app.get("/mathObject", (req, res) => {
  res.render("./mathObject/mathObject");
});
app.get("/numbers", (req, res) => {
  res.render("./numbers/numbers");
});
app.get("/mongoRelationships", (req, res) => {
  res.render("./mongoRelationships/mongoRelationships");
});
app.get("/changeAndInputEvents", (req, res) => {
  res.render("./changeAndInputEvents/changeAndInputEvents");
});
app.get("/addingElements", (req, res) => {
  res.render("./addingElements/addingElements");
});
app.get("/mongooseSchemaValidations", (req, res) => {
  res.render("./mongooseSchemaValidations/mongooseSchemaValidations");
});
app.get("/tryCatch", (req, res) => {
  res.render("./tryCatch/tryCatch");
});
app.get("/scope", (req, res) => {
  res.render("./scope/scope");
});
app.get("/expressMiddleware", (req, res) => {
  res.render("./expressMiddleware/expressMiddleware");
});
app.get("/express", (req, res) => {
  res.render("./express/express");
});
app.get("/adjacentAndDirectChildSelectors", (req, res) => {
  res.render(
    "./adjacentAndDirectChildSelectors/adjacentAndDirectChildSelectors"
  );
});
app.get("/else", (req, res) => {
  res.render("./else/else");
});
app.get("/AJAX", (req, res) => {
  res.render("./AJAX/AJAX");
});
app.get("/moduleExports", (req, res) => {
  res.render("./moduleExports/moduleExports");
});
app.get("/mongoose", (req, res) => {
  res.render("./mongoose/mongoose");
});
app.get("/strings", (req, res) => {
  res.render("./strings/strings");
});
app.get("/stringMethods", (req, res) => {
  res.render("./stringMethods/stringMethods");
});
app.get("/stringMethodsWithArguments", (req, res) => {
  res.render("./stringMethodsWithArguments/stringMethodsWithArguments");
});
app.get("/variables", (req, res) => {
  res.render("./variables/variables");
});
app.get("/namingVariables", (req, res) => {
  res.render("./namingVariables/namingVariables");
});
app.get("/constAndVar", (req, res) => {
  res.render("./constAndVar/constAndVar");
});
app.get("/equalityOperators", (req, res) => {
  res.render("./equalityOperators/equalityOperators");
});
app.get("/logicalNOT", (req, res) => {
  res.render("./logicalNOT/logicalNOT");
});
app.get("/innerTexttextContentandinnerHtml", (req, res) => {
  res.render(
    "./innerTexttextContentandinnerHtml/innerTexttextContentandinnerHtml"
  );
});
app.get("/arrayMethods", (req, res) => {
  res.render("./arrayMethods/arrayMethods");
});
app.get("/mapMethod", (req, res) => {
  res.render("./mapMethod/mapMethod");
});
app.get("/comparisonOperators", (req, res) => {
  res.render("./comparisonOperators/comparisonOperators");
});
app.get("/XHRrequests", (req, res) => {
  res.render("./XHRrequests/XHRrequests");
});
app.get("/expressPathParameters", (req, res) => {
  res.render("./expressPathParameters/expressPathParameters");
});
app.get("/changingStyles", (req, res) => {
  res.render("./changingStyles/changingStyles");
});
app.get("/moreArrayMethods", (req, res) => {
  res.render("./moreArrayMethods/moreArrayMethods");
});
app.get("/iteratingOverObjects", (req, res) => {
  res.render("./iteratingOverObjects/iteratingOverObjects");
});
app.get("/formEventsAndPreventDefault", (req, res) => {
  res.render("./formEventsAndPreventDefault/formEventsAndPreventDefault");
});
app.get("/forLoop", (req, res) => {
  res.render("./forLoop/forLoop");
});
app.get("/stringTemplateLiterals", (req, res) => {
  res.render("./stringTemplateLiterals/stringTemplateLiterals");
});
app.get("/undefinedAndNull", (req, res) => {
  res.render("./undefinedAndNull/undefinedAndNull");
});
app.get("/ifConditional", (req, res) => {
  res.render("./ifConditional/ifConditional");
});
app.get("/filterMethod", (req, res) => {
  res.render("./filterMethod/filterMethod");
});
app.get("/destructuring", (req, res) => {
  res.render("./destructuring/destructuring");
});
app.get("/attributes", (req, res) => {
  res.render("./attributes/attributes");
});
app.get("/andMoreArrayMethods", (req, res) => {
  res.render("./andMoreArrayMethods/andMoreArrayMethods");
});
app.get("/functionExpressions", (req, res) => {
  res.render("./functionExpressions/functionExpressions");
});
app.get("/higherOrderFunctions", (req, res) => {
  res.render("./higherOrderFunctions/higherOrderFunctions");
});
app.get("/arrowFunctions", (req, res) => {
  res.render("./arrowFunctions/arrowFunctions");
});
app.get("/inlineAndExternalEvents", (req, res) => {
  res.render("./inlineAndExternalEvents/inlineAndExternalEvents");
});
app.get("/spreadArrayLiteralsAndObjects", (req, res) => {
  res.render("./spreadArrayLiteralsAndObjects/spreadArrayLiteralsAndObjects");
});
app.get("/reduceMethod", (req, res) => {
  res.render("./reduceMethod/reduceMethod");
});
app.get("/destructuringParameters", (req, res) => {
  res.render("./destructuringParameters/destructuringParameters");
});
app.get("/arraysDataStructures", (req, res) => {
  res.render("./arraysDataStructures/arraysDataStructures");
});
app.get("/jsFromFile", (req, res) => {
  res.render("./jsFromFile/jsFromFile");
});

app.get("/querySelector", (req, res) => {
  res.render("./querySelector/querySelector");
});
app.get("/docWithPicsAndMorePractice", (req, res) => {
  res.render("./docWithPicsAndMorePractice/docWithPicsAndMorePractice");
});
app.get("/multipleFunctionArguments", (req, res) => {
  res.render("./multipleFunctionArguments/multipleFunctionArguments");
});
app.get("/nestedArrays", (req, res) => {
  res.render("./nestedArrays/nestedArrays");
});
app.get("/nestedLoops", (req, res) => {
  res.render("./nestedLoops/nestedLoops");
});
app.get("/rest", (req, res) => {
  res.render("./rest/rest");
});
app.get("/thisKeywordEvents", (req, res) => {
  res.render("./thisKeywordEvents/thisKeywordEvents");
});
app.get("/objectLiterals", (req, res) => {
  res.render("./objectLiterals/objectLiterals");
});
app.get("/forEachMethod", (req, res) => {
  res.render("./forEachMethod/forEachMethod");
});
app.get("/alertsPrompts", (req, res) => {
  res.render("./alertsPrompts/alertsPrompts");
});

app.get("/theDOM", (req, res) => {
  res.render("./theDOM/theDOM");
});
app.get("/ejsLayoutsTool", (req, res) => {
  res.render("./ejsLayoutsTool/ejsLayoutsTool");
});
app.get("/thisKeywordInMethods", (req, res) => {
  res.render("./thisKeywordInMethods/thisKeywordInMethods");
});
app.get("/functions", (req, res) => {
  res.render("./functions/functions");
});
app.get("/parentChildSibling", (req, res) => {
  res.render("./parentChildSibling/parentChildSibling");
});
app.get("/eventBubbling", (req, res) => {
  res.render("./eventBubbling/eventBubbling");
});
app.get("/classList", (req, res) => {
  res.render("./classList/classList");
});
app.get("/folderImportExport", (req, res) => {
  res.render("./folderImportExport/folderImportExport");
});
app.get("/nodeJS", (req, res) => {
  res.render("./nodeJS/nodeJS");
});
app.get("/randomBackgroundColor", (req, res) => {
  res.render("./randomBackgroundColor/randomBackgroundColor");
});
app.get("/definingMethods", (req, res) => {
  res.render("./definingMethods/definingMethods");
});
app.get("/logicalOR", (req, res) => {
  res.render("./logicalOR/logicalOR");
});
app.get("/elseIfConditional", (req, res) => {
  res.render("./elseIfConditional/elseIfConditional");
});
app.get("/logicalAND", (req, res) => {
  res.render("./logicalAND/logicalAND");
});
app.get("/nestingConditions", (req, res) => {
  res.render("./nestingConditions/nestingConditions");
});
app.get("/constUsedForArray", (req, res) => {
  res.render("./constUsedForArray/constUsedForArray");
});
app.get("/switchStatement", (req, res) => {
  res.render("./switchStatement/switchStatement");
});
app.get("/arraysPartTwo", (req, res) => {
  res.render("./arraysPartTwo/arraysPartTwo");
});
app.get("/whileLoop", (req, res) => {
  res.render("./whileLoop/whileLoop");
});
app.get("/loopingOverArrays", (req, res) => {
  res.render("./loopingOverArrays/loopingOverArrays");
});
app.get("/infiniteLoops", (req, res) => {
  res.render("./infiniteLoops/infiniteLoops");
});
app.get("/nestingArraysAndObjects", (req, res) => {
  res.render("./nestingArraysAndObjects/nestingArraysAndObjects");
});
app.get("/addingAndUpdatingObjects", (req, res) => {
  res.render("./addingAndUpdatingObjects/addingAndUpdatingObjects");
});
app.get("/arrayReferencesAndEqualityTesting", (req, res) => {
  res.render(
    "./arrayReferencesAndEqualityTesting/arrayReferencesAndEqualityTesting"
  );
});

//////////

// <% layout("./layouts/boilerplate") %>

///////////////   404's
app.get("*", (req, res) => {
  res.send("Page not found.");
});

app.listen(3000, () => {
  console.log("Port 3000 active");
});
