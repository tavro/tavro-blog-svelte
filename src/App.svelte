<script>
  import { Router, Route, Link } from "svelte-navigator";

  import Preview from './lib/ArticlePreview.svelte'
  import Article from './lib/Article.svelte'
  import PageNav from './lib/Counter.svelte'
  import blogData from './lib/posts.json';

  let test = 1;
</script>

<Router basepath="/tavro-blog-svelte">
  <main>
    <div class="header">
      <Link to="/"> 
        <img src="https://github.com/tavro/tavro.github.io/raw/master/public/icon.png" class="tavro-logo" alt="tavro logo" />
      </Link>
    </div>

    <Route path="">
      <h1>tavro-blog</h1>
      <div class="preview">
        <Preview category={blogData.posts[blogData.postAmount - (-1 + test)*2].category} title={blogData.posts[blogData.postAmount - (-1 + test)*2].title} date={blogData.posts[blogData.postAmount - (-1 + test)*2].date} content={blogData.posts[blogData.postAmount - (-1 + test)*2].preview} id={blogData.postAmount - (-1 + test)*2}/>
        <Preview category={blogData.posts[blogData.postAmount - 1 - (-1 + test)*2].category} title={blogData.posts[blogData.postAmount - 1 - (-1 + test)*2].title} date={blogData.posts[blogData.postAmount - 1 - (-1 + test)*2].date} content={blogData.posts[blogData.postAmount - 1 - (-1 + test)*2].preview} id={blogData.postAmount - 1 - (-1 + test)*2}/>
        <PageNav bind:count={test} maxCount={blogData.postAmount / 2} />
      </div>
    </Route>

    <Route path="posts/:id" let:params>
      <Article tags={blogData.posts[params.id].tags} category={blogData.posts[params.id].category} title={blogData.posts[params.id].title} date={blogData.posts[params.id].date} content={blogData.posts[params.id].content} md={blogData.posts[params.id].md}/>
    </Route>

    <div class="footer">
      <p class="website"> check out <a href="https://isakhorvath.me" class="link">isakhorvath.me</a> to get to know me a little better! </p>
      <p class="rights"> 2022 © all rights reserved </p>
    </div>
  </main>
</Router>

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

  .footer {
    left: 50%;
    transform: translate(-50%, 0);
    position: fixed;
    bottom: 0;
    background-color: #242424;
  }

  .header {
    left: 50%;
    transform: translate(-50%, 0);
    position: fixed;
    top: 48px;
  }

  .rights {
    color: #888;
  }

  @media screen and (max-width: 576px) {
    .header {
      top: 0px;
    } 
    .footer {
        display: none !important;
    }
  }

  @media screen and (max-height: 800px) {
    .header {
      top: 0px;
    }
    .website {
      display: none !important;
    }
  }

  @media screen and (max-height: 770px) {
    .footer {
      display: none !important;
    }
  }

</style>
