/**
 * @file  mofron-comp-flowuptxtarea/index.js
 * @brief flowup textarea component for mofron
 * @license MIT
 */
const TextArea = require('mofron-comp-textarea');
const comutl  = mofron.util.common;
const ConfArg = mofron.class.ConfArg;

module.exports = class extends TextArea {
    /**
     * initialize component
     * 
     * @param (mixed) ratio parameter
     *                key-value: component option
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("FlowupTxtArea");
	    this.confmng().add('relvalue', { type:'size', init:'0.28rem' });

            this.focusEvent(this.focus);

	    /* set config */
	    if (0 < arguments.length) {
                this.config(p1);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    focus (p1,p2,p3) {
        try {
	    if (true === p2) {
                p1.label().style({
                    'transition' : 'top 200ms 0s ease,left 200ms 0s ease'
		}, { bpref: true });
		p1.label().style({
                    'top':  '0rem',
		    'left': '0rem'
		});
	    } else {
                if (null === p1.value()) {
                    p1.label().style({
                        'transition' : 'top 200ms 0s ease,left 200ms 0s ease'
                    }, { bpref: true });
                    p1.label().style({
                        'top':  p1.relvalue(),
                        'left': '0.06rem'
                    });
		}
	    }
            setTimeout(() => {
                p1.label().style({ 'transition':null });
            },300);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    afterRender () {
        try {
            super.afterRender();
	    this.label().style({ 'display':'inline' }, { 'forced':true });
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }

    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
	    this.label().style({
	        'position':'relative',
		'top':this.relvalue(),
                'left':'0.06rem'
            });
            this.style({
                'border-left-width':'0rem',
		'border-right-width':'0rem'
	    });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    relvalue (prm) {
        try {
            return this.confmng('relvalue', prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */
