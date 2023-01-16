export default () => {
    const options = {
        id: process.env.YM_ID,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true
    }

        (function (m, e, t, r, i, k, a) {
            m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
            m[i].l = 1 * new Date();
            for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
            k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
        })
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    const YandexMetrika = {
        reachGoal: (targetName = '', params = {}) => ym(options.id, 'reachGoal', targetName, params),
        hit: (url = '', options = {}) => ym(options.id, 'hit', url, options),
        addFileExtension: (extensions) => ym(options.id, 'addFileExtension', extensions),
        extLink: (url = '', options = {}) => ym(options.id, 'extLink', url, options),
        file: (url = '', options = {}) => ym(options.id, 'file', url, options),
        getClientID: (callback = (clientID) => clientID) => ym(options.id, 'getClientID', callback),
        notBounce: (options = {}) => ym(options.id, 'notBounce', options = {}),
        params: (params = {}) => ym(options.id, 'params', params),
        replacePhones: () => ym(options.id, 'replacePhones'),
        setUserID: (userID) => ym(options.id, 'setUserID', userID),
        userParams: (params = {}) => ym(options.id, 'userParams', params),
    };

    ym(options.id, "init", options);
}