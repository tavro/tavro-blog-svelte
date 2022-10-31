<script>
  import Preview from './lib/ArticlePreview.svelte'
  import PageNav from './lib/Counter.svelte'
  import blogData from './lib/posts.json';

  let test = 1;
</script>

<main>
  <div>
    <a href="#" target="_blank"> 
      <img src="https://github.com/tavro/tavro.github.io/raw/master/public/icon.png" class="tavro-logo" alt="tavro logo" />
    </a>
  </div>
  <h1>tavro-blog</h1>

  <div class="preview">
    <Preview title={blogData.posts[blogData.postAmount - (-1 + test)*2].title} date={blogData.posts[blogData.postAmount - (-1 + test)*2].date} content={blogData.posts[blogData.postAmount - (-1 + test)*2].content} />
    <Preview title={blogData.posts[blogData.postAmount - 1 - (-1 + test)*2].title} date={blogData.posts[blogData.postAmount - 1 - (-1 + test)*2].date} content={blogData.posts[blogData.postAmount - 1 - (-1 + test)*2].content} />
    <PageNav bind:count={test} maxCount={blogData.postAmount / 2} />
  </div>

  <p>
    check out <a href="https://isakhorvath.me" class="link" target="_blank">isakhorvath.me</a> to get to know me a little better!
  </p>

  <p class="rights">
    2022 © all rights reserved
  </p>
</main>

<style>
  .preview {
    margin-top: 2.5em;
    margin-bottom: 2.5em;
  }

  .tavro-logo {
    padding: 0;
  }
  
  .tavro-logo:hover {
    filter: drop-shadow(0 0 2em #579e40);
  }

  .link {
    color: #579e40;
  }

  .rights {
    color: #888;
  }
</style>
