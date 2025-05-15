// Generated from c://sintaxis 2025//ssl-antlr-calculator//SimpleLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,16,73,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,1,4,1,37,8,1,11,1,12,1,38,1,2,
1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,
11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,4,15,68,8,15,11,15,12,15,69,1,
15,1,15,0,0,16,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,
25,13,27,14,29,15,31,16,1,0,3,10,0,9,10,13,13,32,32,40,44,46,46,48,57,63,
63,91,91,93,94,123,125,1,0,48,57,3,0,9,10,13,13,32,32,74,0,1,1,0,0,0,0,3,
1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,
15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,
0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,1,33,1,0,0,0,3,36,1,0,0,0,5,40,
1,0,0,0,7,42,1,0,0,0,9,44,1,0,0,0,11,46,1,0,0,0,13,48,1,0,0,0,15,50,1,0,
0,0,17,52,1,0,0,0,19,54,1,0,0,0,21,56,1,0,0,0,23,58,1,0,0,0,25,60,1,0,0,
0,27,62,1,0,0,0,29,64,1,0,0,0,31,67,1,0,0,0,33,34,8,0,0,0,34,2,1,0,0,0,35,
37,7,1,0,0,36,35,1,0,0,0,37,38,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,4,
1,0,0,0,40,41,5,40,0,0,41,6,1,0,0,0,42,43,5,41,0,0,43,8,1,0,0,0,44,45,5,
91,0,0,45,10,1,0,0,0,46,47,5,93,0,0,47,12,1,0,0,0,48,49,5,123,0,0,49,14,
1,0,0,0,50,51,5,125,0,0,51,16,1,0,0,0,52,53,5,45,0,0,53,18,1,0,0,0,54,55,
5,42,0,0,55,20,1,0,0,0,56,57,5,43,0,0,57,22,1,0,0,0,58,59,5,63,0,0,59,24,
1,0,0,0,60,61,5,44,0,0,61,26,1,0,0,0,62,63,5,94,0,0,63,28,1,0,0,0,64,65,
5,124,0,0,65,30,1,0,0,0,66,68,7,2,0,0,67,66,1,0,0,0,68,69,1,0,0,0,69,67,
1,0,0,0,69,70,1,0,0,0,70,71,1,0,0,0,71,72,6,15,0,0,72,32,1,0,0,0,3,0,38,
69,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class SimpleLangLexer extends antlr4.Lexer {

    static grammarFileName = "SimpleLang.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, "'('", "')'", "'['", "']'", "'{'", 
                         "'}'", "'-'", "'*'", "'+'", "'?'", "','", "'^'", 
                         "'|'" ];
	static symbolicNames = [ null, "CHAR", "NUMBER", "ABRIR_PA", "CERRAR_PA", 
                          "LBRACK", "RBRACK", "LBRACE", "RBRACE", "DASH", 
                          "MULT", "SUM", "QMARK", "COMMA", "CARET", "OR", 
                          "WS" ];
	static ruleNames = [ "CHAR", "NUMBER", "ABRIR_PA", "CERRAR_PA", "LBRACK", 
                      "RBRACK", "LBRACE", "RBRACE", "DASH", "MULT", "SUM", 
                      "QMARK", "COMMA", "CARET", "OR", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

SimpleLangLexer.EOF = antlr4.Token.EOF;
SimpleLangLexer.CHAR = 1;
SimpleLangLexer.NUMBER = 2;
SimpleLangLexer.ABRIR_PA = 3;
SimpleLangLexer.CERRAR_PA = 4;
SimpleLangLexer.LBRACK = 5;
SimpleLangLexer.RBRACK = 6;
SimpleLangLexer.LBRACE = 7;
SimpleLangLexer.RBRACE = 8;
SimpleLangLexer.DASH = 9;
SimpleLangLexer.MULT = 10;
SimpleLangLexer.SUM = 11;
SimpleLangLexer.QMARK = 12;
SimpleLangLexer.COMMA = 13;
SimpleLangLexer.CARET = 14;
SimpleLangLexer.OR = 15;
SimpleLangLexer.WS = 16;



