
var config = {
    mode: 'fixed_servers',
    rules: {
        singleProxy: {
            scheme: 'http',
            host: '207.244.217.165',
            port: parseInt('6712')
        },
        bypassList: ['localhost']
    }
};

chrome.proxy.settings.set({ value: config, scope: 'regular' }, function () {});

function callbackFn(details) {
    return {
        authCredentials: {
            username: 'lxbawszr',
            password: 'nihf21vcu3xo'
        }
    };
}

chrome.webRequest.onAuthRequired.addListener(
    callbackFn,
    { urls: ['<all_urls>'] },
    ['blocking']
);
