<script lang="ts">
  import { data } from "./../store/todo";

  $: isEmpty = $data.newItem.trim() === "";
</script>

<style>
  span.done {
    text-decoration: line-through;
  }
</style>

<section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">TODO アプリ</h1>
      <p class="subtitle">
        written in Svelte - Cybernetically enhanced web apps
      </p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="field is-grouped">
      <div class="control">
        <input
          type="text"
          class="input"
          bind:value={$data.newItem}
          placeholder="入力してください" />
      </div>
      <div class="control">
        <button
          class="button is-info"
          on:click={data.resetItem}>リセットする</button>
      </div>
      <div class="control">
        <button
          class="button is-primary"
          disabled={isEmpty}
          on:click={data.addItem}>追加する</button>
      </div>
    </div>

    <br />

    <table class="table is-striped is-hoverable">
      <tbody>
        {#each $data.todos as { item, isDone }, index}
          <tr>
            <th>
              <input class="checkbox" type="checkbox" bind:checked={isDone} />
            </th>
            <th><span class={isDone ? 'done' : ''}>{item}</span></th>
            <th>
              <button
                class="button is-danger"
                on:click={data.deleteItem(index)}>削除する</button>
            </th>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>
