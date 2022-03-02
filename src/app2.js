import './app2.css'
import $ from "jquery"

const $tabBar = $('#app2 .tab-bar') //避免冲突
const $tabContent = $('#app2 .tab-content')
const localKey = 'app2.index'
const index = localStorage.getItem(localKey) || 0

$tabBar.on('click', 'li', (e) => { //事件委托
    const $li = $(e.currentTarget);//DOM元素用jquery封装下，DOM元素太难用。
    $li.addClass('selected').siblings().removeClass('selected')//背景切换
    const index = $li.index()//获取下标
    localStorage.setItem(localKey, index)//保存数据
    console.log(index)
    $tabContent.children().eq(index).addClass('active').siblings().removeClass('active')
})
$tabBar.children().eq(index).trigger('click')