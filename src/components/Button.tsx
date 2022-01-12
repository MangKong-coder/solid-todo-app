import { JSX, Show } from "solid-js";

interface ButtonProps {
  isAdd: boolean;
  toggle: () => boolean;
}

function Button(props: ButtonProps): JSX.Element {


  return (
    <>
      {/* <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 m-1 rounded">
      Add
    </button>
     <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-1 rounded">
     Remove
   </button> */}

      <Show when={props.isAdd} fallback={<button onClick={props.toggle} class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 m-1 rounded">
        Add
      </button>}>
        <button onclick={props.toggle} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-1 rounded">
          Cancel
        </button>
      </Show>

    </>
  )
}

export default Button