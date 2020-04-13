/*
 * @Description: 入口文件
 * @Author: linqibin
 * @Date: 2020-04-13 09:53:16
 * @LastEditTime: 2020-04-13 10:13:52
 * @LastEditors: linqibin
 */
import other from './js/other'

import './css/reset.css'

const header = document.createElement('h1')
header.innerHTML = other.name

document.body.appendChild(header)

document.body.appendChild(other.hearder)