import * as opentracing from '../opentracing/index';
import StalkTracer from './tracer';
import StalkSpanContext from './span-context';


export interface ISpanLog {
    fields: { [key: string]: any };
    timestamp?: number;
}


/**
 * StalkSpan inherits opentracing's noop span, with the implementation
 * of following functionalities:
 *  - Keeping data (operation name, start & finish time, tags and logs)
 *  - Keeping references of referenced-spans
 *  - Keeping reference of tracer and context
 */
export class StalkSpan extends opentracing.Span {
    private _operationName: string;
    private _startTime: number;
    private _finishTime: number;
    private _references: opentracing.Reference[] = [];
    private _tags: { [key: string]: any } = {};
    private _logs: ISpanLog[] = [];

    private __tracer: StalkTracer;
    private __context: StalkSpanContext;


    constructor(tracer: StalkTracer, context: StalkSpanContext) {
        super();
        this.__tracer = tracer;
        this.__context = context;
    }


    /**
     * Override just for returning tracer's type
     */
    tracer(): StalkTracer {
        return super.tracer() as StalkTracer;
    }


    /**
     * Sets the start time of span. Defaults to `Date.now()`.
     */
    start(startTime?: number) {
        this._startTime = startTime || Date.now();
    }


    /**
     * Adds a reference to another span.
     */
    addReference(ref: opentracing.Reference) {
        this._references.push(ref);
    }


    /**
     * Gets specified tag.
     */
    getTag(key: string) {
        return this._tags[key];
    }


    ///////////////////////////////////////////
    // Override opentracing internal methods //
    ///////////////////////////////////////////


    /**
     * Returns the span context.
     */
    protected _context() {
        return this.__context;
    }


    /**
     * Returns the tracer.
     */
    protected _tracer() {
        return this.__tracer;
    }


    /**
     * Sets the operation name of span.
     */
    protected _setOperationName(name: string) {
        this._operationName = name;
    }


    /**
     * Add tags to the span.
     * Will be merged into current tags with object assigning.
     */
    protected _addTags(keyValuePairs: { [key: string]: any }) {
        this._tags = {
            ...this._tags,
            ...keyValuePairs
        };
    }


    /**
     * Adds a log.
     */
    protected _log(keyValuePairs: { [key: string]: any }, timestamp?: number) {
        const log = {
            fields: keyValuePairs,
            timestamp: timestamp || Date.now()
        };
        this._logs.push(log);

        // Not cool bro
        this.__tracer.reporters.forEach((reporter) => {
            if (reporter.accepts.spanLog) {
                reporter.recieveSpanLog(this, log);
            }
        });
    }


    /**
     * Finishes span. Defaults to `Date.now()`.
     */
    protected _finish(finishTime?: number) {
        this._finishTime = finishTime || Date.now();

        // Not cool bro
        this.__tracer.reporters.forEach((reporter) => {
            if (reporter.accepts.spanFinish) {
                reporter.recieveSpanFinish(this);
            }
        });
    }
}

export default StalkSpan;