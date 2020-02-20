/*
 * HKNBP_Core is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * HKNBP_Core is distributed in the hope that it will be useful,
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with HKNBP_Core.  If not, see <https://www.gnu.org/licenses/>.
 */

package org.sourcekey.hknbp.hknbp_core

import kotlinx.serialization.Serializable
import kotlin.browser.window
import kotlin.js.Math.abs


/**
 * 呢個Class嘅作用
 * 令ArryList有LinkList嘅型態
 */
open class ArrayLinkList<T> : ArrayList<T> {
    interface OnElementsChangeListener{
        fun onElementsChange()
    }

    private val onElementsChangeListeners: ArrayList<OnElementsChangeListener> = ArrayList()

    fun addOnElementsChangeListener(onElementsChangeListener: OnElementsChangeListener){
        onElementsChangeListeners.add(onElementsChangeListener)
    }

    override fun add(element: T): Boolean {
        for (onElementsChangeListener in onElementsChangeListeners){onElementsChangeListener.onElementsChange()}
        return super.add(element)
    }

    override fun add(index: Int, element: T) {
        for (onElementsChangeListener in onElementsChangeListeners){onElementsChangeListener.onElementsChange()}
        super.add(index, element)
    }

    override fun addAll(elements: Collection<T>): Boolean {
        for (onElementsChangeListener in onElementsChangeListeners){onElementsChangeListener.onElementsChange()}
        return super.addAll(elements)
    }

    override fun addAll(index: Int, elements: Collection<T>): Boolean {
        for (onElementsChangeListener in onElementsChangeListeners){onElementsChangeListener.onElementsChange()}
        return super.addAll(index, elements)
    }

    override fun clear() {
        for (onElementsChangeListener in onElementsChangeListeners){onElementsChangeListener.onElementsChange()}
        super.clear()
    }

    override fun remove(element: T): Boolean {
        for (onElementsChangeListener in onElementsChangeListeners){onElementsChangeListener.onElementsChange()}
        return super.remove(element)
    }

    override fun removeAll(elements: Collection<T>): Boolean {
        for (onElementsChangeListener in onElementsChangeListeners){onElementsChangeListener.onElementsChange()}
        return super.removeAll(elements)
    }

    override fun removeAt(index: Int): T {
        for (onElementsChangeListener in onElementsChangeListeners){onElementsChangeListener.onElementsChange()}
        return super.removeAt(index)
    }

    override fun removeRange(fromIndex: Int, toIndex: Int) {
        for (onElementsChangeListener in onElementsChangeListeners){onElementsChangeListener.onElementsChange()}
        super.removeRange(fromIndex, toIndex)
    }

    override fun set(index: Int, element: T): T {
        for (onElementsChangeListener in onElementsChangeListeners){onElementsChangeListener.onElementsChange()}
        return super.set(index, element)
    }

    /**
     * 依家指住嘅Node
     */
    var node: T? = null
        get() {
            //校正, 防已刪Element return出去
            if(indexOfOrNull(field) == null){
                field = null
            }

            //如List上有Element又未有指上任何Element就指住第0個
            if(field == null){
                if(0 < size){
                    field = getOrNull(0)
                }
            }

            return field
        }
        protected set(value) {
            val preChangeNodeID = nodeID
            field = value
            for (onNodeEventListener: OnNodeEventListener<T> in onNodeEventListeners){
                onNodeEventListener.onNodeChanged(
                        preChangeNodeID, nodeID,
                        if(preChangeNodeID!=null){getOrNull(preChangeNodeID)}else{null}, node
                )
            }
        }

    /**
     * 家指住嘅Node嘅ID
     */
    val nodeID: Int?
        get() = indexOfOrNull(node)

    private var lastTimeNode: T? = null

    /**
     * 儲存低上次乜Node
     * 用作畀lastTime()做返回上次嘅Node
     */
    private fun saveLastTimeNode(){
        lastTimeNode = node
    }

    interface OnNodeEventListener<T> {
        fun onNodeChanged(preChangeNodeID: Int?, postChangeNodeID: Int?, preChangeNode: T?, postChangeNode: T?)
    }

