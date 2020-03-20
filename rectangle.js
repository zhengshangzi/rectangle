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
        if(!validate('#width') || !validate('#height')) return;

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
    $width.focusout(function() {
   if(validate('#width'))
     $width.select();
  });
  
   $height.focusout(function() {
     if( validate('#height'))
     $height.select();
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
    /**
   * 对字段进行数据合法性校验
   *
   * @param field 字段的 id
   * @returns boolean 验证通过为 true，验证不通过为 false
   */
  function validate(field) {
    //get dom error message
    var $data    = $(field),
        $message = $(field + '-validate'),
        label    = $(field).attr('data-label');
    //null
    if($data.val() === '') {
      $message.html(label + '不能为空！');
      //设置焦点
      $data.select();
      return false;
    }
    //number
    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())) {
      $message.html(label + '必须是数值');
      $data.select();
      return false;
    }
    //>0 范围
    if(window.Number($data.val()) < 0) {
      //prompt error message
      //return false
      $message.html(label + '必须大于零');
      $data.select();
      return false;
    }
    $message.html('');
    return true;
  }
});
  