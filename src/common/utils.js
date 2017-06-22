// 返回信息状态检测
export const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
};

// 返回 JSON
export const parseJSON = (response) => {
    return response.json();
};
