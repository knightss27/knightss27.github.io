<script lang="ts">
  export let color: string = "";

  let grow: boolean = false;

  const transition = () => {
    grow = true;
  }
</script>

<div style="--color:{color}" on:click={transition} class:grow>
  <slot />
</div>

<style lang="scss">
  div {
    transform:
      scale(0.75)
      rotateY(-30deg)
      rotateX(45deg)
      translateZ(4.5rem);
    transform-origin: 50% 100%;
    transform-style: preserve-3d;
    box-shadow: 1rem 1rem 2rem rgba(0,0,0,0.25);
    transition: 0.6s ease transform;

    cursor: pointer;
    width: 200px;
    height: 200px;
    margin: 2rem;

    &:hover {
      transform: scale(1);
      :global(h1) {
        margin-top: -130px;
      }

      // &.grow {
      //   transition: ease width 1s, ease height 1s;
      //   width: 100vw;
      //   height: 100vh;
      //   box-shadow: none;
      //   margin: 0px;
      // }

    }

    &::before {
      content: '';
      border: 2px solid black;
      display: flex;
      width: 100%;
      height: 100%;
      transform: translateZ(4rem);
      &:hover {
        transform: translateZ(0);
      }
    }

    &::after {
      content: '';
      display: flex;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-color: var(--color);
      transform: translateZ(-4rem) translateY(-100%);
      &:hover {
        transform: translateZ(-1px);
      }
    }
  }
</style>