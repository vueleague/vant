import{_ as t}from"./locales-9ef0ad93.js";import{o as s,a,z as e}from"./vue-libs-19c20d28.js";const n={},l={class:"van-doc-markdown-body"},d=e(`<h1>Skeleton</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to display a set of placeholder graphics during the content loading process.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">Skeleton</span>,
  <span class="hljs-title class_">SkeletonTitle</span>,
  <span class="hljs-title class_">SkeletonImage</span>,
  <span class="hljs-title class_">SkeletonAvatar</span>,
  <span class="hljs-title class_">SkeletonParagraph</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Skeleton</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SkeletonTitle</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SkeletonImage</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SkeletonAvatar</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SkeletonParagraph</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-skeleton</span> <span class="hljs-attr">title</span> <span class="hljs-attr">:row</span>=<span class="hljs-string">&quot;3&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="show-avatar" tabindex="-1">Show Avatar</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-skeleton</span> <span class="hljs-attr">title</span> <span class="hljs-attr">avatar</span> <span class="hljs-attr">:row</span>=<span class="hljs-string">&quot;3&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="show-children" tabindex="-1">Show Children</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-skeleton</span> <span class="hljs-attr">title</span> <span class="hljs-attr">avatar</span> <span class="hljs-attr">:row</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Content<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-skeleton</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, onMounted } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> loading = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);

    <span class="hljs-title function_">onMounted</span>(<span class="hljs-function">() =&gt;</span> {
      loading.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
    });

    <span class="hljs-keyword">return</span> {
      loading,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-content" tabindex="-1">Custom Content</h3><p>Using <code>template</code> slots to custom skeleton content.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-skeleton</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ display: &#39;flex&#39;, width: &#39;100%&#39; }&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-skeleton-image</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ flex: 1, marginLeft: &#39;16px&#39; }&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-skeleton-paragraph</span> <span class="hljs-attr">row-width</span>=<span class="hljs-string">&quot;60%&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-skeleton-paragraph</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-skeleton-paragraph</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-skeleton-paragraph</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-skeleton</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="skeleton-props" tabindex="-1">Skeleton Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>row</td><td>Row count</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>row-width</td><td>Row width, can be array</td><td><em>number | string |<br>(number | string)[]</em></td><td><code>100%</code></td></tr><tr><td>title</td><td>Whether to show title placeholder</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>avatar</td><td>Whether to show avatar placeholder</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>loading</td><td>Whether to show skeleton, pass <code>false</code> to show child component</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>animate</td><td>Whether to enable animation</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>round</td><td>Whether to show round title and paragraph</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>title-width</td><td>Title width</td><td><em>number | string</em></td><td><code>40%</code></td></tr><tr><td>avatar-size</td><td>Size of avatar placeholder</td><td><em>number | string</em></td><td><code>32px</code></td></tr><tr><td>avatar-shape</td><td>Shape of avatar placeholder, can be set to <code>square</code></td><td><em>string</em></td><td><code>round</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="skeletonparagraph-props" tabindex="-1">SkeletonParagraph Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>round</td><td>Whether to show round paragraph</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>row-width</td><td>Paragraph width</td><td><em>string</em></td><td><code>100%</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="skeletontitle-props" tabindex="-1">SkeletonTitle Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>round</td><td>Whether to show round title</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>title-width</td><td>Title width</td><td><em>number | string</em></td><td><code>40%</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="skeletonavatar-props" tabindex="-1">SkeletonAvatar Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>avatar-size</td><td>Size of avatar placeholder</td><td><em>number | string</em></td><td><code>32px</code></td></tr><tr><td>avatar-shape</td><td>Shape of avatar placeholder, can be set to <code>square</code></td><td><em>string</em></td><td><code>round</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="skeletonimage-props" tabindex="-1">SkeletonImage Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>image-size</td><td>Size of image placeholder</td><td><em>number | string</em></td><td><code>32px</code></td></tr><tr><td>image-shape</td><td>Shape of image placeholder, can be set to <code>square</code></td><td><em>string</em></td><td><code>round</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="skeleton-slots" tabindex="-1">Skeleton Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Default slot</td></tr><tr><td>template</td><td>Custom content</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">SkeletonProps</span>,
  <span class="hljs-title class_">SkeletonImageProps</span>,
  <span class="hljs-title class_">SkeletonTitleProps</span>,
  <span class="hljs-title class_">SkeletonAvatarShape</span>,
  <span class="hljs-title class_">SkeletonImageShape</span>,
  <span class="hljs-title class_">SkeletonParagraphProps</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-skeleton-row-height</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-skeleton-row-background</td><td><em>var(--van-active-color)</em></td><td>-</td></tr><tr><td>--van-skeleton-row-margin-top</td><td><em>var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-skeleton-title-width</td><td><em>40%</em></td><td>-</td></tr><tr><td>--van-skeleton-avatar-size</td><td><em>32px</em></td><td>-</td></tr><tr><td>--van-skeleton-avatar-background</td><td><em>var(--van-active-color)</em></td><td>-</td></tr><tr><td>--van-skeleton-duration</td><td><em>1.2s</em></td><td>-</td></tr><tr><td>--van-skeleton-image-size</td><td><em>96px</em></td><td></td></tr><tr><td>--van-skeleton-image-radius</td><td><em>24px</em></td><td>-</td></tr></tbody></table></div>`,18),o=[d];function p(r,c){return s(),a("div",l,o)}const m=t(n,[["render",p]]);export{m as default};
