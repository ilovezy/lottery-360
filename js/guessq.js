$('.collapsible').collapsible({
    accordion: false
});

// 箭头上下切换
$(".collapsible-header").click(function() {
    $(this).find('i').toggleClass('hide')
})

// 选择球
$('#chooseRedBall span.ball').click(function() {
    $(this).toggleClass('redBallActive');
    var choosedRedBallCount = $('#chooseRedBall span.ball.redBallActive').size();
    if (choosedRedBallCount > 7) {
        $(this).removeClass('redBallActive')
        Materialize.toast('红球最多只能选7个', 2000)
    }
})
$('#chooseBlueBall span.ball').click(function() {
    $(this).toggleClass('blueBallActive');
    var choosedBlueBallCount = $('#chooseBlueBall span.ball.blueBallActive').size();
    if (choosedBlueBallCount > 2) {
        $(this).removeClass('blueBallActive')
        Materialize.toast('蓝球最多只能选2个', 2000)
    }
})

// 判断所有选中的球的数量
// Materialize.toast('最多只能选8场比赛', 2000)

// 选择球之后 清空和 随机按钮 切换
// 获取一个 min 到 max 之间的整数，包括 min 和 max
function getOneRandomNum(min, max) {
    var num = Math.ceil(Math.random() * max - min) + 1
    return num
}
// 返回一个数组，个数和范围都定了的，且不重复
function getRandomArr(arrLength, min, max) {
    var arr = [],
        tempNum, i;
    for (; arr.length < arrLength;) {
        tempNum = getOneRandomNum(min, max);
        var judge = true;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] == tempNum) {
                judge = false
            }
        }
        if (judge) {
            arr.push(tempNum)
        }
    }
    return arr
}
// var redBallArr = getRandomArr(7, 1, 33)

// 清空
function clearActiveBall() {
    $('#chooseRedBall,#chooseBlueBall').find('span').removeClass('redBallActive blueBallActive')
}
// 清空按钮
$('#clear').click(function() {
        clearActiveBall()

        $(this).hide()
        $('#randomChoose').show()
    })
    // 随机选择
$('#randomChoose').click(function() {
    var redBallArr = getRandomArr(7, 1, 33);
    var blueBallArr = getRandomArr(2, 1, 16);
    clearActiveBall() // 先清空
    $.each(redBallArr, function(index, el) {
        $('#chooseRedBall span.ball').eq(redBallArr[index] - 1).addClass('redBallActive')
    })
    $.each(blueBallArr, function(index, el) {
        $('#chooseBlueBall span.ball').eq(blueBallArr[index] - 1).addClass('blueBallActive')
    })

    $(this).hide()
    $('#clear').show()
})
