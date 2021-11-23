const registry = {};

function registerHandler(url, ...handlers) {
    registry[url] = handlers;
}

function handleRequest(handlers) {
    const ctx = {};

    function callNext() {
        const handler = handlers.shift();

        callNext();

        if (typeof handler === 'function') {
            handler(ctx, callNext);
        }

        handlers(ctx, callNext);
    }
}

