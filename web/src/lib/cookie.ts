import cookie from "js-cookie";

export const nameKey = 'namekey';
export const sin = {
    s1: 'sin1',
    s2: 'sin2',
    s3: 'sin3'
};

class Cookie {
    public getCookie(key: string): string | undefined {
        let item = undefined;
        if (cookie.get(key) !== undefined) {
            item = cookie.get(key);
        }
        return item;
    }

    public setCookie(key: string, value: string): void {
        cookie.set(key, value);
    }

    public removeCookie(key: string): void {
        cookie.remove(key);
    }
}

const cookie1 = new Cookie();

export default cookie1;