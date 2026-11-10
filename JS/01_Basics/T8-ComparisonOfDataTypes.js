// JavaScript Comparison

// 1. Number vs Number
2 > 4       // false
5 > 2       // true
2 == 2      // true
2 === 2     // true

// 2. String vs Number
"2" > 1     // true
"2" < 4     // true
"2" == 2    // true
"2" === 2   // false

// 3. String vs String
"2" > "10"  // true (compares alphabetically)
"02" > "1"  // false
"20" > "10" // true

// 4. Different Number Strings
"02" == 2   // true
"02" === 2  // false
"2" == "02" // false

// 5. Boolean vs Number
true == 1   // true
false == 0  // true
true === 1  // false

// 6. Null and Undefined
null == undefined  // true
null === undefined // false
null == 0          // false

// 7. Not Equal
2 != "2"   // false
2 !== "2"  // true

// Remember:
// ==  checks value (allows type conversion)
// === checks value AND data type
// >, <, >=, <= compare values
// Strings are compared character by character