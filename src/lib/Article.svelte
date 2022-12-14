<script>
    export let title;
    export let date;
    export let content;
</script>

<div>
  <h1 class="article-title">{title}</h1>
  <p class="article-date">{date}</p>
  <hr>
  <p class="article-content">{content}</p>
</div>

<style>
    .article-title {
        padding: 0;
        margin: 16px;
        font-size: 48px;
    }

    .article-content {
        font-size: 18px;
    }

    .article-date {
        margin: 0;
        font-style: italic;
        width: 96px;
        font-size: 16px;
    }

    .article-preview {
        border: 1px solid white;
        border-radius: 8px;
        width: 50%;
        margin: auto;
        margin-bottom: 16px;
    }
</style>