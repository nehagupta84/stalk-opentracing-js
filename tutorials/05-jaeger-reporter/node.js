const { opentracing, stalk } = require('../../');
const sleep = (duration) => new Promise(resolve => setTimeout(resolve, duration));

const stalkTracer = new stalk.Tracer();
opentracing.initGlobalTracer(stalkTracer);
const globalTracer = opentracing.globalTracer();

// Let's create a jaeger reporter
const jaegerReporter = new stalk.reporters.JaegerReporter({
    // Jaeger collector base url
    jaegerBaseUrl: 'http://localhost:14268',

    process: {
        serviceName: 'my-awesome-service',
        // Optional process tags
        tags: {
            tag1: 'value1',
            tag2: 'value2'
        }
    },

    // If you're on node.js use `node-fetch` package
    fetch: require('node-fetch'),

    // Extra http headers
    // requestHeaders: {},
});

// Add this reporter to stalk.Tracer
stalkTracer.addReporter(jaegerReporter);

// You can remove it anytime you want
// stalkTracer.removeReporter(jaegerReporter);

async function main() {
    const span = globalTracer.startSpan('main()');
    span.addTags({
        tag1: 'value1',
        tag2: 'value2'
    });

    span.log({ message: 'Will wait 1 second' });
    await sleep(1000);
    await printHello(span);
    span.finish();
}


async function printHello(parentSpan) {
    const span = globalTracer.startSpan('printHello()', { childOf: parentSpan });
    span.log({ message: 'Will wait 500ms more, because I can' });
    await sleep(500);
    console.log('Hello world!');
    span.finish();
}

main().then(async () => {
    try {
        await jaegerReporter.report();
        console.log('Reported!');
        process.exit(0);
    } catch (err) {
        console.error(`Could not reported`, err);
        process.exit(1);
    }
}).catch((err) => {
    console.error(err);
    process.exit(1);
});
