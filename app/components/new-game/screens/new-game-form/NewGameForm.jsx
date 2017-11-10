import './newGameForm.scss'
import React from 'react';

export default props => {
  return (
    <form onSubmit={props.onSubmit} class="new-game-form">
      <h2>Create New Game</h2>
      <input
        class="block-input"
        type="text"
        name="title"
        placeholder="Game Title"
        onChange = {props.onValueChange}
        required
      />
      <input
        class="block-input"
        type="text"
        name="createdBy"
        placeholder="Your Name"
        onChange = {props.onValueChange}
        required
      />
      <button class="button-secondary" type="submit">Create</button>
    </form>
  )
}
