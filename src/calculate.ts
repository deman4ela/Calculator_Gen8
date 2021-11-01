export class Calculate {

    protected _result: number
    
    constructor(){
        this._result = 0
    }
  
    get result(){
      return this._result
    }

    public plus(numberFirst: number, numberSecond: number): void{
      this._result = numberFirst + numberSecond
    }
  
    public minus(numberFirst: number, numberSecond: number): void{
      this._result = numberFirst - numberSecond
    }
    public multiply(numberFirst: number, numberSecond: number): void{
        this._result = numberFirst * numberSecond
      }
    
      public divide(numberFirst: number, numberSecond: number): void{
        this._result = numberFirst / numberSecond
      }
}