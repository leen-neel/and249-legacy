<!-- Hero section -->
<template>
  <section class="hero">
    <div class="effect abosulute flex full-height">
      <div class="info">
        <h2 class="oswald q-pb-md">Greetings!</h2>
        <h1 class="text-weight-light">I'm <span class="archDau">Neel</span></h1>

        <div class="row socials q-gutter-md">
          <q-btn
            color="primary"
            icon="fab fa-github"
            round
            type="a"
            target="_blank"
            href="https://github.com/leen-neel"
            size="18px"
          >
            <q-tooltip> GitHub </q-tooltip>
          </q-btn>
          <q-btn
            color="primary"
            icon="fab fa-instagram"
            round
            type="a"
            target="_blank"
            href="https://www.instagram.com/and_249/"
            size="18px"
          >
            <q-tooltip> Instagram </q-tooltip>
          </q-btn>
          <q-btn
            color="primary"
            icon="fab fa-telegram"
            round
            type="a"
            target="_blank"
            href="https://t.me/and_249/"
            size="18px"
          >
            <q-tooltip> Telegram </q-tooltip>
          </q-btn>
          <q-btn
            color="primary"
            icon="fab fa-linkedin"
            round
            type="a"
            target="_blank"
            href="https://www.linkedin.com/in/anindo-neel-dutta-2a8050199/"
            size="18px"
          >
            <q-tooltip> LinkedIn </q-tooltip>
          </q-btn>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  height: 100vh;

  background-image: url("/images/me.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.effect {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.24) 0%, #032e28 88.96%);
  align-content: flex-start;
}

body.body--light {
  .effect {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.24) 0%, #53e6cc 88.96%);
    align-content: flex-start;
  }
}

.socials {
  position: relative;
  bottom: 18%;
}

.info {
  position: relative;
  top: 15%;
  left: 5%;

  h1 {
    margin-top: none;
    font-weight: 900;
    text-align: left;

    font-size: 8rem;
  }

  h2 {
    position: relative;
    top: 18%;
    font-weight: 500;
    font-size: 4rem;
  }

  p {
    position: relative;
    bottom: 18%;
    font-size: 1.8em;
  }
}

@media (max-width: $breakpoint-xs-max) {
  .hero {
    height: 100vh;

    background-image: url("/images/me2.jpeg");
    background-repeat: no-repeat;
    background-position: left;
    background-size: cover;
  }
  .info {
    top: 40%;
    left: 5%;

    h1 {
      font-size: 3.5em !important;
      margin-top: 5px;
    }

    h2 {
      font-size: 2em;
    }

    p {
      font-size: 1.5em;
    }
  }
}

@media (max-width: $breakpoint-md-min) {
  .info {
    h1 {
      font-size: 8em;
    }
  }
}
</style>
