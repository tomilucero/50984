// Generated from c://sintaxis 2025//ssl-antlr-calculator//Analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,16,73,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,
1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,
13,1,13,1,14,4,14,63,8,14,11,14,12,14,64,1,15,4,15,68,8,15,11,15,12,15,69,
1,15,1,15,0,0,16,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,
12,25,13,27,14,29,15,31,16,1,0,3,9,0,9,10,13,13,32,32,40,44,46,46,63,63,
91,91,93,94,123,125,1,0,48,57,3,0,9,10,13,13,32,32,74,0,1,1,0,0,0,0,3,1,
0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,
1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,
0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,1,33,1,0,0,0,3,35,1,0,0,0,5,37,1,
0,0,0,7,39,1,0,0,0,9,41,1,0,0,0,11,43,1,0,0,0,13,45,1,0,0,0,15,47,1,0,0,
0,17,49,1,0,0,0,19,51,1,0,0,0,21,53,1,0,0,0,23,55,1,0,0,0,25,57,1,0,0,0,
27,59,1,0,0,0,29,62,1,0,0,0,31,67,1,0,0,0,33,34,5,124,0,0,34,2,1,0,0,0,35,
36,5,40,0,0,36,4,1,0,0,0,37,38,5,41,0,0,38,6,1,0,0,0,39,40,5,91,0,0,40,8,
1,0,0,0,41,42,5,94,0,0,42,10,1,0,0,0,43,44,5,93,0,0,44,12,1,0,0,0,45,46,
5,45,0,0,46,14,1,0,0,0,47,48,5,42,0,0,48,16,1,0,0,0,49,50,5,43,0,0,50,18,
1,0,0,0,51,52,5,63,0,0,52,20,1,0,0,0,53,54,5,123,0,0,54,22,1,0,0,0,55,56,
5,44,0,0,56,24,1,0,0,0,57,58,5,125,0,0,58,26,1,0,0,0,59,60,8,0,0,0,60,28,
1,0,0,0,61,63,7,1,0,0,62,61,1,0,0,0,63,64,1,0,0,0,64,62,1,0,0,0,64,65,1,
0,0,0,65,30,1,0,0,0,66,68,7,2,0,0,67,66,1,0,0,0,68,69,1,0,0,0,69,67,1,0,
0,0,69,70,1,0,0,0,70,71,1,0,0,0,71,72,6,15,0,0,72,32,1,0,0,0,3,0,64,69,1,
6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class MIAnalizadorLexer extends antlr4.Lexer {

    static grammarFileName = "Analizador.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'|'", "'('", "')'", "'['", "'^'", "']'", 
                         "'-'", "'*'", "'+'", "'?'", "'{'", "','", "'}'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, "CHAR", "NUMBER", 
                          "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "T__9", "T__10", "T__11", "T__12", 
                      "CHAR", "NUMBER", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

MIAnalizadorLexer.EOF = antlr4.Token.EOF;
MIAnalizadorLexer.T__0 = 1;
MIAnalizadorLexer.T__1 = 2;
MIAnalizadorLexer.T__2 = 3;
MIAnalizadorLexer.T__3 = 4;
MIAnalizadorLexer.T__4 = 5;
MIAnalizadorLexer.T__5 = 6;
MIAnalizadorLexer.T__6 = 7;
MIAnalizadorLexer.T__7 = 8;
MIAnalizadorLexer.T__8 = 9;
MIAnalizadorLexer.T__9 = 10;
MIAnalizadorLexer.T__10 = 11;
MIAnalizadorLexer.T__11 = 12;
MIAnalizadorLexer.T__12 = 13;
MIAnalizadorLexer.CHAR = 14;
MIAnalizadorLexer.NUMBER = 15;
MIAnalizadorLexer.WS = 16;



