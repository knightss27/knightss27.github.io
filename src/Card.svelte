<script lang="ts">
  export let color: string = "";
</script>

<div style="--color:{color}">
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
      transform: translateZ(-4rem) translateY(-400px);
      &:hover {
        transform: translateZ(-1px);
      }
    }
  }
</style>