    private val onNodeEventListeners: ArrayList<OnNodeEventListener<T>> = ArrayList()

    fun addOnNodeEventListener(onNodeEventListener: OnNodeEventListener<T>){
        onNodeEventListeners.add(onNodeEventListener)
    }

    fun indexOfOrNull(element: T?): Int? {
        if(element == null){
            return null
        }else{
            if(super.indexOf(element) == -1){
                return null
            }else{
                return super.indexOf(element)
            }
        }
    }

    /**
     * 將個Node指住下一個Node
     */
    fun next(): Boolean {
        val index = indexOfOrNull(node)
        if(index != null){
            saveLastTimeNode()
            node = getOrNull((index + 1) % size)
            return true
        }
        return false
    }

    /**
     * 將個Node指住上一個Node
     */
    fun previous(): Boolean {
        val index = indexOfOrNull(node)
        if(index != null){
            saveLastTimeNode()
            node = getOrNull(if((index - 1) == -1){lastIndex}else{index - 1})
            return true
        }
        return false
    }

    /**
     * 將個Node指住指定嘅Node
     * @param nodeID 去指定嘅Node嘅ID
     */
    fun designated(nodeID: Int): Boolean {
        if (0 <= nodeID && nodeID < size) {
            saveLastTimeNode()
            node = getOrNull(nodeID)
            return true
        }
        return false
    }

    /**
     * 將個Node指住指定嘅Node
     * @param node 去指定嘅Node
     * @return true 響個List成功搵到並設置呢個node做現時嘅node
     * @return false 響個List搵唔到個node並不進行任何設置
     */
    fun designated(node: T): Boolean {
        val index = indexOfOrNull(node)
        return if(index != null){ designated(index) }else{ false }
    }

    /**
     * 將個Node指住上次指住嘅Node
     */
    fun lastTime(){
        val toNode = lastTimeNode
        saveLastTimeNode()
        node = toNode
    }


    /**
     * @param initElements 初始化時一次過窒入所有元素
     * */
    constructor(vararg initElements: T): super() {
        for (initElement in initElements){
            add(initElement)
        }
        node = getOrNull(0)
    }

    /**
     * @param initNodeID 初始去指定Node,如冇set為第0個Node開始
     * @param initElements 初始化時一次過窒入所有元素
     * */
    constructor(initNodeID: Int, vararg initElements: T): super() {
        for (initElement in initElements){
            add(initElement)
        }
        if (0 <= initNodeID && initNodeID < initElements.size) {
            node = getOrNull(initNodeID)
        }else{
            node = getOrNull(0)
        }
    }

    /**
     * @param initElements 初始化時一次過窒入所有元素
     * */
    constructor(initElements: Array<out T>): super() {
        for (initElement in initElements){
            add(initElement)
        }
        node = getOrNull(0)
    }

    /**
     * @param initNodeID 初始去指定Node,如冇set為第0個Node開始
     * @param initElements 初始化時一次過窒入所有元素
     * */
    constructor(initNodeID: Int, initElements: Array<out T>): super() {
        for (initElement in initElements){
            add(initElement)
        }
        if (0 <= initNodeID && initNodeID < initElements.size) {
            node = getOrNull(initNodeID)
        }else{
            node = getOrNull(0)
        }
    }

    /**
     * @param initElements 初始化時一次過窒入所有元素
     * */
    constructor(initElements: ArrayList<T>): super() {
        for (initElement in initElements){
            add(initElement)
        }
        node = getOrNull(0)
    }

    /**
     * @param initNodeID 初始去指定Node,如冇set為第0個Node開始
     * @param initElements 初始化時一次過窒入所有元素
     * */
    constructor(initNodeID: Int, initElements: ArrayList<T>): super() {
        for (initElement in initElements){
            add(initElement)
        }
        if (0 <= initNodeID && initNodeID < initElements.size) {
            node = getOrNull(initNodeID)
        }else{
            node = getOrNull(0)
        }
    }
}