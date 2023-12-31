export default function PageCard(props) {
    return (
      <div
        class="bg-white p-4 text-left"
        classList={{ "rounded-md": props.rounded, "shadow-md": !props.flat }}
      >
        {props.children}
      </div>
    );
  }