export const mobileBasePath = '/mobile.html'

export const syncPath = (type = 'pc') => {
    const simulatorGoPath = () => {
        const simulatorIframe = getSimulatorIframe();
        simulatorIframe.src = mobileBasePath + window.location.hash;
    };
    const goPath = () => {
        const pcWindow = window.parent;
        pcWindow.location.href = '/' + window.location.hash;
    };
    if (type === 'pc') {
        simulatorGoPath();
        window.addEventListener('hashchange', function () {
            simulatorGoPath();
        }, false);
    } else {
        window.addEventListener('hashchange', function () {
            goPath();
        }, false);
    }
};

export const getSimulatorIframe = () => {
    return window.frames['flyv-doc-simulator'];
};