<script lang="ts">
  import { data } from "./../store/todo";

  $: isEmpty = $data.newItem.trim() === "";
</script>

<style>
  td.done {
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
    <div class="field">
      <div class="control">
        <textarea
          class="textarea"
          rows="3"
          bind:value={$data.newItem}
          placeholder="入力してください" />
      </div>
    </div>
    <div class="buttons">
      <button
        class="button is-ghost"
        on:click={data.resetItem}>リセットする</button>
      <button
        class="button is-primary"
        disabled={isEmpty}
        on:click={data.addItem}>追加する</button>
    </div>

    <br />

    <table class="table is-striped is-hoverable is-fullwidth">
      <tbody>
        {#each $data.todos as { item, isDone }, i}
          <tr>
            <td>
              <input class="checkbox" type="checkbox" bind:checked={isDone} />
            </td>
            <td class={isDone ? 'done' : ''}>
              {#each item.split(/\n/) as line, j}
                {#if j !== 0}<br />{/if}
                {line}
              {/each}
            </td>
            <td>
              <button
                class="button is-danger is-rounded is-pulled-right"
                on:click={data.deleteItem(i)}>削除する</button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>
