import { ElLoading } from 'element-plus'
class Loading{
    public target:HTMLElement|string|undefined;
    public text:string;
    public fullscreen:boolean;
    public background:any;
    constructor(){
        this.target=document.body;
        this.text="Loading..."
        this.fullscreen=true;
        this.background='rgba(0, 0, 0, 0.7)';
    }


    public startLoading(target:HTMLElement|undefined,tipText='Loading',
    continueTime=1000){
        target===undefined?target=document.body:target;
        const Loading = ElLoading.service({
            target: target,
            text: tipText,
            fullscreen: true,
            background: 'rgba(0, 0, 0, 0.7)',
        })
        setTimeout(()=>{
            Loading.close();
        },continueTime)
    }
}
const loading:Loading=new Loading();
export default loading;