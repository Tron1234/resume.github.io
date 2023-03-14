import * as zh from '../lang/ZH_CN.js'
import * as en from '../lang/EN_US.js'
import { scrollTo, createElement } from './utils.js'
// 上一个动画完成的时间,第一页动画是否结束
let lastTime = 0, isFirstEnd = false
const classList = ['first', 'third', 'second', 'fourth', 'fifth', 'sixth']
// 获取csss设置的变量值
const root = document.querySelector(":root")

// 国际化
const language = localStorage.getItem('language')
const languageStatus = !language || language === 'zh'
const { selfAssessment_title, introduce, selfAssessment, sendGift, peroration, chapters } = (languageStatus ? zh : en)
document.getElementById('toggle').checked = !languageStatus

function initAni() {
  // 打字机
  typing()
  // 处理box
  box()
  // 处理事件
  event()
  // 动态添加文本
  giftContent()
}

// 打字机效果
function typing() {
  const introduce_dom = document.getElementById('introduce')
  const title_dom = document.getElementById('title')
  const selfAssessment_dom = document.getElementById('selfAssessment')
  title_dom.innerText = selfAssessment_title
  // 每个词需要的时间，单位秒
  const wordTime = languageStatus ? 0.07 : 0.05
  //文本宽度
  const fontSize = Number(getComputedStyle(root).getPropertyValue("--fontSize").replace('px', '')) + 2
  // web端百分比
  const webPercent = Number(getComputedStyle(root).getPropertyValue("--webPercent").replace('%', '')) / 100
  // 移动端比例
  const mobilePercent = Number(getComputedStyle(root).getPropertyValue("--mobilePercent").replace('%', '')) / 100
  // 文本显示最长宽度
  const maxWidth = document.documentElement.clientWidth * (window.screen.width > 500 ? webPercent : mobilePercent) - 34
  // 柯里化写入dom
  const hanlderChild = hanlderRow(fontSize, maxWidth)
  hanlderChild(introduce_dom, introduce)
  // 处理自我总结
  root.style.setProperty('--lastRowWidth2', selfAssessment_title.length + 2 + 'em')
  const time = selfAssessment_title.length * wordTime
  title_dom.style = `animation: typing_last_2 ${time}s steps(${selfAssessment_title.length}, end) ${lastTime}s forwards, blink 0.6s step-end ${lastTime}s infinite, blink-close 0s ease ${lastTime + time}s forwards;`
  setTimeout(() => {
    document.getElementsByTagName('main')[0].style = `overflow: hidden auto;`
    root.style.setProperty('--contact-opacity', 0)
    scrollTo(document.getElementById('title').offsetTop - 40, 350)
  }, lastTime * 1000)
  lastTime += time
  hanlderChild(selfAssessment_dom, selfAssessment)

  function hanlderRow(fontSize, maxWidth) {
    let i = 0
    return (dom, text) => {
      const fragment = document.createDocumentFragment();
      i++
      // 记录每一行文字数用于动画的时长计算
      let length = 0 // 一行文字长度
      let textIndex = 0 // 文字索引值
      let lastIndex = 0 // 上一次的索引值
      while (textIndex < text.length) {
        const str = text[textIndex] // 当前文字
        if (/[a-zA-Z0-9]/.test(str)) {
          length += (fontSize / (languageStatus ? 1.5 : 2.4))
        } else {
          length += fontSize
        }
        // 计算除最后一行外的文本，最后一行在while循环外处理
        if (length >= maxWidth) {
          const str = text.slice(lastIndex, textIndex)
          const time = str.length * wordTime
          fragment.appendChild(createDom('div', str, time, lastTime))
          lastTime += time
          lastIndex = textIndex
          length = 0
        }
        textIndex++
      }
      const str = text.slice(lastIndex)
      const time = str.length * wordTime
      root.style.setProperty('--lastRowWidth' + (i === 1 ? 1 : 3), str.length + (i === 1 ? 2 : 5) + 'em')
      fragment.appendChild(createDom('div', str, time, lastTime, true))
      lastTime += time
      dom.appendChild(fragment)
    }

    function createDom(tag, content, time, lastTime, last = false) {
      return createElement(tag, {
        style: `animation: ${last ? ('typing_last_' + (i === 1 ? 1 : 3)) : 'typing'} ${time}s steps(${content.length}, end) ${lastTime}s forwards, blink 0.6s step-end ${lastTime}s infinite, blink-close 0s ease ${lastTime + time}s forwards;`
      }, content)
    }
  }
}

