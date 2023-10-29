import instance from "./config";

const TABLE_NAME = "address";

export const getByUserId = (userId, page, limit = 0) => {
    let url = `/${TABLE_NAME}/?userId=${userId}&_sort=id&_order=desc`;
    if (limit) url += `&_page=${page}&_limit=${limit}`;
    return instance.get(url);
};

export const add = (data) => {
    const url = `/${TABLE_NAME}`;
    return instance.post(url, data);
};

export const get = (id) => {
    const url = `/${TABLE_NAME}/${id}`;
    return instance.get(url);
};

export const getAll = () => {
    const url = `/${TABLE_NAME}`;
    return instance.get(url);
};
