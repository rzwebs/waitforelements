(function (global) {
    function waitForElements(selectorsMap, callback, interval = 500, timeout = 10000) {
        const startTime = Date.now();
    
        const check = setInterval(() => {
            const elements = {};
            let allExist = true;
    
            for (const key in selectorsMap) {
                const el = document.querySelector(selectorsMap[key]);
                if (!el) {
                    allExist = false;
                    break;
                }
                elements[key] = el;
            }
    
            if (allExist) {
                clearInterval(check);
                callback(elements);
            }
    
            if (Date.now() - startTime > timeout) {
                clearInterval(check);
                console.error("Ожидание элементов истекло!");
            }
        }, interval);
    }
    
    global.waitForElements = waitForElements;
})(window);
