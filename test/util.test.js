var expect = chai.expect;
//两个参数：字符串，回调函数
describe('矩形面积函数的测试', function() {
    //测试用例
    //3a
  it('area(10, 5) = 50', function() {
    var r = rectangle();
    expect(r.area(10, 5)).to.be.equal(50);
  });

  it('area("10", "5") = 50', function() {
    var r = rectangle();
    expect(r.area("10", "5")).to.be.equal(50);
  });
});