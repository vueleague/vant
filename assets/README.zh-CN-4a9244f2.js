import{_ as s}from"./locales-9ef0ad93.js";import{o as a,a as n,z as t}from"./vue-libs-19c20d28.js";const l={},p={class:"van-doc-markdown-body"},c=t(`<h1>Space 间距</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>设置元素之间的间距。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Space</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Space</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>Space 组件会在各个子组件之间设置一定的间距，默认间距为 <code>8px</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-space</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-space</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="chui-zhi-pai-lie" tabindex="-1">垂直排列</h3><p>将 <code>direction</code> 属性设置为 <code>vertical</code>，可以设置垂直方向排列的间距。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-space</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span> <span class="hljs-attr">fill</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-space</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-jian-ju" tabindex="-1">自定义间距</h3><p>通过调整 <code>size</code> 的值来控制间距的大小。传入 <code>number</code> 类型时，会默认使用 <code>px</code> 单位；也可以传入 <code>string</code> 类型，比如 <code>2rem</code> 或 <code>5vw</code> 等带有单位的值。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 20px --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-space</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;20&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-space</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 2rem --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-space</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;2rem&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-space</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="dui-qi-fang-shi" tabindex="-1">对齐方式</h3><p>通过调整 <code>align</code> 的值来设置子元素的对齐方式, 可选值为 <code>start</code>, <code>center</code> ,<code>end</code> ,<code>baseline</code>，在水平模式下的默认值为 <code>center</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;align&quot;</span>
  <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>
  <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-bottom: 16px&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;start&quot;</span>&gt;</span>start<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;center&quot;</span>&gt;</span>center<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;end&quot;</span>&gt;</span>end<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;baseline&quot;</span>&gt;</span>baseline<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">van-space</span> <span class="hljs-attr">:align</span>=<span class="hljs-string">&quot;align&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;padding: 16px; background: #f3f2f5&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>{{ align }}<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;padding: 40px 20px; background: #fff&quot;</span>&gt;</span>Block<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-space</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> align = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;center&#39;</span>);
    <span class="hljs-keyword">return</span> { align };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-dong-huan-xing" tabindex="-1">自动换行</h3><p>在水平模式下, 通过 <code>wrap</code> 属性来控制子元素是否自动换行。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-space</span> <span class="hljs-attr">wrap</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-space</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>direction</td><td>间距方向</td><td><em>vertical | horizontal</em></td><td><code>horizontal</code></td></tr><tr><td>size</td><td>间距大小，如 <code>20px</code> <code>2em</code>，默认单位为 <code>px</code>，支持数组形式来分别设置横向和纵向间距</td><td><em>number | string | number[] | string[]</em></td><td><code>8px</code></td></tr><tr><td>align</td><td>设置子元素的对齐方式</td><td><em>start | end | center | baseline</em></td><td>-</td></tr><tr><td>wrap</td><td>是否自动换行，仅适用于水平方向排列</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>fill</td><td>是否让 Space 变为一个块级元素，填充整个父元素</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>间距组件内容</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-js"><span class="hljs-keyword">import</span> type { <span class="hljs-title class_">SpaceProps</span>, <span class="hljs-title class_">SpaceSize</span>, <span class="hljs-title class_">SpaceAlign</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div>`,13),e=[c];function h(o,r){return a(),n("div",p,e)}const g=s(l,[["render",h]]);export{g as default};