function box() {
  setTimeout(() => {
    document.getElementsByClassName('gift-box')[0].style = 'opacity:1'
    document.getElementsByClassName('control-box')[0].style = 'opacity:1'
    isFirstEnd = true
  }, lastTime * 1000)
  document.getElementById('giftTitle').innerText = sendGift
  document.getElementById('peroration').innerText = peroration
}

function event() {
  const dom = document.querySelector('.gift>ul>li:nth-of-type(1)')
  if (window.addEventListener) {
    /** DOMMouseScroll is for mozilla. */
    window.addEventListener('DOMMouseScroll', wheel, false)
  }
  window.onmousewheel = document.onmousewheel = wheel
  window.ontouchstart = document.ontouchstart = touchstart
  window.ontouchend = document.ontouchend = touchend
  window.ontouchmove = document.ontouchmove = touchmove

  const distance = Number(getComputedStyle(root).getPropertyValue("--giftbox").replace('px', ''))
  const rate = Math.max(document.documentElement.clientHeight, document.documentElement.clientWidth) / distance
  root.style.setProperty('--centerDistance', document.documentElement.clientHeight / 2 - (dom.parentElement.parentElement.offsetTop + dom.clientHeight / 2
  ) + 'px')
  root.style.setProperty('--largeRate', rate)
  // 可视区高度
  const clientHeight =
    document.getElementsByTagName('main')[0].clientHeight
  // 滚动条总高度
  const scrollHeight =
    document.getElementsByTagName('main')[0].scrollHeight
  let down = true // 定义一个标志，当滚轮向下滚时，执行一些操作
  let lastFlag = false // 上一次滚动时间
  let timer = null
  function wheel(e) {
    const scrollTop =
      document.getElementsByTagName('main')[0].scrollTop

    const opacity = 1 - scrollTop / 30
    root.style.setProperty('--contact-opacity', opacity > 1 ? 1 : opacity < 0 ? 0 : opacity)

    if (!lastFlag) {
      lastFlag = true
      // 距顶部
      down = e.wheelDelta ? e.wheelDelta < 0 : e.detail > 0;
      turnPage(scrollTop)
      return
    }
    clearTimeout(timer)
    timer = setTimeout(() => {
      lastFlag = false
    }, 500)
  }

  let startClientY, threshold = 20 // 触摸时的位置，手指触摸的阈值

  function touchstart(e) {
    startClientY = e.changedTouches[0].clientY
  }

  function touchmove(e) {
    const scrollTop =
      document.getElementsByTagName('main')[0].scrollTop
    const opacity = 1 - scrollTop / 20
    root.style.setProperty('--contact-opacity', opacity > 1 ? 1 : opacity < 0 ? 0 : opacity)
  }

  function touchend(e) {
    touchmove(e)
    if (!lastFlag) {
      lastFlag = true
      // 距顶部
      const scrollTop =
        document.getElementsByTagName('main')[0].scrollTop
      const temp = startClientY - e.changedTouches[0].clientY
      if (Math.abs(temp) <= threshold) return
      down = temp > 0
      turnPage(scrollTop)
      return
    }
    clearTimeout(timer)
    timer = setTimeout(() => {
      lastFlag = false
    }, 250)
  }

  const pagination = { _index: 0 }
  Object.defineProperty(pagination, 'index', {
    set(value) {
      // 清空之前的索引样式
      document.querySelector(`.control-box>li:nth-of-type(${this._index + 1})>div`).classList.remove('control-active')
      const boxSecond = Number(getComputedStyle(root).getPropertyValue("--boxSecond").replace('s', '')) * 1000
      if (pagination.index < value) {
        // 下一页
        switch (pagination.index) {
          case 0:
            root.style.setProperty('--contact-opacity', 1)
            scrollTo(0, boxSecond)
            setTimeout(() => {
              document.getElementsByTagName('main')[0].style = "overflow: hidden;"
              document.getElementsByClassName('gift')[0].classList.remove('close-gift', 'small-gift')
              document.getElementsByClassName('gift')[0].classList.add('open-gift', 'large-gift')
              document.getElementsByClassName('left-avatar')[0].classList.add('left-avatar-ani')
            }, boxSecond)
            break
          case 1:
            // 右移
            document.getElementsByClassName('gift')[0].classList.add('gift-right')
            document.getElementsByClassName('left-avatar')[0].classList.remove('left-avatar-ani')
            break
          case 2:
            // 左下
            document.getElementsByClassName('gift')[0].classList.add('gift-left-bottom')
            break
          case 3:
            // 左上
            document.getElementsByClassName('gift')[0].classList.add('gift-left-top')
            break
          case 4:
            // 右上
            document.getElementsByClassName('gift')[0].classList.add('gift-right-top')
            break
          case 5:
            // 上
            document.getElementsByClassName('gift')[0].classList.add('gift-top')
            document.getElementsByClassName('article-end')[0].style = "opacity:1"
            document.getElementById('content').style = "opacity:0"
            break
          case 6:
            // 关闭
            document.getElementsByClassName('gift-box')[0].classList.add('gift-box-translate')
            document.getElementsByClassName('gift')[0].classList.add('small-gift', 'close-gift')
            document.getElementsByClassName('gift')[0].classList.remove('large-gift', 'gift-right', 'gift-left-bottom', 'gift-left-top', 'gift-right-top', 'gift-top')
            setTimeout(() => {
              document.getElementsByClassName('gift-title-content')[0].classList.add('gift-title-content-last')
            }, boxSecond)
            break
        }
      } else {
        // 上一页
        switch (pagination.index) {
          case 1:
            // 需要保留open-gift动画
            document.getElementsByClassName('gift')[0].classList.remove('large-gift')
            document.getElementsByClassName('left-avatar')[0].classList.remove('left-avatar-ani')
            document.getElementsByClassName('gift')[0].classList.add('small-gift')
            setTimeout(() => {
              document.getElementsByClassName('gift')[0].classList.add('close-gift')
              setTimeout(() => {
                document.getElementsByTagName('main')[0].style = `overflow: hidden auto;`
              }, 1000 - boxSecond)
            }, boxSecond)
            break
          case 2:
            document.getElementsByClassName('gift')[0].classList.remove('gift-right')
            document.getElementsByClassName('left-avatar')[0].classList.add('left-avatar-ani')
            break
          case 3:
            document.getElementsByClassName('gift')[0].classList.remove('gift-left-bottom')
            break
          case 4:
            document.getElementsByClassName('gift')[0].classList.remove('gift-left-top')
            break
          case 5:
            document.getElementsByClassName('gift')[0].classList.remove('gift-right-top')
            break
          case 6:
            document.getElementsByClassName('gift')[0].classList.remove('gift-top')
            document.getElementById('content').style = ""
            document.getElementsByClassName('article-end')[0].style = ""
            document.getElementsByClassName('gift-title-content')[0].classList.remove('gift-title-content-last')
            break
          case 7:
            document.getElementsByClassName('gift-box')[0].classList.remove('gift-box-translate')
            document.getElementsByClassName('gift')[0].classList.remove('close-gift', 'small-gift')
            document.getElementsByClassName('gift')[0].classList.add('open-gift', 'large-gift', 'gift-right', 'gift-left-bottom', 'gift-left-top', 'gift-right-top', 'gift-top')
            document.getElementsByTagName('main')[0].style = "overflow: hidden;"
            break
        }
      }
      this._index = value < 0 ? 0 : (value > 7 ? 7 : value)
      document.querySelector(`.control-box>li:nth-of-type(${this._index + 1})>div`).classList.add('control-active')
    },
    get() {
      return this._index
    }
  })

  function turnPage(scrollTop) {
    if (!pagination.index && !isFirstEnd) return
    if (down) {
      // 没有触底不做向下翻页操作
      if (!pagination.index && scrollTop + clientHeight + threshold < scrollHeight) return
      if (pagination.index >= 7) return
      console.log('向下翻页---------')
      // 下一页
      if (pagination.index > 0 && pagination.index < 7) {
        const dom = document.getElementsByClassName(`inner-${classList[pagination.index - 1]}`)[0]
        console.log(dom.scrollTop, dom.clientHeight, threshold, dom.scrollHeight);
        if (dom.scrollTop + dom.clientHeight + threshold < dom.scrollHeight) return
      }
      pagination.index++
    } else {
      // 没有到顶不做向上翻页操作
      if (pagination.index === 7 && scrollTop > threshold) return
      if (pagination.index <= 0) return
      console.log('向上翻页++++++++++')
      // 上一页
      if (pagination.index > 0 && pagination.index < 7) {
        const dom = document.getElementsByClassName(`inner-${classList[pagination.index - 1]}`)[0]
        if (dom.scrollTop > threshold) return
      }
      pagination.index--
    }
  }
  const audio = new Audio()
  const audioUrls = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si', 'do']
  document.querySelectorAll('.inner-third_content>.icon-box>.icon-style').forEach((el, index) => {
    el.addEventListener('click', e => {
      audio.pause()
      audio.src = `./static/syllable/${audioUrls[index]}.mp3`
      audio.play()
    })
  })
  document.getElementById('toggle').addEventListener('change', e => {
    if (e.target.checked) {
      localStorage.setItem('language', 'EN')
    } else {
      localStorage.removeItem('language')
    }
    setTimeout(() => {
      location.reload()
    }, 500)
  })

  document.querySelectorAll('.contact-menu svg').forEach(el => {
    el.addEventListener('click', e => {
      window.open(e.currentTarget.dataset.target)
    })
  })
}

