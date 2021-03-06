// 已适配shiyu项目，原项目地址：https://gitee.com/sfyblack/vue-waves
import './waves.css'
import store from '@/store'

export default {
  install(Vue, options) {
    // 判断options有没有值，没有就初始化一个空对象
    if (!options) {
      options = {}
    }
    const directiveName = 'shiyu-waves'
    // 给配置对象附一个默认值
    const defaultOpt = {
      color: options.color || 'rgba(0,0,0,0.1)',
      size: options.size || 0,
      time: options.time || 1,
      speed: options.speed || 'ease-out',
      tag: options.tag || 'span'
    }

    Vue.directive(directiveName, {
      bind(el, binding) {
        el.addEventListener('click', function(e) {
          let bindValue = binding.value
          if (!bindValue) {
            bindValue = {}
          }
          // 主题色适配
          let waveColor = defaultOpt.color
          if (store.state.Setting.theme === 'dark') {
            waveColor = 'rgba(255,255,255,0.1)'
          }
          const customOpt = {
            // 没有传颜色就用默认值
            color: bindValue.color || waveColor,
            // 如果默认的offsetHeight 读取失败，可以直接传如元素大小（我也不知道为什么有时候offsetHeight会失效）
            size: bindValue.size || defaultOpt.size,
            // 动画时长默认 1秒
            time: bindValue.time || defaultOpt.time,
            // 运动曲线
            speed: bindValue.speed || defaultOpt.speed,
            // 使用什么标签作为波纹的容器（建议使用无特殊含义标签）
            tag: bindValue.tag || defaultOpt.tag
          }
          // 元素不存在终止代码行下运行
          if (!el) { return null }
          // 给指令绑定元素加样式，相对定位和溢出隐藏
          el.style.position = 'relative'
          el.style.overflow = 'hidden'

          // 取指令绑定元素宽高中的最大值 * 1.4
          let maxSize = Math.max(el.offsetWidth, el.offsetHeight) * 1.4

          // 判断是否传了 size,传了就用传的值
          if (customOpt.size !== 0) {
            maxSize = customOpt.size
          }

          // 创建一个元素（波纹主体）
          const ripple = document.createElement(`${customOpt.tag}`)
          // 指定背景颜色
          ripple.style.backgroundColor = customOpt.color
          // 给创建的元素指定类名以及left和top值
          ripple.className = 'ripple'
          ripple.style.left = `${e.layerX}px`
          ripple.style.top = `${e.layerY}px`
          // 指定动画配置
          ripple.style.animation = `v-waves-animate ${customOpt.time}s ${customOpt.speed} 1`
          // 指定ripple的宽度和高度
          ripple.style.width = `${maxSize}px`
          ripple.style.height = `${maxSize}px`
          // 将创建的元素插入指定标签中
          el.appendChild(ripple)

          // 兼容
          ripple.addEventListener('webkitAnimationEnd', function(e) {
            ripple && ripple.remove()
          }, false)
          ripple.addEventListener('mozAnimationEnd', function(e) {
            ripple && ripple.remove()
          }, false)
          // 监听元素的动画结束事件
          ripple.addEventListener('animationend', function(e) {
            // 动画结束后后波纹元素还存在就删除
            ripple && ripple.remove()
          }, false)

          // 动画结束后删除标签
          setTimeout(() => {
            // 过了动画时间后波纹元素还存在就删除
            ripple && ripple.remove()
          }, customOpt.time * 1000)
        }, false)
      }
    })
  }
}
