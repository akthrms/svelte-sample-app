<script lang="ts">
  import { fade } from "svelte/transition";
  import { data } from "./../store/todo";

  $: isEmpty = $data.newItem.trim() === "";

  $: currentTodos = $data.todos.filter((t) => t.userId === $data.currentUserId);
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
        <div class="select is-medium">
          <select bind:value={$data.currentUserId}>
            {#each $data.users as { id, name }}
              <option value={id}>{name}</option>
            {/each}
          </select>
        </div>
      </div>
    </div>
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
        class="button is-ghost is-medium"
        on:click={data.resetItem}>リセットする</button>
      <button
        class="button is-primary is-medium"
        disabled={isEmpty}
        on:click={data.addItem}>追加する</button>
    </div>

    <br />

    <table class="table is-striped is-hoverable is-fullwidth">
      <tbody>
        {#each currentTodos as { item, isDone }, i}
          <tr transition:fade>
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
