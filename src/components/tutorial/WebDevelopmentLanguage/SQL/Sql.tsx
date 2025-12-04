import React, { useState } from "react";
import Layout from "./Layout";

// Main SQL Topics
import SqlHome from "./Topics/sql-home";
import IntroSQL from "./Topics/sql-intro";
import SqlSyntax from "./Topics/sql-syntax";
import SQLSelectStatement from "./Topics/sql-select";
import SQLSelectDistinct from "./Topics/sql-select-distinct";
import SQLWhereClause from "./Topics/sql-where";
import SQLOrderBy from "./Topics/sql-order-by";
import SQLAnd from "./Topics/sql-and";
import SQLOr from "./Topics/sql-or";
import SQLNot from "./Topics/sql-not";
import SQLInsertInto from "./Topics/sql-insert-into";
import SQLNullValues from "./Topics/sql-null-values";
import SQLUpdate from "./Topics/sql-update";
import SQLDelete from "./Topics/sql-delete";
import SQLSelectTop from "./Topics/sql-select-top";

// Aggregate Functions
import SQLAggregateFunctions from "./Topics/sql-aggregate-functions";
import SQLMinMax from "./Topics/sql-min-max";
import SQLCount from "./Topics/sql-count";
import SQLSum from "./Topics/sql-sum";
import SQLAvg from "./Topics/sql-avg";

// Advanced Filtering and Joins
import SQLLike from "./Topics/sql-like";
import SQLWildcards from "./Topics/sql-wildcards";
import SQLIn from "./Topics/sql-in";
import SQLBetween from "./Topics/sql-between";
import SQLAliases from "./Topics/sql-aliases";
import SQLJoins from "./Topics/sql-joins";
import SQLInnerJoin from "./Topics/sql-inner-join";
import SQLLeftJoin from "./Topics/sql-left-join";
import SQLRightJoin from "./Topics/sql-right-join";
import SQLFullJoin from "./Topics/sql-full-join";
import SQLSelfJoin from "./Topics/sql-self-join";
import SQLUnion from "./Topics/sql-union";
import SQLUnionAll from "./Topics/sql-union-all";
import SQLGroupBy from "./Topics/sql-group-by";
import SQLHaving from "./Topics/sql-having";
import SQLExists from "./Topics/sql-exists";
import SQLAnyAll from "./Topics/sql-any-all";
import SQLSelectInto from "./Topics/sql-select-into";
import SQLInsertIntoSelect from "./Topics/sql-insert-into-select";
import SQLCase from "./Topics/sql-case";
import SQLNullFunctions from "./Topics/sql-null-functions";
import SQLStoredProcedures from "./Topics/sql-stored-procedures";
import SQLComments from "./Topics/sql-comments";

import SQLViews from "./Topics/sql-views";
import SQLInjection from "./Topics/sql-injection";
import SQLHosting from "./Topics/sql-hosting";
import SQLDataTypes from "./Topics/sql-data-types";
import SqlCreateDatabase from "./Topics/sql-create-db";
import SqlDropDatabase from "./Topics/sql-drop-db";
import SqlBackupDatabase from "./Topics/sql-backup-db";
import SqlOperators from "./Topics/sql-operators";
import SqlDropTable from "./Topics/sql-drop-table";
import SqlAlterTable from "./Topics/sql-alter-table";
import SqlConstraints from "./Topics/sql-constraints-home";
import SqlNotNull from "./Topics/sql-not-null";
import SqlUnique from "./Topics/sql-unique";
import SqlPrimaryKey from "./Topics/sql-primary-key";
import SqlForeignKey from "./Topics/sql-foreign-key";
import SqlAutoIncrement from "./Topics/sql-auto-increment";
import SqlViews from "./Topics/sql-views";
import SqlCheckConstraint from "./Topics/sql-check";
import SqlDefaultConstraint from "./Topics/sql-default";
import SqlCreateIndex from "./Topics/sql-index";
import SqlWorkingWithDates from "./Topics/sql-dates";

// Topic Components Object
const topicComponents: { [key: string]: React.FC } = {
  home: SqlHome,
  intro: IntroSQL,
  syntax: SqlSyntax,
  select: SQLSelectStatement,
  distinct: SQLSelectDistinct,
  where: SQLWhereClause,
  orderby: SQLOrderBy,
  and: SQLAnd,
  or: SQLOr,
  not: SQLNot,
  "insert-into": SQLInsertInto,
  "null-values": SQLNullValues,
  update: SQLUpdate,
  delete: SQLDelete,
  "select-top": SQLSelectTop,
  "aggregate-functions": SQLAggregateFunctions,
  "min-max": SQLMinMax,
  count: SQLCount,
  sum: SQLSum,
  avg: SQLAvg,
  like: SQLLike,
  wildcards: SQLWildcards,
  in: SQLIn,
  between: SQLBetween,
  aliases: SQLAliases,
  joins: SQLJoins,
  "inner-join": SQLInnerJoin,
  "left-join": SQLLeftJoin,
  "right-join": SQLRightJoin,
  "full-join": SQLFullJoin,
  "self-join": SQLSelfJoin,
  union: SQLUnion,
  "union-all": SQLUnionAll,
  "group-by": SQLGroupBy,
  having: SQLHaving,
  exists: SQLExists,
  "any-all": SQLAnyAll,
  "select-into": SQLSelectInto,
  "insert-into-select": SQLInsertIntoSelect,
  case: SQLCase,
  "null-functions": SQLNullFunctions,
  "stored-procedures": SQLStoredProcedures,
  comments: SQLComments,
  operators: SqlOperators,
  "create-db": SqlCreateDatabase,
  "drop-db": SqlDropDatabase,
  "backup-db": SqlBackupDatabase,
  "create-table": SqlCreateDatabase,
  "drop-table": SqlDropTable,
  "alter-table": SqlAlterTable,
  "constraints-home": SqlConstraints,
  "not-null": SqlNotNull,
  unique: SqlUnique,
  "primary-key": SqlPrimaryKey,
  "foreign-key": SqlForeignKey,
  check: SqlCheckConstraint,
  default: SqlDefaultConstraint,
  index: SqlCreateIndex,
  "auto-increment": SqlAutoIncrement,
  dates: SqlWorkingWithDates,
  views: SqlViews,
  injection: SQLInjection,
  hosting: SQLHosting,
  "data-types": SQLDataTypes,
};




const Sql: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedTopic, setSelectedTopic] = useState("home");

  const handleSelectTopic = (key: string) => {
    setSelectedTopic(key.toLowerCase());
  };

  const CurrentComponent = topicComponents[selectedTopic] || SqlHome;

  return (
    <Layout selected={selectedTopic} onSelect={handleSelectTopic} darkMode={darkMode}>
      <CurrentComponent />
    </Layout>
  );
};

export default Sql;
