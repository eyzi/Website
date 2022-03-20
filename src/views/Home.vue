<template>
  <div class="home">
    <div>
      <div class="columns">
        <div class="left">
          <img class="full-avatar" src="https://cdn.eyzi.dev/avatar-full.png" />
          <img class="min-avatar" src="https://cdn.eyzi.dev/avatar.png" />
          <div class="credit">
            Art by
            <a href="https://twitter.com/riotsuji041224">@riotsuji</a>
          </div>
        </div>

        <div class="right">
          <div id="header">
            <span class="title-header eyzi-color">Eyzi</span>
          </div>
          <div id="links">
            <Link
              v-for="link in links"
              :key="link.label"
              :label="link.label"
              :url="link.url"
              :image="link.image"
            />
          </div>

          <div id="info">
            Hello! I am a software developer by trade and hobby.
            <br /><br />
            Professionally, I have developed full-stack web and desktop
            applications for various industries such as sales,
            telecommunication, broadcasting, and online banking.
            <br /><br />
            Personally, I dabble in both hardware and software technologies and
            practices. I manage networking, system, and database administration
            for my home servers, and do IoT and game development, and DevOps.
            <br /><br />
            Creative Lead at
            <a class="moonlit-link" href="https://moonlit.works"
              ><img
                class="moonlit-icon"
                src="https://cdn.moonlit.works/logo/image.png"
              />Moonlit Works</a
            >
          </div>
        </div>
      </div>

      <div id="contact">
        Need something? Reach me by email at
        <a href="mailto:contact@eyzi.dev"
          ><span class="eyzi-color">contact@eyzi.dev</span></a
        >
        or on Discord at
        <span class="eyzi-color">Eyzi#3994</span>
      </div>

      <div id="footer">Eyzi &copy; {{ new Date().getFullYear() }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Link from "@/components/Link.vue";

export default defineComponent({
  name: "Home",
  data: () => ({
    links: [
      {
        label: "Github",
        url: "https://github.com/eyzi",
        image:
          "https://cdn1.iconfinder.com/data/icons/logotypes/32/github-512.png",
      },
      {
        label: "Twitter",
        url: "https://twitter.com/TheEyzi",
        image:
          "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter2_colored_svg-512.png",
      },
      {
        label: "Steam",
        url: "https://steamcommunity.com/id/TheEyzi/",
        image:
          "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_steam-512.png",
      },
      {
        label: "Blogsite",
        url: "https://blog.eyzi.dev",
        image:
          "https://cdn3.iconfinder.com/data/icons/flat-instagram-stories-2/512/Book-512.png",
      },
    ],
  }),
  components: {
    Link,
  },
  created: () => {
    document.title = "Eyzi";
  },
});
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");

a,
a:link,
a:hover {
  text-decoration: none;
}

@media only screen and (max-width: 600px) {
  .full-avatar {
    display: none;
  }

  .min-avatar {
    display: inline-block;
  }

  .columns {
    display: block;
  }

  .left,
  .right {
    text-align: center;
  }

  #header {
    padding-top: 1em;
  }
}

@media only screen and (min-width: 600px) {
  .full-avatar {
    display: inline-block;
  }

  .min-avatar {
    display: none;
  }

  .columns {
    display: flex;
  }

  .left {
    width: 50%;
    text-align: right;
  }

  .right {
    width: 50%;
    max-width: 20em;
    text-align: left;
  }

  #header {
    padding-top: 7em;
    margin: auto;
    width: 10em;
    text-align: center;
  }
}

.home {
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.credit {
  text-align: center;
  font-family: var(--text-font2);
  font-size: 0.8em;
}

.title-header {
  font-size: 3em;
  font-family: var(--text-font);
}

.eyzi-color {
  color: var(--eyzi-color);
}

#links {
  padding: 1em;
  margin: auto;
  text-align: center;
}

#info {
  padding: 1em;
  text-align: center;
  font-family: var(--text-font2);
}

.moonlit-icon {
  width: 20px;
  vertical-align: middle;
}

.moonlit-link {
  text-decoration: none;
  color: var(--moonlit-color);
}

#contact {
  margin: 2em;
  font-family: var(--text-font2);
}

#footer {
  font-size: 0.7em;
  padding-bottom: 1em;
  font-family: var(--text-font2);
}
</style>
