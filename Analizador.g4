grammar Analizador;

regex
    : term ('|' regex)? 
    ;

term
    : factor+ 
    ;

factor
    : base (quantifier)? 
    ;

base
    : CHAR 
    | group 
    | class_ 
    ;

group
    : '(' regex ')' 
    ;

class_
    : '[' '^'? (range | CHAR)+ ']' 
    ;

range
    : CHAR '-' CHAR 
    ;

quantifier
    : '*' 
    | '+' 
    | '?' 
    | '{' NUMBER (',' NUMBER?)? '}' 
    ;

CHAR
    : ~[|*+?()[\]{}.^,\r\n\t 0-9] 
    ;

NUMBER
    : [0-9]+ 
    ;

// Ignorar espacios, tabs y saltos de línea
WS
    : [ \t\r\n]+ -> skip 
    ;
