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
    // SQL HOME and Basic Querying
    { title: "SQL HOME", component: "home" },
    { title: "SQL Intro", component: "intro" },
    { title: "SQL Syntax", component: "syntax" },
    { title: "SQL Select", component: "select" },
    { title: "SQL Select Distinct", component: "distinct" },
    { title: "SQL Where", component: "where" },
    { title: "SQL Order By", component: "orderby" },
    { title: "SQL And", component: "and" },
    { title: "SQL Or", component: "or" },
    { title: "SQL Not", component: "not" },
    { title: "SQL Insert Into", component: "insert-into" },
    { title: "SQL Null Values", component: "null-values" },
    { title: "SQL Update", component: "update" },
    { title: "SQL Delete", component: "delete" },
    { title: "SQL Select Top", component: "select-top" },

    // SQL Aggregate Functions
    {
        title: "SQL Aggregate Functions",
        component: "aggregate-functions",
        hasArrow: true,
        subtopics: [
            { title: "SQL Min and Max", component: "min-max" },
            { title: "SQL Count", component: "count" },
            { title: "SQL Sum", component: "sum" },
            { title: "SQL Avg", component: "avg" },
        ]
    },

    // SQL Advanced Filtering and Joins
    { title: "SQL Like", component: "like" },
    { title: "SQL Wildcards", component: "wildcards" },
    { title: "SQL In", component: "in" },
    { title: "SQL Between", component: "between" },
    { title: "SQL Aliases", component: "aliases" },
    {
        title: "SQL Joins",
        component: "joins",
        hasArrow: true,
        subtopics: [
            { title: "SQL Inner Join", component: "inner-join" },
            { title: "SQL Left Join", component: "left-join" },
            { title: "SQL Right Join", component: "right-join" },
            { title: "SQL Full Join", component: "full-join" },
            { title: "SQL Self Join", component: "self-join" },
        ]
    },
    { title: "SQL Union", component: "union" },
    { title: "SQL Union All", component: "union-all" },
    { title: "SQL Group By", component: "group-by" },
    { title: "SQL Having", component: "having" },
    { title: "SQL Exists", component: "exists" },
    { title: "SQL Any, All", component: "any-all" },
    { title: "SQL Select Into", component: "select-into" },
    { title: "SQL Insert Into Select", component: "insert-into-select" },
    { title: "SQL Case", component: "case" },
    { title: "SQL Null Functions", component: "null-functions" },
    { title: "SQL Stored Procedures", component: "stored-procedures" },
    { title: "SQL Comments", component: "comments" },
    { title: "SQL Operators", component: "operators" },

    // SQL Database and Constraints
    {
        title: "SQL Database",
        component: "database-home",
        hasArrow: true,
        subtopics: [
            { title: "SQL Create DB", component: "create-db" },
            { title: "SQL Drop DB", component: "drop-db" },
            { title: "SQL Backup DB", component: "backup-db" },
            { title: "SQL Create Table", component: "create-table" },
            { title: "SQL Drop Table", component: "drop-table" },
            { title: "SQL Alter Table", component: "alter-table" },

            { title: "SQL Not Null", component: "not-null" },
            { title: "SQL Unique", component: "unique" },
            { title: "SQL Primary Key", component: "primary-key" },
            { title: "SQL Foreign Key", component: "foreign-key" },
            { title: "SQL Check", component: "check" },
            { title: "SQL Default", component: "default" },
            { title: "SQL Index", component: "index" },
            { title: "SQL Auto Increment", component: "auto-increment" },
            { title: "SQL Dates", component: "dates" },
            { title: "SQL Views", component: "views" },
            { title: "SQL Injection", component: "injection" },
            { title: "SQL Hosting", component: "hosting" },
            { title: "SQL Data Types", component: "data-types" },
        ]
    }
];