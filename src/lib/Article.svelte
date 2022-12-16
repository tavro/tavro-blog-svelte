<script>
    export let md;

    import SvelteMarkdown from 'svelte-markdown';

    export let title;
    export let date;
    export let category;
    export let content;
    export let tags;
</script>

<div>
  <h1 class="article-title">{title}</h1>
  <div style="clear: both;">
    <p class="article-date">{date}</p>
    <p class="article-category">{category}</p>
  </div>
  <br/>
  <hr>

  {#if md}
    <div class="markdown-area">
        <SvelteMarkdown source={md} />
    </div>
  {:else}
    <p class="article-content">{content}</p>
  {/if}

  <div class="tag-wrapper">
    {#each tags as tag}
        <a href="#" class="tag">{tag}</a>
    {/each}
  </div>
</div>

<style>
    .tag-wrapper {
        text-align: left;
    }

    .tag {
        margin-right: 8px;
        font-style: italic;
    }

    .markdown-area {
        text-align:left;
    }

    .article-title {
        padding: 0;
        margin: 16px;
        font-size: 48px;
    }

    .article-content {
        font-size: 18px;
    }

    .article-date {
        float: left;
        margin: 0;
        font-style: italic;
        font-size: 16px;
        text-align: left;
    }

    .article-category {
        float: right;
        margin: 0;
        font-style: italic;
        font-size: 16px;
        text-align: right;
    }

    .article-preview {
        border: 1px solid white;
        border-radius: 8px;
        width: 50%;
        margin: auto;
        margin-bottom: 16px;
    }
</style>