import arrays from "../utilities/arrays";
import strings from "../utilities/strings";

it("expect arrays.addArr([1,2,3,4,5]) to equal 15", ()=>{
        (expect(arrays.addArr([1,2,3,4,5]))).toEqual(15);
    });

it("expect arrays.addArr([1,2,3,4,5]) to be greater than 10", ()=>{
        (expect(arrays.addArr([1,2,3,4,5]))).toBeGreaterThan(15);
    });

it("expect arrays.concatArr([1,2,3,4,5], [1,2,3,4,5] to contain 5", ()=>{
        (expect(arrays.concatArr([1,2,3,4,5], [1,2,3,4,5]))).toContain(5);
    });

it("expect arrays.cut3([1,2,3,4,5]) to be truthy", ()=>{
        (expect(arrays.cut3([1,2,3,4,5]))).toBeTruthy();
    });
it("expect arrays.cut3([1,2,3,4,5]) to be falsy", ()=>{
        (expect(arrays.cut3([1,2,3,4,5]))).toBeFalsy();
    });


it("expect strings.capitalize(\"test\") to be varialbe ", ()=>{
    const str:string = "TEST";
        (expect(strings.capitalize("Test"))).toBe(str);
    });
it("expect strings.capitalize(\"test\") to be equal to varialbe ", ()=>{
    const str:string = "TEST";
        (expect(strings.capitalize("Test"))).toEqual(str);
    });
