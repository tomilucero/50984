// Generated from c://sintaxis 2025//ssl-antlr-calculator//SimpleLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SimpleLangListener from './SimpleLangListener.js';
import SimpleLangVisitor from './SimpleLangVisitor.js';

const serializedATN = [4,1,16,70,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,3,0,20,8,0,1,1,4,1,23,8,1,11,1,12,1,
24,1,2,1,2,3,2,29,8,2,1,3,1,3,1,3,3,3,34,8,3,1,4,1,4,1,4,1,4,1,5,1,5,3,5,
42,8,5,1,5,1,5,4,5,46,8,5,11,5,12,5,47,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,
7,1,7,1,7,1,7,1,7,3,7,63,8,7,3,7,65,8,7,1,7,3,7,68,8,7,1,7,0,0,8,0,2,4,6,
8,10,12,14,0,0,74,0,16,1,0,0,0,2,22,1,0,0,0,4,26,1,0,0,0,6,33,1,0,0,0,8,
35,1,0,0,0,10,39,1,0,0,0,12,51,1,0,0,0,14,67,1,0,0,0,16,19,3,2,1,0,17,18,
5,15,0,0,18,20,3,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,1,1,0,0,0,21,23,3,
4,2,0,22,21,1,0,0,0,23,24,1,0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,3,1,0,0,
0,26,28,3,6,3,0,27,29,3,14,7,0,28,27,1,0,0,0,28,29,1,0,0,0,29,5,1,0,0,0,
30,34,5,1,0,0,31,34,3,8,4,0,32,34,3,10,5,0,33,30,1,0,0,0,33,31,1,0,0,0,33,
32,1,0,0,0,34,7,1,0,0,0,35,36,5,3,0,0,36,37,3,0,0,0,37,38,5,4,0,0,38,9,1,
0,0,0,39,41,5,5,0,0,40,42,5,14,0,0,41,40,1,0,0,0,41,42,1,0,0,0,42,45,1,0,
0,0,43,46,3,12,6,0,44,46,5,1,0,0,45,43,1,0,0,0,45,44,1,0,0,0,46,47,1,0,0,
0,47,45,1,0,0,0,47,48,1,0,0,0,48,49,1,0,0,0,49,50,5,6,0,0,50,11,1,0,0,0,
51,52,5,1,0,0,52,53,5,9,0,0,53,54,5,1,0,0,54,13,1,0,0,0,55,68,5,10,0,0,56,
68,5,11,0,0,57,68,5,12,0,0,58,59,5,7,0,0,59,64,5,2,0,0,60,62,5,13,0,0,61,
63,5,2,0,0,62,61,1,0,0,0,62,63,1,0,0,0,63,65,1,0,0,0,64,60,1,0,0,0,64,65,
1,0,0,0,65,66,1,0,0,0,66,68,5,8,0,0,67,55,1,0,0,0,67,56,1,0,0,0,67,57,1,
0,0,0,67,58,1,0,0,0,68,15,1,0,0,0,10,19,24,28,33,41,45,47,62,64,67];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SimpleLangParser extends antlr4.Parser {

    static grammarFileName = "SimpleLang.g4";
    static literalNames = [ null, null, null, "'('", "')'", "'['", "']'", 
                            "'{'", "'}'", "'-'", "'*'", "'+'", "'?'", "','", 
                            "'^'", "'|'" ];
    static symbolicNames = [ null, "CHAR", "NUMBER", "ABRIR_PA", "CERRAR_PA", 
                             "LBRACK", "RBRACK", "LBRACE", "RBRACE", "DASH", 
                             "MULT", "SUM", "QMARK", "COMMA", "CARET", "OR", 
                             "WS" ];
    static ruleNames = [ "regex", "term", "factor", "base", "group", "class_", 
                         "range", "quantifier" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SimpleLangParser.ruleNames;
        this.literalNames = SimpleLangParser.literalNames;
        this.symbolicNames = SimpleLangParser.symbolicNames;
    }



	regex() {
	    let localctx = new RegexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SimpleLangParser.RULE_regex);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.term();
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 17;
	            this.match(SimpleLangParser.OR);
	            this.state = 18;
	            this.regex();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SimpleLangParser.RULE_term);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 21;
	            this.factor();
	            this.state = 24; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 42) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SimpleLangParser.RULE_factor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.base();
	        this.state = 28;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 7296) !== 0)) {
	            this.state = 27;
	            this.quantifier();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	base() {
	    let localctx = new BaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SimpleLangParser.RULE_base);
	    try {
	        this.state = 33;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 30;
	            this.match(SimpleLangParser.CHAR);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 31;
	            this.group();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 32;
	            this.class_();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	group() {
	    let localctx = new GroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SimpleLangParser.RULE_group);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(SimpleLangParser.ABRIR_PA);
	        this.state = 36;
	        this.regex();
	        this.state = 37;
	        this.match(SimpleLangParser.CERRAR_PA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	class_() {
	    let localctx = new Class_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SimpleLangParser.RULE_class_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(SimpleLangParser.LBRACK);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 40;
	            this.match(SimpleLangParser.CARET);
	        }

	        this.state = 45; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 45;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 43;
	                this.range();
	                break;

	            case 2:
	                this.state = 44;
	                this.match(SimpleLangParser.CHAR);
	                break;

	            }
	            this.state = 47; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 49;
	        this.match(SimpleLangParser.RBRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	range() {
	    let localctx = new RangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SimpleLangParser.RULE_range);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(SimpleLangParser.CHAR);
	        this.state = 52;
	        this.match(SimpleLangParser.DASH);
	        this.state = 53;
	        this.match(SimpleLangParser.CHAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	quantifier() {
	    let localctx = new QuantifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SimpleLangParser.RULE_quantifier);
	    var _la = 0;
	    try {
	        this.state = 67;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 55;
	            this.match(SimpleLangParser.MULT);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 56;
	            this.match(SimpleLangParser.SUM);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 57;
	            this.match(SimpleLangParser.QMARK);
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 58;
	            this.match(SimpleLangParser.LBRACE);
	            this.state = 59;
	            this.match(SimpleLangParser.NUMBER);
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 60;
	                this.match(SimpleLangParser.COMMA);
	                this.state = 62;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===2) {
	                    this.state = 61;
	                    this.match(SimpleLangParser.NUMBER);
	                }

	            }

	            this.state = 66;
	            this.match(SimpleLangParser.RBRACE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SimpleLangParser.EOF = antlr4.Token.EOF;
SimpleLangParser.CHAR = 1;
SimpleLangParser.NUMBER = 2;
SimpleLangParser.ABRIR_PA = 3;
SimpleLangParser.CERRAR_PA = 4;
SimpleLangParser.LBRACK = 5;
SimpleLangParser.RBRACK = 6;
SimpleLangParser.LBRACE = 7;
SimpleLangParser.RBRACE = 8;
SimpleLangParser.DASH = 9;
SimpleLangParser.MULT = 10;
SimpleLangParser.SUM = 11;
SimpleLangParser.QMARK = 12;
SimpleLangParser.COMMA = 13;
SimpleLangParser.CARET = 14;
SimpleLangParser.OR = 15;
SimpleLangParser.WS = 16;

SimpleLangParser.RULE_regex = 0;
SimpleLangParser.RULE_term = 1;
SimpleLangParser.RULE_factor = 2;
SimpleLangParser.RULE_base = 3;
SimpleLangParser.RULE_group = 4;
SimpleLangParser.RULE_class_ = 5;
SimpleLangParser.RULE_range = 6;
SimpleLangParser.RULE_quantifier = 7;

class RegexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_regex;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	OR() {
	    return this.getToken(SimpleLangParser.OR, 0);
	};

	regex() {
	    return this.getTypedRuleContext(RegexContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterRegex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitRegex(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitRegex(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_term;
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_factor;
    }

	base() {
	    return this.getTypedRuleContext(BaseContext,0);
	};

	quantifier() {
	    return this.getTypedRuleContext(QuantifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitFactor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_base;
    }

	CHAR() {
	    return this.getToken(SimpleLangParser.CHAR, 0);
	};

	group() {
	    return this.getTypedRuleContext(GroupContext,0);
	};

	class_() {
	    return this.getTypedRuleContext(Class_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterBase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitBase(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitBase(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_group;
    }

	ABRIR_PA() {
	    return this.getToken(SimpleLangParser.ABRIR_PA, 0);
	};

	regex() {
	    return this.getTypedRuleContext(RegexContext,0);
	};

	CERRAR_PA() {
	    return this.getToken(SimpleLangParser.CERRAR_PA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitGroup(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitGroup(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Class_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_class_;
    }

	LBRACK() {
	    return this.getToken(SimpleLangParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(SimpleLangParser.RBRACK, 0);
	};

	CARET() {
	    return this.getToken(SimpleLangParser.CARET, 0);
	};

	range = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RangeContext);
	    } else {
	        return this.getTypedRuleContext(RangeContext,i);
	    }
	};

	CHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SimpleLangParser.CHAR);
	    } else {
	        return this.getToken(SimpleLangParser.CHAR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterClass_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitClass_(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitClass_(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_range;
    }

	CHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SimpleLangParser.CHAR);
	    } else {
	        return this.getToken(SimpleLangParser.CHAR, i);
	    }
	};


	DASH() {
	    return this.getToken(SimpleLangParser.DASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitRange(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitRange(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class QuantifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_quantifier;
    }

	MULT() {
	    return this.getToken(SimpleLangParser.MULT, 0);
	};

	SUM() {
	    return this.getToken(SimpleLangParser.SUM, 0);
	};

	QMARK() {
	    return this.getToken(SimpleLangParser.QMARK, 0);
	};

	LBRACE() {
	    return this.getToken(SimpleLangParser.LBRACE, 0);
	};

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SimpleLangParser.NUMBER);
	    } else {
	        return this.getToken(SimpleLangParser.NUMBER, i);
	    }
	};


	RBRACE() {
	    return this.getToken(SimpleLangParser.RBRACE, 0);
	};

	COMMA() {
	    return this.getToken(SimpleLangParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterQuantifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitQuantifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitQuantifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SimpleLangParser.RegexContext = RegexContext; 
SimpleLangParser.TermContext = TermContext; 
SimpleLangParser.FactorContext = FactorContext; 
SimpleLangParser.BaseContext = BaseContext; 
SimpleLangParser.GroupContext = GroupContext; 
SimpleLangParser.Class_Context = Class_Context; 
SimpleLangParser.RangeContext = RangeContext; 
SimpleLangParser.QuantifierContext = QuantifierContext; 
