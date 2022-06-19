import {myFunc, arr1, arr2} from "../main";

describe("toEqual and toBe difference", ()=>{
    it("expect myFunc(5) to equal 25", ()=>{
        (expect(myFunc(5))).toEqual(25);
    });

    it("expect arr1 equal arr2", ()=>{
        (expect(arr1)).toEqual(arr2);
    });

    it("expect arr1 toBe arr2", ()=>{
        (expect(arr1)).toBe(arr2);
    });
})
