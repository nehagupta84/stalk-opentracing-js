import { BaseReporter } from './base';
import { Span } from '../stalk/span';


export class StalkAgentHttpReporter extends BaseReporter {
    private _serviceName: string;
    private _tags: { [key: string]: string } = {};
    private _spans: any[] = [];
    private _stalkAgentApiRoot = 'http://localhost:7855';
    private _fetch: typeof fetch;

    accepts = {
        spanCreate: false,
        spanLog: false,
        spanFinish: true
    };


    constructor(options: {
        serviceName: string,
        tags?: { [key: string]: string },
        stalkAgentApiRoot: string,
        fetch: typeof fetch
    }) {
        super();

        this._serviceName = options.serviceName;
        if (options.tags) this._tags = options.tags;
        this._stalkAgentApiRoot = options.stalkAgentApiRoot;
        this._fetch = options.fetch;
    }


    recieveSpanFinish(span: Span) {
        this._spans.push(span.toJSON());
    }


    report() {
        const spansToReport = this._spans.slice();
        return this._fetch(`${this._stalkAgentApiRoot}/batch`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                serviceName: this._serviceName,
                tags: this._tags,
                spans: spansToReport
            })
        }).then((res) => {
            if (res.ok) {
                spansToReport.forEach((s) => {
                    const index = this._spans.indexOf(s);
                    index > -1 && this._spans.splice(index, 1);
                });
            }
            return res;
        });
    }
}