function giftContent() {
  if (document.documentElement.clientWidth > 560) {
    const script = createElement('script', {
      src: 'static/canvas/nest.js',
      type: 'text/javascript',
      color: '65,122,169',
      opacity: '0.8',
      zIndex: '-2',
      count: '80'
    })
    document.body.append(script)
  }
  // 第一页
  const waveCanvas = createElement('canvas', {
    id: 'waveCanvas'
  })
  document.getElementsByClassName('inner-box')[0].appendChild(waveCanvas)
  document.getElementsByClassName('inner-first_title')[0].innerText = chapters[0].title
  document.getElementsByClassName('inner-first_right')[0].innerHTML += chapters[0].selfInfo.reduce((total, item, index) => {
    let str = ''
    switch (index) {
      case 0:
      case 1:
      case 2:
      case 3:
        str = `<div>${item.value}</div>`
        break
      case 4:
        str = `<a href="tel:${item.value}#mp.weixin.qq.com" class="target-event">${item.value}</a>`
        break
      case 5:
        str = `<a href="mailto:${item.value}" class="target-event">${item.value}</a>`
        break
      case 6:
        str = `<a href="${item.value}" class="target-event" target="_blank">${item.value}</a>`
        break
      case 7:
        str = `<a href="${item.value}" class="target-event" target="_blank">${item.value}</a>`
        break
    }
    return total += `<div class="flex-row-between items-start">
      <div class="white-nowrap" style="margin-right:4em">${item.title}:</div>
      ${str}
    </div>`
  }, '') + `<div class="inner-first_title summarize-title">${chapters[0].summarize_title}</div><div class="inner-first_summarize">${chapters[0].summarize}</div>`

  // 第二页
  const fragmentSecond = document.createDocumentFragment();
  document.querySelectorAll('.inner-third_content>.icon-box>.icon-name').forEach((el, index) => {
    el.innerText = chapters[2].skills[index]
  })
  document.querySelector('.inner-third>.inner-third_right>.inner-third_right-title').innerText = chapters[2].commonSkills
  fragmentSecond.append(createElement('div', {
    class: 'inner-third_left-title inner-title'
  }, chapters[2].skillsIntro), createElement('div', {
    class: 'inner-third_left-content'
  }))
  chapters[2].skillsArticle.forEach(item => {
    fragmentSecond.childNodes[1].appendChild(createElement('div', {
      class: 'inner-third_left-item'
    }, item))
  })
  document.querySelector('.inner-third>.inner-third_left').appendChild(fragmentSecond)

  // 第三页
  document.querySelector('.inner-second>.inner-second_title').innerText = chapters[1].title
  const fragmentThird = document.createDocumentFragment();
  chapters[1].list.forEach((item, index) => {
    fragmentThird.appendChild(createElement('div', {
      class: 'inner-second_item'
    }))
    fragmentThird.childNodes[index].append(createElement('div', {
      class: 'inner-second_item-time'
    }, item.time), createElement('div', {
      class: 'inner-second_item-content'
    }))
    fragmentThird.childNodes[index].childNodes[1].append(createElement('div', {
      class: 'inner-second_item-time'
    }, item.jobName), createElement('div', {
      class: 'inner-second_item-company'
    }, item.company))
    item.jobContent.forEach((child, i) => {
      fragmentThird.childNodes[index].childNodes[1].appendChild(createElement('div', {
        class: 'inner-second_item-detail',
        'data-index': i + 1 + '.'
      }, child))
    })
  })
  document.querySelector('.inner-second>.inner-second_content').appendChild(fragmentThird)

  // 第四页
  document.querySelector('.inner-fourth>.inner-fourth_title').innerText = chapters[3].title
  const fragmentFourth = document.createDocumentFragment();
  chapters[3].list.forEach((item,index) => {
    fragmentFourth.appendChild(createElement('div', { class: 'inner-fourth_item' }))
    fragmentFourth.childNodes[index].append(createElement('img', { class: 'inner-fourth_item-left', src: item.icon }),createElement('div', { class: 'inner-fourth_item-right' }))
    fragmentFourth.childNodes[index].childNodes[1].append(createElement('div', { class: 'item-right-name' }, item.name),createElement('div', { class: 'item-right-info' }),createElement('div', { class: 'item-right-info' }),createElement('div', { class: 'item-right-info' }))
    fragmentFourth.childNodes[index].childNodes[1].childNodes[0].appendChild(createElement('img', { class: 'inner-fourth_item-left_mobile', src: item.icon }))
    fragmentFourth.childNodes[index].childNodes[1].childNodes[1].append(createElement('div', { class: 'item-right-title' }, chapters[3].projectDesc + ':'), createElement('div', { class: 'item-right-content' }, item.projectDesc))
    fragmentFourth.childNodes[index].childNodes[1].childNodes[2].append(createElement('div', { class: 'item-right-title' }, chapters[3].responsibilityDesc + ':'), createElement('div', { class: 'item-right-content' }, item.responsibilityDesc))
    fragmentFourth.childNodes[index].childNodes[1].childNodes[3].append(createElement('div', { class: 'item-right-title' }, chapters[3].keyPoints + ':'),createElement('div', { class: 'item-right-content' }))
    item.keyPoints.forEach((child, i) => {
      fragmentFourth.childNodes[index].childNodes[1].childNodes[3].childNodes[1].append(createElement('div', {
        'data-index': i + 1 + '.',
        class: 'keypoint-item'
      }, child))
    })
  })
  document.querySelector('.inner-fourth>.inner-fourth_content').append(fragmentFourth)

  // 第五页
  document.querySelector('.inner-fifth>.inner-fifth_title').innerText = chapters[4].title
  const fragmentFifth = document.createDocumentFragment();
  chapters[4].list.forEach((item,index) => {
    fragmentFifth.appendChild(createElement('div', { class: 'inner-fifth_item' }))
    fragmentFifth.childNodes[index].appendChild(createElement('div', { class: 'inner-fifth_item-right' }))
    fragmentFifth.childNodes[index].childNodes[0].append(createElement('div', { class: 'item-right-name' }, item.name), createElement('div', { class: 'item-right-info' }), createElement('div', { class: 'item-right-info' }), createElement('div', { class: 'item-right-info' }))
    fragmentFifth.childNodes[index].childNodes[0].childNodes[1].append(createElement('div', { class: 'item-right-title' }, chapters[4].projectDesc + ':'), createElement('div', { class: 'item-right-content' }, item.projectDesc))
    fragmentFifth.childNodes[index].childNodes[0].childNodes[2].append(createElement('div', { class: 'item-right-title' }, chapters[4].responsibilityDesc + ':'), createElement('div', { class: 'item-right-content' }, item.responsibilityDesc))
    fragmentFifth.childNodes[index].childNodes[0].childNodes[3].append(createElement('div', { class: 'item-right-title' }, chapters[4].keyPoints + ':'), createElement('div', { class: 'item-right-content' }))
    item.keyPoints.forEach((child, i) => {
      fragmentFifth.childNodes[index].childNodes[0].childNodes[3].childNodes[1].appendChild(createElement('div', {
        'data-index': i + 1 + '.',
        class: 'keypoint-item'
      }, child))
    })
  })
  document.querySelector('.inner-fifth>.inner-fifth_content').appendChild(fragmentFifth)

  // 第六页
  const fragmentSixth = document.createDocumentFragment();
  const sixthDom = document.querySelector('.inner-sixth>.inner-sixth_content')
  fragmentSixth.append(createElement('div', { class: 'inner-sixth_content-name' }, chapters[5].name), createElement('div', { class: 'inner-sixth_content-introduction' }, chapters[5].introduction), createElement('div', { class: 'inner-sixth_content-college' }, chapters[5].college), createElement('div', { class: 'inner-sixth_content-major' }, chapters[5].major), createElement('div', { class: 'inner-sixth_content-honour' }), createElement('div', { class: 'inner-sixth_content-time' }, chapters[5].time))
  chapters[5].list.forEach(item => {
    fragmentSixth.childNodes[4].append(createElement('div', { class: 'honour-item' }, item))
  })
  sixthDom.appendChild(fragmentSixth)
}

window.onload = initAni()