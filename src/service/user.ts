import myAxios from "../plungin/myAxios";
import {setCurrentUserState} from "../status/user";

export const getCurrentUser = async () => {
    const res = await myAxios.get('/user/current') as any;
    res.data.tags =  JSON.parse(res.data?.tags);
    console.log(res)
    if (res?.code === 200) {
        setCurrentUserState(res.data);
        return res.data;
    }
    return null;
}
