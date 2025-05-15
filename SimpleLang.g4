grammar SimpleLang;

// Reglas del parser
regex
    : term (OR regex)? 
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
    : ABRIR_PA regex CERRAR_PA
    ;

class_
    : LBRACK CARET? (range | CHAR)+ RBRACK 
    ;

range
    : CHAR DASH CHAR
    ;

quantifier
    : MULT
    | SUM
    | QMARK
    | LBRACE NUMBER (COMMA NUMBER?)? RBRACE
    ;

// Reglas del lexer

CHAR: ~[|*+?()[\]{}.^,\r\n\t 0-9]; // cualquier carácter que no sea metacarácter

NUMBER: [0-9]+;

// Tokens para símbolos especiales
ABRIR_PA: '(';
CERRAR_PA: ')';
LBRACK: '[';
RBRACK: ']';
LBRACE: '{';
RBRACE: '}';
DASH: '-';
MULT: '*';
SUM: '+';
QMARK: '?';
COMMA: ',';
CARET: '^';
OR: '|';

// Espacios en blanco ignorados
WS: [ \t\r\n]+ -> skip;

