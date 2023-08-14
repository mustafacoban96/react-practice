abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter:string,
    ){}



    getSepial():void{
        console.log('asdasdasd');
    }

    abstract getMus():void
}


// xxxx const hc = new Takephoto("test","test"); we can't create an object from abstract class.
class Instagram extends TakePhoto{
   
    constructor(
        public cameraMod:string,
        public filter: string,
        public burst: number
        ){
            super(cameraMod,filter)
        }

        getMus(): void {
            throw new Error("Method not implemented.");
        }

}
 
const hc = new Instagram("test","test",22);
hc.getSepial()