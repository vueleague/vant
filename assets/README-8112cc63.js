import{_ as s}from"./locales-9ef0ad93.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const e={},p={class:"van-doc-markdown-body"},l=n(`<h1>Empty</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Occupation reminder when empty.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Empty</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Empty</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Description&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="image-type" tabindex="-1">Image Type</h3><p>Use the image prop to display different placeholder images.</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Error --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span> <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;error&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Description&quot;</span> /&gt;</span>
<span class="hljs-comment">&lt;!-- Network --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span> <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;network&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Description&quot;</span> /&gt;</span>
<span class="hljs-comment">&lt;!-- Search --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span> <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Description&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-size" tabindex="-1">Custom Size</h3><p>Using <code>image-size</code> prop to custom the size of image.</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- The default unit is px --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span> <span class="hljs-attr">image-size</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Description&quot;</span> /&gt;</span>
<span class="hljs-comment">&lt;!-- Support other units, such as rem, vh, vw --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span> <span class="hljs-attr">image-size</span>=<span class="hljs-string">&quot;10rem&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Description&quot;</span> /&gt;</span>
</code></pre><p>You can set the width and height separately.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span> <span class="hljs-attr">:image-size</span>=<span class="hljs-string">&quot;[60, 40]&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Description&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-image" tabindex="-1">Custom Image</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span>
  <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg&quot;</span>
  <span class="hljs-attr">image-size</span>=<span class="hljs-string">&quot;80&quot;</span>
  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Description&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="bottom-content" tabindex="-1">Bottom Content</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Description&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">round</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bottom-button&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-empty</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.bottom-button</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">160px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">40px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>image</td><td>Image type, can be set to <code>error</code> <code>network</code> <code>search</code> or image URL</td><td><em>string</em></td><td><code>default</code></td></tr><tr><td>image-size</td><td>Image size</td><td><em>number | string | Array</em></td><td>-</td></tr><tr><td>description</td><td>Description</td><td><em>string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Custom bottom content</td></tr><tr><td>image</td><td>Custom image</td></tr><tr><td>description</td><td>Custom description</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">EmptyProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-empty-padding</td><td><em>var(--van-padding-xl) 0</em></td><td>-</td></tr><tr><td>--van-empty-image-size</td><td><em>160px</em></td><td>-</td></tr><tr><td>--van-empty-description-margin-top</td><td><em>var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-empty-description-padding</td><td><em>0 60px</em></td><td>-</td></tr><tr><td>--van-empty-description-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-empty-description-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-empty-description-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-empty-bottom-margin-top</td><td><em>24px</em></td><td>-</td></tr></tbody></table></div>`,15),d=[l];function c(o,r){return a(),t("div",p,d)}const m=s(e,[["render",c]]);export{m as default};
