export const setRedirectPath = (path: string) => {
    sessionStorage.setItem('redirectPath', path);
};

export const getRedirectPath = () => {
    const path = sessionStorage.getItem('redirectPath');
    sessionStorage.removeItem('redirectPath');
    return path;
};