<script>
    export let title;
    export let date;
    export let content;
</script>

<div class="article-preview">
    <a href="#" class="link">
        <h1 class="article-title">{title}</h1>
    </a>
    <hr class="decorator">
    <p class="article-date">{date}</p>
    <p class="article-desc">{content}</p>
</div>

<style>
    .article-title {
        padding: 0;
        margin: 16px;
        font-size: 24px;
    }

    .article-desc {
        margin: 8px;
    }

    .decorator {
        margin: 0;
        padding: 0;
    }

    .article-date {
        margin: 0;
        font-style: italic;
        width: 96px;
        font-size: 12px;
    }

    .link {
        color: #579e40;
    }

    .article-preview {
        border: 1px solid white;
        border-radius: 8px;
        width: 50%;
        margin: auto;
        margin-bottom: 16px;
    }
</style>