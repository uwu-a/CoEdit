import {ElLoading} from "element-plus";

let loadingInstance: ReturnType<typeof ElLoading.service> | null = null
let requestCount = 0

export function showLoading() {
    if (requestCount === 0) {
        loadingInstance = ElLoading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(0, 0, 0, 0.7)',
        })
    }
    requestCount++;
}

export function hideLoading() {
    requestCount--
    if (requestCount <= 0) {
        loadingInstance?.close();
        loadingInstance = null;
        requestCount = 0;
    }
}