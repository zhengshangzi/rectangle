$(function() {
    //get dom elem
    var $width   = $('#width');
    var $height  = $('#height');
    var $calc    = $('#calc');
    var $perimeter=$('#perimeter');
    var $area    =$('#area');
    /*calc button click event*/
    $calc.click(function() {
        // //get value
        // var width  = Number($width.val());
        // var height = Number($height.val());
        // //calculate
        // var p      = roundFractional(width * 2 + height * 2, 10);
        // var a      = roundFractional(width * height, 10);
        // $perimeter.val(p);
        // $area.val(a);
        //output
        var rect = rectangle();
        $perimeter.val(rect.perimeter($width.val(), $height.val()));
        $area.val(rect.area($width.val(), $height.val()));
    });
    
    /**
     * 小数点后面保留第 n 位
     * 
     * @param x 做近似处理的数
     * @param n 小数点后第 n 位
     * @returns 近似处理后的数 
     */
    function roundFractional(x, n) {
        return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    }
});
  