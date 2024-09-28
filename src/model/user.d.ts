/**
 * 前端收发用户类型
 */
export  type CurrentUser={
    id:number;
    username:string;
    userAccount :string;
    avatarUrl ?:string;
    profile?:string;
    gender:number;
    phone: string;
    email:string;
    userRole:number;
    tags:String[];
    createTime:Date;

}
