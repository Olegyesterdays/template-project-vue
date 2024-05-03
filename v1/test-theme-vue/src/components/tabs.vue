<template>
  <div class="container">
    <div class="tabs">
      <input type="radio" id="radio-1" name="tabs" checked />
      <label class="tab" for="radio-1">Upcoming</label>

      <input type="radio" id="radio-2" name="tabs" />
      <label class="tab" for="radio-2">Development</label>

      <input type="radio" id="radio-3" name="tabs" />
      <label class="tab" for="radio-3">Completed</label>
      <span class="glider"></span>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.container {
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;

  .tabs {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 0 4px 6px #00000019;
    position: relative;
    margin: 12px;

    * {
      z-index: 2;
    }

    input[type="radio"] {
      display: none;
    }

    .tab {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 56px;
      border-radius: 99px;
      cursor: pointer;
      transition: color 0.15s ease-in;
    }

    input[type="radio"] {
      &:checked {
        & + label {
          color: #185ee0;
        }
      }
    }

    input[id="radio-1"] {
      &:checked {
        & ~ .glider {
          transform: translateX(0);
        }
      }
    }

    input[id="radio-2"] {
      &:checked {
        & ~ .glider {
          transform: translateX(100%);
        }
      }
    }

    input[id="radio-3"] {
      &:checked {
        & ~ .glider {
          transform: translateX(200%);
        }
      }
    }

    .glider {
      position: absolute;
      display: flex;
      height: 56px;
      width: 33%;
      background-color: #e6eef9;
      z-index: 1;
      border-radius: 99px;
      transition: 0.25s ease-out;
    }
  }
}
</style>
