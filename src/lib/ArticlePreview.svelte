<script>
    import { Router, Route, Link } from "svelte-navigator";

    export let title;
    export let date;
    export let category;
    export let content;
    export let id;
</script>

<div class="article-preview">
    <Link to="/posts/{id}">
        <h1 class="article-title">{title}</h1>
    </Link>
    <hr class="decorator">
    <div style="clear: both;">
        <p class="article-date">{date}</p>
        <p class="article-category">{category}</p>
    </div>
    <br/>
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
        float: left;
        margin: 0;
        font-style: italic;
        font-size: 12px;
        text-align: left;
        padding-left:8px;
    }

    .article-category {
        float: right;
        margin: 0;
        font-style: italic;
        font-size: 12px;
        text-align: right;
        padding-right: 8px;
    }

    .link {
        color: #579e40;
    }

    .article-preview {
        border: 1px solid white;
        border-radius: 8px;
        width: 100%;
        margin: auto;
        margin-bottom: 16px;
    }

    @media screen and (max-width: 576px) {
    .article-preview {
        width: 100% !important;
    }
  }
</style>