const { calculateFinalAmount } = require("../src/pricing");

test("example: sanity check", () => {
  expect(1 + 1).toBe(2);
});

//invalid subtotal 
test("Check for invalid sub total", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
    "Invalid subtotal",
  );
});



// no coupon
test("check for the coupon",()=>{
  expect(calculateFinalAmount(1000)).toBe(950)
})



//no matching coupon
test("check for the value of coupon if matched or not ",()=>{
  expect(()=>calculateFinalAmount(100,"DISCOUNT")).toThrow("Invalid Coupon")
});




// check for SAVE10 coupon
test("check for the value of the coupon",()=>{
  expect(calculateFinalAmount(100,"Save10")).toBe(90)
});

// check for FLAT50 coupon
test("check for the value of the coupon",()=>{
  expect(calculateFinalAmount(100,"fLAT50")).toBe(50)
});