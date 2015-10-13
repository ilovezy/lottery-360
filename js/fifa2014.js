$('select').material_select();

// 单击td选中, 最多选中8个比赛，再多就不能选了
$('table tr').each(function(index, el) {
    var thisTh = $(this).children('th')
    var thisTd = $(this).children('td')
    thisTd.click(function() {
        $(this).toggleClass('active');

        thisTh.addClass('activeMacth');
        if (!thisTd.hasClass('active')) {
            thisTh.removeClass('activeMacth');
        }

        var activeMacthCount = $('table tr th.activeMacth').size()
        if (activeMacthCount > 8) {
            Materialize.toast('最多只能选8场比赛', 2000)
            $(this).removeClass('active');
            thisTh.removeClass('activeMacth');
        }
    })
});

$('#clear').click(function() {
    $('table tr th').removeClass('activeMacth')
    $('table tr td').removeClass('active')
})
