window.rh = (function () {

    var rh = {};

    var call = function (type, url, params, success, error, async, token) {
        try {
            var xhr = new XMLHttpRequest();
            xhr.open(type, url, async);

            xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET');
            if (!inu(token)) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + token);
            }

            xhr.onreadystatechange = function () {
                if (xhr.status == 401) {
                    if (typeof error === 'function') {
                        error.call(this, xhr.responseText, xhr.status);
                    }
                }
            }.bind(this);

            xhr.onload = function () {
                if (xhr.status === 200) {
                    if (typeof success === 'function') {
                        var response = {};
                        if (xhr.responseText != "") {
                            response = JSON.parse(xhr.responseText);
                        }
                        success.call(this, response);
                    }
                } else {
                    if (typeof error === 'function') {
                        if (xhr.status === 999) {
                            error.call(this, xhr.responseText);
                            console.log(xhr.statusText);
                        } else {
                            error.call(this, xhr.statusText);
                            console.log(xhr.statusText);
                        }
                    }
                }
            }.bind(this);

            if (inu(params)) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(params));
            }
        } catch (e) {
            if (typeof error === 'function') {
                error.call(this, e);
            }
        }
    }

    rh.post = function (url, params, success, error, token) {
        call('post', url, params, success, error, true, token);
    }

    rh.get = function (url, success, error, token) {
        call('get', url, null, success, error, true, token);
    }

    rh.postSync = function (url, params, success, error, token) {
        call('post', url, params, success, error, false, token);
    }


    // inu = is null - helper function
    rh.inu = function (str) {
        if (str === null || str === undefined || str == "null" || str == "undefined") {
            return true;
        }
        return false;
    }

    return rh;
}());